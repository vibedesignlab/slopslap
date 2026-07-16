/**
 * slopslap Reference Matrix — 실측 사이트 contract 로 구성된 답안 유닛 인덱스 (Plan B).
 * 유닛은 capture-reference.mjs 가 실제 사이트를 헤드리스 렌더해 뽑은 실측값(손 타이핑 없음).
 * transform 모드: finding 의 tell → 관련 contract 슬라이스 → styleTag 방향 선택 → 집행 snap 기준.
 *
 * 재수집: node scripts/capture-reference.mjs <url> ... 후 gen 스크립트로 units.json 갱신.
 */
import fs from 'node:fs';
import path from 'node:path';

const HERE = path.dirname(new URL(import.meta.url).pathname);
export const UNITS = JSON.parse(fs.readFileSync(path.join(HERE, 'units.json'), 'utf8'));

// tell → 그 tell 이 소비하는 contract 슬라이스
const TELL_SLICE = {
  'unscaled-spacing-ladder': (c) => ({ field: 'spacingLadder_px', value: c.spacingLadder_px }),
  'unscaled-type-hierarchy': (c) => ({ field: 'typeScale', value: { scale_px: c.typeScale_px, ratio: c.typeRatio } }),
  'oversized-display-type': (c) => ({ field: 'typeScale', value: { scale_px: c.typeScale_px, cap: Math.max(...c.typeScale_px) } }),
  'font-family-role-map': (c) => ({ field: 'fontRoles', value: c.fontRoles }),
  'decorative-semantic-color': (c) => ({ field: 'palette', value: c.palette }),
  'saturated-multicolor-palette': (c) => ({ field: 'palette', value: c.palette }),
  'iridescent-palette': (c) => ({ field: 'palette', value: c.palette }),
  'undisciplined-grid': (c) => ({ field: 'measure', value: c.measure_px }),
  'default-equal-thirds': (c) => ({ field: 'measure', value: c.measure_px }),
};

const ALIASES = {
  'wcag-contrast': 'low-contrast-body', 'contrast': 'low-contrast-body',
  'rainbow-palette': 'decorative-semantic-color', 'multicolor-palette': 'saturated-multicolor-palette',
  'type-scale': 'unscaled-type-hierarchy', 'grid-anarchy': 'undisciplined-grid',
  'font-role': 'font-family-role-map',
};

function canonTell(tell) {
  const b = String(tell || '').trim().toLowerCase().split(/[\s(]/)[0].replace(/[.,]$/, '');
  if (TELL_SLICE[b]) return b;
  for (const a of Object.keys(ALIASES)) if (b === a || b.startsWith(a + '-') || b.includes(a)) return ALIASES[a];
  for (const k of Object.keys(TELL_SLICE)) if (b.startsWith(k)) return k;
  return null;
}

export function listStyles() {
  return [...new Set(UNITS.map((u) => u.styleTag))];
}

// tell → 답안. opts.style 지정 시 그 styleTag 유닛만(방향 확정용), 없으면 전 스타일(다양성 열람용).
export function lookupAnswer(tell, opts = {}) {
  const t = canonTell(tell);
  if (t === 'low-contrast-body') {
    return { tell: 'low-contrast-body', field: 'minContrast', wcag: { body: 4.5, largeText: 3.0, uiComponent: 3.0 }, note: 'WCAG 2.1 SC 1.4.3/1.4.11 — 전경 명도 조정, 배경 변경 지양.', units: [] };
  }
  const slicer = t && TELL_SLICE[t];
  if (!slicer) return null;
  let units = UNITS;
  if (opts.style) units = units.filter((u) => u.styleTag === opts.style);
  const answers = units.map((u) => ({ id: u.id, styleTag: u.styleTag, sourceUrl: u.sourceUrl, shot: u.shot, ...slicer(u.contract) }));
  return { tell: t, count: answers.length, styles: [...new Set(answers.map((a) => a.styleTag))], units: answers };
}

// transform 방향 확정: 한 styleTag 의 전 영역 contract 를 한 벌로 (집행자 공동 소비용)
export function directionBundle(style) {
  const u = UNITS.find((x) => x.styleTag === style) || UNITS[0];
  return { styleTag: u.styleTag, sourceUrl: u.sourceUrl, shot: u.shot, contract: u.contract };
}
