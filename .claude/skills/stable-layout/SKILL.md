---
name: stable-layout
description: 안정된 레이아웃을 설계하는 스킬. 페이지·섹션·대시보드·폼·컴포넌트의 레이아웃 골격을 잡을 때, 레이아웃 택소노미(src/data/layoutTaxonomyData.js)를 지식 베이스로 삼아 전역 공간 모델 판정(사이트가 fluid/fixed/hybrid 인지, 전역 반응형 원칙) → 콘텐츠 목차화·상수화(표현할 텍스트·이미지 인벤토리, contentSignals 도출) → 아키타입 선택 → 영역 정책 → 공간 포화 → reflow → 컴포넌트 매핑 → 안정성 체크 순서로 진행하고, 넘침(overflow)·레이아웃 시프트(CLS)·유휴 구멍·불균형 같은 불안정을 차단한다. 사용자가 "레이아웃 잡아줘", "이 화면 레이아웃 설계", "안정적인 레이아웃", "레이아웃이 깨진다/넘친다", "반응형 레이아웃 구성", "콘텐츠 정리부터 레이아웃까지", "/layout" 이라고 하거나 새 화면·섹션의 골격을 짤 때 반드시 사용한다.
---

# Stable Layout

페이지·섹션·컴포넌트의 레이아웃 골격을 **안정되게**(넘침·시프트·구멍·불균형 없이) 잡는다. 패턴을 즉흥으로 고르지 않는다. **콘텐츠가 레이아웃의 단서다**: 표현할 콘텐츠를 먼저 체계화하고, 그 위계와 특성에서 레이아웃을 도출한다. **레이아웃 택소노미를 지식 베이스로** 패턴을 고르고, 안정성 원리로 검증한다.

## 지식 베이스

- 데이터(SSOT): `src/data/layoutTaxonomyData.js` (6 Parts · 23 Cat · 139 패턴).
- 에이전트가 읽기 좋은 형태: 페이지의 `.md` 다운로드(taxonomyMarkdown) 또는 데이터 직접 파싱.
- 각 패턴(item)의 핵심 필드:
  - `id` 고유 식별자 / `name`·`koName`·`aliases`(의도 매칭)
  - `sizing` 공간 모델 (fluid·fixed·hybrid) / `reflow` 좁은 화면 거동 (Stack·Reorder·Reflow-Heavy)
  - `contentSignals` 콘텐츠 매칭 신호 { text, media, repeat, hierarchy } (Part 3·4 아키타입 한정, `references/content-inventory.md` 참조)
  - `bestFor` 적합 의도 / `avoidFor` 부적합 맥락(오선택 방지)
  - `build` 구체 CSS 토큰 / `relatedComponents` 함께 쓰는 컴포넌트(designTaxonomy)
  - `goodWith`·`avoidWith` 조합 가이드 / `previewSpec` 구조 스케치
- **안정성 원리**는 Part 1 카테고리 `Space Model & Stability`(id 들: fluid-layout, fixed-layout, hybrid-layout, space-saturation, region-sizing-policy, balanced-fill, overflow-containment, intrinsic-sizing, cls-prevention, stacking-discipline)에 모여 있다. 이게 "안정"의 기준이다.

## 결정 절차 (이 순서로)

구조(벤토·홀리그레일)를 먼저 고르지 않는다. 전역 공간 모델과 콘텐츠가 먼저다.

### Phase 0. 전역 공간 모델 판정 (사이트 단위, 최초 1회)

개별 화면 이전에 **이 웹사이트 전체가 fluid / fixed / hybrid 중 무엇인지** 판정한다. 이미 판정된 사이트에서 화면을 추가하는 작업이면 기존 전역 원칙을 확인만 하고 넘어간다.

판정 기준표:

| 신호 | 판정 기울기 |
|---|---|
| 읽기·서사 중심 (아티클, 마케팅, 포트폴리오), 줄길이·정렬 통제가 우선 | fixed 중심 |
| 데이터·도구 중심 (대시보드, 피드, 관리 화면), 대화면 활용이 우선 | fluid 중심 |
| 앱 셸(내비·사이드바) + 콘텐츠 혼재, 서비스형 제품 | hybrid (실무 대부분) |
| 타깃 기기 스펙트럼이 넓다 (모바일~와이드) | fluid 성분 강화, clamp 정책 필수 |
| 인쇄·문서 지향, 브랜드 정밀 조판 | fixed 성분 강화 |

산출물 = **전역 반응형 원칙** (이후 모든 화면·타이포가 상속):
1. **컨테이너 정책**: 본문 max-width 값(예 65ch·1200px), 풀블리드 허용 대역(히어로·미디어만 등)
2. **브레이크포인트 세트**: 몇 개, 어느 값, 무엇이 바뀌는가
3. **스케일 정책**: 타이포·간격이 브레이크포인트 고정 단계인지 clamp 유동인지
4. **영역 정책 기본값**: 고정 영역(내비 px)과 유동 영역(본문 fr)의 기본 배분

### Phase 1. 콘텐츠 목차화·상수화 (화면 단위)

레이아웃을 고르기 전에 **표현할 콘텐츠(텍스트·이미지)를 먼저 체계화**한다. 절차와 스키마는 `references/content-inventory.md` 를 따른다.

1. **목차화**: 화면을 콘텐츠 블록 단위로 쪼개 purpose / priority / text(volume·roles) / media(kind·weight) / repeat 를 기술한다.
2. **상수화**: 인벤토리를 콘텐츠 상수 파일에 고정한다(이 프로젝트는 `src/data/contents.js`, 텍스트 원본은 `verbalIdentity.js`). 컴포넌트 하드코딩 금지.
3. **contentSignals 도출**: 인벤토리를 4축 신호 { text, media, repeat, hierarchy } 로 요약한다.

콘텐츠가 아직 없으면 이 단계에서 사용자에게 묻거나 분량 범위를 가정으로 명시한다. 콘텐츠 없이 고른 레이아웃은 근거가 없다.

### Phase 2. 화면 설계 (기존 절차)

1. **화면 공간 모델 확인.** 전역 판정(Phase 0)을 상속한다. 화면 성격상 예외가 필요하면(예: fixed 사이트 안의 대시보드) 사유를 명시하고 예외 처리. → `fluid-layout`/`fixed-layout`/`hybrid-layout` 참조.
2. **아키타입 선택.** Phase 1 의 contentSignals 로 Part 3(페이지)·Part 4(섹션) 후보를 필터하고(4축 중 3축 이상 일치가 1차 후보), `bestFor` 로 정성 매칭, `avoidFor` 로 거른다. 같은 `sizing` 으로 필터하면 후보가 더 좁혀진다.
3. **영역 정책 배정 (region-sizing-policy).** 어떤 영역을 고정(nav·sidebar = px), 어떤 영역을 유동(본문 = 1fr)으로 둘지 콘텐츠 정책으로 정한다. 전부 fr 로 깔거나 전부 px 로 박지 않는다.
4. **공간 포화 (space-saturation + balanced-fill).** 영역이 프레임을 채우게 해 유휴 구멍·휑한 하단을 없앤다. 한쪽만 뻥 뚫린 불균형을 피한다. 단 의도된 네거티브 스페이스는 예외.
5. **reflow 거동 확정.** 좁은 화면에서 Stack(쌓기)/Reorder(순서 변경)/Reflow-Heavy(재구성) 중 무엇인지 패턴의 `reflow`를 따른다. 인벤토리의 repeat 범위·텍스트 최대 분량이 reflow 검증 입력이다. (Part 5)
6. **컴포넌트 매핑.** 패턴의 `relatedComponents`로 실제 컴포넌트를 연결하고, `build` 토큰으로 CSS를 짠다.
7. **안정성 체크 (아래 체크리스트 통과).**

### 타이포그래피 연동

Phase 1 인벤토리의 `text.roles` 집합이 그 화면의 타입 스케일 요구 사양이다. 타이포 결정(역할 티어 사이징, measure, leading)은 `src/data/typographyTaxonomyData.js` Part 3(Display/Headline/Title/Body/Label)을 지식 베이스로 이 role 집합에서 도출하고, 스케일 정책(고정 단계 vs clamp)은 Phase 0 전역 원칙을 상속한다. 브리지 매핑은 `references/content-inventory.md` 4절.

## 안정성 체크리스트 (완료 전 필수)

레이아웃을 "됐다"고 하기 전에 전부 확인한다. 이게 "안정"의 정의다.

- [ ] **넘침 차단 (overflow-containment):** flex/grid 자식에 `min-width: 0`(또는 `min-height:0`)을 줬는가. 긴 텍스트·URL·이미지가 칸을 밀어내 가로 스크롤을 만들지 않는가. 필요 시 `overflow`·`text-overflow:ellipsis`·`overflow-wrap`.
- [ ] **내재 크기 (intrinsic-sizing):** 고정 px 대신 `minmax()`·`fit-content`·`min/max-content`로 영역이 콘텐츠에 안전하게 적응하는가.
- [ ] **시프트 방지 (cls-prevention):** 이미지·임베드·동적 콘텐츠에 `aspect-ratio` 또는 width/height·min-height 로 공간을 미리 예약했는가. 늦게 로드돼도 자리가 안 밀리는가. 인벤토리에 적은 미디어 종횡비가 그 예약값이다.
- [ ] **스태킹 규율 (stacking-discipline):** z-index 를 즉흥값(999999) 대신 스케일로 관리하고, 겹침엔 `isolation`을 썼는가.
- [ ] **포화·균형:** 유휴 구멍이 없고, 영역 무게가 한쪽으로 쏠리지 않는가.
- [ ] **공간 모델 일관:** 화면의 fixed/fluid 배분이 전역 원칙(Phase 0)과 일치하거나, 예외 사유가 명시돼 있는가.
- [ ] **reflow 검증:** 좁은 화면에서 패턴의 reflow 대로 무너지는가(DOM 순서·접근성 주의). 인벤토리의 최대 분량·최대 반복 수에서도 깨지지 않는가.
- [ ] **콘텐츠 상수 분리:** 화면 텍스트·이미지가 상수 파일에서 오는가(컴포넌트 하드코딩 없음).

## 사용 메모

- 의도가 모호하면 Phase 1 인벤토리부터 잡는다. 인벤토리를 만들 수 없을 만큼 정보가 없으면 `bestFor`/`aliases`로 후보를 찾아 사용자에게 1~2개 질문.
- 조합 시 `avoidWith`(충돌)를 확인한다(예: Bento + Brutalism 회피).
- 이 스킬은 레이아웃 **골격·정책**을 정한다. 비주얼 스타일·토큰은 design-system 룰을, 컴포넌트 생성은 component-work 스킬을 따른다.
- 택소노미 자체를 추가·보강하는 작업은 `layout-preview-build` 스킬과 `layout-preview-qa` 서브에이전트를 쓴다(이 스킬은 택소노미를 *소비*만 한다).

## 핵심 원칙

- 전역 공간 모델(사이트가 fluid/fixed/hybrid 인지)이 모든 레이아웃 결정의 최상위 꼭지점이다.
- 콘텐츠가 레이아웃의 단서다. 표현할 콘텐츠를 목차화·상수화하기 전에 패턴을 고르지 않는다.
- 패턴은 contentSignals 로 좁히고 `bestFor`로 고르고 `avoidFor`로 거른다. 즉흥 선택 금지.
- 모든 레이아웃은 안정성 체크리스트를 통과해야 완료다. min-width:0 누락이 불안정 1순위다.
- 유휴 구멍·불균형을 남기지 않는다(의도된 여백은 예외).
