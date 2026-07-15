# slop-toolkit-test

`slopslap` 스킬을 **격리해서 테스트**하는 독립 프로젝트. 대상 화면(스택 불문)의 AI-slop 을 문답 없이 병렬-점검 파이프라인으로 걷어낸다.

## 구조

```
.claude/skills/slopslap/
  SKILL.md                          # 파이프라인 지휘 (얇은 오케스트레이터)
  references/inspection-areas.md    # 영역별 점검·집행 규칙 SSOT + findings 스키마(check 술어)
scripts/
  scan-slop-signals.mjs             # 택소노미 detect 신호 스캐너 (js/ts/css/html/vue/svelte/astro)
  build-findings-report.mjs         # findings-*.md → 자기완결 HTML 리포트 (로컬 서버 링크)
src/data/
  aiSlopTaxonomyData.js             # AI-slop 택소노미 SSOT (버전·항목 수는 파일 헤더 changelog)
```

## 파이프라인 (6단계)

| 단계 | 내용 |
|---|---|
| **0. 선행 판정 (1회)** | 콘텐츠 상수화(반복 시리즈 배열 식별) + BOLD 게이트(투박한 스타일 ∧ 저밀도) → 플래그로 하류 전달 |
| **1. 병렬 정적 점검** | 5개 영역(A 오버라인 · B 레이아웃·컨테이너·폭 · C 간격 · D 타이포 · E 색) 동시 → `findings-<X>.md`, 각 항목에 `check` 술어 |
| **2. 리포트** | findings 합본 HTML + `http://localhost:<포트>/report/` 로컬 링크 |
| **3. 순차 집행** | A→B→C→D→E 순서, 집행자가 `check` 를 소스 실측 → 미충족만 수정 (커밋 단위) |
| **4. 병렬 재점검** | 같은 `check` 재실측 → 누락 시 그 영역만 재집행 |
| **5. 렌더 1회** | before/after 헤드리스 캡처로 체감 확인 |

## 설치

**Claude Code plugin (배포 후):**
```
/plugin marketplace add groovelb/slopslap
/plugin install slopslap@groovelb-slop
```
**로컬 개발:** 이 폴더에서 Claude Code 를 열면 `/slopslap` 스킬이 자동 등록된다.

배포 절차·경로 치환(`${CLAUDE_PLUGIN_ROOT}`)은 **[DEPLOY.md](DEPLOY.md)** 참조.

## 사용법

- 점검+수정: `"이 화면 슬롭 점검하고 고쳐"` 또는 `/slopslap <대상 경로>` → 파이프라인 실행
- 스캐너 단독: `node scripts/scan-slop-signals.mjs <경로> --json`
- 점검 대상은 임의 경로(정적 HTML+CSS / Next·MUI / Tailwind / Vue 등)를 지정한다. **점검 예제는 이 레포에 두지 않는다** — 격리 작업본에서 돌린다.

## 핵심 원칙 (검증 포인트)

- **컨텍스트 용량 드롭 방지**: 한 에이전트가 전 규칙을 들면 묻힌 규칙이 조용히 누락된다(실증) → 영역별 서브에이전트 격리 + findings 파일 외부화 + 지휘자는 오케스트레이션만.
- **점검표 = 평가 함수**: findings 항목은 "완료" 상태를 적지 않고 소스에서 참/거짓 실측할 `check` 술어를 가진다. 집행·재점검이 매번 소스에서 계산 → "완료" 오기록에 속아 스킵하는 실패 차단.
- **상류 단일 판정**: 콘텐츠 상수화·BOLD 게이트는 0단계에서 1회, 하류 영역은 플래그만 소비(판단 중복·불일치 방지).
- **값은 도출**: 고정 px 금지. 간격은 대상서 도출한 base × 고정 배수, 폭은 단일 measure 토큰(하모닉 배수).
- **BOLD 게이트**: 투박한 스타일 어휘(두꺼운 border·hard-shadow·flat 원색·초대형 볼드) ∧ 저밀도(관대 — AI 는 불필요하게 고밀도로 채우므로)일 때만 요소·간격을 과감히 ↑. 아니면 순수 슬롭 제거. 매크로 여백 무차별 확대 금지(죽은 void).
- **리덕티브**: 재설계가 아니라 삭제 > 축소 > 교체. 카피·정보·순서 불가침. 원본 파일 미변경(격리 작업본에서 수정).
- **문제 층위 분리 진단**: 누락이 생기면 규칙 → 점검표(check) → 집행 → 렌더 4층위로 갈라 어디서 터졌는지 확정한다.

## 주의

- 스킬은 이 프로젝트에 귀속(전역 등록 아님).
- 점검은 정적 계산(playwright 없이), 브라우저는 5단계 렌더에서만.
