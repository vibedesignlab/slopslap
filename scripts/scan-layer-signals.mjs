/**
 * 디자인 층 신호 스캐너 (L0~L3)
 *
 * slop-auditor 에이전트의 4층 점검 중 기계 검증 가능한 신호를 한 번에 수집한다.
 * scan-slop-signals.mjs(택소노미 detect 신호)와 짝으로 돌며, 이쪽은 택소노미에
 * 없는 구조 신호(상수화 여부, 위계 스킵, 고정 px, 하드코딩 hex 등)를 담당한다.
 * 히트는 가중 플래그이지 판결이 아니다. 각 신호의 note(오탐 조건)를 반영한
 * 판정은 slop-auditor 의 판단 단계가 한다.
 *
 * 사용법:
 *   node scripts/scan-layer-signals.mjs                      # 기본 대상 전체
 *   node scripts/scan-layer-signals.mjs app/page.jsx src/components/landing
 *   node scripts/scan-layer-signals.mjs --json               # 에이전트 소비용
 *   node scripts/scan-layer-signals.mjs --max 5              # 신호당 샘플 수 (기본 3)
 */
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const args = process.argv.slice(2);
const asJson = args.includes('--json');
const maxIdx = args.indexOf('--max');
const MAX_SAMPLES = maxIdx !== -1 ? Number(args[maxIdx + 1]) : 3;
const targets = args.filter((a, i) => !a.startsWith('--') && (maxIdx === -1 || i !== maxIdx + 1));

// 기본 대상: 라우트 + 컴포넌트. 데이터·테마·스토리는 제외
// (데이터 파일은 상수화의 목적지라 하드코딩 신호 대상이 아니고, 테마는 hex 의 정당한 자리)
const DEFAULT_TARGETS = ['app', 'src/components'];
const EXCLUDE = /node_modules|\.next|\.stories\.jsx$|src\/data\/|src\/styles\/themes\//;
const EXTS = new Set(['.js', '.jsx', '.ts', '.tsx']);

// 라인 단위 신호. layer: L0 콘텐츠 구조 / L1 레이아웃 / L2 타이포 / L3 표면(컬러)
const LINE_SIGNALS = [
  {
    id: 'hardcoded-korean-copy', layer: 'L0', koName: '한글 카피 하드코딩',
    // 문자열 리터럴·JSX 속성뿐 아니라 JSX 텍스트 노드 단독 라인도 잡도록 연속 한글 6자만 조건으로 둔다
    regex: /[가-힣]{6,}/u,
    note: '상수 텍스트는 contents 문서 참조가 규약(ux-architecture). 단 UI 레이블·버튼·aria 같은 짧은 마이크로카피, 어드민 화면, 라인 끝 주석은 오탐. 6자 이상 본문성 카피가 컴포넌트에 박혀 있을 때만 후보.',
  },
  {
    id: 'fixed-px-width', layer: 'L1', koName: '고정 px 폭',
    regex: /(?:width|minWidth|maxWidth)\s*[:=]\s*['"{]?\s*(?:2[4-9]\d|[3-9]\d{2}|\d{4,})(?:px)?['"}]?/,
    note: '240px 이상 고정 폭만 후보. 아이콘·아바타 등 소형 고정값 제외. maxWidth 는 컨테이너 상한으로 정당한 경우가 많아 fluid 원칙과의 충돌 여부를 판단 단계에서 확인.',
  },
  {
    id: 'viewport-height-lock', layer: 'L1', koName: '100vh 고정',
    regex: /height\s*[:=]\s*['"]100vh['"]/,
    note: '모바일 주소창 수축으로 잘림 유발. 100dvh 나 minHeight 가 대안. 프레젠테이션 캔버스처럼 의도된 전면 고정은 오탐.',
  },
  {
    id: 'px-font-size', layer: 'L2', koName: 'px 폰트 크기',
    regex: /fontSize\s*[:=]\s*(?:['"]\d+(?:\.\d+)?px['"]|\d{2,})/,
    note: 'rem/clamp 또는 테마 variant 가 규약. MUI 숫자 리터럴은 px 로 해석된다. 아이콘 fontSize 소형값(20 미만)과 차트 라이브러리 옵션은 오탐.',
  },
  {
    id: 'inline-font-family', layer: 'L2', koName: 'fontFamily 리터럴',
    regex: /fontFamily\s*[:=]\s*['"][^'"]+['"]/,
    note: '폰트는 테마 토큰에서 와야 한다. monospace 계열(코드 표시용)과 테마 참조(theme.typography...)는 오탐.',
  },
  {
    id: 'hardcoded-hex-color', layer: 'L3', koName: 'hex 컬러 하드코딩',
    regex: /['"]#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})(?:[0-9a-fA-F]{2})?['"]/,
    note: '시멘틱 토큰이 규약. 단 클로드 오렌지(#FF6B2C 계열, 프로젝트 고정)와 SVG 일러스트 내부 색, alpha 유틸 인자는 오탐 가능. 같은 hex 가 여러 파일에 반복되면 토큰 승격 후보로 격상.',
  },
  {
    id: 'disabled-token-as-copy', layer: 'L3', koName: 'text.disabled 본문 사용',
    regex: /color\s*[:=]\s*['"]text\.disabled['"]/,
    note: '배경 근접 저대비라 본문·보조 텍스트에 금지(프로젝트 피드백 룰). 실제 disabled 상태 표시는 오탐.',
  },
];

function collectFiles(target) {
  const abs = path.resolve(ROOT, target);
  if (!fs.existsSync(abs)) return [];
  const stat = fs.statSync(abs);
  if (stat.isFile()) return EXCLUDE.test(abs) ? [] : [abs];
  const out = [];
  for (const entry of fs.readdirSync(abs)) {
    const p = path.join(abs, entry);
    if (EXCLUDE.test(p)) continue;
    const s = fs.statSync(p);
    if (s.isDirectory()) out.push(...collectFiles(p));
    else if (EXTS.has(path.extname(p))) out.push(p);
  }
  return out;
}

const files = [...new Set((targets.length ? targets : DEFAULT_TARGETS).flatMap(collectFiles))];
const hits = new Map(); // id → [{file, line, text}]
const headingsByFile = new Map(); // file → [variant level 순서]
const koreanStrings = new Map(); // 문자열 → Set(files)

for (const file of files) {
  const rel = path.relative(ROOT, file);
  const lines = fs.readFileSync(file, 'utf8').split('\n');
  lines.forEach((text, i) => {
    if (/^\s*(\/\/|\/?\*)/.test(text)) return; // 주석 제외
    if (/ogImage|openGraph|twitter:|['"]\/og\//.test(text)) return; // OG 메타데이터의 width/height 는 레이아웃이 아님
    for (const s of LINE_SIGNALS) {
      if (s.regex.test(text)) {
        if (!hits.has(s.id)) hits.set(s.id, []);
        hits.get(s.id).push({ file: rel, line: i + 1, text: text.trim().slice(0, 140) });
      }
    }
    // L0 파일 단위 수집: 헤딩 variant 순서
    const h = text.match(/variant\s*=\s*["']h([1-6])["']/);
    if (h) {
      if (!headingsByFile.has(rel)) headingsByFile.set(rel, []);
      headingsByFile.get(rel).push({ level: Number(h[1]), line: i + 1 });
    }
    // L0 교차 파일 수집: 6자 이상 한글 문자열 리터럴
    for (const m of text.matchAll(/["'`]([^"'`]*[가-힣]{6,}[^"'`]*)["'`]/gu)) {
      const str = m[1].trim();
      if (str.length < 6) continue;
      if (!koreanStrings.has(str)) koreanStrings.set(str, new Set());
      koreanStrings.get(str).add(rel);
    }
  });
}

// 파일 단위 신호 1: 헤딩 레벨 스킵 (한 파일 안에서 첫 등장 레벨보다 2단계 이상 건너뜀)
const headingSkips = [];
for (const [file, hs] of headingsByFile) {
  const seen = [...new Set(hs.map((h) => h.level))].sort((a, b) => a - b);
  for (let i = 1; i < seen.length; i++) {
    if (seen[i] - seen[i - 1] >= 2) {
      headingSkips.push({ file, levels: seen.join(' → '), note: 'MUI variant 는 시각 스타일이라 시맨틱과 다를 수 있음. component prop 재지정 여부를 판단 단계에서 확인.' });
      break;
    }
  }
}

// 파일 단위 신호 2: 동일 한글 카피가 3개 이상 파일에 반복 (상수 승격 또는 중복 UI 후보)
const crossDupes = [...koreanStrings.entries()]
  .filter(([, fset]) => fset.size >= 3)
  .map(([str, fset]) => ({ text: str.slice(0, 80), files: [...fset].slice(0, 5), count: fset.size }))
  .sort((a, b) => b.count - a.count);

const report = LINE_SIGNALS
  .filter((s) => hits.has(s.id))
  .map((s) => ({ id: s.id, koName: s.koName, layer: s.layer, count: hits.get(s.id).length, note: s.note, samples: hits.get(s.id).slice(0, MAX_SAMPLES) }))
  .sort((a, b) => a.layer.localeCompare(b.layer) || b.count - a.count);

if (asJson) {
  console.log(JSON.stringify({
    scannedFiles: files.length,
    signals: LINE_SIGNALS.length + 2,
    flagged: report.length,
    report,
    fileSignals: {
      headingSkips,
      crossFileDuplicateCopy: crossDupes.slice(0, 20),
    },
  }, null, 2));
} else {
  console.log(`스캔: 파일 ${files.length}개 · 라인 신호 ${LINE_SIGNALS.length}개 + 파일 신호 2개 · 플래그 ${report.length}신호`);
  console.log('주의: 히트는 후보 플래그다. 각 신호의 note(오탐 조건)를 반영해 판정할 것.\n');
  for (const r of report) {
    console.log(`■ [${r.layer}] ${r.id} (${r.koName}) · ${r.count}건`);
    console.log(`  note: ${r.note}`);
    for (const s of r.samples) console.log(`  - ${s.file}:${s.line}  ${s.text}`);
    console.log('');
  }
  if (headingSkips.length) {
    console.log(`■ [L0] heading-level-skip (헤딩 위계 스킵) · ${headingSkips.length}파일`);
    for (const h of headingSkips.slice(0, MAX_SAMPLES)) console.log(`  - ${h.file}  variants: ${h.levels}`);
    console.log('');
  }
  if (crossDupes.length) {
    console.log(`■ [L0] cross-file-duplicate-copy (교차 파일 카피 중복) · ${crossDupes.length}건`);
    for (const d of crossDupes.slice(0, MAX_SAMPLES)) console.log(`  - "${d.text}" x${d.count}: ${d.files.join(', ')}`);
    console.log('');
  }
  const clean = LINE_SIGNALS.length - report.length;
  console.log(`무히트 신호 ${clean}개 (커버리지 증명용)`);
}
