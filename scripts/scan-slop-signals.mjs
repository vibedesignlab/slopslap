/**
 * AI-slop 기계 스캐너
 *
 * aiSlopTaxonomyData.js(v0.4+)의 detect.signals 를 대상 코드에 돌려
 * 클리셰 후보 히트를 항목별로 집계한다. 신호는 가중 플래그이지 판결이 아니다:
 * 이 스크립트의 출력은 slop-auditor 에이전트의 입력(후보 목록)이고, 최종 판정은
 * 각 항목의 detect.note 오탐 경고를 반영한 판단 단계가 한다.
 *
 * 사용법:
 *   node scripts/scan-slop-signals.mjs                 # 기본 대상 전체
 *   node scripts/scan-slop-signals.mjs app/page.jsx src/components/landing
 *   node scripts/scan-slop-signals.mjs --json          # 에이전트 소비용 JSON
 *   node scripts/scan-slop-signals.mjs --max 5         # 항목당 샘플 라인 수 (기본 3)
 */
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const { AI_SLOP_TAXONOMY } = require(path.join(ROOT, 'src/data/aiSlopTaxonomyData.js'));

const args = process.argv.slice(2);
const asJson = args.includes('--json');
const maxIdx = args.indexOf('--max');
const MAX_SAMPLES = maxIdx !== -1 ? Number(args[maxIdx + 1]) : 3;
const targets = args.filter((a, i) => !a.startsWith('--') && (maxIdx === -1 || i !== maxIdx + 1));

// 기본 대상: 라우트 + 컴포넌트 + 카피 상수 (사전·택소노미 데이터 자체는 자기참조라 제외)
const DEFAULT_TARGETS = ['app', 'src/components', 'src/data/contents.js', 'src/data/verbalIdentity.js'];
const EXCLUDE = /TaxonomyData\.js$|node_modules|\.next|\.stories\.jsx$|slideTitleMap\.json$/;
const EXTS = new Set(['.js', '.jsx', '.ts', '.tsx', '.css', '.html', '.vue', '.svelte', '.astro']);

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

// detect 신호 수집 (code·hybrid 만. judgment 는 스캔 대상 아님)
const detectors = [];
for (const part of AI_SLOP_TAXONOMY)
  for (const cat of part.categories)
    for (const g of cat.groups)
      for (const it of g.items) {
        if (!it.detect || it.detect.kind === 'judgment' || !it.detect.signals) continue;
        const regexes = it.detect.signals.map((s) => {
          try { return new RegExp(s, 'u'); } catch { try { return new RegExp(s); } catch { return null; } }
        }).filter(Boolean);
        detectors.push({ id: it.id, koName: it.koName, part: part.number, kind: it.detect.kind, severity: it.severity, note: it.detect.note || '', regexes });
      }

const files = [...new Set((targets.length ? targets : DEFAULT_TARGETS).flatMap(collectFiles))];
const hits = new Map(); // id → [{file, line, text}]

for (const file of files) {
  const rel = path.relative(ROOT, file);
  const lines = fs.readFileSync(file, 'utf8').split('\n');
  lines.forEach((text, i) => {
    for (const d of detectors) {
      if (d.regexes.some((r) => r.test(text))) {
        if (!hits.has(d.id)) hits.set(d.id, []);
        hits.get(d.id).push({ file: rel, line: i + 1, text: text.trim().slice(0, 140) });
      }
    }
  });
}

const report = detectors
  .filter((d) => hits.has(d.id))
  .map((d) => ({ id: d.id, koName: d.koName, part: d.part, kind: d.kind, severity: d.severity, count: hits.get(d.id).length, note: d.note, samples: hits.get(d.id).slice(0, MAX_SAMPLES) }))
  .sort((a, b) => b.count - a.count);

if (asJson) {
  console.log(JSON.stringify({ scannedFiles: files.length, detectors: detectors.length, flagged: report.length, report }, null, 2));
} else {
  console.log(`스캔: 파일 ${files.length}개 · 검출기 ${detectors.length}개(code/hybrid) · 플래그 ${report.length}항목`);
  console.log('주의: 히트는 후보 플래그다. 각 항목의 note(오탐 조건)를 반영해 판정할 것.\n');
  for (const r of report) {
    console.log(`■ ${r.id} (${r.koName}) · P${r.part} · ${r.severity} · ${r.kind} · ${r.count}건`);
    if (r.note) console.log(`  note: ${r.note}`);
    for (const s of r.samples) console.log(`  - ${s.file}:${s.line}  ${s.text}`);
    console.log('');
  }
  const clean = detectors.length - report.length;
  console.log(`무히트 검출기 ${clean}개 (커버리지 증명용): 판정 단계에서 "확인했고 없음" 으로 기록 가능`);
}
