#!/usr/bin/env node
// slopslap 레퍼런스 조인 CLI.
// finding 의 taxonomy-id 를 받아 referenceData.js 코퍼스에서 결정적으로(가장 긴 prefix) 매칭한 정량 레퍼런스를 반환.
// 무키·무료·오프라인(vendored 값). 집행자는 이 값을 snap 타깃/검증값으로, 리포트는 인용/딥링크로 소비.
//
// usage:
//   node scripts/fetch-references.mjs <taxonomy-id> [--json]     단일 조회
//   node scripts/fetch-references.mjs --all [--json]             전체 코퍼스 덤프
//   node scripts/fetch-references.mjs --file <findings.md> [--json]   findings 파일의 전 id 일괄 조회

import path from 'node:path';
import fs from 'node:fs';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const { REFERENCE_DATA, lookupReference } = await import(path.join(ROOT, 'src/data/referenceData.js'));

const args = process.argv.slice(2);
const asJson = args.includes('--json');

function out(obj) {
  if (asJson) { console.log(JSON.stringify(obj, null, 2)); return; }
  print(obj);
}

function print(ref) {
  if (Array.isArray(ref)) { ref.forEach((r) => { print(r); console.log(''); }); return; }
  if (!ref || ref.found === false) { console.log(`(레퍼런스 없음: ${ref?.query ?? ''})`); return; }
  const tag = ref.applies === false ? '[삭제형·차용값 없음]' : `[${ref.area} · snap 대상]`;
  console.log(`● ${ref.key}  ${tag}`);
  console.log(`  원칙: ${ref.principle}`);
  if (ref.target) console.log(`  타깃: ${JSON.stringify(ref.target)}`);
  if (ref.sourceMeta) console.log(`  출처: ${ref.sourceMeta.name} (${ref.sourceMeta.license}) ${ref.sourceMeta.url}`);
  if (ref.exemplars) ref.exemplars.forEach((e) => console.log(`  예시: ${e.label} — ${e.url}`));
}

if (args.includes('--all')) {
  const all = Object.keys(REFERENCE_DATA).map((k) => lookupReference(k));
  out(all);
} else if (args.includes('--file')) {
  const fp = args[args.indexOf('--file') + 1];
  const md = fs.readFileSync(fp, 'utf8');
  const ids = [...md.matchAll(/^\s*-\s*id:\s*(.+)$/gm)].map((m) => m[1].trim());
  const seen = new Set();
  const results = [];
  for (const id of ids) {
    const ref = lookupReference(id);
    const key = ref ? ref.key : `__miss__${id}`;
    if (seen.has(key)) continue;
    seen.add(key);
    results.push(ref ? { query: id, found: true, ...ref } : { query: id, found: false });
  }
  out(results);
} else {
  const id = args.find((a) => !a.startsWith('--'));
  if (!id) { console.error('usage: fetch-references.mjs <taxonomy-id> [--json] | --all | --file <md>'); process.exit(1); }
  const ref = lookupReference(id);
  out(ref ? { query: id, found: true, ...ref } : { query: id, found: false });
}
