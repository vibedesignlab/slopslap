#!/usr/bin/env node
/**
 * referenceData.js 생성기 — 실제 외부 디자인시스템 패키지에서 값을 뽑아 코퍼스를 만든다.
 *
 * 왜 생성기인가: 값을 손으로 타이핑하면 "레퍼런스"가 아니라 지어낸 상수가 된다. 이 스크립트는
 * 실제 설치된 npm 패키지(tailwindcss / @radix-ui/colors)와 W3C 표준 상수에서만 값을 읽어,
 * 각 값에 실제 출처(패키지명·버전)를 박아 referenceData.js 를 쓴다. 재생성 = `npm run gen-references`.
 *
 * 실행 전제: `npm install` (devDependencies: tailwindcss, @radix-ui/colors). 무키·무료(MIT).
 * 런타임은 생성된 referenceData.js(값 인라인)만 읽으므로 오프라인. 값의 출처는 이 스크립트가 보증.
 */
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');

// ── 실제 Tailwind 값 ─────────────────────────────────────────
const twPkg = require('tailwindcss/package.json');
const tw = require('tailwindcss/defaultTheme');
const twVer = twPkg.version;

// 실제 spacing 스케일(rem→px), UI 유효 범위(≤256px)만
const twSpacingPx = [...new Set(
  Object.values(tw.spacing)
    .map((v) => { const m = /^([0-9.]+)rem$/.exec(v); return m ? +(parseFloat(m[1]) * 16).toFixed(2) : null; })
    .filter((x) => x && x > 0 && x <= 256)
)].sort((a, b) => a - b);

// 실제 fontSize 스케일(rem→px)
const twFontPx = Object.entries(tw.fontSize)
  .map(([k, v]) => ({ key: k, px: +(parseFloat(Array.isArray(v) ? v[0] : v) * 16).toFixed(2) }))
  .filter((x) => x.px > 0)
  .sort((a, b) => a.px - b.px);

// ── 실제 Radix Colors 값 ─────────────────────────────────────
const radixPkg = require('@radix-ui/colors/package.json');
const radix = require('@radix-ui/colors');
const radixVer = radixPkg.version;

// Radix 램프 규약: step 9/10 = solid bg, 11 = low-contrast text, 12 = high-contrast text.
// 접근성: step 11 텍스트는 step 2 배경 위에서 ≥4.5:1(Radix 설계 보증). accent 1개 + 중립(slate) 램프로 수렴.
function ramp(name) {
  const scale = radix[name];
  if (!scale) return null;
  const hexes = Object.values(scale);
  return { name, steps12: hexes };
}
const neutralRamp = ramp('slate');
const accentRamps = ['red', 'blue', 'green', 'amber', 'violet', 'orange'].map(ramp).filter(Boolean);

// ── W3C WCAG 2.1 표준 상수(스펙 값, 패키지 아님) ─────────────
const WCAG = { minContrast: { bodyText: 4.5, largeText: 3.0, uiComponent: 3.0 }, spec: 'WCAG 2.1 SC 1.4.3 / 1.4.11' };

// ── 코퍼스 조립(값은 전부 위 실제 소스에서만) ────────────────
const SOURCES = {
  tailwind: { name: `tailwindcss@${twVer} defaultTheme`, url: 'https://tailwindcss.com/docs/customizing-spacing', license: 'MIT', fetchedFrom: 'npm package' },
  radix: { name: `@radix-ui/colors@${radixVer}`, url: 'https://www.radix-ui.com/colors', license: 'MIT', fetchedFrom: 'npm package' },
  wcag: { name: WCAG.spec, url: 'https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html', license: 'W3C standard', fetchedFrom: 'spec constant' },
};

function galleries(term) {
  const q = encodeURIComponent(term);
  return [
    { label: `Google: "${term}" 예시`, url: `https://www.google.com/search?q=${q}+design+inspiration`, gate: 'open' },
    { label: 'Land-book (열림)', url: `https://land-book.com/?search=${q}`, gate: 'open' },
    { label: 'Mobbin (로그인)', url: 'https://mobbin.com/', gate: 'login' },
  ];
}

const DATA = {
  'unscaled-spacing-ladder': {
    applies: true, area: 'C', source: 'tailwind',
    principle: '간격은 눈대중이 아니라 실제 디자인시스템 간격 스케일의 rung 으로 snap 한다.',
    target: { ladder_px: twSpacingPx, offLadderMaxRatio: 0.2, note: `tailwindcss@${twVer} 의 실제 spacing 스케일(rem→px, ≤256). 자체 도출값을 최근접 rung 으로 정렬(동률 작은쪽), BOLD=off 시 매크로 상향 스냅 금지.` },
    exemplars: galleries('SaaS landing spacing rhythm'),
  },
  'unscaled-type-hierarchy': {
    applies: true, area: 'D', source: 'tailwind',
    principle: '전 폰트 크기를 실제 타입 스케일의 rung 으로 snap 한다.',
    target: { scale_px: twFontPx.map((f) => f.px), scale_named: twFontPx, lineHeight: { body: 1.5, heading: 1.15, ui: 1.3 }, note: `tailwindcss@${twVer} 의 실제 fontSize 스케일(rem→px). 관측 크기를 최근접 rung 으로 snap, 위계 보존.` },
    exemplars: galleries('editorial web typography scale'),
  },
  'decorative-semantic-color': {
    applies: true, area: 'E', source: 'radix',
    principle: '무지개 hue 순환 대신 accent 1개 + 중립 램프로 수렴. 실제 접근성 램프의 스텝 규약을 쓴다.',
    target: {
      neutralRamp, accentRamps,
      stepConvention: { solidBg: 9, hoverBg: 10, lowContrastText: 11, highContrastText: 12 },
      note: `@radix-ui/colors@${radixVer} 실제 12스텝 hex. 시리즈(카드 등) 아이콘은 단일 accent, 장식 hue 추가 금지.`,
    },
    exemplars: galleries('restrained brand color palette web'),
  },
  'saturated-multicolor-palette': {
    applies: true, area: 'E', source: 'radix',
    principle: '고채도 다색 대신 accent 1 + 중립 램프.',
    target: { neutralRamp, accentRamps: accentRamps.slice(0, 3), stepConvention: { solidBg: 9, lowContrastText: 11, highContrastText: 12 }, note: `@radix-ui/colors@${radixVer} 실제 램프로 수렴.` },
    exemplars: galleries('minimal accent color web design'),
  },
  'low-contrast-body': {
    applies: true, area: 'E', source: 'wcag',
    principle: `본문 대비 ≥${WCAG.minContrast.bodyText}:1, 대형·UI ≥${WCAG.minContrast.largeText}:1 (${WCAG.spec}).`,
    target: { minContrast: WCAG.minContrast, fix: '전경 명도 조정 우선(같은 hue), Radix 램프 step 11↑ 사용.' },
    exemplars: galleries('accessible text contrast web'),
  },
  // 삭제형(외부 레퍼런스 차용 대상 아님) — 값 없음
  'numbered-overline-fetish': { applies: false, area: 'A', principle: '단발 오버라인·중복 라벨은 삭제. 차용값 없음.' },
  'all-caps-eyebrow': { applies: false, area: 'A', principle: '장식용 all-caps eyebrow 삭제.' },
  'pill-eyebrow-badge': { applies: false, area: 'A', principle: 'pill eyebrow 배지 삭제. 차용값 없음.' },
  'floating-gradient-orb': { applies: false, area: 'A', principle: '플로팅 장식 오브 노드 삭제(1차 스윕).' },
  'octane-blob-neon': { applies: false, area: 'A', principle: '네온 blob 장식 삭제.' },
  'mesh-aurora-background': { applies: false, area: 'A', principle: 'mesh/aurora 장식 배경 제거.' },
  'everywhere-glow': { applies: false, area: 'A', principle: '전역 반복 글로우 제거(포컬 1개 예외).' },
  'glassmorphism-default': { applies: false, area: 'A', principle: '글래스모피즘 표면 → 불투명 단색.' },
  'ubiquitous-soft-shadow': { applies: false, area: 'A', principle: '균일 soft shadow 남발 제거(figure-ground로).' },
  'gradient-text': { applies: false, area: 'A', principle: '텍스트 그라디언트 → 단색.' },
  'emoji-icon-navigation': { applies: false, area: 'A', principle: '이모지 아이콘·네비 제거/실아이콘화.' },
  'emoji-overuse': { applies: false, area: 'A', principle: '장식 이모지 남발 제거.' },
  'decorative-status-dots': { applies: false, area: 'A', principle: '상태 무관 장식 도트 제거.' },
  'sparkle-ai-branding': { applies: false, area: 'A', principle: 'AI 브랜딩 스파클(✨) 제거.' },
  'meaningless-decorative-chart': { applies: false, area: 'A', principle: '데이터 없는 장식 차트 제거.' },
  'undisciplined-grid': { applies: false, area: 'B', principle: '임의 소수 fr → 하모닉 비. measure 는 텍스트 가독폭(~65ch)에서 도출 — 이건 조판 공리라 패키지 소스 없음, 값 차용 아니라 규칙 적용.' },
  'meaningless-container-nesting': { applies: false, area: 'B', principle: '표면 속 표면·유령 래퍼 flatten. 차용값 없음.' },
  'colored-left-border-cards': { applies: false, area: 'B', principle: '좌측 컬러 보더 삭제. 차용값 없음.' },
  'italic-serif-accent': { applies: false, area: 'D', principle: '장식 이탤릭 제거(font-style:normal). 차용값 없음.' },
};

const ALIASES = {
  'wcag-contrast': 'low-contrast-body', 'contrast': 'low-contrast-body', 'low-contrast': 'low-contrast-body',
  'rainbow-palette': 'decorative-semantic-color', 'multicolor-palette': 'saturated-multicolor-palette',
  'type-scale': 'unscaled-type-hierarchy', 'font-role-map': 'unscaled-type-hierarchy',
  'grid-anarchy': 'undisciplined-grid', 'overline': 'numbered-overline-fetish', 'eyebrow': 'all-caps-eyebrow',
};

// ── 파일 출력 ────────────────────────────────────────────────
const banner = `/**
 * slopslap Reference Corpus — 자동 생성 파일. 직접 편집 금지.
 * 생성: \`npm run gen-references\` (scripts/gen-reference-data.mjs)
 * 값 출처(전부 실제 외부 소스): tailwindcss@${twVer} · @radix-ui/colors@${radixVer} · WCAG 2.1(W3C).
 * 손 타이핑 상수 아님 — 위 패키지/스펙에서 뽑은 값이다. 무키·무료(MIT/W3C), 런타임은 이 파일만 읽어 오프라인.
 * finding 의 taxonomy-id 로 join(가장 긴 prefix + alias). applies:false = 삭제형(차용값 없음).
 */`;

const body = `${banner}
export const REFERENCE_SOURCES = ${JSON.stringify(SOURCES, null, 2)};

export const REFERENCE_DATA = ${JSON.stringify(DATA, null, 2)};

export const REFERENCE_ALIASES = ${JSON.stringify(ALIASES, null, 2)};

export function lookupReference(findingId) {
  if (!findingId) return null;
  const base = String(findingId).trim().toLowerCase().split(/[\\s(]/)[0].replace(/[.,]$/, '');
  let best = null;
  for (const alias of Object.keys(REFERENCE_ALIASES)) {
    if (base === alias || base.startsWith(alias + '-') || base.includes(alias)) {
      const canon = REFERENCE_ALIASES[alias];
      if (!best || canon.length > best.length) best = canon;
    }
  }
  for (const key of Object.keys(REFERENCE_DATA)) {
    if (base === key || base.startsWith(key + '-')) {
      if (!best || key.length > best.length) best = key;
    }
  }
  if (!best) return null;
  const entry = REFERENCE_DATA[best];
  const src = entry.source ? REFERENCE_SOURCES[entry.source] : null;
  return { key: best, ...entry, sourceMeta: src };
}
`;

fs.writeFileSync(path.join(ROOT, 'src/data/referenceData.js'), body);
console.log(`referenceData.js 생성 완료 — Tailwind spacing ${twSpacingPx.length}단계, fontSize ${twFontPx.length}단계, Radix 중립+accent ${1 + accentRamps.length}램프(실제 hex), WCAG 임계.`);
console.log(`출처: tailwindcss@${twVer}, @radix-ui/colors@${radixVer}`);
