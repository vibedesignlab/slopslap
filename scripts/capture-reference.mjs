#!/usr/bin/env node
/**
 * capture-reference.mjs — 실제 사이트를 헤드리스 렌더해 (1) 스크린샷 (2) 실측 디자인 contract 를 뽑는다.
 * Plan B 답안 수집 장비. 값은 전부 실측(손 타이핑 없음).
 *
 * usage: node scripts/capture-reference.mjs <url> <outDir> --id <unit-id> [--tag <style>] [--section <sec>]
 * 출력: <outDir>/shots/<id>.png (풀), <id>-fold.png (above-fold), <outDir>/units/<id>.json (contract)
 */
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);

const PW = '/Users/ddd/Desktop/daily vibe/pizza/node_modules/playwright';
const { chromium } = require(PW);

const a = process.argv.slice(2);
const url = a[0];
const outDir = a[1];
const get = (f, d) => (a.includes(f) ? a[a.indexOf(f) + 1] : d);
const id = get('--id', 'unit-' + Date.now());
const tag = get('--tag', 'untagged');
const section = get('--section', 'generic');
if (!url || !outDir) { console.error('usage: capture-reference.mjs <url> <outDir> --id <id> [--tag <style>] [--section <sec>]'); process.exit(1); }

fs.mkdirSync(path.join(outDir, 'shots'), { recursive: true });
fs.mkdirSync(path.join(outDir, 'units'), { recursive: true });

// 상대휘도·대비 (WCAG)
function relLum(hex) {
  const m = /^#?([0-9a-f]{6})$/i.exec(hex); if (!m) return null;
  const n = parseInt(m[1], 16); const s = [(n >> 16) & 255, (n >> 8) & 255, n & 255].map((v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); });
  return 0.2126 * s[0] + 0.7152 * s[1] + 0.0722 * s[2];
}
function rgbToHex(rgb) {
  const m = /rgba?\(([^)]+)\)/.exec(rgb); if (!m) return null;
  const p = m[1].split(',').map((x) => parseFloat(x));
  if (p.length >= 4 && p[3] === 0) return null; // 투명 제외
  return '#' + p.slice(0, 3).map((v) => Math.round(v).toString(16).padStart(2, '0')).join('');
}

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 });
  let ok = true, err = null;
  try {
    await page.goto(url, { waitUntil: 'networkidle', timeout: 35000 });
    await page.waitForTimeout(2200);
  } catch (e) { err = String(e).slice(0, 120); try { await page.waitForTimeout(1500); } catch {} }

  // above-fold + full
  try { await page.screenshot({ path: path.join(outDir, 'shots', `${id}-fold.png`) }); } catch {}
  try { await page.screenshot({ path: path.join(outDir, 'shots', `${id}.png`), fullPage: true }); } catch { ok = false; }

  const metrics = await page.evaluate(() => {
    const els = [...document.querySelectorAll('body *')].slice(0, 4000);
    const fs = {}, sp = {}, fam = {}, textColors = {}, bgColors = {}, maxw = {};
    let bodyBg = getComputedStyle(document.body).backgroundColor;
    for (const el of els) {
      const s = getComputedStyle(el); const r = el.getBoundingClientRect();
      if (r.width < 2 || r.height < 2) continue;
      const hasText = el.childNodes && [...el.childNodes].some((n) => n.nodeType === 3 && n.textContent.trim());
      if (hasText) { const f = Math.round(parseFloat(s.fontSize)); if (f) fs[f] = (fs[f] || 0) + 1; const ff = s.fontFamily.split(',')[0].replace(/["']/g, '').trim(); if (ff) fam[ff] = (fam[ff] || 0) + 1; if (s.color) textColors[s.color] = (textColors[s.color] || 0) + 1; }
      ['marginTop', 'marginBottom', 'paddingTop', 'paddingBottom', 'rowGap', 'columnGap'].forEach((k) => { const v = Math.round(parseFloat(s[k])); if (v > 0) sp[v] = (sp[v] || 0) + 1; });
      if (s.backgroundColor && s.backgroundColor !== 'rgba(0, 0, 0, 0)') bgColors[s.backgroundColor] = (bgColors[s.backgroundColor] || 0) + 1;
      const mw = parseFloat(s.maxWidth); if (mw && mw < 2000 && r.width > 400) maxw[Math.round(mw)] = (maxw[Math.round(mw)] || 0) + 1;
    }
    const top = (o, n) => Object.entries(o).map(([k, v]) => [k, v]).sort((x, y) => y[1] - x[1]).slice(0, n);
    return { fs: top(fs, 14), sp: top(sp, 16), fam: top(fam, 4), textColors: top(textColors, 8), bgColors: top(bgColors, 6), maxw: top(maxw, 4), bodyBg };
  }).catch(() => null);

  await browser.close();

  // contract 도출
  let contract = null;
  if (metrics) {
    const fontSizes = metrics.fs.map(([k]) => +k).sort((a, b) => a - b);
    const spacing = metrics.sp.map(([k]) => +k).sort((a, b) => a - b);
    // 타입 비율 추정: 인접 큰 값 비율의 중앙값
    const big = fontSizes.filter((x) => x >= 14);
    const ratios = []; for (let i = 1; i < big.length; i++) if (big[i - 1] > 0) ratios.push(big[i] / big[i - 1]);
    ratios.sort((a, b) => a - b); const medRatio = ratios.length ? +ratios[Math.floor(ratios.length / 2)].toFixed(3) : null;
    const textHexes = metrics.textColors.map(([c]) => rgbToHex(c)).filter(Boolean);
    const bgHexes = metrics.bgColors.map(([c]) => rgbToHex(c)).filter(Boolean);
    contract = {
      typeScale_px: fontSizes, typeRatio: medRatio,
      spacingLadder_px: spacing,
      fontRoles: metrics.fam.map(([k]) => k),
      palette: { textColors: textHexes, bgColors: bgHexes, bodyBg: rgbToHex(metrics.bodyBg) },
      measure_px: metrics.maxw.map(([k]) => +k),
    };
  }

  const unit = {
    id, cellHints: { section, tell_candidates: ['unscaled-spacing-ladder', 'unscaled-type-hierarchy', 'decorative-semantic-color', 'undisciplined-grid'] },
    styleTag: tag,
    contract,
    evidence: { screenshot: `shots/${id}.png`, fold: `shots/${id}-fold.png`, sourceUrl: url, license: 'public-observed' },
    captureOk: ok && !!metrics, error: err,
  };
  fs.writeFileSync(path.join(outDir, 'units', `${id}.json`), JSON.stringify(unit, null, 2));
  console.log(`${ok && metrics ? 'OK ' : 'PART'} ${id} <${tag}> ${url}`);
  if (contract) console.log(`   type ${contract.typeScale_px.length}종 r≈${contract.typeRatio} · spacing ${contract.spacingLadder_px.length}종 · fam ${contract.fontRoles.join('/')} · measure ${contract.measure_px.join(',')}`);
})();
