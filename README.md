# slop-toolkit-test

`slop-auditor`(점검 에이전트) + `slop-fix`(수정 스킬)를 **격리해서 테스트**하는 독립 프로젝트. 원본 레포(vibe-design-starter-kit)와 무관하게 자체 완결로 돈다. 모든 경로는 이 프로젝트 기준 상대경로.

## 구조

```
.claude/
  agents/slop-auditor.md            # 점검 에이전트 (read-only. 기본: 계층 진단 브리프 / strict: 전체 리포트)
  agents/blueprint-author.md        # strict 모드 전용 블라인드 기준선 작성자
  agents/prescription-fidelity-verifier.md  # strict 모드 전용 처방 충실도 검증자
  skills/slop-fix/SKILL.md          # 수정 스킬 (계층별 사용자 문답: 콘텐츠(심문·트리·상수화) → 레이아웃 → 타이포 → 컬러)
  skills/stable-layout/             # 레이아웃 판단 참조
scripts/
  scan-slop-signals.mjs             # 택소노미 detect 신호 스캐너 (js/ts/css/html/vue/svelte/astro)
  scan-layer-signals.mjs            # 구조 층 신호 스캐너 (js 전용, 위생 패스)
src/data/
  aiSlopTaxonomyData.js             # SSOT (버전·항목 수는 파일 헤더 changelog 가 원본)
  layoutTaxonomyData.js             # 레이아웃 아키타입 판단용
templates/
  audit-report.template.html        # strict 모드 리포트 템플릿
test-targets/
  aprilpm-clone/                    # 샘플 점검 대상 (정적 HTML+CSS)
```

## 테스트 방법

### 1. 스캐너 단독 (기계 패스만)
```bash
node scripts/scan-slop-signals.mjs test-targets/aprilpm-clone
node scripts/scan-layer-signals.mjs test-targets/aprilpm-clone
```

### 2. 에이전트로 점검 (Claude Code)
이 폴더에서 Claude Code를 열면 `slop-auditor` 에이전트와 `/slop-fix` 스킬이 자동 등록된다.
- 점검만: "test-targets/aprilpm-clone 슬롭 점검해" -> slop-auditor 가 계층 1→2→3→4 브리프(`brief-all.md`)를 낸다
- 점검+수정: "/slop-fix" -> 계층별 문답 플로우 (콘텐츠 확정(심문·목차 트리·상수화) → 레이아웃 확정 → 타이포 확정 → 컬러 확정, 계층마다 stage 파일 상수화 + 성공 확인)
- 무인 전체 리포트·파이프라인 검증: strict 모드 명시 디스패치 (SKILL.md 별첨 A)

새 점검 대상을 넣으려면 `test-targets/` 에 사이트를 복사한다.

## 기대 동작 (검증 포인트)

- 기본 흐름이 **계층 순서(콘텐츠 → 레이아웃 → 타이포 → 컬러)의 사용자 문답**으로 진행되고, 확정값이 `stage<N>-*.md` 로 상수화되는가
- 계층 1 이 **심문(애매 카피의 해석 확인) + 목차 트리**를 산출하고, 하류가 트리 밖 섹션을 발명하지 않는가 (섹션 통합·삭제는 상류 개정 제안으로 올라오는가)
- **계층 진단 보고서가 문답보다 먼저** 오는가 (로드맵 위치·총평·축 표·문제+증거·전략 프레임 - 보고서 없이 질문 직행 = 위반)
- 문답이 **전략 승인 → 축 캐스케이드 → 파생**으로 진행되고, 모든 질문에 위치 태그 + 상류 확정 인용 + "이 답이 결정하는 것"이 붙는가
- 재설계 허용 회차에서 **위반 증거가 표본 2~3개로 프루닝**되고 전수 실측이 회귀 단계로 이연되는가 (결정 입력 수치는 여전히 실측)
- 브리프의 수치가 **리터럴 실측(file:line)과 판독(`판독:` 표기)으로 구분**되어 있는가
- 처방이 **재설계 > 삭제 > 축소 > 교체** 사다리로, 삭제를 과감히 제안하는가
- 각 계층 적용 후 **성공 확인이 기록**되는가 (계층 1 = 트리 승인, 계층 2~4 = before/after 3초 테스트)
- px->rem 같은 **코드 위생은 부록으로 강등**되고 헤드라인을 차지하지 않는가 (행간·자간·그루핑은 위생이 아님)
- 카피 공식·기믹·템플릿 게슈탈트를 **코드 신호보다 우선**으로 잡는가

## 주의

- 에이전트/스킬은 이 프로젝트에 귀속(전역 등록 아님). 다른 데서 안 뜬다.
- 스캐너 기본 대상은 `app/` + `src/components` 이므로, 외부 타깃은 경로를 명시해 실행한다.
