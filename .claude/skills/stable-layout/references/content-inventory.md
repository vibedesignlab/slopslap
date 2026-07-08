# Content Inventory (콘텐츠 목차화·상수화)

레이아웃을 고르기 전에 "무엇을 표현하는가"를 먼저 데이터로 고정하는 단계. 콘텐츠의 위계와 특성이 레이아웃 구성의 단서다. 이 문서는 (1) 목차화 스키마, (2) 상수화 컨벤션, (3) contentSignals 도출 규칙, (4) 타이포그래피 브리지를 정의한다.

## 1. 목차화 스키마 (블록 인벤토리)

화면을 콘텐츠 블록 단위로 쪼개 아래 필드로 기술한다. 블록 = 하나의 의미 단위(히어로 메시지, 기능 목록, 후기 묶음 등).

```js
{
  id: 'hero',                    // 블록 식별자 (kebab)
  purpose: '첫 화면에서 핵심 가치 전달',  // 이 블록이 하는 일 한 줄
  priority: 1,                   // 위계. 1이 최상위. 같은 층이면 같은 숫자
  text: {
    volume: 'micro',             // none | micro(라벨·한 줄) | short(2~5문장) | long(본문 장문)
    roles: ['display', 'body'],  // 이 블록에 등장하는 텍스트 역할 티어 (4절 참조)
  },
  media: {
    kind: 'image',               // none | image | video | chart | icon
    weight: 'dominant',          // none | accent(보조 장식) | balanced(텍스트와 대등) | dominant(미디어 주도)
  },
  repeat: 1,                     // 같은 꼴 반복 수. 반복 없으면 1, 가변이면 예상 범위 [min, max]
}
```

규칙:
- 블록의 실제 텍스트·이미지 경로는 인벤토리에 함께 담아 상수화한다(2절). 구조와 내용이 한 곳에 있어야 레이아웃 근거가 추적된다.
- priority 는 "먼저 보여야 하는 순서"가 아니라 "중요도 층". 시선 순서는 Part 2(시선·가독 흐름) 패턴이 정한다.
- 분량이 미확정이면 최소·최대 범위로 적는다. 범위가 곧 reflow·overflow 설계 입력이 된다.

## 2. 상수화 컨벤션

이 프로젝트(VDL)에서는:
- 텍스트 원본: `src/data/verbalIdentity.js` (브랜드 메시지 SSOT). 임의 텍스트 작성 금지(ux-architecture 룰).
- 화면별 상수: `src/data/contents.js` 의 `PAGES.<page>` 아래에 인벤토리 구조 그대로 상수화한다. 컴포넌트는 이 상수를 import 만 하고 하드코딩하지 않는다.
- 이미지·미디어는 경로 상수 + 종횡비를 함께 적는다(CLS 예약 입력).

다른 프로젝트에 적용할 때는 `src/data/contents/<page>.js` 단위 파일로 분리해도 좋다. 원칙은 같다: 콘텐츠(내용)와 레이아웃(코드)의 물리적 분리, 블록 구조의 명시.

## 3. contentSignals 도출 (인벤토리 → 패턴 매칭)

화면 전체 인벤토리를 4축 신호로 요약한다. 이 신호가 `layoutTaxonomyData.js` Part 3(페이지)·Part 4(섹션) 항목의 `contentSignals` 필드와 매칭된다.

| 축 | 값 | 도출 규칙 |
|---|---|---|
| `text` | none / micro / short / long / mixed | 화면을 지배하는 텍스트 볼륨. 양극이 공존하면 mixed |
| `media` | none / accent / balanced / dominant | 블록 media.weight 의 화면 단위 종합 |
| `repeat` | single / few / many | 최대 반복 블록 수. 0~1 = single, 2~6 = few, 7+ = many |
| `hierarchy` | flat / two-tier / deep | priority 층 수. 1층 = flat, 2층 = two-tier, 3층 이상 = deep |

매칭 절차:
1. 화면 신호 4축을 도출한다.
2. Part 3(페이지 전체) 또는 Part 4(섹션 단위)에서 contentSignals 가 일치·근접한 후보를 필터한다. 4축 중 3축 이상 일치가 1차 후보.
3. 후보를 `bestFor` 로 정성 매칭하고 `avoidFor` 로 거른다.
4. 후보의 `sizing` 이 전역 공간 모델 판정(SKILL.md Phase 0)과 충돌하면, 충돌 사유를 명시하고 화면 단위 예외인지 판단한다.

예시:
- "이미지 수십 장 + 캡션 한 줄, 위계 없음" → { text: micro, media: dominant, repeat: many, hierarchy: flat } → masonry-gallery / justified-gallery
- "장문 본문 + 이미지 몇 장, 제목-본문 2층" → { text: long, media: accent, repeat: single, hierarchy: two-tier } → article-longread
- "지표 위젯 12개, 라벨 수준 텍스트" → { text: micro, media: accent, repeat: many, hierarchy: flat } → dashboard-grid

## 4. 타이포그래피 브리지

인벤토리의 `text.roles` 는 `src/data/typographyTaxonomyData.js` Part 3(역할·위계 시스템)의 역할 티어와 1:1 로 만난다.

| 인벤토리 role | 타이포 역할 티어 | 용도 |
|---|---|---|
| display | Display | 히어로 초대형 문구 |
| headline | Headline | 섹션 제목 |
| title | Title | 카드·블록 제목 |
| body | Body | 본문 |
| label | Label | 버튼·캡션·메타 |

- 화면의 role 집합이 곧 그 화면의 타입 스케일 요구 사양이다. 인벤토리가 끝나면 타이포 결정(사이즈 페어, measure, leading)은 이 role 집합을 입력으로 typography 택소노미에서 도출한다.
- 전역 스케일 정책(고정 단계 vs clamp 유동)은 SKILL.md Phase 0 의 전역 반응형 원칙을 상속한다. 화면마다 새로 정하지 않는다.
