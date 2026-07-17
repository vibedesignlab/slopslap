# README Visual Asset Plan

대상: `slopslap`
참조 브랜드: `/Users/ddd/Desktop/vibe-design-lab-v2/vibe-design-starter-kit-1.0-next`

## 1. 방향

현재 README 자산은 크림 배경, 노란 강조, 굵은 블랙 라인, 만화식 타격 그래픽을 쓴다. Vibe Design Lab 브랜딩 기준으로는 톤이 너무 캠페인성이고, 스킬의 핵심인 "검증 가능한 평가 함수", "영역 분리", "정적 파이프라인"이 충분히 보이지 않는다.

새 README 자산은 다음 방향으로 재설계한다.

- 다크 퍼스트: `violetGray` 계열의 거의 검은 배경을 기본으로 한다.
- 무채색 위계: 유채색 강조를 최소화하고 명도 차이로 구조를 만든다.
- 모노라인 기술 도식: 얇은 선, 낮은 대비, 모노스페이스 어노테이션을 쓴다.
- 아이소메트릭 시스템: VDL의 `System Over Drawing`, `The Vibe Standard`, `Design As Build` 계열처럼 레이어, 슬롯, 모듈, 측정선을 시각 언어로 삼는다.
- 스킬 설명 중심: "Slap"의 제스처보다 "check predicate", "findings file", "orchestrator", "parallel agents", "reference snap"이 먼저 읽혀야 한다.

README는 마케팅 랜딩이 아니라 스킬 사용 문서다. 그래서 비주얼은 큰 감정 표현보다 구조 이해를 돕는 기술 다이어그램 역할을 해야 한다.

## 2. 브랜드 토큰

Codex의 built-in 이미지 모델로 README용 래스터 자산을 생성한다. 색상은 프롬프트에 명확한 팔레트로 지정하고, 최종 파일은 PNG 또는 WebP로 저장한다. 이미지 모델은 작은 텍스트 재현이 불안정하므로 다이어그램 내부 텍스트는 최소화하고, 정확한 설명은 README 본문과 이미지 캡션이 맡는다.

| 역할 | VDL 토큰 | 이미지 생성 팔레트 | 용도 |
|---|---|---:|---|
| Background | `violetGray[950]` | `#050406` | 전체 캔버스 |
| Surface | `violetGray[900]` | `#0b090f` | 코드 패널, 모듈 면 |
| Surface 2 | `violetGray[800]` | `#16131d` | 보조 블록 |
| Border strong | `violetGray[200]` | `#d7d0e8` | 히어로 요소 1개 |
| Border default | `violetGray[600]` | `#625d6b` | 기본 구조선 |
| Border subtle | `violetGray[700]` | `#3c3747` | 비활성 구조선 |
| Text primary | `violetGray[100]` | `#eee9f8` | 제목 |
| Text secondary | `violetGray[400]` | `#aaa2b8` | 보조 설명 |
| Text tertiary | `violetGray[600]` | `#625d6b` | 마이크로 라벨 |
| Pass accent | Success | `#72d68c` | 작은 PASS 상태만 |
| Fail accent | Error | `#ef6a66` | 작은 FAIL 상태만 |

이미지 안 텍스트 규칙:

- 큰 라벨만 허용: `SLOPSLAP`, `CHECK`, `A-E`, `REPORT`, `VERIFY`, `RENDER` 정도.
- 작은 파일명, 긴 명령어, 한국어 설명은 이미지 안에 넣지 않는다.
- 코드처럼 보여야 하는 부분은 실제 읽어야 하는 텍스트가 아니라 짧은 glyph/line 패턴으로 처리한다.
- 정확한 설치 명령, 파일명, 단계 설명은 README Markdown 텍스트로 쓴다.

금지:

- 기존 `#FFD400`, `#FAF7F0` 팔레트 재사용 금지.
- 큰 별burst, 폭발선, 만화 의성어 금지.
- 과한 그라디언트, 오브, 글로우 배경 금지.
- "crime" 중심의 선정적 표현은 README 본문 소제목에서 낮춘다.

## 3. README 정보 구조

권장 순서:

1. Hero - 스킬의 한 줄 정체성과 핵심 구조
2. Skill Anatomy - 스킬 파일 구조와 책임 분리
3. Inspection Areas - A-E 점검 영역
4. Runtime Pipeline - 실제 실행 과정
5. Findings As Eval Function - 이 스킬의 차별점
6. Reference Snap - 값이 어디서 오는지
7. Usage - 설치와 실행
8. Principles - 핵심 계약

본문 톤:

- "Slap the slop out"은 슬로건으로 남기되, 시각 중심 문구는 "Measured de-slop pipeline", "Findings are predicates", "Parallel inspection, ordered execution" 쪽으로 옮긴다.
- 한국어 설명은 유지하되, 다이어그램 내부 라벨은 짧은 영어와 코드형 라벨 중심으로 쓴다.

## 4. 자산 목록

### 4.1 `docs/assets/readme/hero-system.png`

역할: README 첫 이미지.

메시지: `slopslap`은 감으로 UI를 고치는 도구가 아니라, findings/check를 중심으로 돌아가는 측정 파이프라인이다.

시각 메타포:

- 패턴: 기반/원칙 + 모듈/구성 혼합
- 구성: 중앙의 얇은 오케스트레이터 레이어, 주변의 A-E 에이전트 모듈, 하단의 findings ledger, 우측의 render output
- 히어로 요소: 중앙 `CHECK PREDICATE CORE`
- 프리미티브: 납작한 prism/card 계열 1종으로 통일
- 캔버스: 1280 x 520 또는 2x 비율 생성 후 다운샘플

화면 구성:

- 좌상단: 큰 `SLOPSLAP` 라벨. 작은 설명 텍스트는 README 본문으로 분리
- 중앙: 아이소메트릭 코어 모듈
- 주변: `A overline`, `B layout`, `C spacing`, `D type`, `E color` 슬롯
- 하단: ledger strip과 체크 상태를 상징하는 짧은 마크. 긴 파일명은 이미지 밖 캡션으로 분리
- 우측: 작은 before/after 두 프레임

### 4.2 `docs/assets/readme/skill-anatomy.png`

역할: Repo structure / Skill structure 섹션.

메시지: 메인 `SKILL.md`는 얇은 지휘자이고, 규칙과 데이터는 외부 파일로 분리된다.

시각 메타포:

- 패턴: 모듈/구성
- 구성: 중앙 `SKILL.md orchestrator`, 왼쪽 `references`, 오른쪽 `scripts`, 아래 `src/data`, 위 `report output`
- 히어로 요소: `SKILL.md`
- 캔버스: 1280 x 560

표현:

- 각 모듈은 아이소메트릭 블록.
- 모듈 사이 연결선에는 파일 역할만 짧게 붙인다. 실제 파일명은 README 표로 보조한다.
- `references/inspection-areas.md`는 가장 밝은 보조 모듈로 처리한다.

### 4.3 `docs/assets/readme/inspection-areas.png`

역할: The Crimes 섹션 대체 또는 개편.

메시지: "5 crimes"가 아니라 "5 inspection areas"다. 각 영역은 독립 점검자와 독립 findings 파일을 가진다.

시각 메타포:

- 패턴: The Vibe Standard 슬롯 레지스트리
- 구성: 세로형/우측면 슬롯 5개
- 히어로 요소: `B layout/container` 또는 전체 `AREA REGISTRY`
- 캔버스: 1280 x 360

영역 라벨:

- A `overline`
- B `layout / container`
- C `spacing`
- D `typography`
- E `color`

각 슬롯에 포함할 정보:

- `AGENT`
- `FINDING`
- `CHECK`
- 작은 상태 점 1개

### 4.4 `docs/assets/readme/runtime-pipeline.png`

역할: The Trial 섹션.

메시지: 점검은 병렬, 집행은 순차, 재점검은 다시 병렬, 렌더는 마지막 1회.

시각 메타포:

- 패턴: 속도/모멘텀 + 순환/반복
- 구성: 좌에서 우로 흐르는 0-5 단계, 1단계와 4단계만 A-E가 병렬로 펼쳐짐
- 히어로 요소: `findings ledger`
- 캔버스: 1280 x 620

단계:

0. `gate`
1. `parallel inspect`
2. `report`
3. `ordered enforce`
4. `parallel verify`
5. `render once`

실패 루프:

- `verify fail -> enforce area only`는 가는 빨간 보조선으로만 표시한다.

### 4.5 `docs/assets/readme/eval-function.png`

역할: The Difference 섹션.

메시지: findings는 todo가 아니라 매번 소스에서 계산하는 평가 함수다.

시각 메타포:

- 패턴: 대비/전환
- 구성: 좌측 `todo claim`, 우측 `predicate measurement`
- 히어로 요소: 우측 `check()` 코드 패널
- 캔버스: 1280 x 420

좌측:

- 어두운 낮은 대비 카드
- `DONE` 텍스트가 있어도 신뢰하지 않는 구조

우측:

- `FINDING`
- `CHECK()`
- `MEASURE`
- `PASS/FAIL`
- `PATCH`

### 4.6 `docs/assets/readme/reference-snap.png`

역할: The Reference 섹션.

메시지: 교체형 값은 지어내지 않고 taxonomy-id로 정량 레퍼런스에 snap한다.

시각 메타포:

- 패턴: 수렴/통합
- 구성: 왼쪽 `taxonomy-id`, 중앙 `referenceData.js`, 오른쪽 `snap targets`
- 히어로 요소: 중앙 `referenceData.js`
- 캔버스: 1280 x 420

표현:

- Tailwind spacing, Radix colors, WCAG contrast를 작은 소스 칩으로 둔다.
- "copy/layout not borrowed"를 얇은 금지 라벨로 표시한다.

### 4.7 `docs/assets/readme/usage-strip.png`

역할: Install / Usage 섹션.

메시지: 세 줄 설치, 한 줄 실행, 로컬 리포트 확인.

시각 메타포:

- 패턴: 대각선 캐스케이드
- 구성: 4개 터미널 카드가 계단식으로 이어짐. 실제 명령어는 이미지 안에 넣지 않고 README 코드블록으로 둔다.
- 히어로 요소: `/slopslap`
- 캔버스: 1280 x 360

단계:

1. `ADD`
2. `INSTALL`
3. `RUN`
4. `REPORT`

## 5. Codex 렌더링 방식

권장 방식은 Codex built-in `image_gen`을 사용한 래스터 이미지 생성이다. 이 문서의 프롬프트는 이미지 모델이 구조와 분위기를 만들도록 설계하고, 정확한 텍스트 정보는 README의 Markdown 표·코드블록·캡션으로 보강한다.

### 5.1 출력 구조

```
docs/assets/readme/
  hero-system.png
  skill-anatomy.png
  inspection-areas.png
  runtime-pipeline.png
  eval-function.png
  reference-snap.png
  usage-strip.png
```

선택 사항:

```
docs/assets/readme/candidates/
  hero-system-v1.png
  hero-system-v2.png
  ...
```

여러 후보를 만들면 `candidates/`에 보존하고, README가 참조할 최종본만 상위 폴더에 복사한다.

### 5.2 구현 원칙

- built-in `image_gen`을 기본 경로로 쓴다. CLI/API fallback은 쓰지 않는다.
- 각 자산은 하나의 독립 프롬프트로 생성한다. 서로 다른 자산을 한 번에 묶지 않는다.
- 이미지 모델이 텍스트를 틀릴 수 있으므로 긴 문장, 파일 경로, 명령어를 이미지 안에 넣지 않는다.
- 다이어그램처럼 보이되 실제 정보 전달은 큰 구조, 슬롯, 방향, 상태 마크로 한다.
- 히어로 요소는 자산당 정확히 1개만 가장 밝은 stroke/edge light를 갖게 지시한다.
- 생성 후 프로젝트 자산으로 쓸 이미지는 `$CODEX_HOME/generated_images/...`에 방치하지 않고 `docs/assets/readme/`로 옮긴다.
- 최종 파일은 PNG를 우선하고, 용량 최적화가 필요하면 WebP를 추가 생성한다.

### 5.3 검증

생성 후 Codex가 실행할 체크:

```bash
file docs/assets/readme/*.{png,webp}
rg '#FFD400|#FAF7F0|SLAP!' README.md docs/readme-visual-asset-plan.md
```

브라우저 확인이 가능하면 README 또는 임시 HTML에 이미지를 넣고 1280px, 768px 폭 스크린샷을 확인한다. 지나친 저대비, 흐릿한 구조, 잘못 생성된 텍스트, VDL 톤 이탈을 본다.

## 6. Prompt Templates

아래 템플릿은 Codex에게 그대로 줄 수 있게 작성한다. 변수만 바꿔 사용한다.

### 6.1 Master Prompt

```text
현재 레포는 slopslap 스킬 프로젝트다.
참조 브랜딩은 /Users/ddd/Desktop/vibe-design-lab-v2/vibe-design-starter-kit-1.0-next 이다.

목표:
README용 래스터 이미지 자산을 Codex built-in image_gen으로 제작한다.
기존 docs/assets 의 크림/노랑/만화식 slap 톤은 폐기하고,
다크 퍼스트, violet-gray, 얇은 모노라인, 아이소메트릭 시스템 다이어그램 톤으로 바꾼다.

먼저 읽을 파일:
- README.md
- .claude/skills/slopslap/SKILL.md
- docs/readme-visual-asset-plan.md
- 참조 프로젝트의 src/styles/themes/default.js
- 참조 프로젝트의 src/styles/themes/presentation.js
- 참조 프로젝트의 src/assets/brandIllustration/VibeStandardIso.jsx
- 참조 프로젝트의 src/assets/brandIllustration/SystemOverDrawingIso.jsx
- 참조 프로젝트의 src/assets/brandIllustration/DesignAsBuildIso.jsx

출력:
- built-in image_gen으로 자산별 후보 이미지 생성
- 최종 선택본을 docs/assets/readme/{asset_name}.png 로 이동
- README.md 이미지 경로 업데이트

시각 규칙:
- 배경 #050406, 표면 #0b090f, 기본선 #625d6b, 보조선 #3c3747, 히어로선 #d7d0e8.
- 유채색은 PASS/FAIL 같은 작은 상태 라벨에만 제한적으로 쓴다.
- 기존 #FFD400, #FAF7F0, starburst, SLAP 의성어를 쓰지 않는다.
- 이미지 안의 텍스트는 큰 영문 라벨 1-3단어로 제한한다.
- 긴 파일 경로, 명령어, 한국어 문장은 README 본문으로 빼고 이미지에는 넣지 않는다.
- 이미지 모델이 임의의 가짜 텍스트를 만들지 않도록 "no tiny text, no fake UI copy"를 명시한다.

검증:
- 생성 이미지를 열어 VDL 톤, 텍스트 오류, 과한 장식, 낮은 대비를 확인한다.
- README에서 이미지 경로가 PNG/WebP를 참조하는지 확인한다.
```

### 6.2 Hero Asset Prompt

```text
Use case: infographic-diagram
Asset type: README hero image
Output target: docs/assets/readme/hero-system.png

Primary request:
slopslap은 감으로 때려 고치는 도구가 아니라, check predicate core를 중심으로
영역별 에이전트와 findings ledger가 연결되는 deterministic de-slop pipeline이다.

Scene/backdrop:
dark-first Vibe Design Lab technical illustration on near-black violet-gray background (#050406), no cream, no yellow.

Subject:
an isometric system diagram with one central luminous core module, five smaller surrounding modules labeled only A, B, C, D, E, a ledger strip beneath it, and a small before/after UI frame pair on the right.

Style/medium:
high-resolution raster infographic, thin monoline isometric technical diagram, Linear-like precision, VDL dark-first violet-gray palette, subtle depth shadows, no cartoon energy.

Composition/framing:
wide 1280x520 banner, large negative space, central check core is the only bright hero element, five modules orbit it in a measured layout, readable at README width.

Color palette:
#050406 background, #0b090f surfaces, #625d6b default lines, #3c3747 subtle lines, #d7d0e8 only for the central hero edge, tiny green/red only for status dots.

Text (verbatim, large labels only):
"SLOPSLAP", "CHECK", "A", "B", "C", "D", "E"

Constraints:
minimize text; no tiny text; no fake file paths; no fake code; no Korean text inside image; no logos; no watermark.

Avoid:
yellow, cream, starburst, comic slap mark, big exclamation effects, gradient orb backgrounds, stock illustration style.
```

### 6.3 Skill Anatomy Prompt

```text
Use case: infographic-diagram
Asset type: README architecture image
Output target: docs/assets/readme/skill-anatomy.png

Primary request:
SKILL.md는 얇은 orchestrator이고, 상세 규칙/스크립트/데이터는 외부 파일로 분리된다.

Scene/backdrop:
near-black VDL technical canvas, dark violet-gray surfaces, no warm paper background.

Subject:
an isometric modular architecture map: one central orchestrator block, left cluster for rules, right cluster for scripts, bottom cluster for data, top output tray for reports and verification artifacts.

Style/medium:
high-end raster technical diagram, thin monoline, precise isometric block cluster, subdued VDL palette, subtle shadows.

Composition/framing:
1280x560, central hero block is brightest, surrounding clusters are dimmer, connection lines show responsibility flow not dependency spaghetti.

Text (verbatim, large labels only):
"SKILL", "RULES", "SCRIPTS", "DATA", "REPORT"

Constraints:
do not render full file paths; no tiny labels; no fake code; keep the image mostly structural and readable.

Avoid:
yellow, cream, cartoon marks, busy network graph, glowing neon, fake terminal screenshots.
```

### 6.4 Inspection Areas Prompt

```text
Use case: infographic-diagram
Asset type: README inspection taxonomy image
Output target: docs/assets/readme/inspection-areas.png

Primary request:
5 crimes가 아니라 5 inspection areas다.
각 영역은 독립 agent, 독립 findings file, 독립 check predicate를 가진다.

Scene/backdrop:
dark VDL registry interface, violet-gray only.

Subject:
one isometric registry slab with five identical slots, each slot marked A, B, C, D, E, with small symbolic marks for agent, finding, and static check.

Style/medium:
clean raster infographic, VDL The Vibe Standard style, slot registry, thin monoline, dark-first, precise spacing.

Composition/framing:
1280x360, horizontal or slightly isometric registry, five equally sized slots, one subtle hero highlight around the full registry title or B slot.

Text (verbatim, large labels only):
"AREAS", "A", "B", "C", "D", "E"

Constraints:
no word "crime"; no long labels; no tiny fake text; communicate through repeated slot structure and icons/marks.

Avoid:
yellow, red warning cards, police/crime metaphors, playful sticker style.
```

### 6.5 Runtime Pipeline Prompt

```text
Use case: infographic-diagram
Asset type: README process image
Output target: docs/assets/readme/runtime-pipeline.png

Primary request:
slopslap runtime은 gate -> parallel inspect -> report -> ordered enforce -> parallel verify -> render once다.

Scene/backdrop:
dark VDL process board, violet-gray monoline system diagram.

Subject:
a left-to-right pipeline with six main stations: gate, parallel inspection fan-out, report ledger, ordered enforcement stack, parallel verification fan-out, final render preview. The report ledger is the brightest hero station.

Style/medium:
high-resolution raster process diagram, thin isometric cards, measured technical aesthetic, subtle depth and clean connectors.

Composition/framing:
1280x620, fan-out/fan-in structures are visually obvious, ordered enforcement appears as an A-B-C-D-E vertical stack, one thin fail loop line returns from verify to enforce.

Text (verbatim, large labels only):
"GATE", "INSPECT", "REPORT", "ENFORCE", "VERIFY", "RENDER"

Constraints:
no long step descriptions in the image; no small file names; no fake code; keep all modules legible at README width.

Avoid:
bright neon pipeline, colorful SaaS diagram, yellow warning palette, cartoon arrows.
```

### 6.6 Eval Function Prompt

```text
Use case: infographic-diagram
Asset type: README comparison image
Output target: docs/assets/readme/eval-function.png

Primary request:
findings는 todo list가 아니라 eval function이다.
"done" 텍스트는 신뢰하지 않고, check predicate를 매번 소스에서 계산한다.

Scene/backdrop:
dark technical comparison board, VDL violet-gray palette.

Subject:
side-by-side comparison: left dim panel represents claim-based todo completion, right bright hero panel represents predicate-based measurement. The right panel has abstract code-line marks, measurement ticks, and PASS/FAIL status dots.

Style/medium:
high-resolution raster infographic, sharp dark UI panels, monoline measurement marks, precise technical mood.

Composition/framing:
1280x420, left panel is intentionally dim and unreliable, right panel is brighter and structured, small center divider, right panel is the only hero element.

Text (verbatim, large labels only):
"TODO", "CHECK()", "MEASURE", "PASS", "FAIL"

Constraints:
do not render actual code blocks or long text; use abstract code-line marks instead; keep PASS/FAIL tiny and legible.

Avoid:
large red X, loud warning design, yellow highlights, fake terminal logs, unreadable microtext.
```

### 6.7 Reference Snap Prompt

```text
Use case: infographic-diagram
Asset type: README reference system image
Output target: docs/assets/readme/reference-snap.png

Primary request:
replacement tell은 임의값이 아니라 taxonomy-id로 referenceData.js에 조인되고,
Tailwind spacing, Radix colors, WCAG contrast 같은 정량 기준에 snap된다.

Scene/backdrop:
dark VDL reference matrix diagram, violet-gray technical surfaces.

Subject:
convergence diagram: left input chips flow into a central reference matrix module, right output chips show spacing ladder, color ramp, contrast threshold, and measure token. A small "values only" lock mark appears beneath.

Style/medium:
high-resolution raster infographic, isometric matrix slab, thin connectors, dark-first VDL palette.

Composition/framing:
1280x420, central matrix is the only bright hero module, left-to-center-to-right flow, clean negative space.

Text (verbatim, large labels only):
"ID", "MATRIX", "SNAP", "VALUES"

Constraints:
no brand logos; no full product names if they become tiny; no fake code; no long disclaimer text inside image.

Avoid:
colorful rainbow palette, stock database icon, neon grid, yellow accent.
```

### 6.8 Usage Strip Prompt

```text
Use case: infographic-diagram
Asset type: README usage flow image
Output target: docs/assets/readme/usage-strip.png

Primary request:
사용은 설치 2줄, 실행 1줄, 로컬 리포트 확인으로 끝난다.

Scene/backdrop:
dark VDL terminal-flow illustration, violet-gray palette.

Subject:
four stepped terminal-like cards in a diagonal cascade: add, install, run, report. The RUN card is the only bright hero card. Actual commands are represented as short abstract lines, not readable text.

Style/medium:
high-resolution raster infographic, isometric terminal cards, thin monoline, measured dark UI aesthetic.

Composition/framing:
1280x360, diagonal cascade with four cards, generous margins, final report card has a tiny browser frame symbol.

Text (verbatim, large labels only):
"ADD", "INSTALL", "RUN", "REPORT"

Constraints:
do not include exact commands in image; commands must remain in README code block; no fake terminal microtext.

Avoid:
green-on-black hacker terminal, yellow highlights, colorful icons, clutter.
```

### 6.9 QA Prompt

```text
생성된 README 래스터 자산을 검토하고 필요한 경우 다시 생성하라.

체크:
- 기존 노랑/크림/만화 slap 톤이 남아 있지 않은가?
- VDL dark-first, violet-gray, monoline, isometric system tone과 맞는가?
- 각 자산의 hero element가 정확히 1개인가?
- 이미지 안에 틀린 텍스트, 가짜 파일명, 읽을 수 없는 microtext가 생기지 않았는가?
- README 폭에서 구조가 흐릿하지 않고 이해되는가?
- process, skill structure, inspection areas, usage가 서로 중복되지 않고 각자 다른 정보를 설명하는가?
- README 본문 이미지 순서가 사용자의 이해 순서와 맞는가?

필요하면 해당 자산만 targeted prompt로 다시 생성하고, 최종 선택본을 docs/assets/readme/*.png 로 옮긴 뒤 README 이미지 경로를 업데이트하라.
```

## 7. README 교체 매핑

현재:

```md
![slopslap](docs/assets/hero.svg)
![the 5 crimes](docs/assets/five-sins.svg)
![pipeline](docs/assets/pipeline.svg)
![findings = eval function](docs/assets/eval-function.svg)
```

권장:

```md
![slopslap system diagram](docs/assets/readme/hero-system.png)
![inspection areas](docs/assets/readme/inspection-areas.png)
![runtime pipeline](docs/assets/readme/runtime-pipeline.png)
![findings as eval function](docs/assets/readme/eval-function.png)
![reference snap](docs/assets/readme/reference-snap.png)
![usage flow](docs/assets/readme/usage-strip.png)
```

Repo structure `<details>` 앞에는 `skill-anatomy.png`를 배치한다.

## 8. 우선순위

1. `hero-system.png`
2. `runtime-pipeline.png`
3. `eval-function.png`
4. `inspection-areas.png`
5. `skill-anatomy.png`
6. `reference-snap.png`
7. `usage-strip.png`

README가 너무 길어지면 1-4만 본문에 넣고, 5-7은 접힌 섹션에 넣는다.
