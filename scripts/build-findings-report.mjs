#!/usr/bin/env node
// slopslap 2단계 리포트 빌더.
// findings-<A..E>.md 들을 자기완결 HTML(report/index.html) 로 렌더한다.
// 외부요청 0, 인라인 CSS. 값(base·배수·대비)은 그대로 노출.
// usage: node scripts/build-findings-report.mjs <findingsDir> <outHtml> [--target "<라벨>"] [--verifyDir <dir>]

import fs from 'node:fs';
import path from 'node:path';

const args = process.argv.slice(2);
const findingsDir = args[0];
const outHtml = args[1];
const targetLabel = (args.includes('--target') ? args[args.indexOf('--target') + 1] : path.basename(path.dirname(findingsDir))) || '대상';
const verifyDir = args.includes('--verifyDir') ? args[args.indexOf('--verifyDir') + 1] : null;

if (!findingsDir || !outHtml) {
  console.error('usage: build-findings-report.mjs <findingsDir> <outHtml> [--target "<라벨>"] [--verifyDir <dir>]');
  process.exit(1);
}

const AREA_TITLES = {
  A: '오버라인·중복 텍스트',
  B: '레이아웃·컨테이너·이미지',
  B2: '컨테이너 폭·밀도 (강화규칙)',
  C: '간격',
  D: '타이포',
  E: '색',
};
// findings 디렉토리에 실제 존재하는 영역만, 정의된 순서로 렌더(B2 등 강화 회차 포함)
const AREA_ORDER = ['A', 'B', 'B2', 'C', 'D', 'E'];
const FIELDS = ['문제', '근거', '처방', '집행순서'];

const esc = (s) => String(s ?? '')
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;');

// findings 블록 파서: `- id:` 로 시작하는 블록을 field 별로 쪼갠다. 멀티라인 값 지원.
function parseFindings(md) {
  const lines = md.split('\n');
  const items = [];
  let cur = null;
  let curField = null;
  const fieldStart = new RegExp('^\\s{1,4}(' + FIELDS.join('|') + ')(\\([^)]*\\))?\\s*:\\s*(.*)$');
  for (const line of lines) {
    const idM = line.match(/^\s*-\s*id:\s*(.*)$/);
    if (idM) {
      if (cur) items.push(cur);
      cur = { id: idM[1].trim(), fields: {} };
      curField = null;
      continue;
    }
    if (!cur) continue;
    const fM = line.match(fieldStart);
    if (fM) {
      curField = fM[1];
      const suffix = fM[2] ? fM[2] : '';
      cur.fields[curField] = (fM[3] || '').trim();
      cur._labels = cur._labels || {};
      cur._labels[curField] = curField + suffix;
      continue;
    }
    // 새 id 도, 새 field 도 아닌 들여쓴 줄 → 현재 field 에 이어붙임
    if (curField && /^\s+\S/.test(line)) {
      cur.fields[curField] += '\n' + line.trim();
    } else if (curField && line.trim() === '') {
      // 빈 줄은 필드 종료 신호로만 (값에는 미포함)
      curField = null;
    }
  }
  if (cur) items.push(cur);
  return items;
}

// intro: 파일 첫 `- id:` 이전의 서술(제목 줄 제외)
function extractIntro(md) {
  const lines = md.split('\n');
  const out = [];
  for (const line of lines) {
    if (/^\s*-\s*id:/.test(line)) break;
    if (/^#\s/.test(line)) continue;
    if (line.trim() === '' || line.trim() === '---') continue;
    out.push(line.trim());
  }
  return out.join(' ');
}

// verify-<X>.md 에서 id → 반영/누락 배지 추출(있으면)
function parseVerify(md) {
  const map = {};
  if (!md) return map;
  const lines = md.split('\n');
  for (const line of lines) {
    const m = line.match(/(반영|누락|waive)/);
    const idm = line.match(/(?:id[:\s]+)?([a-z][a-z0-9-]+)/i);
    if (m && idm) map[idm[1]] = m[1];
  }
  return map;
}

const areas = AREA_ORDER.filter((a) => fs.existsSync(path.join(findingsDir, `findings-${a}.md`)));
const parsed = {};
let grand = 0;
for (const a of areas) {
  const fp = path.join(findingsDir, `findings-${a}.md`);
  if (!fs.existsSync(fp)) { parsed[a] = { items: [], intro: '', missing: true }; continue; }
  const md = fs.readFileSync(fp, 'utf8');
  const items = parseFindings(md);
  const verifyFp = verifyDir ? path.join(verifyDir, `verify-${a}.md`) : null;
  const verify = verifyFp && fs.existsSync(verifyFp) ? parseVerify(fs.readFileSync(verifyFp, 'utf8')) : {};
  parsed[a] = { items, intro: extractIntro(md), verify };
  // "문제: 없음" / "해당 없음" 은 실집행 항목에서 제외 카운트
  const actionable = items.filter((it) => {
    const p = (it.fields['문제'] || '') + (it.fields['처방'] || '');
    return !/없음|해당\s*없음|불요|조치\s*불/.test(p) || /삭제|제거|flatten|스냅|교체|강등|재배치/.test(it.fields['처방'] || '');
  });
  parsed[a].actionable = actionable.length;
  grand += actionable.length;
}

const summaryRows = areas.map((a) => {
  const p = parsed[a];
  const n = p.missing ? '—' : p.items.length;
  const act = p.missing ? '—' : (p.actionable ?? 0);
  return `<tr><td class="ac">${a}</td><td>${esc(AREA_TITLES[a])}</td><td class="num">${n}</td><td class="num strong">${act}</td></tr>`;
}).join('');

function badge(txt) {
  const cls = txt === '반영' ? 'ok' : txt === '누락' ? 'miss' : 'waive';
  return `<span class="badge ${cls}">${esc(txt)}</span>`;
}

const sections = areas.map((a) => {
  const p = parsed[a];
  if (p.missing) {
    return `<section class="area"><h2><span class="tag">${a}</span> ${esc(AREA_TITLES[a])}</h2><p class="intro miss-note">findings-${a}.md 없음.</p></section>`;
  }
  const cards = p.items.map((it) => {
    const vb = p.verify && p.verify[it.id] ? badge(p.verify[it.id]) : '';
    const noop = /없음|해당\s*없음|불요|조치\s*불/.test((it.fields['문제'] || '')) && !/삭제|제거|flatten|스냅|교체|강등|재배치/.test(it.fields['처방'] || '');
    const fieldHtml = FIELDS.filter((f) => f !== '집행순서' && it.fields[f]).map((f) => {
      const label = (it._labels && it._labels[f]) || f;
      return `<div class="fld"><span class="k">${esc(label)}</span><span class="v">${esc(it.fields[f])}</span></div>`;
    }).join('');
    return `<article class="card${noop ? ' noop' : ''}">
      <div class="chead"><code class="cid">${esc(it.id)}</code>${vb}${noop ? '<span class="badge noopb">무집행</span>' : ''}<span class="ord">→ ${esc(it.fields['집행순서'] || a)}</span></div>
      ${fieldHtml}
    </article>`;
  }).join('');
  return `<section class="area">
    <h2><span class="tag">${a}</span> ${esc(AREA_TITLES[a])} <span class="count">${p.actionable ?? 0}건</span></h2>
    ${p.intro ? `<p class="intro">${esc(p.intro)}</p>` : ''}
    ${cards || '<p class="intro">항목 없음.</p>'}
  </section>`;
}).join('\n');

const html = `<!doctype html>
<html lang="ko"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>slopslap 점검 리포트 · ${esc(targetLabel)}</title>
<style>
:root{--bg:#0f1115;--panel:#161a21;--line:#252b35;--tx:#e6e9ef;--soft:#9aa3b2;--faint:#6b7280;--brand:#6c9dff;--ok:#21b57a;--miss:#e5484d;--waive:#8a6d3b;}
@media(prefers-color-scheme:light){:root{--bg:#f7f8fa;--panel:#fff;--line:#e6e9ef;--tx:#1a1d24;--soft:#5a6274;--faint:#8a92a6;}}
*{box-sizing:border-box}
body{margin:0;background:var(--bg);color:var(--tx);font:15px/1.6 -apple-system,BlinkMacSystemFont,"Pretendard","Noto Sans KR",sans-serif;-webkit-font-smoothing:antialiased}
.wrap{max-width:920px;margin:0 auto;padding:48px 24px 96px}
header{margin-bottom:40px}
h1{font-size:22px;margin:0 0 6px;letter-spacing:-.01em}
.sub{color:var(--soft);font-size:13px;margin:0}
table.sum{width:100%;border-collapse:collapse;margin:28px 0 8px;font-size:14px}
table.sum th,table.sum td{text-align:left;padding:9px 12px;border-bottom:1px solid var(--line)}
table.sum th{color:var(--faint);font-weight:600;font-size:12px;text-transform:uppercase;letter-spacing:.04em}
.ac{font-weight:700;color:var(--brand)}
.num{text-align:right;font-variant-numeric:tabular-nums}
.strong{font-weight:700}
.grand{font-size:13px;color:var(--soft);margin-top:14px}
.area{margin-top:44px}
.area h2{font-size:16px;display:flex;align-items:center;gap:10px;margin:0 0 6px;padding-bottom:10px;border-bottom:1px solid var(--line)}
.tag{display:inline-grid;place-items:center;width:24px;height:24px;border-radius:6px;background:var(--brand);color:#fff;font-size:13px;font-weight:700}
.count{margin-left:auto;color:var(--faint);font-size:13px;font-weight:500}
.intro{color:var(--soft);font-size:13px;margin:12px 0 18px}
.card{background:var(--panel);border:1px solid var(--line);border-radius:10px;padding:16px 18px;margin:12px 0}
.card.noop{opacity:.62}
.chead{display:flex;align-items:center;gap:10px;margin-bottom:10px;flex-wrap:wrap}
.cid{font:12px/1.4 "SFMono-Regular",ui-monospace,Menlo,monospace;background:rgba(108,157,255,.12);color:var(--brand);padding:2px 8px;border-radius:5px}
.ord{margin-left:auto;color:var(--faint);font-size:12px;font-variant-numeric:tabular-nums}
.fld{display:grid;grid-template-columns:52px 1fr;gap:12px;padding:5px 0;align-items:start}
.fld .k{color:var(--faint);font-size:12px;font-weight:600;padding-top:1px}
.fld .v{white-space:pre-wrap;font-size:13.5px;word-break:break-word}
.badge{font-size:11px;font-weight:700;padding:2px 8px;border-radius:999px}
.badge.ok{background:rgba(33,181,122,.16);color:var(--ok)}
.badge.miss{background:rgba(229,72,77,.16);color:var(--miss)}
.badge.waive{background:rgba(138,109,59,.18);color:var(--waive)}
.badge.noopb{background:var(--line);color:var(--faint)}
.miss-note{color:var(--faint)}
</style></head>
<body><div class="wrap">
<header>
  <h1>slopslap 점검 리포트</h1>
  <p class="sub">대상: <b>${esc(targetLabel)}</b> · 5영역 병렬 정적 점검 · 집행 전 findings${verifyDir ? ' + 재점검 반영상태' : ''}</p>
</header>
<table class="sum">
  <thead><tr><th>영역</th><th>범주</th><th class="num">항목</th><th class="num">집행대상</th></tr></thead>
  <tbody>${summaryRows}</tbody>
</table>
<p class="grand">집행 대상 합계 <b>${grand}건</b> (집행 순서 A→B→C→D→E, 상류→하류 커밋 단위)</p>
${sections}
</div></body></html>`;

fs.mkdirSync(path.dirname(outHtml), { recursive: true });
fs.writeFileSync(outHtml, html);
console.log(`report written: ${outHtml} (${grand} actionable across 5 areas)`);
