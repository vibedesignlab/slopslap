#!/usr/bin/env node
/**
 * fetch-answer.mjs — Reference Matrix 조회 CLI (Plan B transform).
 * finding 의 tell → 실측 답안 유닛(들). styleTag 지정 시 방향 확정.
 *
 * usage:
 *   node scripts/fetch-answer.mjs <tell> [--style <styleTag>] [--json]
 *   node scripts/fetch-answer.mjs --styles                 사용가능 styleTag 목록
 *   node scripts/fetch-answer.mjs --direction <styleTag>   그 방향의 전 영역 contract 한 벌
 */
import path from 'node:path';
const HERE = path.dirname(new URL(import.meta.url).pathname);
const M = await import(path.join(HERE, '..', 'src/data/referenceMatrix/index.js'));

const a = process.argv.slice(2);
const asJson = a.includes('--json');
const get = (f) => (a.includes(f) ? a[a.indexOf(f) + 1] : null);

if (a.includes('--styles')) { console.log(M.listStyles().join('\n')); process.exit(0); }
if (a.includes('--direction')) { console.log(JSON.stringify(M.directionBundle(get('--direction')), null, 2)); process.exit(0); }

const tell = a.find((x) => !x.startsWith('--'));
if (!tell) { console.error('usage: fetch-answer.mjs <tell> [--style <s>] [--json] | --styles | --direction <s>'); process.exit(1); }
const res = M.lookupAnswer(tell, { style: get('--style') });
if (asJson) { console.log(JSON.stringify(res, null, 2)); process.exit(0); }
if (!res) { console.log('(매트릭스 답안 없음: ' + tell + ')'); process.exit(0); }
console.log(`● ${res.tell}${res.field ? ' [' + res.field + ']' : ''} — ${res.count ?? 0} 유닛, 스타일: ${(res.styles || []).join(', ')}`);
if (res.wcag) console.log('  WCAG:', JSON.stringify(res.wcag), res.note);
(res.units || []).slice(0, 6).forEach((u) => console.log(`  <${u.styleTag}> ${u.id}: ${JSON.stringify(u.value).slice(0, 90)}  (${u.sourceUrl})`));
