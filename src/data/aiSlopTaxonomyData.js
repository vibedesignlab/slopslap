/**
 * Vibe Dictionary: AI-slop Taxonomy 데이터
 * (현재 버전·항목 수의 원본은 아래 changelog 최상단 항목이다 - 이 제목 줄에 버전을 다시 쓰지 않는다)
 *
 * 8 Parts · 14 Categories · 100 Keywords
 * v1.1 (2026-07 다중예제 라운드1, CSS 모듈화 축 신설): 1항목 추가(inline-css-no-modularization, P3 Grid & Sizing),
 *   99 -> 100. 신규 축: CSS 모듈화(design refactoring). 인라인/임베디드 <style> 다수 + 외부 CSS 모듈 부재 + :root 토큰
 *   미집약 = 유지보수·디자인 시스템 부재의 코드 서명. 처방은 외부 모듈 4분할(reset/tokens/layout/components)과
 *   토큰 집약. 이 텔은 다른 시각 텔과 달리 "화면이 달라 보여야" 기준의 예외다(위생 인접) - 렌더가 동일해도 정당한
 *   디자인 시스템 리팩토링이라, slop-fix 계층2 준비 단계 또는 별도 리팩토링 스텝으로 집행하고 회귀는 렌더 패리티로
 *   잡는다(일반 Top·3초 예 로 승격 금지). meaningless-container-nesting(DOM 층)과 짝: 이 항목은 CSS 파일 층.
 *   강화 1건: unbalanced-void-after-deletion 의 빈 셀 조건을 삭제 유발형에서 "트랙이 콘텐츠 수보다 많은 빈 그리드셀"
 *   일반형으로 확장(삭제 없이도 균등 그리드가 실제 콘텐츠보다 칸을 많이 잡아 남는 빈 칸·필러 칸 포함). 좌편향·내부
 *   void·넘버링 오버라인·mesh/글로우·균등 그리드의 반복 실패는 기존 텔(left-skewed-uncomposed·unbalanced-void-
 *   after-deletion·numbered-overline-fetish·mesh-aurora-background·everywhere-glow·undisciplined-grid·default-
 *   equal-thirds)로 이미 커버되어 신규 중복 텔을 만들지 않았다(overfit·중복 방지, 메모리 slopfix-blindspots 준수).
 * v1.0 (2026-07 양의 레이아웃 구성 축, surf-tutorial 사이클1 교훈): 3항목 추가(unbalanced-void-after-deletion ·
 *   left-skewed-uncomposed · default-equal-thirds, 전부 P3 Grid & Sizing), 96 -> 99. 근본 교정: 도구가 reductive
 *   삭제(radius·네스팅·좌border·목업 제거)는 하는데 positive layout composition(양의 레이아웃 구성) 능력이 없어,
 *   요소를 빼면 빈 구멍(히어로 우측 void)을 남기고 재구성·균형을 안 잡았다. 시니어 UI 디자이너는 "삭제된 깨끗함"
 *   이 아니라 "의도적으로 구성된 균형" 을 본다. 원칙 명문화: 삭제는 구성의 시작이지 끝이 아니다 - 요소 제거 후
 *   남는 공간은 반드시 재구성한다(재중앙·재비율·재그루핑·재정렬). 단 재구성 != 장식 추가(오브·그라디언트·새 카드
 *   금지), 기존 콘텐츠의 재배치만. 세 항목의 escapeNote 가 이 재구성 원칙을 항목별로 싣는다. "깨끗하게 비었다" 를
 *   통과로 인정하지 않는 것이 이 축의 핵심 계약이다.
 * v0.9 (2026-07 surf-tutorial 회차, 4계층 사각지대 인코딩): 2항목 추가(unscaled-radius-scale ·
 *   meaningless-container-nesting, 둘 다 P3 Grid & Sizing), 94 -> 96. 강화 2건: undisciplined-grid
 *   (미러 교대 5:7·7:5 는 섹션 간 관통선이 아니라 눈속임 - "미러 = 수정 완료" 자기인증 금지 명문화),
 *   colored-left-border-cards(좌border 패턴 자체가 티 - 처방은 삭제, 재색은 회피. 도구가 줄 색만 교체로
 *   빠져나간 실패 명기). 교훈: radius 를 "위생 = 슬롭 아님" 으로 0초 검사 제외하던 것을 타이포·간격과 동급의
 *   스케일 규율 대상으로 승격(6·8·10·12·14·999px 무근거 혼재 = 텔). 빈 래퍼(레이아웃 기여 0, CSS 셀렉터
 *   없는 유령 div)를 excessive-card-nesting(시각 카드 포장 과잉)과 구분되는 유령 래퍼 텔로 신설.
 * v0.2: 전 항목 id 부여 + previewSpec(Slop vs Escape 시연)·escapeNote 필드 신설.
 * v0.8.1 (2026-07 도출>회피 + 이미지 물리 불변식, deslop-v2 회차 교훈): 항목 수 불변(94), note 3건 강화.
 *   교훈 2건: (a) 음화 사전이 생성 단계(블루프린트)에서 금지 목록으로 오작동 - 인장·현판 브랜드의 중앙 대칭
 *   히어로(세계관 도출값)를 centered-hero 회피 반사로 비대칭으로 뒤집음. 규칙: 텔 = 무결정의 디폴트이지 금지
 *   형태가 아니다. 회피만을 근거로 한 구도 결정은 무효, 콘텐츠-양성 근거 필수(centered-hero-default 도출 예외 명문).
 *   (b) 정량 계약에 물리 불변식 부재 - "60%W" 목표가 600px 원본의 141% 업스케일로 성실 이행됨. 규칙: 렌더 폭 <=
 *   원본 natural 폭, 이미지 목표는 트랙 %W + 렌더 px 2수치 분리, fluid = 전 캔버스 분할이지 콘텐츠 스트레치 아님
 *   (undersized-dense-imagery·layout-type-misfit note 병기). 불가능한 목표는 이행하지 말고 충돌 보고.
 * v0.8 (2026-07 블라인드 블루프린트 파이프라인): 1항목 추가(undersized-dense-imagery, P3), 93 -> 94.
 *   구조 전환: 음화 사전 단독(얼룩 스캔)에서 "블라인드 기준선 대조(diff)" 로. 판정자가 비교 기준점을 그 자리에서
 *   자기 작성하는 것이 전 실패(수제 알리바이·프록시 자기통과·크롬 처방·무지개 시그니처·읽기모드 순환 선언)의
 *   공통 뿌리다. 기준선(baseline.md)은 실물을 본 적 없는 blueprint-author 가 콘텐츠 인벤토리에서만 도출하고,
 *   점검은 실물 vs 기준선의 축별 거리를 잰다. 이 사전의 역할 3분화: ① 거리의 명명 어휘 ② 블루프린트 자체의
 *   슬롭 검사(기준선이 또 하나의 중앙값이 되는 것 차단) ③ 코드 신호 스캐너.
 *   판정 규율 강화: 도출 판정은 이진(예/아니오)만 - "예(약)" 류 회색 판정 발명 금지, 타 레이어 전가는 "추가로"만
 *   허용(대체 불가). 컨셉 선언은 무드+대상+경험 동사 3요소 필수. 읽기 모드 판정에 현 화면·현 레이아웃 인용
 *   금지(순환 차단) - 콘텐츠 신호 수치(동질 오퍼 수 N<=5+설득+전환=몰입 / N>=8 비교=탐색 / 장문=선형)로만.
 *   스토리보드 목표는 수치(뷰포트당 아이디어 수 · 핵심 이미지 렌더 %W) 의무, "저밀도" 류 정성 목표 무효.
 * v0.7 (2026-07 컨셉-표현 도출 검사 + 재설계 처방, thegot 회차 교훈): 2항목 추가, 91 -> 93.
 *   decorative-semantic-color(P1) / layout-type-misfit(P3). 핵심 교정: 프레임워크가 "틀린 결정" 과 "안 한 결정" 을
 *   구별하지 못해, 무지개 컬러코딩을 개성 시그니처 +1 로 세어 메타 텔을 억제한 것이 thegot 오판의 뿌리.
 *   최상단 검사 신설: 화면의 컨셉을 한 문장으로 역산 선언하고 색 체계·레이아웃 타입(읽기 모드)·섹션 리듬이
 *   그 선언에서 도출되는지 검사한다. 도출 불가 결정 = foundation 텔(개성적이어도 슬롭, 장치 텔보다 상위).
 *   처방은 검출이 아니라 산출물: 재설계 처방표(시맨틱 팔레트 표 + 섹션 스토리보드 표) 의무 - "색을 지워라" 가
 *   아니라 체계로 다시 칠하고, "타입을 바꿔라" 가 아니라 읽기 모드에서 타입을 도출한다(fluid 반사 디폴트화 금지).
 * v0.6.2 (2026-07 절대 크기·스케일 규칙): 3항목 추가, 88 -> 91. oversized-display-type / unscaled-type-hierarchy
 *   (Part 2) + unscaled-spacing-ladder (Part 3). 타이포·간격의 절대 대역과 스케일 도출 의무를 조작정의로 못박음:
 *   측정은 뷰포트 1440px 계산값 기준, 타이포는 base(body) x r(1.2~1.5) 단일 비 환원(오차 +-5%), 간격은 4/8 베이스
 *   래더 + 티어(각 >= 1.5x). 처방은 개별 값 수정이 아니라 스케일 선언에서 전 역할·전 티어 도출 - 선언 없는 값
 *   나열 처방표는 무효. 대역·임계는 기본값이며 콘텐츠 근거 시 사유 기록 후 조정(눈대중 금지).
 * v0.6.1 (2026-07 레이아웃 최상류 + 타이포 1급화): 2항목 추가, 86 -> 88. Part 3 에 undecided-layout-type /
 *   unpartitioned-space. 핵심 인과 명문화: 여백은 애써 조절하는 값이 아니라 "전 공간을 레이아웃 타입에 맞는
 *   그리드로 분할하고 콘텐츠를 규칙 기반 배열" 한 뒤의 자연 잔여다. 여백 수치를 직접 늘리고 줄이는 처방은 증상
 *   치료라 금지 - 처방은 분할·배치 규칙에만 가하고 여백은 결과로 검증한다. suffocating-density(과밀)와 양극.
 *   orphan-type-grouping 에 자간·계층 마진 조작정의 병기(타이포 처방표 = 위생 아닌 1급 산출물).
 * v0.6 (2026-07 확장 조사 반영: 제품 내부 UI · 2025H2~2026 신규 · 한국어 로컬): 17항목 추가, 69 -> 86. Categories 12 -> 14.
 *   - Part 4 신규 카테고리 In-App UI Defaults(slop-cat-14): rainbow-status-list / democracy-of-metrics /
 *     placeholder-data-shipped / everything-is-a-modal / missing-states / waiting-room-dashboard /
 *     icon-only-sidebar / meaningless-decorative-chart. 랜딩 중심이던 사전의 "로그인 이후 화면" 커버 공백 해소.
 *   - Part 2 신규 카테고리 Korean Typesetting(slop-cat-13): korean-fallback-font-jump / no-keepall-word-break /
 *     untuned-hangul-spacing / english-type-scale-on-hangul. 전제: 한글 텍스트 존재 시에만 검사(영문 사이트 오탐 금지).
 *   - Part 6 한국어 언어 신호 4종: honorific-level-mismatch / josa-bracket-exposure / direct-translation-ui-labels /
 *     untranslated-ui-terms. Part 5: fake-avatar-stack.
 *   - 승격 1: tasteful-default-cream-serif weak -> strong (StyleSeed "관공서 팸플릿" 즉시 거절 사례, 독립 출처 2+).
 *   - generation 필드(선택) 신설 + escape 역전 규칙: escape 처방 자체가 새 디폴트로 수렴하면(예: centered-hero 의
 *     좌텍스트+우비주얼+pill 2개 구도가 gen-2 정형 "stock DTC composition" 으로 등재됨) 해당 항목 note 에 역전 경고를
 *     병기한다. escape 는 원칙이지 공식이 아니다. gen 태그 항목은 arms race 특성상 리서치 회차마다 재검증·만료 갱신.
 *   - 기각·보류: command-palette-by-reflex(T3 단독) / everything-is-a-card·문맥 없는 raw 숫자(AI 특정성 약) /
 *     도구별 시그니처 단독 항목화(벤더 종속, 기존 항목 note 에 기록만) / Krebs 4+ 임계값(자체 판정 등급과 이중 기준,
 *     캘리브레이션 참고만). 이중 발화 경계 명문화: democracy-of-metrics(지표 위젯 한정) vs suffocating-density(화면 여백).
 * v0.5 (2026-07 검증 렌즈 교정 + 2세대 슬롭 반영): 7항목 추가 + note 강화 2건, 62 -> 69. Categories 11 -> 12.
 *   - 핵심 교정: "1세대 시그니처(보라·Inter·3열 카드) 부재 = AI 아님" 추론은 오판이다. 개성적 스타일 무드
 *     (네오 브루탈리즘·수제 연출·에디토리얼 흉내)가 2세대 디폴트로 수렴했고, 판정의 1순위는 스타일이 아니라
 *     콘텐츠 목차화·상수화 -> 레이아웃 정합성(그리드 규율·정보밀도·타이포 그루핑)이다. 강한 개성 무드는
 *     판정 면죄부가 아니라 오히려 "구조 무결정을 가리는 알리바이" 후보로 더 세게 검사한다.
 *   - Part 1 신규 카테고리 Style Mood Defaults: neo-brutalism-fetish / handmade-affect-alibi
 *   - Part 2 (Type Effects): numbered-overline-fetish / orphan-type-grouping 추가.
 *     italic-serif-accent note 강화(장식 이탤릭 전반), repeated-font-combos note 강화(세리프+산세리프 혼용 조건)
 *   - Part 3 (Grid & Sizing): undisciplined-grid / suffocating-density 추가
 *   - Part 8: styling-before-content-model (audit 0단계 콘텐츠-레이아웃 정합성 검사의 근거 항목)
 *   - v0.5.1 조작정의(operationalize): undisciplined-grid·orphan-type-grouping 의 note 를 측정형으로 강화.
 *     "정렬/그루핑" 을 프록시("모듈로 환원됨")가 아니라 실측 수치(분할선 x %, 내부:사이 간격 비, 역할별 line-height)로
 *     판정·처방하도록 못 박음. 처방 단계(slop-fix)가 정량 목표표를 만들고 그 수치로만 고치며 회귀에서 목표 달성을
 *     실측 대조하는 계층을 강제(정성 처방 → 눈대중 수정 → 프록시 통과의 3중 구멍 차단).
 * v0.4 (2026-07 딥리서치 저널 재반영): 누락 8항목 추가 (floating-gradient-orb, tasteful-default-cream-serif, safe-green-regression, ubiquitous-soft-shadow, monospace-body-aesthetic, canned-saas-skeleton, over-rounded-corners, decorative-status-dots). 54 -> 62.
 * v0.3 (2026-07 딥리서치 21건 확정/4건 기각 기반):
 *   - detect 필드 신설: 실제 코드 점검용 기계 검출 신호. 이 사전을 "읽는 사전"에서 "점검 무기"로 전환.
 *     { kind: 'code'(grep 확정 후보) | 'hybrid'(grep 후보 + 사람 판단) | 'judgment'(판단 전용),
 *       signals: [grep -P 패턴], note: 오탐 경고·시대 민감성·근거 }
 *     원칙: 모든 신호는 가중 플래그이지 판결이 아니다. weak 신호 단독 판정 금지, 클러스터로 승격.
 *   - 신규 3항목: saturated-multicolor-palette(P1) / excessive-card-nesting(P3) / sparkle-ai-branding(P4)
 *   - 강등 1건: mesh-aurora-background (커뮤니티 코퍼스 검증에서 키워드 아티팩트 기각 이력, 단독 판정 금지)
 *   - Part 6 어휘 텔은 모델 세대별 교체(시대 표기 필수). Part 8 은 학술 근거 보강(CHI 2021, arXiv 2603.13036, CHBAH 2025).
 *   - 기각된 근거: 텔 간 빈도 순위 주장들(0-3, 1-2) → severity 가중치 산정에 사용 금지.
 *
 * 목적: AI 에게 디자인을 시켰을 때 사람이 가장 보기 싫어하고 "AI 가 만들었다" 는
 * 신호가 느껴지는 클리셰를 체계적으로 분류하는 음화(negative) 사전.
 * 다른 3개 사전(design·layout·visual)이 "이렇게 해라" 라면, 이 사전은 "이게 왜 티가 나는지" 를
 * 짚고 각 항목의 escape 필드로 "대신 이걸 써라" 를 양화(positive) 사전으로 연결한다.
 *
 * 분류축: 표면 레이어(Part) × 근본 원인(cause 태그). 딥리서치 권고 하이브리드.
 * Part 는 "어디에 드러나는가"(컬러→타이포→레이아웃→컴포넌트→이미지→카피→모션→메타),
 * cause 는 "왜 생기는가" 를 항목마다 태그로 단다.
 *
 * item type 'ai-slop' 필드:
 * - id: 고유 식별자 (kebab). 프리뷰 자산 slug, escape 역참조, QA 기계 검증의 키
 * - name / koName / description (무엇인가)
 * - tell: 무엇이 "AI 티" 신호인가 (식별 포인트)
 * - whyDisliked: 사람이 왜 싫어하는가 (지각·맥락 근거)
 * - severity: 'weak'(단독으로는 약신호, 사람도 흔히 씀) | 'strong'(단독으로도 강신호)
 *   주의: weak 신호도 여러 개가 묶이면 강신호가 된다.
 * - cause: 근본 원인 태그 (CAUSE_TAGS 참조)
 *   'median'(학습데이터 중앙값) | 'underspec'(프롬프트 미명세) |
 *   'no-constraint'(브랜드·제약 부재) | 'no-verify'(구현 후 검증 부재)
 * - escape: 탈출구. 다른 사전의 양화 패턴으로 연결 [{ name, dict }]
 *   dict: 'design' | 'layout' | 'visual' (typography 사전 가동 시 Part 2 는 'typography' 로 재배선 예정)
 * - escapeNote: 연결할 양화 사전이 없는 항목(주로 Part 6 카피)의 한 줄 대체 지침. escape 와 택일
 * - previewSpec: Slop vs Escape 대비 시연. { type: 'beforeAfter', left: { label, spec }, right: { label, spec } }
 *   좌우 spec 은 LayoutPreviewDialog 의 leaf 타입(areas/repeat/split/masonry/prose/stack/swatch/typeSpec/image)을 재귀 렌더.
 *   swatch(컬러 칩+그라디언트 밴드)·typeSpec(라이브 조판)·image(실이미지, Part 5)는 ai-slop 시연용 신설 타입. swatch·image 만 실색상 허용.
 * - aliases: 같은 클리셰의 다른 통용명 (선택)
 * - source: 대표 출처 도메인 (선택)
 * - generation: (선택) 슬롭 세대 태그. 1=보라·Inter·3카드 시그니처, 2=탈출구가 디폴트화된 무드(브루탈리즘·수제·
 *   크림세리프·모노·고스트 인덱스), 3=그 다음 탈출구. escape-hatch 계보라 수명이 짧으므로 gen 태그 항목은
 *   딥리서치 회차마다 재검증한다. 무태그 = 세대 무관(구조·검증 결함형).
 *
 * 출처 등급 주의: 대부분 실무 블로그·커뮤니티(tier C) 관찰이다. 학술 1차 근거는
 * 동질화(homogenization) 담론(Forbes, Oxford JAAC)이 이론적으로 뒷받침할 뿐,
 * 개별 클리셰 명칭은 커뮤니티 합의 수준이다.
 */

export const AI_SLOP_TAXONOMY_STATS = {
  parts: 8,
  categories: 14,
  keywords: 100,
};

export const CAUSE_TAGS = {
  median: { label: '학습데이터 중앙값', description: '제약 없는 프롬프트가 학습 코퍼스의 평균값을 그대로 출력' },
  underspec: { label: '프롬프트 미명세', description: '취향 단어만 던지고 구체 명세를 주지 않아 디폴트로 수렴' },
  'no-constraint': { label: '제약 부재', description: '브랜드·접근성·의도 가드레일이 없어 유행 효과를 무비판 적용' },
  'no-verify': { label: '검증 부재', description: '생성 후 사람이 결과를 점검하지 않아 깨진 위계·죽은 링크가 남음' },
};

export const AI_SLOP_TAXONOMY = [
  // ================================================================
  // Part 1: 컬러 · 표면
  // ================================================================
  {
    id: 'slop-part-1',
    number: 1,
    label: '컬러 · 표면',
    description: '색·그라디언트·재질·스타일 무드에서 가장 먼저 드러나는 AI 시그니처',
    type: 'ai-slop',
    count: 16,
    categories: [
      {
        id: 'slop-cat-1',
        number: 1,
        name: 'Gradient & Color',
        subtitle: '그라디언트·색',
        definition: '특정 색과 그라디언트로 화면을 덮어 마무리한 듯 보이게 하는 클리셰.',
        count: 10,
        groups: [
          {
            label: null,
            items: [
              { id: 'purple-blue-gradient', detect: { kind: 'code', signals: ['linear-gradient(?=[^)]*(#7c3aed|#8b5cf6|#a855f7))(?=[^)]*(#3b82f6|#6366f1|#2563eb))', 'from-(purple|violet|indigo)-'], note: 'shadcn/v0 계열 기본값은 중립 zinc 라 raw Tailwind·무명세 생성물에서 가장 강한 신호. 계보는 Tailwind UI bg-indigo-500 (창시자 승인·미계량, Adam Wathan 2025-08 사과 트윗)' }, previewSpec: { type: 'beforeAfter', left: { label: 'Slop', spec: { type: 'swatch', band: 'linear-gradient(135deg, #7c3aed 0%, #3b82f6 100%)', bandLabel: 'hero gradient', chips: [{ color: '#7c3aed', label: '#7C3AED' }, { color: '#6366f1', label: '#6366F1' }, { color: '#3b82f6', label: '#3B82F6' }] } }, right: { label: 'Escape', spec: { type: 'swatch', chips: [{ color: '#1b1d1f', label: 'Dominant 60%', flex: 6 }, { color: '#4a4f55', label: 'Secondary 30%', flex: 3 }, { color: '#1f9e5a', label: 'Accent 10%', flex: 1 }] } } }, name: 'Purple-Blue Gradient', koName: '보라-파랑 그라디언트', description: '히어로 배경·CTA·오브·텍스트에 보라에서 파랑으로 흐르는 그라디언트가 반복된다.', tell: '구성·위계 고민 없이 그라디언트로 표면을 덮어 "혁신적" 인상을 흉내 낸다.', whyDisliked: '2015~2020 모던 웹의 화석이라 즉시 낡고 무난하게 읽힌다. AI 데모의 비공식 깃발로 굳었다.', severity: 'strong', cause: 'median', aliases: ['AI Purple', 'VibeCode Purple'], escape: [{ name: 'Monochromatic', dict: 'design' }, { name: '60% Dominant', dict: 'design' }], source: 'prg.sh, r/webdev' },
              { id: 'indigo-accent', detect: { kind: 'code', signals: ['#6366f1|#4f46e5|#818cf8', 'bg-indigo-[45]00'], note: '브랜드가 인디고를 의도 채택했으면 신호 아님. 프로젝트 팔레트 밖 하드코딩일 때만 플래그' }, previewSpec: { type: 'beforeAfter', left: { label: 'Slop', spec: { type: 'swatch', chips: [{ color: '#6366f1', label: '버튼' }, { color: '#6366f1', label: '링크' }, { color: '#6366f1', label: '포커스' }, { color: '#6366f1', label: '배지' }] } }, right: { label: 'Escape', spec: { type: 'swatch', chips: [{ color: '#17191b', label: 'Dominant 60%', flex: 6 }, { color: '#5a5f66', label: 'Secondary 30%', flex: 3 }, { color: '#b45309', label: '브랜드 Accent 10%', flex: 1 }] } } }, name: 'Indigo-500 Accent', koName: '인디고 액센트', description: '버튼·링크·포커스 상태가 하나같이 라벤더-인디고 한 톤(#6366f1 류)으로 칠해진다.', tell: 'Tailwind UI 디폴트 bg-indigo-500 이 학습 데이터를 오염시켜 누출된 단일 액센트.', whyDisliked: '브랜드 색을 고른 흔적이 없어 "아무 색도 결정 안 한" 인상을 준다.', severity: 'weak', cause: 'median', aliases: ['bg-indigo-500'], escape: [{ name: '10% Accent', dict: 'design' }, { name: 'Complementary', dict: 'design' }], source: 'adamwathan (X), prg.sh' },
              { id: 'everywhere-glow', detect: { kind: 'hybrid', signals: ['0 0 [2-9][0-9]px', 'drop-shadow'], note: '컬러 글로우 20px+ 가 여러 요소에 반복될 때. 단일 포컬 글로우는 정당. 다크모드와 페어링되는 무목적 글로우가 2026 확인 패턴 (Fountain Institute). v0.6 보강: Krebs 1,590 사이트 deterministic 검사에서 컬러 글로우·vibrant box-shadow 계열 4.3% 트리거. 다크 배경 + 네온 액센트 + 카드 글로우 보더 세트(v0/Cursor 류 시그니처, 벤더 종속이라 세트만 기록)로 결합 출현하면 강신호 승격.' }, previewSpec: { type: 'beforeAfter', left: { label: 'Slop', spec: { type: 'swatch', band: 'radial-gradient(circle at 30% 40%, rgba(124,58,237,0.85), transparent 60%), radial-gradient(circle at 72% 62%, rgba(59,130,246,0.75), transparent 55%)', bandLabel: '모든 요소 뒤 글로우', chips: [{ color: '#7c3aed', label: 'glow' }, { color: '#3b82f6', label: 'glow' }, { color: '#22d3ee', label: 'glow' }] } }, right: { label: 'Escape', spec: { type: 'areas', cols: '1fr 2fr 1fr', rows: '1fr 1.6fr 1fr', areas: ['g g g', '. m .', 'b b b'], labels: { g: '배경 (가라앉힘)', m: '전경 (빛은 한 곳만)', b: '배경' } } } }, name: 'Everywhere Glow', koName: '도처의 컬러 글로우', description: '요소 뒤마다 큰 컬러 글로우와 네온 외곽 발광, 부드러운 box-shadow 가 깔린다.', tell: '깊이를 만드는 대신 글로우로 균일하게 덮어 빛의 의도가 없다.', whyDisliked: '모든 요소가 똑같이 빛나 위계가 사라지고 눈이 피로해진다.', severity: 'weak', cause: 'no-constraint', escape: [{ name: 'Figure-Ground', dict: 'layout' }, { name: 'Z-axis Layering', dict: 'layout' }], source: 'developersdigest' },
              { id: 'iridescent-palette', detect: { kind: 'hybrid', signals: ['#22d3ee|#67e8f9|#a78bfa|#f472b6'], note: '다크 배경 + 고채도 시안·핑크·퍼플 동시 출현 플래그. 위계(도미넌트/액센트) 존재 여부는 판단 필요. v0.6: neon-on-dark 세트의 색 축으로, everywhere-glow(글로우 축)와 동시 출현 시 승격. 디자이너 진술 수집(Krebs 2026)으로 외부 근거 보강.' }, previewSpec: { type: 'beforeAfter', left: { label: 'Slop', spec: { type: 'swatch', chips: [{ color: '#0b0f14', label: '다크 바탕', flex: 3 }, { color: '#22d3ee', label: '네온 시안' }, { color: '#a78bfa', label: '메탈릭 퍼플' }, { color: '#f472b6', label: '무지갯빛 핑크' }] } }, right: { label: 'Escape', spec: { type: 'swatch', chips: [{ color: '#14532d', label: '기준색', flex: 2 }, { color: '#3f6212', label: '인접색 1' }, { color: '#713f12', label: '인접색 2' }] } } }, name: 'Iridescent Computational Palette', koName: '무지갯빛 계산적 팔레트', description: '다크 위 시안·네온 액센트, 무지갯빛·메탈릭 색 관계로 "하이퍼리얼" 표면을 만든다.', tell: '전통 색 조화가 아니라 계산으로 뽑은 듯한 색 관계라 인공적으로 느껴진다.', whyDisliked: '실제 브랜드·콘텐츠 맥락과 무관해 차갑고 공허하게 읽힌다.', severity: 'weak', cause: 'median', escape: [{ name: 'Analogous', dict: 'design' }, { name: 'Split-Complementary', dict: 'design' }], source: 'developersdigest, UX Planet' },
              { id: 'mesh-aurora-background', detect: { kind: 'hybrid', signals: ['radial-gradient[^;]{0,120}radial-gradient', 'blur-3xl'], note: '근거 강등(v0.3): 3.2M Reddit 코퍼스 연구의 자체 적대 검증에서 키워드 아티팩트로 기각된 유일 텔. 단독 판정 금지, everywhere-glow 와 결합 시에만 취급' }, previewSpec: { type: 'beforeAfter', left: { label: 'Slop', spec: { type: 'swatch', band: 'linear-gradient(120deg, #f0abfc 0%, #818cf8 45%, #67e8f9 100%)', bandLabel: '어느 사이트든 같은 오로라 히어로', chips: [{ color: '#f0abfc', label: '#F0ABFC' }, { color: '#818cf8', label: '#818CF8' }, { color: '#67e8f9', label: '#67E8F9' }] } }, right: { label: 'Escape', spec: { type: 'areas', cols: '2fr 1fr 2fr', rows: '2fr 1fr 2fr', areas: ['. . .', '. m .', '. . .'], labels: { m: '콘텐츠가 주인공 (배경 비움)' } } } }, name: 'Mesh/Aurora Background Default', koName: '메시·오로라 배경 디폴트', description: '블러 처리된 컬러 블롭이 흐르는 오로라·메시 그라디언트를 모든 히어로 배경에 쓴다.', tell: '콘텐츠와 무관하게 배경만 화려해 "빈 화면 채우기" 로 읽힌다.', whyDisliked: '같은 배경이 수많은 AI 사이트에 반복돼 개성이 0 이 된다.', severity: 'weak', cause: 'no-constraint', escape: [{ name: 'Negative Space', dict: 'layout' }, { name: 'Swiss / Editorial', dict: 'design' }], source: '925studios' },
              { id: 'saturated-multicolor-palette', detect: { kind: 'hybrid', signals: ['#00d9ff|#ff006e|#39ff14|#ccff00'], note: '고채도 액센트 hue 3개 이상 동시 사용 플래그. 위계 부재 판정은 사람 몫 (Fountain Institute 2026, 3-0 검증)' }, previewSpec: { type: 'beforeAfter', left: { label: 'Slop', spec: { type: 'swatch', chips: [{ color: '#00d9ff', label: '일렉트릭 블루' }, { color: '#ff006e', label: '핫핑크' }, { color: '#39ff14', label: '애시드 그린' }] } }, right: { label: 'Escape', spec: { type: 'swatch', chips: [{ color: '#1b1d1f', label: 'Dominant 60%', flex: 6 }, { color: '#5a5f66', label: 'Secondary 30%', flex: 3 }, { color: '#0e7a4e', label: 'Accent 10%', flex: 1 }] } } }, name: 'Saturated Multicolor Palette', koName: '풀채도 다색 팔레트', description: '일렉트릭 블루, 핫핑크, 애시드 그린 같은 고채도 색 여러 개가 도미넌트·액센트 위계 없이 한 화면에 동시에 깔린다.', tell: '색은 많은데 어느 색도 맡은 역할이 없다. 게이밍·크립토 학습 데이터의 잔향.', whyDisliked: '시선이 갈 곳을 못 정하고, 브랜드 색을 고른 흔적이 없다.', severity: 'weak', cause: 'median', escape: [{ name: '60% Dominant', dict: 'design' }, { name: '10% Accent', dict: 'design' }], source: 'thefountaininstitute.com' },
              { id: 'floating-gradient-orb', detect: { kind: 'hybrid', signals: ['radial-gradient', 'filter: *blur'], note: '히어로 뒤 흐릿한 원형 보라-파랑 오브. blur 처리된 방사형 그라디언트가 배경 장식으로 떠 있으면 후보. 의도적 브랜드 배경은 제외.' }, name: 'Floating Gradient Orb', koName: '떠다니는 그라디언트 오브', description: '히어로 섹션 뒤에 흐릿한 보라-파랑 원형 그라디언트 오브가 둥둥 떠 있다.', tell: '빈 배경을 채우려 blur 오브를 뿌려 "디자인된" 척한다. 구성이 아니라 장식으로 공간을 때운다.', whyDisliked: 'purple-blue 그라디언트의 쌍둥이 신호라 AI 생성물임이 한눈에 읽힌다.', severity: 'weak', cause: 'median', aliases: ['blurred orb', 'violet orb'], escapeNote: '배경 장식을 지우고 여백으로 위계를 만들거나, 실제 콘텐츠(제품 스크린샷·타이포)로 히어로를 채운다.', source: 'deep-research 2026-07 (floating violet gradient orbs behind hero)' },
              { id: 'tasteful-default-cream-serif', generation: 2, detect: { kind: 'judgment', note: '2026 신흥 패턴. 크림/베이지 배경 + 세리프 헤드라인 + 세이지 그린(또는 앰버) 액센트 조합이 "취향 있는 기본값" 으로 굳어 반복. 보라 그라디언트의 반작용. 실제 브랜드 의도면 제외. 승격 근거(v0.6): 전면 세리프 + 베이지가 "designed" 가 아니라 관공서 팸플릿처럼 읽히는 과잉 발현 포함. StyleSeed 저자가 이 조합을 자랑스러운 after 로 출고했다가 즉시 거절당했고 generic 한 before 가 더 나아 보였다고 서술. 진지한 제품에 표현적 display 세리프를 반사적으로 집는 "AI uniform" 지목(solodesign.cc)과 합쳐 독립 출처 2+ 로 단독 강신호 승격.' }, name: 'Cream + Serif + Sage Default', koName: '크림·세리프·세이지 기본값', description: '보라를 피한 대신 크림 배경 + 세리프 제목 + 세이지 그린이 새로운 무난한 기본값으로 반복된다.', tell: '"AI 안 같아 보이려는" 선택 자체가 또 하나의 디폴트가 됐다. 탈-보라가 새 클리셰로 수렴한다.', whyDisliked: '개성처럼 보이지만 2026 생성물 다수가 같은 팔레트로 수렴해 결국 또 다른 평균값이다.', severity: 'strong', cause: 'median', aliases: ['tasteful default', 'sage green trend', 'govt pamphlet look'], escapeNote: '팔레트를 콘텐츠·브랜드 근거에서 도출한다. 유행 조합을 반사적으로 쓰지 말고 대비·역할을 먼저 정한다.', source: 'deep-research 2026-07, StyleSeed 2026-07-02, solodesign.cc' },
              { id: 'safe-green-regression', generation: 2, detect: { kind: 'hybrid', signals: ['#10b981|#059669|#34d399', 'emerald-[45]00|text-emerald|bg-emerald'], note: '보라/인디고를 프롬프트로 금지하면 모델이 기본 에메랄드 그린(Safe Green)으로 회귀. 브랜드가 초록을 의도 채택했으면 제외. 프로젝트 팔레트 밖 에메랄드 지배일 때만 후보.' }, name: 'Safe Green Regression', koName: '세이프 그린 회귀', description: '보라를 금지당한 모델이 이번엔 에메랄드 그린 한 톤으로 회귀해 버튼·액센트를 칠한다.', tell: '한 디폴트를 막으면 다음 디폴트로 옮겨갈 뿐, 색을 결정한 흔적은 여전히 없다.', whyDisliked: '보라 대신 초록일 뿐 "아무 색도 안 고른" 구조는 그대로다.', severity: 'weak', cause: 'median', aliases: ['emerald default', 'safe green'], escapeNote: '금지 목록만 주지 말고 브랜드 근거로 팔레트를 적극 지정한다. 색을 역할(dominant/secondary/accent)로 배분한다.', source: 'deep-research 2026-07 (emerald Safe Green regression after indigo ban)' },
              { id: 'decorative-semantic-color', detect: { kind: 'hybrid', signals: ['(pink|rose|indigo|violet|purple|teal|emerald|amber|cyan)-[0-9]{3}', '#[0-9a-fA-F]{6}'], note: '신호는 후보 수집용(액센트 hue 열거). 판정(측정형): 형제·정성 콘텐츠(서비스 카테고리·특성·항목 나열)에 매핑된 고유 액센트 hue 수를 세고, 컨셉이 실제로 요구하는 기능 역할 수(브랜드 1 + 실재하는 시맨틱 상태 + CTA)와 비교한다. hue 수 > 역할 수면 플래그. 채도·명도는 면죄부가 아니다 - 차분한 다크 팔레트 위의 무지개도 도출 검사는 동일하다(thegot 회차: 다크 위 골드·핑크·인디고·퍼플 4색 카테고리 코딩이 rainbow-status-list(인앱 상태 한정)와 saturated-multicolor-palette(네온 hex 검출)를 둘 다 빠져나간 갭이 이 항목의 존재 이유). 경계: rainbow-status-list 는 인앱 상태 표시, 이 항목은 콘텐츠 카테고리 컬러코딩 전반. 개성 시그니처로 오인 금지 - 컨셉에서 도출 불가한 결정은 개성적이어도 슬롭(foundation 텔). 처방 규칙(구속): "색 N개를 지워라" 금지 - 재설계 처방표의 시맨틱 팔레트 표(역할 -> 색 매핑, 브랜드·CTA·실재 상태만 유채색, 나머지는 중립 톤 스케일)를 산출해 체계로 다시 칠한다.' }, name: 'Decorative Semantic Color', koName: '장식화된 시맨틱 컬러', description: '모든 정성 정보(카테고리·특성·항목)에 서로 다른 색을 입힌다. 색이 의미 체계가 아니라 "구분해 보이려는" 장식이다.', tell: '정보마다 색을 다르게 넣는 전형적 비디자이너 AI 디자인. 컨셉에서 도출되는 색은 한둘인데 화면에는 대여섯 hue 가 산다.', whyDisliked: '진짜 의미(브랜드·상태·행동)가 묻히고, 세계관 시각화 대신 스티커 색칠로 읽힌다.', severity: 'strong', cause: 'no-constraint', aliases: ['qualitative rainbow coding', '정성 정보 무지개'], escape: [{ name: '60% Dominant', dict: 'design' }, { name: '10% Accent', dict: 'design' }], source: '사용자 관찰 2026-07 (thegot 회차: 시맨틱 컬러 일관성)' },
            ],
          },
        ],
      },
      {
        id: 'slop-cat-2',
        number: 2,
        name: 'Surface & Theme',
        subtitle: '재질·테마',
        definition: '반투명 유리·상시 다크모드 같은 표면 처리의 디폴트화.',
        count: 4,
        groups: [
          {
            label: null,
            items: [
              { id: 'glassmorphism-default', detect: { kind: 'code', signals: ['backdrop-filter: *blur|backdropFilter'], note: 'Apple Liquid Glass(2025) 채택으로 선택적 사용은 정당. 표면 전면·무분별 적용일 때만 슬롭 (Creative Boom 2026 피로 트렌드 #3)' }, previewSpec: { type: 'beforeAfter', left: { label: 'Slop', spec: { type: 'swatch', band: 'linear-gradient(135deg, rgba(255,255,255,0.28), rgba(255,255,255,0.06))', bandLabel: '반투명 유리 카드 (가독성 희생)', chips: [{ color: '#7c3aed', label: '비치는 배경' }, { color: '#3b82f6', label: '비치는 배경' }] } }, right: { label: 'Escape', spec: { type: 'split', dir: 'row', ratio: [1, 1], labels: ['Outlined 카드 (명확한 경계)', '본문 (대비 통제)'] } } }, name: 'Glassmorphism Default', koName: '글래스모피즘 디폴트', description: '프로스티드 글라스 반투명 카드를 맥락 없이 기본값으로 깐다.', tell: '2022년 유행이 LLM 디폴트로 굳어, 가독성·맥락 판단 없이 자동 적용된다.', whyDisliked: '텍스트 대비를 깨고 저사양에서 무거우며 유행이 지난 인상을 준다.', severity: 'weak', cause: 'no-constraint', escape: [{ name: 'Swiss / Editorial', dict: 'design' }, { name: 'OutlinedCard', dict: 'design' }], source: 'developersdigest' },
              { id: 'permanent-dark-mode', detect: { kind: 'judgment', note: '다크 자체는 정당. 라이트 대안·시스템 연동(prefers-color-scheme, 토글) 부재가 신호' }, previewSpec: { type: 'beforeAfter', left: { label: 'Slop', spec: { type: 'swatch', chips: [{ color: '#0b0d10', label: '상시 다크', flex: 4 }, { color: '#6b7280', label: '중간 회색 본문', flex: 2 }, { color: '#374151', label: '대문자 라벨', flex: 1 }] } }, right: { label: 'Escape', spec: { type: 'split', dir: 'row', ratio: [1, 0.5, 1], labels: ['다크 상태', '와이프 전환 (View Transitions)', '라이트 상태'] } } }, name: 'Permanent Dark Mode', koName: '상시 다크모드', description: '토글 없이 항상 켜진 다크 테마에 중간 회색 본문, 대문자 라벨을 얹는다.', tell: '"테크스럽게 보이려는" 디폴트라 라이트 대안을 만든 흔적이 없다.', whyDisliked: '강제된 다크는 장문 가독성을 떨어뜨리고 선택권을 뺏는다.', severity: 'weak', cause: 'median', escape: [{ name: 'DarkModeTransition', dict: 'design' }], source: 'developersdigest, r/ClaudeAI' },
              { id: 'low-contrast-body', detect: { kind: 'hybrid', signals: ['color: *(#6b7280|#9ca3af|#71717a|#64748b)'], note: '확정 판정은 본문-배경 대비 4.5:1 미만 계산. grep 은 중간 회색 hex 후보 탐지까지' }, previewSpec: { type: 'beforeAfter', left: { label: 'Slop', spec: { type: 'swatch', chips: [{ color: '#111418', label: '배경', flex: 2 }, { color: '#565d66', label: '본문 (AA 미달)', flex: 2 }] } }, right: { label: 'Escape', spec: { type: 'typeSpec', samples: [{ text: '본문은 AA(4.5:1) 이상으로 둡니다', size: '0.9rem', weight: 400 }, { text: '강조는 명도 낮추기가 아니라 굵기로 만듭니다', size: '0.9rem', weight: 800 }] } } }, name: 'Low-Contrast Body', koName: '저대비 본문', description: '다크 테마에서 본문이 WCAG AA 를 못 넘는 중간 회색으로 깔린다.', tell: '미감 우선으로 명도를 낮춰 접근성 점검을 건너뛴 흔적.', whyDisliked: '실제로 읽기 어려워 사용자를 배제하고, 점검 안 한 티가 명확하다.', severity: 'strong', cause: 'no-verify', escape: [{ name: 'Weight Contrast', dict: 'layout' }], source: 'developersdigest' },
              { id: 'ubiquitous-soft-shadow', detect: { kind: 'code', signals: ['box-shadow:[^;]*rgba', 'shadow-(sm|md|lg|xl)'], note: 'shadcn/Tailwind 의 저투명도 회색 드롭섀도(shadow-lg 등)를 모든 카드·버튼에 무차별 적용. everywhere-glow 가 컬러 발광이라면 이건 무채색 소프트 섀도. 의도적 단일 elevation 체계는 제외. v0.6 경계 명문화: vibrant 컬러 박스섀도 광택은 everywhere-glow 로 판정(무채색=이 항목, 유채색=글로우. Krebs 2026 검출 데이터 근거).' }, name: 'Ubiquitous Soft Shadow', koName: '무차별 소프트 섀도', description: '모든 카드·버튼·인풋에 낮은 투명도 회색 드롭섀도를 똑같이 깔아 elevation 위계가 없다.', tell: 'shadow-lg 같은 프레임워크 기본 그림자를 요소 구분 없이 그대로 둔다.', whyDisliked: '떠 있는 것과 붙어 있는 것의 구분이 사라져 화면이 흐리멍덩해진다.', severity: 'weak', cause: 'median', aliases: ['shadow-lg everywhere', 'default drop shadow'], escapeNote: 'elevation 을 2~3단 토큰으로 정의하고 의미(모달>카드>평면)에 맞게만 쓴다. 대부분 표면은 그림자 대신 경계선/여백으로 구분한다.', source: 'deep-research 2026-07 (low-opacity subtle box shadows)' },
            ],
          },
        ],
      },
      {
        id: 'slop-cat-12',
        number: 12,
        name: 'Style Mood Defaults',
        subtitle: '스타일 무드 디폴트',
        definition: '1세대 슬롭(보라·Inter·3열 카드)을 피하라는 요구에 모델이 반사적으로 수렴하는 2세대 스타일 무드. "개성처럼 보임" 자체가 신호이며, 강한 무드는 판정 면죄부가 아니라 구조 무결정을 가리는 알리바이 후보로 더 세게 검사한다.',
        count: 2,
        groups: [
          {
            label: null,
            items: [
              { id: 'neo-brutalism-fetish', generation: 2, detect: { kind: 'hybrid', signals: ['border: *[2-4]px solid', 'box-shadow: *-?[0-9]+px -?[0-9]+px 0'], note: '하드보더+오프셋 하드섀도+형광 액센트+스티커 요소 세트가 후보. 네오 브루탈리즘 채택 자체는 죄가 아니다. 판정 기준은 규율: 전 섹션의 분할 경계선이 공통 그리드 모듈로 환원되고 칼각 정렬이 지켜지면 정당, 임의 분할·content-fit 방치 위에 무드 부품만 얹혔으면 강신호. 개성적 무드는 판정 면죄부가 아니다.' }, name: 'Neo-Brutalism Fetish', koName: '네오 브루탈리즘 페티시', description: '"에디토리얼하게·힙하게·개성 있게" 요구에 모델이 반사적으로 하드보더·오프셋 섀도·형광 하이라이트·회전 스티커의 네오 브루탈리즘으로 수렴한다.', tell: '스타일은 브루탈리즘인데 규율이 없다. 브루탈리즘의 본질인 칼각 그리드(상단이 1:1이면 아래가 2:1:1이라도 경계선이 맞는 시스템) 없이 무드 부품만 조립돼 있다.', whyDisliked: '2026 생성물 다수가 같은 무드로 수렴해 "개성 흉내" 자체가 새 평균값이 됐다. 규율 없는 브루탈리즘은 아는 사람 눈에 즉시 흉내임이 들킨다.', severity: 'strong', cause: 'median', aliases: ['neubrutalism default', '2세대 디폴트', 'editorial cosplay'], escapeNote: '쓰기로 했으면 브루탈리즘답게: 전역 컬럼 모듈을 먼저 정의하고 모든 섹션 분할의 경계선을 그 모듈 위에서 정렬한다. 규율을 못 지킬 거면 무드를 걷어내는 편이 낫다.', source: '사용자 관찰 2026-07 (LLM neo-brutalism convergence)' },
              { id: 'handmade-affect-alibi', generation: 2, detect: { kind: 'hybrid', signals: ['rotate\\(-?[1-9][0-9]?(\\.[0-9]+)?deg\\)', 'Caveat|Shantell|Gochi|Patrick Hand|handwriting'], note: '회전 워드마크·삐뚤빼뚤 스티커·종이 텍스처·형광펜 밑줄·물리 낙하 애니메이션·손글씨 폰트 중 2개 이상 결합 시 후보. 실제 브랜드 계보(인쇄물·수작업 아이덴티티)가 문서로 확인되면 제외. 이 항목의 존재 이유: "수제 장치가 있으니 AI 아님" 추론을 차단한다.' }, name: 'Handmade-Affect Alibi', koName: '수제 연출 알리바이', description: '회전 워드마크, 종이 질감, 형광펜 하이라이트, 낙하 물리 애니메이션 같은 "손맛 연출"을 뿌려 AI 티를 지우려 한다. 연출은 수제인데 구조는 여전히 무결정이다.', tell: '수제 감성 부품이 콘텐츠 구조·그리드 규율과 무관하게 표면에만 얹혀 있다. 개성 장치의 밀도가 높을수록 오히려 2세대 생성물 신호.', whyDisliked: '"AI 안 같아 보이기" 가 목적인 장치들 자체가 이미 생성물의 공통 문법이 됐다. 장치를 걷어내면 무결정 골격이 그대로 드러난다.', severity: 'strong', cause: 'median', aliases: ['anti-slop slop', 'faux-handmade'], escapeNote: '연출을 늘리지 말고 구조를 결정하라. 콘텐츠 우선순위가 레이아웃에 박힌 뒤에야 수제 장치가 한두 개 액센트로 정당해진다.', source: '사용자 관찰 2026-07 (handmade affect as second-gen signature)' },
            ],
          },
        ],
      },
    ],
  },

  // ================================================================
  // Part 2: 타이포그래피
  // ================================================================
  {
    id: 'slop-part-2',
    number: 2,
    label: '타이포그래피',
    description: '폰트 선택·조합·위계·그루핑에서 드러나는 "고른 적 없음" 의 신호. 한글 조판 신호 포함',
    type: 'ai-slop',
    count: 15,
    categories: [
      {
        id: 'slop-cat-3',
        number: 3,
        name: 'Typeface Defaults',
        subtitle: '서체 디폴트',
        definition: '안전한 산세리프와 반복되는 조합으로 수렴하는 클리셰.',
        count: 5,
        groups: [
          {
            label: null,
            items: [
              { id: 'inter-for-everything', detect: { kind: 'code', signals: ['fontFamily[^;}]{0,60}(Inter|Geist|Space Grotesk|Instrument Serif)|family=(Inter|Geist)|font-(inter|geist)'], note: '후보 폰트 목록은 시대 민감(2026 현재 Instrument Serif 가 최신 반사). 브랜드 의도 채택은 제외, 역할 분화 없는 단독 스택일 때만' }, previewSpec: { type: 'beforeAfter', left: { label: 'Slop', spec: { type: 'typeSpec', samples: [{ text: '헤드라인도 같은 그로테스크', size: '1.2rem', weight: 600 }, { text: '본문도 같은 그로테스크', size: '0.85rem' }, { text: '라벨도 같은 그로테스크', size: '0.7rem', dim: true }] } }, right: { label: 'Escape', spec: { type: 'typeSpec', samples: [{ em: '대비 세리프 디스플레이', size: '1.3rem', weight: 700 }, { text: '본문은 산세리프로 대비를 만듭니다', size: '0.8rem' }] } } }, name: 'Inter for Everything', koName: 'Inter 도배', description: 'Inter·Geist·Poppins 같은 안전한 산세리프를 모든 텍스트에 쓴다.', tell: '학습 데이터에서 가장 흔한 폰트라 의도적 서체 선택이 없었음을 드러낸다.', whyDisliked: '브랜드 목소리가 사라지고 모든 사이트가 형제처럼 보인다.', severity: 'weak', cause: 'median', escape: [{ name: 'High-Contrast Serif', dict: 'design' }, { name: 'Variable Fonts', dict: 'design' }, { name: 'Anti-AI Humantouch Type', dict: 'design' }], source: 'developersdigest, 925studios' },
              { id: 'italic-serif-accent', generation: 2, detect: { kind: 'hybrid', signals: ['fontStyle[^,}]{0,20}italic', 'font-style: *italic|italic'], note: '헤드라인 중 한 단어만 세리프 이탤릭으로 갈아타는 패턴 포함, 장식 목적 이탤릭 전반이 후보. 2026 기준 이탤릭은 인용·서지·학명 관행 외 거의 모든 경우 슬롭으로 본다.' }, previewSpec: { type: 'beforeAfter', left: { label: 'Slop', spec: { type: 'typeSpec', samples: [{ pre: '우리는 ', em: '진짜', post: ' 성장을 만듭니다', size: '1.05rem', weight: 700 }, { pre: '팀을 위한 ', em: 'unfair', post: ' advantage', size: '1.05rem', weight: 700 }] } }, right: { label: 'Escape', spec: { type: 'typeSpec', samples: [{ text: '위계는 크기와 굵기로 만듭니다', size: '1.3rem', weight: 800 }, { text: '한 문장 안에서 서체를 갈아타는 대신 스케일 대비로 강조합니다', size: '0.75rem', dim: true }] } } }, name: 'Italic Serif Accent Word', koName: '이탤릭 세리프 강조어', description: 'Inter 일색 히어로에서 단어 하나만 이탤릭 세리프로, 또는 큰 이탤릭 세리프를 메인 헤드라인으로 쓴다.', tell: '2025~2026 "유니버설 AI 스타트업 히어로" 로 급부상한 단일 패턴.', whyDisliked: '차별화를 노린 장치가 역설적으로 가장 흔한 신호가 됐다.', severity: 'strong', cause: 'median', escape: [{ name: 'Scale Contrast', dict: 'layout' }, { name: 'Weight Contrast', dict: 'layout' }], source: 'developersdigest, Figma trends' },
              { id: 'repeated-font-combos', detect: { kind: 'judgment', note: '로드된 폰트 조합(Inter+Playfair 류)이 레퍼런스 조합과 일치하는지 대조. 세리프+산세리프 혼용은 한동안의 유행이라, x-height·옵티컬 사이즈 시각보정 흔적과 상황 근거가 없으면 유행 답습 후보로 승격. v0.6 확장: 진지한 제품에 표현적 display 세리프 전면 + 이탤릭 강조를 반사적으로 얹는 serif-everything 반사도 이 항목으로 판정. 가장 distinctive 한 폰트를 반사적으로 집는 "AI uniform" (solodesign.cc, 50-rule detector 기계 차단 사례).' }, previewSpec: { type: 'beforeAfter', left: { label: 'Slop', spec: { type: 'typeSpec', samples: [{ em: '세리프 헤드라인', size: '1.1rem', weight: 700 }, { text: '그로테스크 본문', size: '0.75rem' }, { em: '또 세리프 헤드라인', size: '1.1rem', weight: 700 }, { text: '또 그로테스크 본문', size: '0.75rem', dim: true }] } }, right: { label: 'Escape', spec: { type: 'typeSpec', samples: [{ text: '브랜드가 고른 그로테스크 하나로', size: '1.15rem', weight: 800 }, { text: '굵기 축만으로 위계를 만듭니다', size: '0.8rem' }] } } }, name: 'Repeated Font Combos', koName: '반복 폰트 조합', description: 'Space Grotesk + Instrument Serif + Geist 같은 조합이 페이지마다 재등장한다.', tell: '특정 "트렌디" 조합이 데모마다 복제돼 출처가 같아 보인다.', whyDisliked: '폰트 페어링을 직접 한 게 아니라 빌려온 인상을 준다.', severity: 'weak', cause: 'median', escape: [{ name: 'Neo-Grotesque Sans', dict: 'design' }], source: 'developersdigest' },
              { id: 'all-caps-eyebrow', detect: { kind: 'hybrid', signals: ['textTransform[^,}]{0,20}uppercase', 'uppercase tracking-'], note: '대문자는 인간 관행(AP 스타일)과 겹쳐 단독 오탐 높음. 히어로 알약 배지·트래킹 확장과 결합 시 승격' }, previewSpec: { type: 'beforeAfter', left: { label: 'Slop', spec: { type: 'typeSpec', samples: [{ text: 'INTRODUCING OUR PLATFORM', size: '0.65rem', spacing: '0.2em', dim: true }, { text: 'Build Better Products Today', size: '1.15rem', weight: 700 }] } }, right: { label: 'Escape', spec: { type: 'typeSpec', samples: [{ text: '굵기로 구분한 라벨', size: '0.7rem', weight: 700 }, { text: '문장형 헤드라인은 그대로 둡니다', size: '1.1rem' }] } } }, name: 'All-Caps Eyebrow / Title Case', koName: '대문자 라벨·타이틀케이스', description: '섹션 라벨을 작은 대문자 자간으로, 헤딩을 모든 단어 첫 글자 대문자로 쓴다.', tell: 'SaaS 템플릿의 기본 위계 신호를 그대로 답습한다.', whyDisliked: '읽기 리듬을 끊고 정형화된 마케팅 톤을 강요한다.', severity: 'weak', cause: 'median', escape: [{ name: 'Weight Contrast', dict: 'layout' }], source: 'developersdigest' },
              { id: 'monospace-body-aesthetic', generation: 2, detect: { kind: 'hybrid', signals: ['font-family:[^;]*mono', 'font-mono|Geist Mono|JetBrains Mono'], note: '본문·UI 전반을 모노스페이스로 깔아 "개발자스러운" 인상을 노림. Inter 도배의 2026 사촌. 코드 블록·터미널 UI 의 정당한 모노는 제외, 본문/헤드라인 모노 지배일 때만 후보.' }, name: 'Monospace Body Aesthetic', koName: '모노스페이스 본문 미감', description: '코드도 아닌 본문·헤드라인·UI 를 통째로 모노스페이스로 깔아 "테크" 분위기를 흉내 낸다.', tell: '보라/Inter 를 피하려다 이번엔 Geist Mono 류 모노스페이스가 새 반사 기본값이 됐다.', whyDisliked: '장문 가독성이 떨어지고, "개발자 감성" 자체가 또 하나의 균질한 클리셰로 굳었다.', severity: 'weak', cause: 'median', aliases: ['Geist Mono everything', 'developer aesthetic'], escapeNote: '모노스페이스는 코드·수치·라벨에만 역할로 쓴다. 본문은 가독성 있는 비례 서체를 콘텐츠 근거로 고른다.', source: 'deep-research 2026-07 (monospace body regression), vibecodekit 2026' },
            ],
          },
        ],
      },
      {
        id: 'slop-cat-4',
        number: 4,
        name: 'Type Effects',
        subtitle: '텍스트 효과',
        definition: '텍스트에 거는 장식 효과와 위계·그루핑·크기 스케일 처리의 무결정.',
        count: 6,
        groups: [
          {
            label: null,
            items: [
              { id: 'gradient-text', detect: { kind: 'code', signals: ['WebkitBackgroundClip[^,}]{0,20}text|background-clip: *text|bg-clip-text'] }, previewSpec: { type: 'beforeAfter', left: { label: 'Slop', spec: { type: 'swatch', band: 'linear-gradient(90deg, #7c3aed, #3b82f6)', bandLabel: '헤드라인에 그라디언트 클리핑', chips: [{ color: '#7c3aed', label: '시작색' }, { color: '#3b82f6', label: '끝색' }] } }, right: { label: 'Escape', spec: { type: 'typeSpec', samples: [{ text: '단색 대형 헤드라인', size: '1.4rem', weight: 800 }, { text: '크기 대비가 시선을 끕니다', size: '0.75rem', dim: true }] } } }, name: 'Gradient Text', koName: '그라디언트 텍스트', description: '헤드라인·키워드에 보라-파랑 그라디언트 색을 입힌다.', tell: '강조 수단이 없을 때 색 그라디언트로 때우는 디폴트.', whyDisliked: '대비·가독성을 해치고 컬러 클리셰를 텍스트까지 확장한다.', severity: 'weak', cause: 'no-constraint', escape: [{ name: 'Scale Contrast', dict: 'layout' }], source: 'developersdigest' },
              { id: 'extreme-hierarchy-cliche', detect: { kind: 'hybrid', signals: ['font-size: *(9[6-9]|1[0-9][0-9])px'], note: '96px+ 디스플레이와 12px 라벨 극단 병치 + 중간 티어 부재일 때' }, previewSpec: { type: 'beforeAfter', left: { label: 'Slop', spec: { type: 'typeSpec', samples: [{ text: '거대 디스플레이', size: '1.8rem', weight: 900 }, { text: '중간 단계 없이 극소 라벨', size: '0.55rem', dim: true }] } }, right: { label: 'Escape', spec: { type: 'typeSpec', samples: [{ text: 'Display', size: '1.5rem', weight: 800 }, { text: 'Headline', size: '1.15rem', weight: 700 }, { text: 'Body', size: '0.85rem' }, { text: 'Caption', size: '0.7rem', dim: true }] } } }, name: 'Extreme Hierarchy Cliché', koName: '극단 위계 클리셰', description: '120px+ 헤드라인과 10~12px 마이크로 텍스트만 병치하고 중간 단계가 없다.', tell: '드라마만 노려 모듈러 스케일 없이 크기를 양극단으로 던진다.', whyDisliked: '중간 정보가 사라져 위계가 아니라 충돌로 읽힌다.', severity: 'weak', cause: 'underspec', escape: [{ name: 'Modular Scale', dict: 'layout' }], source: 'community' },
              { id: 'numbered-overline-fetish', generation: 2, detect: { kind: 'hybrid', signals: ['0[1-9] ?[/·|] ?[A-Za-z가-힣]', 'overline|eyebrow'], note: '섹션 제목 위 "01 / Product" 류 번호+슬래시 오버라인. 번호가 실제 기능(목차 앵커·스텝 진행·페이지네이션)과 연결되면 제외. 순수 장식이면 강신호. 에디토리얼 흉내(neo-brutalism-fetish)와 결합 빈도 높음. 발현형 확장(v0.6): 대형 흐린 고스트 인덱스 숫자(01·02·03)가 전 섹션에서 아이콘칩을 대체하는 패턴도 이 항목으로 판정한다. gen-1 아이콘칩 회피의 탈출구가 새 티가 된 사례(StyleSeed CC-9c: "great once, a tell when it is the default replacement for every icon chip").' }, name: 'Numbered Overline Fetish', koName: '무의미 넘버링 오버라인', description: '섹션 제목마다 "01 / Product", "02 / Features" 같은 번호 오버라인을 단다. 번호도 슬래시도 아무 정보를 담지 않는다.', tell: '에디토리얼 흉내의 최전선 부품. 실제 목차·진행과 무관한 번호가 위계 장식으로 반복된다.', whyDisliked: '독자가 그 번호로 할 수 있는 일이 없다. 정보인 척하는 장식이라 알아챈 순간 화면 전체가 연출로 읽힌다.', severity: 'strong', cause: 'median', aliases: ['01-slash-overline', 'index cosplay', 'ghost-index-numbers'], escapeNote: '오버라인이 분류·진행 같은 실제 정보를 담지 못하면 삭제한다. 섹션 구분은 크기·굵기·여백 위계로 만든다.', source: '사용자 관찰 2026-07, StyleSeed 2026-07-02' },
              { id: 'orphan-type-grouping', detect: { kind: 'judgment', note: '측정형 근접성 검사(전수): 화면의 주요 클러스터 전부(히어로 카피 스택·대표 카드·리스트 항목·섹션 인트로)를 측정하고 최악 클러스터 기준으로 판정한다 - 최선 표본만 골라 통과시키는 것은 알려진 loophole 이라 금지. 각 클러스터의 내부 간격과 묶음 사이 간격을 실측 px/em 으로 뽑아 내부 < 사이(권장 최소 1:2 비)인지 판정, 같거나 역전이면 플래그. 역할별 line-height 도 수치로: 디스플레이 0.9~1.05 / 헤드라인 1.1~1.25 / 본문 1.5~1.7 / 캡션 1.3~1.4. 범위 밖 개별 값은 각각 플래그(산개 값을 하나의 범위로 뭉뚱그려 통과 금지)하고, 동일 역할 값이 산개(예: 본문 1.4/1.45/1.5/1.55)하면 토큰 규율 부재로 플래그. 자간·계층 마진 조작정의(v0.6.1): 역할별 letter-spacing(디스플레이·헤드라인 네거티브 -0.01~-0.03em / 본문 0 / 한글 본문 0~-0.02em) - 전 역할 동일 자간이면 미결정 플래그. 계층 마진: 제목의 위 여백 ≥ 2x 아래 여백(제목은 자기 본문에 붙고 이전 블록에서 떨어진다), 전 역할 균일 마진이면 근접성 붕괴 플래그. 처방은 개별 수치 산발이 아니라 역할별 처방표(size/line-height/letter-spacing/margin 위·아래) 세트로 낸다 - 타이포만 정리되어도 대중 체감의 절반이 잡히므로 이 항목의 처방은 위생이 아니라 1급 수정이다.' }, name: 'Orphaned Type Grouping', koName: '타이포 그루핑 붕괴', description: '연관 타이포(라벨·헤드라인·서브·본문)가 근접 그루핑 없이 균일 간격으로 흩어지고, 행간이 역할별로 조율되지 않는다.', tell: '요소 사이 간격이 전부 비슷해 무엇이 무엇의 제목인지 눈이 계산해야 한다.', whyDisliked: '읽는 동선이 끊기고, 간격을 결정한 흔적이 없어 자동 배치 인상을 준다.', severity: 'weak', cause: 'no-constraint', escape: [{ name: 'Spatial Grouping', dict: 'layout' }], source: '사용자 관찰 2026-07 (type grouping + line-height discipline)' },
              { id: 'oversized-display-type', detect: { kind: 'hybrid', signals: ['font-size: *(9[6-9]|[1-2][0-9][0-9])px', 'clamp\\([^)]*,[^)]*, *([6-9]|[1-9][0-9])(\\.[0-9]+)?rem'], note: '측정 기준: 뷰포트 1440px 시점의 계산값(clamp·vw 유동값 포함). 절대 대역(기본값, 콘텐츠 근거 있으면 사유 기록 후 조정): display 40~72px. 80px 초과 = 과대 후보, 96px 초과 또는 body 대비 5배 초과 = 단독 강신호. extreme-hierarchy-cliche 와 경계: 그쪽은 양극단 병치 + 중간 티어 부재, 이쪽은 중간 티어가 있어도 절대 과대. 제외 조건(둘 다 동시 충족 시만): 타이포 자체가 콘텐츠인 에디토리얼 선언 히어로(브랜드 선언 1문장)이면서 나머지 역할 전부가 단일 스케일 비에 앉아 있을 때.' }, name: 'Oversized Display Type', koName: '과대 디스플레이 타이포', description: '히어로·디스플레이가 콘텐츠 양·읽기 거리 대비 지나치게 크다. 한 문장이 뷰포트를 잡아먹고 정보는 없다.', tell: '"크면 임팩트" 라는 디폴트 가정. 크기가 콘텐츠 우선순위가 아니라 드라마의 함수다.', whyDisliked: '첫 화면에서 얻는 정보가 0에 수렴하고, 과대 히어로 타이포는 2024~2026 생성물의 공통 문법이라 즉시 그 계열로 읽힌다.', severity: 'strong', cause: 'median', aliases: ['giant hero type'], escape: [{ name: 'Modular Scale', dict: 'layout' }, { name: 'Scale Contrast', dict: 'layout' }], source: '사용자 관찰 2026-07 (절대 크기 대역)' },
              { id: 'unscaled-type-hierarchy', detect: { kind: 'judgment', note: '측정형(뷰포트 1440px 계산값, 오차 +-5%): 화면의 역할별 font-size 전부를 나열하고 단일 비 r(허용 1.2~1.5)로 base(body) x r^n 에 환원되는지 검사. 플래그 3종: (1) 어떤 r 로도 환원 안 되는 임의 나열(예: 18/22/27/34), (2) 인접 계층 비 1.125 미만 = 계층 구분 실패, (3) 인접 비 1.8 초과 = 단차 붕괴(중간 티어 신설 처방). display:body 총비 2.2~4.5 밖이면 추가 플래그. 절대 대역(기본값): display 40~72 / headline 28~40 / subhead 20~24 / body 16~18 / caption·label 12~14px. body 14 미만 또는 20 초과, label 11 미만은 개별 플래그. 처방 규칙(구속): 개별 값 수정 금지 - 스케일 선언(base x r)을 먼저 세우고 전 역할을 거기서 도출한다. 타이포 처방표의 첫 행이 이 선언이어야 하며, 선언 없이 값만 나열한 처방표는 무효.' }, name: 'Unscaled Type Hierarchy', koName: '스케일 없는 타이포 계층', description: '역할별 크기가 하나의 모듈러 스케일에서 도출되지 않고 임의 숫자로 흩어져 있다.', tell: '크기를 그때그때 정한 흔적. 계층은 있는데 계층 간 비율에 심미적 규칙이 없다.', whyDisliked: '정확히 왜인지 몰라도 "어딘가 어수선하다" 로 체감된다. 스케일은 일반인이 의식하지 못해도 느끼는 질서다.', severity: 'strong', cause: 'no-constraint', aliases: ['arbitrary type sizes'], escape: [{ name: 'Modular Scale', dict: 'layout' }], source: '사용자 관찰 2026-07 (단일 비 스케일 도출 의무)' },
            ],
          },
        ],
      },
      {
        id: 'slop-cat-13',
        number: 13,
        name: 'Korean Typesetting',
        subtitle: '한글 조판',
        definition: '영어권 디폴트 스택·수치가 한글에 그대로 적용될 때 생기는 조판 신호. 전제 조건: 화면에 한글 텍스트가 존재할 때만 검사한다(영문 전용 화면 오탐 금지). 폰트 스택·줄바꿈은 DOM/CSS 자동 검사가 가능해 우선 자동화 대상.',
        count: 4,
        groups: [
          {
            label: null,
            items: [
              { id: 'korean-fallback-font-jump', detect: { kind: 'hybrid', signals: ['font-family:(?![^;]*(Pretendard|Noto Sans KR|본고딕|Source Han|Spoqa|SUIT|Wanted Sans|Nanum))[^;]*(Inter|Roboto|Helvetica|Arial|Geist|Poppins)'], note: '전제: 한글 텍스트 존재 시에만 판정. 폰트 스택에 한글 폰트가 없으면 한글이 OS 시스템 폰트로 fallback 되어 굵기·인상이 튀고 OS 별로 파편화된다(우아한형제들: "시스템 폰트는 운영체제마다 달라서 레이아웃과 사용자 경험이 파편화됩니다"). AI 생성 코드가 영어권 기본 스택(Inter, sans-serif)을 그대로 뱉고 한글 대비 검증을 안 한 흔적. 국내 관행은 Pretendard·본고딕·Interop 명시.' }, name: 'Korean Fallback Font Jump', koName: '한글 fallback 폰트 튐', description: '영문 스택만 지정된 font-family 때문에 한글이 시스템 폰트로 떨어져 영문과 굵기·인상이 어긋난다.', tell: '한글 폰트를 스택에 명시한 흔적이 없다. 한글 대비 검증 없이 영어권 디폴트가 그대로 출고됐다.', whyDisliked: 'OS 마다 다른 한글이 렌더돼 인상이 파편화되고, 한 문장 안에서 영문과 한글의 질감이 어긋나 즉시 어색하다.', severity: 'strong', cause: 'no-verify', escapeNote: '한글 폰트(Pretendard·Noto Sans KR 등)를 스택 선두에 명시하고 영문 폰트와의 굵기·크기 균형을 실측 확인한다.', source: '우아한형제들 techblog, Interop, brunch 2026' },
              { id: 'no-keepall-word-break', detect: { kind: 'hybrid', signals: ['word-break: *keep-all|break-keep'], note: '부재 기반 판정(전제: 한글 본문·헤드라인 존재): 신호 grep 은 존재 확인용이고, keep-all(또는 Tailwind break-keep)이 어디에도 없으면 플래그. CSS 기본값(word-break: normal)이 CJK 를 음절 단위로 절단해 어절 중간이 잘린다("삭제하시겠습/니까?"; Spoqa: "CJK 문자 환경에서 웹을 사용하는 사용자 입장으로서 굉장히 괴롭습니다"). 좁은 셀의 overflow 대비로 의도적으로 뺀 자리는 사유가 확인되면 제외.' }, name: 'No keep-all Word Break', koName: 'keep-all 미적용 음절 절단', description: '한글이 어절 중간에서 잘려 다음 줄로 넘어간다. 제목·버튼·본문 어디서든 단어가 두 동강 난다.', tell: '한국어를 아는 개발자라면 넣는 keep-all 이 없다. 한글 조판을 검수한 흔적이 없다는 이진 신호.', whyDisliked: '읽기 리듬이 단어 중간에서 끊겨 괴롭고, 한국어 사용자를 고려하지 않았음이 즉시 드러난다.', severity: 'strong', cause: 'no-constraint', escapeNote: '한글 텍스트 블록에 word-break: keep-all 을 기본 적용하고, 좁은 컨테이너는 overflow-wrap: break-word 로 보완한다.', source: 'Spoqa 기술블로그, 네이버 스마트스튜디오, NTS 2026' },
              { id: 'untuned-hangul-spacing', detect: { kind: 'judgment', note: '측정형 후보: 한글 본문에 영문 기준값이 그대로 적용됐는지 실측한다. 한글 본문 line-height 1.5 미만 또는 양수 letter-spacing 과다(+0.02em 이상)면 후보. 한글은 네모꼴 음절문자라 최적 자간·행간이 영문과 다르다. 출처 폭이 좁아(lqez 사이트별 실측 1건 주력) 단독 판정 금지, 다른 한글 조판 신호와 결합 시에만 승격. [출처 보강 필요]' }, name: 'Untuned Hangul Spacing', koName: '한글 자간·행간 미조정', description: '영문 기준 자간·행간을 한글에 그대로 적용해 글자가 붙어 답답하거나 낱글자 간격이 과하게 벌어진다.', tell: '한글 조판값을 별도로 정한 흔적이 없다. orphan-type-grouping 의 행간 규율 위반과 겹치면 신호가 배가된다.', whyDisliked: '읽는 밀도가 어긋나 장문이 피로하고, 한글을 튜닝한 적 없다는 인상을 준다.', severity: 'weak', cause: 'median', escapeNote: '한글 본문 행간 1.6~1.8, 자간 0~-0.02em 범위에서 실측 조정하고 토큰으로 고정한다.', source: 'lqez.github.io 2026' },
              { id: 'english-type-scale-on-hangul', detect: { kind: 'judgment', note: '영문 폰트 크기 스케일을 한글에 그대로 적용하면 한글 글리프가 상대적으로 커 보여 무거운 인상이 된다. 영문·숫자·한글 혼용 행에서 시각 크기 차가 보이면 후보. 우아한형제들은 Interop 에서 한글 글리프를 94% 로 축소하고 굵기를 조절해 균형을 맞췄다.' }, name: 'English Type Scale on Hangul', koName: '영문 타이포 스케일 한글 적용', description: '영문 기준 크기 체계를 한글에 그대로 써서 한글이 영문·숫자보다 크고 무겁게 보인다.', tell: '혼용 텍스트의 시각 균형을 보정한 흔적이 없다.', whyDisliked: '같은 행 안에서 문자 체계 간 크기가 어긋나 어수선하고 다듬지 않은 인상을 준다.', severity: 'weak', cause: 'median', escapeNote: '한글 글리프 보정 폰트(Interop 류)를 쓰거나 혼용 구간의 크기·굵기를 실측 미세 조정한다.', source: '우아한형제들, Sandoll 2026' },
            ],
          },
        ],
      },
    ],
  },

  // ================================================================
  // Part 3: 레이아웃 · 구조
  // ================================================================
  {
    id: 'slop-part-3',
    number: 3,
    label: '레이아웃 · 구조',
    description: '페이지 골격·그리드 규율·공간 호흡에서 드러나는 무결정의 신호. 레이아웃은 다른 모든 디자인 결정의 최상류 의존성. DOM·CSS 파일 아키텍처(유령 래퍼·CSS 모듈화)도 이 구조 축이 잡는다',
    type: 'ai-slop',
    count: 23,
    categories: [
      {
        id: 'slop-cat-5',
        number: 5,
        name: 'Page Skeleton',
        subtitle: '페이지 골격',
        definition: '히어로와 섹션 순서가 정형화되어 수렴하는 클리셰.',
        count: 5,
        groups: [
          {
            label: null,
            items: [
              { id: 'centered-hero-default', detect: { kind: 'hybrid', signals: ['textAlign[^,}]{0,20}center', 'text-center'], note: '중앙 정렬 + 배지 + 헤드라인 + 서브 + CTA 쌍 수직 스택 구조는 코드 읽기로 판정. AI 시그니처 세트(Inter+인디고+3카드)와 결합 시 강신호. escape 역전 경고(v0.6): 흔한 탈출 처방인 좌측 텍스트 + 우측 비주얼 + pill CTA 2개 + 평점 행 구도 자체가 gen-2 정형("the stock DTC composition", StyleSeed)으로 등재됐다. escape 는 "중앙 정렬 탈피" 원칙이지 특정 구도 공식이 아니다. 시선 유도·긴장감이 콘텐츠 근거로 설계됐는지로 판정한다.' }, previewSpec: { type: 'beforeAfter', left: { label: 'Slop', spec: { type: 'areas', cols: '1fr 2fr 1fr', rows: 'repeat(4, 1fr)', areas: ['. a .', '. b .', '. c .', '. d .'], labels: { a: '배지', b: '중앙 헤드라인', c: '서브카피', d: 'CTA 한 쌍' } } }, right: { label: 'Escape', spec: { type: 'areas', cols: '1.6fr 1fr', rows: 'repeat(2, 1fr)', areas: ['a b', 'a c'], labels: { a: '좌측 대형 헤드라인', b: '비주얼', c: 'CTA' } } } }, name: 'Centered Hero', koName: '가운데 정렬 히어로', description: '큰 산세리프 헤드라인을 중앙에 두고 그 아래 부제와 버튼 2개를 놓는다.', tell: 'AI 가 가장 자주 수렴하는 기본 히어로 구도. 도출 예외(v0.8.1): 브랜드 자산 자체가 중앙 대칭 문법(인장·현판·문장(紋章)·엠블럼 중심 아이덴티티)이면 중앙 대칭 히어로는 무결정 수렴이 아니라 세계관 도출값이다 - 이 항목은 형태가 아니라 무결정을 잡는다. 회피 목적의 기계적 비대칭이 오히려 오답이 될 수 있다.', whyDisliked: '시선 유도·긴장감이 없고 모든 랜딩이 똑같아 보인다.', severity: 'strong', cause: 'median', escape: [{ name: 'Asymmetric Balance', dict: 'layout' }, { name: 'Asymmetric Split', dict: 'design' }], source: 'developersdigest, AXE-WEB' },
              { id: 'fixed-section-stack', detect: { kind: 'judgment', note: 'Hero→Features→Testimonials→Pricing→CTA 형제 순서를 페이지 컴포넌트 순서로 확인' }, previewSpec: { type: 'beforeAfter', left: { label: 'Slop', spec: { type: 'stack', count: 5, labels: ['Hero', 'Features 3열', 'Testimonials', 'Pricing', 'CTA + Footer'] } }, right: { label: 'Escape', spec: { type: 'split', dir: 'col', ratio: [2.2, 1, 0.8], labels: ['우선순위 1: 제품 실물 증명', '우선순위 2: 근거·후기', '전환 (필요한 만큼만)'] } } }, name: 'Fixed Section Stack', koName: '정형 섹션 순서', description: '히어로 → 피처 카드 3개 → 후기 → 가격표 → 푸터의 고정 순서를 그대로 쌓는다.', tell: '모든 AI 페이지가 같은 형제 순서를 따른다.', whyDisliked: '콘텐츠 우선순위를 따진 흔적이 없어 템플릿 그 자체로 읽힌다.', severity: 'strong', cause: 'median', escape: [{ name: 'Hierarchical Grid', dict: 'layout' }, { name: 'Sectioned Stack', dict: 'layout' }], source: 'AXE-WEB, dev.to' },
              { id: 'icon-top-three-cards', detect: { kind: 'hybrid', signals: ['grid-cols-3'], note: '동일 구조 카드 정확히 3개(아이콘 상단+제목+설명) 반복일 때. 3분할 그리드 자체는 정당' }, previewSpec: { type: 'beforeAfter', left: { label: 'Slop', spec: { type: 'repeat', cols: 3, count: 3, label: '아이콘 + 제목 + 설명' } }, right: { label: 'Escape', spec: { type: 'areas', cols: '2fr 1fr', rows: '1fr 1fr', areas: ['a b', 'a c'], labels: { a: '주 기능 (대형)', b: '보조', c: '보조' } } } }, name: 'Icon-Top 3 Feature Cards', koName: '아이콘 상단 3열 피처 카드', description: '동일한 카드 3개에 상단 아이콘 + 제목 + 설명을 반복한다.', tell: '정형 시퀀스의 핵심 블록이자 "3의 법칙" 의 레이아웃판.', whyDisliked: '셋이 늘 동등해 무엇이 중요한지 알 수 없다.', severity: 'strong', cause: 'median', escape: [{ name: 'Bento Grid', dict: 'layout' }, { name: 'Asymmetric Balance', dict: 'layout' }], source: 'developersdigest' },
              { id: 'numbered-steps', detect: { kind: 'judgment', note: '1-2-3 넘버링이 실제 절차가 아닌 서술에 씌워졌는지 판단' }, previewSpec: { type: 'beforeAfter', left: { label: 'Slop', spec: { type: 'repeat', cols: 3, count: 3, labels: ['1. 비전', '2. 혁신', '3. 성장'] } }, right: { label: 'Escape', spec: { type: 'areas', cols: '1fr 1fr', rows: '1.4fr 1fr', areas: ['a a', 'b c'], labels: { a: '핵심 주장 한 문장', b: '근거', c: '근거' } } } }, name: 'Numbered 1-2-3 Steps', koName: '1-2-3 단계 레이아웃', description: '"1, 2, 3" 번호를 단 진행 블록을 거의 모든 페이지에 넣는다.', tell: '설명을 단계로 쪼개는 디폴트 서술 틀.', whyDisliked: '실제 절차가 아닌데도 형식만 빌려 도식적으로 읽힌다.', severity: 'weak', cause: 'median', escape: [{ name: 'Steps', dict: 'design' }], source: 'developersdigest' },
              { id: 'canned-saas-skeleton', detect: { kind: 'judgment', note: '풀페이지 SaaS 골격: 배지→H1→서브텍스트→CTA 2개→로고 스트립→3개 피처 카드→소셜 프루프→가격표(가운데 요금제 강조)→FAQ 아코디언→푸터 순서가 통째로 재현되면 후보. fixed-section-stack 이 "순서 동일" 이라면 이건 "SaaS 템플릿 통짜 복제".' }, name: 'Canned SaaS Skeleton', koName: 'SaaS 통짜 골격', description: '배지+H1 히어로 → 로고 스트립 → 3개 피처 카드 → 가격표 → FAQ 로 이어지는 랜딩 골격이 통째로 반복된다.', tell: '가장 흔한 SaaS 랜딩 템플릿을 손도 안 대고 그대로 뽑아낸다. 제품 고유의 서사가 없다.', whyDisliked: '수천 개 AI 생성 랜딩이 같은 골격이라 첫 스크롤에 "또 이거" 가 된다.', severity: 'strong', cause: 'median', aliases: ['SaaS template skeleton', 'hero-logos-features-pricing-faq'], escapeNote: '제품의 핵심 증명(데모·수치·전후)을 축으로 섹션 순서를 다시 짠다. 템플릿 순서를 콘텐츠 우선순위로 대체한다.', source: 'deep-research 2026-07 (canonical full-page SaaS structure)' },
            ],
          },
        ],
      },
      {
        id: 'slop-cat-6',
        number: 6,
        name: 'Grid & Sizing',
        subtitle: '그리드·크기',
        definition: '그리드 선택·규율과 크기·밀도 처리에서 우선순위를 지워버리는 클리셰. 삭제 후 남는 공간의 재구성 여부(양의 구성)와 마크업·CSS 파일 구조(유령 래퍼·인라인 CSS 비모듈화)도 이 축이 잡는다.',
        count: 18,
        groups: [
          {
            label: null,
            items: [
              { id: 'bento-overuse', detect: { kind: 'judgment', note: '항목 유지 확정(2026 검증: 피로 클리셰로 인지되면서 동시에 지속 대량 사용). 칸 크기가 우선순위를 안 담을 때만 슬롭. 미학이 아닌 의도성 부재로 판정 (Creative Boom 2026). v0.6: 벤토 칸을 무의미 AI 이미지·장식 차트·플라스틱 사진으로 채우는 발현형은 meaningless-decorative-chart 와 결합 판정(Slopless 2026).' }, previewSpec: { type: 'beforeAfter', left: { label: 'Slop', spec: { type: 'areas', cols: 'repeat(4, 1fr)', rows: 'repeat(2, 1fr)', areas: ['a a b c', 'd e e c'], labels: { a: '중요도 ?', b: '?', c: '?', d: '?', e: '?' } } }, right: { label: 'Escape', spec: { type: 'areas', cols: 'repeat(3, 1fr)', rows: 'repeat(3, 1fr)', areas: ['a a b', 'a a c', 'd e c'], labels: { a: '핵심 기능 (1순위)', b: '2순위', c: '2순위', d: '3순위', e: '3순위' } } } }, name: 'Bento Grid Overuse', koName: '벤토 그리드 남용', description: '크기가 다른 둥근 칸들의 그리드를 맥락 없이 기본 레이아웃으로 쓴다.', tell: 'Perplexity·Suno 류 AI 제품이 과사용해 AI 제품의 시그니처가 됐다.', whyDisliked: '칸 크기가 우선순위를 담지 않으면 그저 트렌드 흉내로 읽힌다.', severity: 'weak', cause: 'no-constraint', escape: [{ name: 'Bento Grid', dict: 'layout' }, { name: 'Hierarchical Grid', dict: 'layout' }], source: 'Landdding, openads' },
              { id: 'uniform-rounding-sizing', detect: { kind: 'hybrid', signals: ['borderRadius'], note: 'radius 값 분포를 세서 단일값이 90%+ 면 플래그. 크기 위계 부재와 결합 시 승격' }, previewSpec: { type: 'beforeAfter', left: { label: 'Slop', spec: { type: 'repeat', cols: 4, count: 8, label: '동일 크기' } }, right: { label: 'Escape', spec: { type: 'areas', cols: '2fr 1fr 1fr', rows: 'repeat(2, 1fr)', areas: ['a b c', 'a d e'], labels: { a: '주인공 (대)', b: '보조', c: '보조', d: '보조', e: '보조' } } } }, name: 'Uniform Rounding & Sizing', koName: '균일 라운드·사이즈', description: '16px 동일 라운드, 동일 패딩, 동일 카드 높이가 화면을 덮는다.', tell: '위계 대신 시각적 평탄함을 만들어 "아무 결정도 안 한" 인상을 준다.', whyDisliked: '모든 요소가 동등해 시선이 멈출 곳이 없다.', severity: 'weak', cause: 'no-constraint', escape: [{ name: 'Scale Contrast', dict: 'layout' }, { name: 'Spatial Grouping', dict: 'layout' }], source: 'developersdigest' },
              { id: 'excessive-card-nesting', detect: { kind: 'hybrid', signals: ['(Card|Paper)[^/]{0,200}(Card|Paper)'], note: 'border 또는 boxShadow+borderRadius 조상 체인 3레벨 이상에서 플래그. 2레벨은 정당한 그루핑일 수 있음. AI 이전부터의 안티패턴이라 빈도 신호이지 배타 신호 아님 (M3·Mews 디자인 시스템이 중첩 outlined 카드를 안티패턴으로 규정)' }, previewSpec: { type: 'beforeAfter', left: { label: 'Slop', spec: { type: 'stack', count: 3, labels: ['카드 레벨 1', '카드 레벨 2 (레벨 1 안)', '카드 레벨 3 (위계 실종)'] } }, right: { label: 'Escape', spec: { type: 'areas', cols: '1fr 1fr', rows: 'repeat(2, 1fr)', areas: ['a c', 'b c'], labels: { a: '그룹 1 (여백으로 묶음)', b: '그룹 1', c: '그룹 2' } } } }, name: 'Excessive Card Nesting', koName: '과도한 카드 중첩', description: '카드 안에 카드, 그 안에 또 카드. 3~4단 중첩으로 모든 것이 상자에 담겨 무엇도 중요해 보이지 않는다.', tell: 'border·그림자를 가진 컨테이너가 3단 이상 중첩되고 위계가 사라진다.', whyDisliked: '그루핑이 아니라 포장이 목적이 돼 정보 위계가 죽는다.', severity: 'weak', cause: 'no-constraint', escape: [{ name: 'Spatial Grouping', dict: 'layout' }, { name: 'Macro/Micro Whitespace', dict: 'layout' }], source: 'thefountaininstitute.com, m3.material.io' },
              { id: 'stat-banner-row', detect: { kind: 'hybrid', signals: ['[0-9]+[KM][+]|99%|24/7'], note: '출처·기간 맥락 없는 지표 4연 배치일 때' }, previewSpec: { type: 'beforeAfter', left: { label: 'Slop', spec: { type: 'repeat', cols: 4, count: 4, labels: ['10K+ Users', '99% Uptime', '4.9 Rating', '24/7 Support'] } }, right: { label: 'Escape', spec: { type: 'areas', cols: '1.4fr 1fr', rows: 'repeat(2, 1fr)', areas: ['a b', 'a c'], labels: { a: '핵심 지표 1개 + 산출 근거', b: '출처·기간', c: '지표가 의미하는 것' } } } }, name: 'Stat Banner Row', koName: '지표 배너 행', description: '"10k+ users", "99.9% uptime" 같은 숫자 메트릭을 가로로 늘어놓는다.', tell: '신뢰를 숫자로 때우는 정형 블록.', whyDisliked: '맥락 없는 숫자라 진위가 의심되고 클리셰로 읽힌다.', severity: 'weak', cause: 'median', escape: [{ name: 'Statistic', dict: 'design' }], source: 'developersdigest' },
              { id: 'over-rounded-corners', detect: { kind: 'code', signals: ['border-radius: *(2[4-9]|[3-9][0-9])px', 'rounded-(2xl|3xl)'], note: '작은 요소(버튼·배지·인풋·작은 카드)에 24px+ 반경. uniform-rounding-sizing 이 "다 같은 반경" 이라면 이건 "요소 크기 대비 너무 큰 반경". 큰 컨테이너·알약 버튼의 의도적 라운드는 제외.' }, name: 'Over-Rounded Corners', koName: '과도한 라운드 모서리', description: '작은 버튼·배지·인풋까지 24px 이상 큰 반경으로 둥글려 물방울처럼 뭉툭하다.', tell: 'Tailwind/shadcn 의 큰 rounded 기본값을 그대로 둬서 요소 크기와 무관하게 다 부풀어 보인다.', whyDisliked: '위계·정밀함이 사라지고 장난감 같은 인상을 준다. 요소 크기별 반경 조율이 없다.', severity: 'weak', cause: 'median', aliases: ['rounded-3xl everything', 'blobby corners'], escapeNote: '요소 크기에 반경을 비례시킨다. 작은 요소는 4~8px, 큰 컨테이너만 큰 반경. 반경을 스케일 토큰으로 정의한다.', source: 'deep-research 2026-07 (24px+ radius on small elements)' },
              { id: 'undisciplined-grid', detect: { kind: 'hybrid', signals: ['grid-template-columns:', 'auto-fit|auto-fill', 'flex-wrap'], note: '신호는 후보 수집용(그리드 선언 위치 열거). 판정은 측정형으로: 각 섹션의 세로 분할선 x 좌표(프레임 안쪽 폭 대비 %)를 실제로 산출해 나열하고, 관련 섹션들의 x가 서로 일치하는지(허용오차 명시, 기본 ±0), 그리고 기준 앵커 섹션이 존재하는지 확인한다. "각 섹션이 n/12 비율이면 통과" 는 오독 금지 - 5:7 과 7:5 는 둘 다 12col 라인이지만 분할선 x 가 다르다. 미러 눈속임 명문화(surf-tutorial 회차): 42/58(5:7) 과 58/42(7:5) 를 섹션마다 번갈아 쓰는 미러 교대는 관통 그리드가 아니다. 세로 기준선이 섹션 사이를 실제로 가로지르지(통과하지) 않고 좌우로 튀므로, 분할선 x 가 두 값으로 갈라지는 대표 실패형이다. 브리프(기본) 모드 계층2 판정에서도 이 관통선 검사를 그대로 적용한다 - 42/58 미러를 "그리드 수정 완료" 로 인정하지 않으며, 도구·스킬이 미러 교대를 성공으로 자평하는 것을 금지한다(미러 = 성공 아님, 자기인증 차단). 컨테이너 padding·gap 이 분할선 x 를 이동시키므로 계산에 포함(패딩 없는 섹션과 패딩 있는 섹션은 같은 비율이라도 x 가 어긋난다). x 가 두 개 이상으로 갈라지거나 앵커가 없으면 강신호. 정량 목표 축(처방 시 필수): 관련 섹션 분할선 x 를 단일 목표값으로 수렴 + 앵커 지정. 강한 스타일 무드(브루탈리즘 등)와 결합 시 판정 가중.' }, name: 'Undisciplined Grid', koName: '그리드 규율 부재', description: '섹션마다 그리드 분할이 임의로 바뀌고 컬럼 경계선이 상하 섹션과 정렬되지 않으며, 칸 크기를 content-fit 으로 방치한다. 42/58 을 섹션마다 좌우로 뒤집는 미러 교대도 여기 포함된다.', tell: '전역 그리드 시스템을 먼저 정의한 흔적이 없다. 분할이 콘텐츠 우선순위가 아니라 그때그때 콘텐츠 양의 함수다. 미러 교대(5:7·7:5 번갈아쓰기)는 세로 기준선이 섹션 간 관통하지 않는 눈속임이라 그리드가 아니며, 이를 수정 완료로 자평하는 것은 통과가 아니다.', whyDisliked: '화면 전체를 관통하는 질서가 없어 아무리 스타일이 강해도 어수선하고, 정렬 감각이 있는 눈에는 즉시 무결정이 들킨다. 브루탈리즘처럼 칼각이 본질인 스타일에서는 치명타다.', severity: 'strong', cause: 'no-constraint', aliases: ['content-fit 방치', 'arbitrary split', 'pseudo-grid mirror', '미러 눈속임'], escape: [{ name: 'Hierarchical Grid', dict: 'layout' }], source: '사용자 관찰 2026-07 (전역 그리드 모듈 위 분할 원칙, surf-tutorial 회차 미러 눈속임)' },
              { id: 'suffocating-density', detect: { kind: 'judgment', note: '측정형 판정: 매크로 여백(섹션 사이 패딩·마진 합)과 마이크로 여백(그룹 내부 간격)을 실측해 매크로:마이크로 ≥ 2:1 미만이면 플래그. 한 화면(1뷰포트)에 동등 강조 블록 4개 이상이면 플래그. 모든 섹션이 가득 차 있고 호흡 구간이 없으면 플래그. 밀도 자체가 아니라 우선순위 부재(핵심 먼저 -> 브레이크다운 동선의 부재)가 판정 기준이므로, 임계값은 기본값이고 콘텐츠 근거가 있으면 처방자가 명시적으로 조정한다(눈대중 금지, 조정 사유 기록).' }, name: 'Suffocating Density', koName: '질식 정보밀도', description: '모든 섹션이 콘텐츠로 꽉 차 있고, 꼭 필요한 것을 먼저 보게 한 뒤 브레이크다운으로 다음 파트에 넘기는 호흡이 없다.', tell: '무엇을 먼저 보게 할지 결정하지 않아 전부를 한 번에 들이민다. AI 생성 디자인의 전반적 특징이며, 빡빡한 밀도 위에 강한 스타일 무드가 얹히면 신호가 배가된다.', whyDisliked: '시선 동선이 설계되지 않아 피로하고, "채우는 것" 이 목적이었음이 드러난다.', severity: 'strong', cause: 'underspec', aliases: ['information cramming', '여백 인색'], escape: [{ name: 'Macro/Micro Whitespace', dict: 'layout' }, { name: 'Spatial Grouping', dict: 'layout' }], source: '사용자 관찰 2026-07 (AI 디자인 정보밀도 과잉)' },
              { id: 'undecided-layout-type', detect: { kind: 'hybrid', signals: ['max-width: *[0-9]+px', 'clamp\\(|minmax\\(|[0-9]+vw'], note: '판독 검사: 컨테이너 전략에서 이 화면의 레이아웃 타입(fixed/fluid/hybrid)을 한 문장으로 선언할 수 있는가. fixed(고정 폭 + 외부 공간의 계획된 역할) / fluid(전 폭 비례 분할) / hybrid(구간별 전략 전환) 중 무엇이든 결정이 읽히면 정당. 플래그는 "판독 불가": max-width 하나 박고 나머지 뷰포트 방치, fluid 단위(clamp·vw·fr)와 fixed 단위의 무원칙 혼재, breakpoint 에서 전부 1fr 스택으로 도망. 레이아웃 타입은 다른 모든 디자인 결정의 최상류 의존성이라, 미결정 위에 가한 타이포·표면 수정은 사상누각이다. 처방 시 목표 = 타입 선언문 + 그 타입에 맞는 컨테이너 전략 수치.' }, name: 'Undecided Layout Type', koName: '레이아웃 타입 미결정', description: '이 화면이 fixed 인지 fluid 인지 hybrid 인지 코드에서 읽어낼 수 없다. 컨테이너 하나에 max-width 를 박고 나머지 공간은 방치한다.', tell: '뷰포트 전체를 어떻게 쓸지 결정한 흔적이 없다. 학습 데이터 중앙값(960~1200px 중앙 컬럼)의 무의식 복제.', whyDisliked: '울트라와이드에서 방치된 데드 마진이, 모바일에서 획일 스택이 드러나 "레이아웃을 설계한 적 없음" 이 들킨다.', severity: 'strong', cause: 'median', aliases: ['centered-column reflex'], escape: [{ name: 'Hierarchical Grid', dict: 'layout' }], source: '사용자 관찰 2026-07 (레이아웃 타입 = 최상류 의존성)' },
              { id: 'unpartitioned-space', detect: { kind: 'judgment', note: '인과 방향이 판정 기준이다: 좋은 여백은 "애써 조절한 값" 이 아니라 "전 공간을 그리드로 분할하고 콘텐츠를 규칙 기반 배열한 뒤 남은 자연 잔여" 다. 검사 3단: (1) 커버리지 - 그리드가 캔버스 전 공간(비게 되는 곳 포함)을 분할하는가, 카드 영역에만 적용되고 나머지는 자유 스택인가. (2) 배치 규칙성 - 각 블록의 위치·크기가 트랙 시작/끝·얼라인 라인에서 도출되는가, 블록별 padding·margin 눈대중인가. (3) 조절된 여백의 증거 - 섹션별 패딩이 모듈 스케일 없이 산개(48/64/72/80 혼재)하면 플래그. suffocating-density(과밀)와 양극 관계이며 escape 는 여백을 콘텐츠로 채우는 것이 절대 아니다. 처방 규칙(구속): 여백 수치를 직접 늘리고 줄이는 처방 금지 - 분할 스킴과 배치 규칙만 처방하고, 여백은 그 결과로 재검증한다.' }, name: 'Unpartitioned Space', koName: '공간 분할 부재', description: '그리드가 일부 콘텐츠 블록에만 적용되고 화면의 나머지 공간(여백 포함)은 어느 분할에도 속하지 않는다. 여백이 설계의 잔여가 아니라 content-fit 의 부산물이다.', tell: '섹션마다 다른 임의 패딩으로 여백을 애써 조절한 흔적은 있는데, 전 공간을 나눈 분할 체계는 없다.', whyDisliked: '정렬 감각이 있는 눈에 그 공간은 "남긴 것" 이 아니라 "버려진 것" 으로 읽히고, 화면 전체의 질서 부재가 드러난다.', severity: 'strong', cause: 'no-constraint', aliases: ['orphan whitespace', '조절된 여백', 'content-fit 잔여 공간'], escape: [{ name: 'Hierarchical Grid', dict: 'layout' }, { name: 'Macro/Micro Whitespace', dict: 'layout' }], source: '사용자 관찰 2026-07 (모든 공간은 그리드에 소속, 여백은 규칙 배열의 잔여)' },
              { id: 'unscaled-spacing-ladder', detect: { kind: 'hybrid', signals: ['(margin|padding|gap)[^;{]*: *[0-9]+px'], note: '신호는 후보 수집용(간격 값 열거). 판정 2단(뷰포트 1440px 계산값): (1) 래더 검사 - 전 간격 값(margin·padding·gap)이 4 또는 8px 베이스 래더(4/8/12/16/24/32/48/64/96/128)에 앉는지. 래더 밖 값 비율 20% 초과면 플래그(1px 보더, +-1px 옵티컬 보정은 제외). (2) 티어 검사 - 그룹 내부 <=16 < 그룹 사이 24~32 < 블록 사이 48~64 < 섹션 사이 96~128(데스크톱 기본값), 각 티어 >= 1.5x 하위 티어. 기존 규칙들(내부:사이 1:2, 제목 마진 2:1, 매크로:마이크로 2:1)은 전부 이 래더 위의 특수 사례다. unpartitioned-space 와 경계: 그쪽은 분할 부재(구조), 이쪽은 값 체계 부재(토큰) - 동시 발화 가능하되 처방이 다르다(그쪽 = 분할 스킴, 이쪽 = 래더 선언 + 티어 매핑). 처방 규칙(구속): 개별 간격 수정 금지 - 래더를 선언하고 전 티어를 거기서 도출한다.' }, name: 'Unscaled Spacing Ladder', koName: '스케일 없는 간격 체계', description: '간격 값(margin·padding·gap)이 공통 래더 없이 임의 숫자로 흩어져 있고 계층별 간격 티어가 없다.', tell: '간격을 요소마다 눈대중으로 정한 흔적. 18, 27, 42 같은 래더 밖 값이 산개한다.', whyDisliked: '리듬이 없어 화면이 미세하게 덜컹거리고, 간격을 설계한 적 없음이 누적 체감된다.', severity: 'strong', cause: 'no-constraint', aliases: ['arbitrary spacing', '눈대중 간격'], escape: [{ name: 'Padding Scale', dict: 'layout' }, { name: 'Macro/Micro Whitespace', dict: 'layout' }], source: '사용자 관찰 2026-07 (간격 래더 + 티어 규칙)' },
              { id: 'layout-type-misfit', detect: { kind: 'judgment', note: 'undecided-layout-type(판독 불가)과 구분: 이 항목은 타입이 판독 가능해도 콘텐츠에 부적합할 때 발화한다. 검사 순서(구속): (1) 콘텐츠의 읽기 모드를 먼저 선언한다 - 선형 읽기(문서·블로그) / 탐색(카탈로그·대시보드) / 몰입 스토리텔링(브랜드·서사형 랜딩). (2) 현재 타입(fixed/fluid/hybrid)과 정보 밀도가 그 모드에서 도출되는지 검사한다. 예: 몰입 스토리텔링 + 고밀도 앱 스크린샷 콘텐츠를 fixed 좁은 중앙 컬럼에 배치 = 부적합(뷰포트를 시원하게 쓰는 fluid 섹셔널 + 1뷰포트 1아이디어 저밀도가 도출값, thegot 회차). 처방 규칙(구속): 타입을 직접 처방하지 않는다 - 읽기 모드 선언을 처방하고 타입은 거기서 도출한다(fluid 가 새 반사 디폴트가 되는 것 금지). fluid 정의(오독 방지, v0.8.1): fluid 는 캔버스 전체를 그리드로 분할하는 전략이지 콘텐츠를 늘려 트랙을 채우는 것이 아니다 - 트랙 폭과 콘텐츠 렌더 크기는 별개이며, 콘텐츠는 트랙 안에서 자연 크기로 앉고 잔여 트랙 공간은 설계된 여백이 된다(unpartitioned-space 원칙). 산출물은 재설계 처방표의 섹션 스토리보드 표(섹션별 아이디어 1개·목표 밀도·트랙 %W·렌더 px).' }, name: 'Layout Type Misfit', koName: '레이아웃 타입 부적합', description: '레이아웃 타입은 결정돼 있으나 콘텐츠의 읽기 모드와 맞지 않는다. 몰입해야 할 콘텐츠가 좁은 고정 컬럼에, 훑어야 할 콘텐츠가 긴 서사 스크롤에 담긴다.', tell: '컨셉·콘텐츠에서 레이아웃을 도출한 흔적이 없다. 타입이 콘텐츠의 함수가 아니라 템플릿의 관성이다.', whyDisliked: '콘텐츠가 요구하는 경험(몰입·훑기·읽기)과 화면의 물리 리듬이 어긋나 "왜인지 답답하다/산만하다" 로 체감된다.', severity: 'strong', cause: 'underspec', aliases: ['concept-content-layout mismatch'], escape: [{ name: 'Hierarchical Grid', dict: 'layout' }], source: '사용자 관찰 2026-07 (thegot 회차: 컨셉-콘텐츠-레이아웃 연관성)' },
              { id: 'undersized-dense-imagery', detect: { kind: 'judgment', note: '측정형(뷰포트 1440px 계산값): 정보밀도 높은 콘텐츠 이미지(UI 스크린샷·차트·다이어그램·표)가 뷰포트 폭 33%W 이하로 렌더되고 확대 수단(라이트박스·상세 링크)이 없으면 플래그. 장식 이미지는 대상 아님 - 판독돼야 가치가 있는 이미지만. 처방 2갈래: 이미지를 1아이디어로 크롭해 그 아이디어가 판독되는 크기로 제시하거나, 도미넌트 트랙(60%W 이상)·풀블리드로 제시. 목표는 재설계 처방표의 섹션 스토리보드 표에 "트랙 %W + 렌더 px" 수치 2개로 명기한다("크게" 류 정성 목표 무효). 물리 불변식(v0.8.1): 렌더 폭 <= 원본 natural 폭 - 처방이 업스케일이 되는 순간 오답이다. 도미넌트는 트랙의 속성이지 스트레치가 아니며, 트랙이 원본보다 넓으면 잔여 공간에 역할(프레임·여백)을 주거나 크롭하거나 고해상 자산을 요구한다.' }, name: 'Undersized Dense Imagery', koName: '과소 렌더 고밀도 이미지', description: '앱 스크린샷·차트처럼 정보가 많은 이미지를 읽을 수 없는 크기로 배치한다. 보여주는 시늉만 하고 아무것도 전달하지 않는다.', tell: '이미지의 정보밀도와 렌더 크기를 대조한 흔적이 없다. 슬롯 크기에 맞춰 이미지를 욱여넣었다.', whyDisliked: '실제 제품이라는 최고의 증거가 장식으로 소모되고, 판독 불가한 스크린샷은 오히려 신뢰를 깎는다.', severity: 'strong', cause: 'no-verify', aliases: ['illegible screenshot', '읽을 수 없는 스크린샷'], escape: [{ name: 'Focal Point', dict: 'layout' }, { name: 'Scale Contrast', dict: 'layout' }], source: '사용자 관찰 2026-07 (thegot 회차: 이미지 배치)' },
              { id: 'unscaled-radius-scale', detect: { kind: 'hybrid', signals: ['border-radius: *[0-9]+px', 'rounded-(sm|md|lg|xl|2xl|3xl)'], note: '신호는 후보 수집용(radius 값·유틸리티 열거). 판정은 측정형: 화면에 실제 쓰인 border-radius 고유값을 전부 나열해 종수를 세고, 그 값들이 공통 스케일/토큰에서 도출되는지 검사한다. 3종 이상이 스케일 없이 무근거 혼재(예: 6·8·10·12·14·999px 처럼 4/8 베이스도, 서로 배수·기하 관계도 아닌 임의값)하면 플래그. radius 는 위생이 아니라 타이포·간격과 동급의 스케일 규율 대상이다 - "px 값이라 슬롭 아님/0초 검사 제외" 는 오독이다(surf-tutorial 회차: radius 를 위생으로 빼서 검사조차 안 한 갭이 이 항목의 존재 이유). 경계: uniform-rounding-sizing 은 단일값 90%+ 획일(위계 부재), over-rounded-corners 는 요소 크기 대비 과대(24px+), 이 항목은 종수 과다 + 값끼리 도출 관계 부재. 셋은 동시 발화 가능. pill(999px)·원형(50%)은 의도적 형태 토큰이면 종수 집계에서 제외 가능(사유 기록). 처방 규칙(구속): 개별 반경 수정 금지 - radius 토큰을 2~3단 스케일로 선언하고 전 요소를 거기서 도출한다.' }, name: 'Unscaled Radius Scale', koName: '스케일 없는 라운드 체계', description: 'border-radius 값이 공통 스케일·토큰 없이 6·8·10·12·14·999px 처럼 여러 종으로 무근거 혼재한다. 어느 반경도 다른 반경에서 도출되지 않는다.', tell: 'radius 를 요소마다 눈대중으로 정한 흔적. 타이포·간격에는 스케일을 요구하면서 모서리 반경만 방치한 무결정이 그대로 드러난다.', whyDisliked: '값끼리 리듬이 없어 카드·버튼·인풋의 모서리가 미세하게 제각각이고, 반경을 설계한 적 없음이 누적 체감된다.', severity: 'weak', cause: 'no-constraint', aliases: ['arbitrary radius', 'radius token 부재', '눈대중 반경'], escapeNote: 'radius 를 2~3단 스케일 토큰으로 선언하고(예: sm 4 / md 8 / lg 16 + pill 999), 요소 크기별로 티어를 매핑한다. 개별 반경을 그때그때 고르지 말고 토큰에서만 도출한다. unscaled-spacing-ladder·unscaled-type-hierarchy 와 같은 계열(값 나열이 아니라 스케일 선언에서 도출)로 처방한다.', source: '사용자 관찰 2026-07 (surf-tutorial 회차: radius 스케일 규율)' },
              { id: 'meaningless-container-nesting', detect: { kind: 'hybrid', signals: ['<div[^>]*>\\s*<div', 'class(Name)?="[^"]*(wrapper|container|inner|media|box|holder)[^"]*"'], note: '판정은 측정형(DOM 대조): 래퍼 엘리먼트가 레이아웃에 실제 기여하는지 검사한다. 플래그 조건 - (1) 단일 자식만 감싸면서 자신은 grid/flex 컨텍스트도, padding/margin/배경/보더도, 포지셔닝도 부여하지 않는 빈 래퍼(예: .hero-media·.step-media 가 단 하나의 .ph 이미지만 감쌈), (2) className 은 있는데 그에 대응하는 CSS 셀렉터가 어디에도 정의되지 않음(스타일 0, 순수 흔적), (3) 동일 박스 모델을 반복 중첩(div>div>div 이 전부 같은 폭·무스타일). excessive-card-nesting 과 경계: 그쪽은 border·그림자를 가진 시각 카드의 3단 중첩(포장 과잉), 이 항목은 시각 표현조차 없는 유령 래퍼(레이아웃 기여 0). 정당한 경우 제외: 래퍼가 실제로 grid/flex 트랙을 만들거나, 반응형 분기 컨테이너이거나, 시맨틱 랜드마크(main/section/nav/article)이거나, 스크롤·접근성 컨테이너 역할이 있으면 기여로 인정. 처방 규칙(구속): 기여 0 래퍼는 삭제(언랩)가 정답이지 스타일을 새로 붙이는 것이 아니다.' }, name: 'Meaningless Container Nesting', koName: '무의미 컨테이너 네스팅', description: '레이아웃에 아무 기여도 하지 않는 빈 래퍼가 요소를 감싼다. CSS 셀렉터도 없는 className 이거나, 단일 자식 하나만 감싸는 유령 div 다.', tell: '"구조가 있는 척" 하려고 래퍼를 둘렀지만 그 래퍼는 그리드도 여백도 배경도 만들지 않는다. 마크업만 깊고 레이아웃은 얕다.', whyDisliked: 'DOM 을 열어보면 의미 없는 중첩이 드러나 자동 생성 흔적이 들키고, 유지보수 시 어느 래퍼가 진짜 역할을 하는지 매번 헤매게 된다.', severity: 'weak', cause: 'no-constraint', aliases: ['ghost wrapper', 'empty div nesting', '유령 래퍼'], escapeNote: '레이아웃에 기여하지 않는 래퍼는 삭제(언랩)한다. 래퍼를 남기려면 그리드/플렉스 트랙·여백·시맨틱 역할 중 하나를 실제로 부여한다. 새 스타일을 덧붙이는 대신 불필요한 층을 걷어내는 방향으로 고친다(리덕티브: 삭제 > 통합 > 축소 > 교체).', source: '사용자 관찰 2026-07 (surf-tutorial 회차: 빈 래퍼 = 레이아웃 기여 0)' },
              { id: 'inline-css-no-modularization', detect: { kind: 'hybrid', signals: ['<style[^>]*>', 'style="[^"]{40,}"', ':root\\s*\\{[^}]*--'], note: '판정은 측정형(파일 구조 대조): 스타일이 어디에 사는지, 토큰이 한 곳에 모였는지를 본다. 플래그 조건(다수 충족 시) - (1) 임베디드 <style> 블록이 다수(2개+)이거나 한 블록이 과대(수백 줄)인데 외부 .css 모듈(<link rel="stylesheet"> 또는 import "*.css")이 사실상 없다, (2) 선언 3개+ 의 긴 인라인 style="" 속성이 마크업 전반에 반복된다, (3) :root 커스텀 프로퍼티(디자인 토큰)가 없거나 여러 <style>·인라인에 흩어져 단일 tokens 소스로 집약되지 않는다. 셋 다 "값이 하드코딩으로 흩어져 단일 진원지가 없다" 는 유지보수·디자인 시스템 부재의 코드 서명이다. 위생 인접 예외 규칙(구속): 이 텔의 처방은 "화면이 달라 보여야" 기준의 예외다 - CSS 를 외부 모듈로 분리하고 토큰을 집약하는 것은 렌더가 동일해도 정당한 디자인 시스템 리팩토링이며, 별도 리팩토링 스텝으로 집행한다(일반 시각 발견처럼 Top·3초 예 로 올리지 않고, 회귀는 시각 동일성 = 렌더 패리티로 잡는다). meaningless-container-nesting 과 경계: 그쪽은 DOM 래퍼 아키텍처(HTML 층), 이 항목은 CSS 파일 아키텍처(스타일 층) - 동시 발화 가능. 정당한 경우 제외: 단일 파일 데모·의도된 self-contained 산출물(Artifact 류 CSP 인라인 강제)·프레임워크 스코프드 스타일(styled-components·CSS Modules·Vue scoped·Tailwind 유틸리티)은 모듈화의 다른 형태이므로 제외한다. 대상 프레임워크 idiom 을 홈 레포 기준으로 결함 처리 금지.' }, name: 'Inline CSS, No Modularization', koName: '인라인 CSS 비모듈화', description: '스타일이 임베디드 <style> 블록·긴 인라인 속성에 흩어져 있고 외부 CSS 모듈이 없다. :root 토큰도 없거나 여러 곳에 분산돼 색·간격·타이포를 한 곳에서 바꿀 단일 진원지가 없다.', tell: 'CSS 를 모듈(reset/tokens/layout/components)로 나눈 흔적이 없다. 한 파일에 통째로 생성된 뒤 손대지 않은 자동 생성물의 구조적 서명이며, 토큰 부재로 디자인 시스템의 기반이 없다.', whyDisliked: '지금 화면은 멀쩡해 보여도 유지보수·확장 시 디자인 시스템의 부재가 즉시 드러난다. 값이 흩어져 있어 일관성을 잡을 단일 진원지가 없고, 색 하나 바꾸려면 온 파일을 뒤져야 한다.', severity: 'weak', cause: 'no-constraint', aliases: ['embedded style everything', 'no external css', 'token 부재', '디자인 시스템 부재'], escapeNote: '인라인·임베디드 스타일을 외부 CSS 모듈로 분리한다(권장 4분할: reset / tokens / layout / components). :root 커스텀 프로퍼티(색·간격·타이포·radius 토큰)를 tokens 모듈에 집약해 단일 진원지로 만들고, 나머지 모듈은 그 토큰을 참조한다. 이 리팩토링은 렌더를 바꾸지 않아도 정당하다(위생 예외) - 이후 시각 수정(간격·타이포·색)이 이 토큰 위에서 이뤄지는 디자인 시스템 기반이 된다. 프레임워크면 그 스택의 모듈화 관례(CSS Modules·styled-components·토큰 파일)를 따른다.', source: '사용자 관찰 2026-07 (다중예제 라운드1: CSS 모듈화 부재 = 디자인 시스템 부재)' },
              { id: 'unbalanced-void-after-deletion', detect: { kind: 'judgment', note: '회귀형 텔(삭제 처방 직후 검사, 양의 구성 축). 요소(목업·필러 카드·좌border 장식·중복 CTA)를 삭제한 뒤 그 자리에 생긴 공간이 재구성됐는지 본다. 플래그 조건 - (1) 2열/split 에서 한쪽을 제거했는데 남은 열의 폭·정렬을 재산정하지 않아 반대쪽에 죽은 void 가 남음(히어로 우측 빈 구멍이 대표형), (2) 트랙 정의가 콘텐츠 수보다 많아 빈 그리드셀이 남음 - 카드/블록을 뺐는데 그리드 템플릿은 그대로라 생긴 셀만이 아니라, 삭제가 없어도 균등 그리드가 실제 콘텐츠보다 칸을 많이 잡아 빈 칸(또는 필러·플레이스홀더로 때운 칸)이 남는 경우를 포함(빈 그리드셀은 트랙을 콘텐츠 수에 맞춰 재정의해 없앤다), (3) 삭제 후 남은 콘텐츠가 원위치에 방치돼 중심·무게가 한쪽으로 무너짐. 판정 기준(구속): "깨끗하게 비었다" 는 통과가 아니다 - 삭제는 리덕티브 사다리의 수단이지 구성의 완료가 아니며, 시니어의 눈은 삭제된 깨끗함이 아니라 의도적으로 구성된 균형을 본다. unpartitioned-space 와 경계: 그쪽은 분할 체계 부재 전반, 이 항목은 특히 삭제 직후 남은 공간의 미재구성이다(동시 발화 가능). left-skewed-uncomposed 와 경계: 그쪽은 삭제와 무관한 최초 쏠림, 이 항목은 삭제가 만든 void. 처방 규칙(구속): 재구성은 장식 추가가 아니다 - 오브·그라디언트·새 카드로 구멍을 메우지 말고 기존 콘텐츠의 재중앙·재비율(2열->1열 폭 재산정)·재그루핑·재정렬로만 균형을 회복한다.' }, name: 'Unbalanced Void After Deletion', koName: '삭제 후 미재구성 여백', description: '목업·필러 카드·좌border 장식 같은 요소를 삭제한 뒤 그 자리에 생긴 죽은 여백을 재구성하지 않아, 히어로 우측 등에 빈 구멍이 남는다.', tell: '삭제는 리덕티브하게 했는데 남은 공간의 재중앙·재비율·재정렬을 아무도 하지 않았다. "빈 채로 두면 깨끗하다" 를 완료로 착각한 흔적.', whyDisliked: '빈 구멍은 완성이 아니라 "덜 만들다 만" 미완의 신호로 읽힌다. 시니어 UI 디자이너가 삭제만 한 결과물을 즉시 미완으로 지목하는 지점.', severity: 'strong', cause: 'no-verify', aliases: ['dead void after removal', '삭제 잔여 구멍', 'hero right void'], escapeNote: '삭제는 구성의 시작이지 끝이 아니다 - 요소를 뺀 뒤 반드시 남은 공간을 재구성한다: 남은 콘텐츠를 재중앙·재비율(2열을 1열로 줄였으면 폭을 다시 산정)·재그루핑해 균형을 회복한다. 단 재구성 != 장식 추가 - 오브·그라디언트·새 카드로 구멍을 메우지 말고 기존 콘텐츠의 재배치·재정렬·트랙 재분할로만 채운다.', source: '사용자 관찰 2026-07 (surf-tutorial 사이클1: 삭제 후 히어로 우측 void 방치)' },
              { id: 'left-skewed-uncomposed', detect: { kind: 'hybrid', signals: ['justify-content: *flex-start', 'text-align: *left', 'align-items: *flex-start'], note: '신호는 후보 수집용(좌정렬·상단정렬 선언 열거, 양의 구성 축) - 좌정렬 자체는 정상이므로 신호 단독 판정 금지. 판정은 측정형(판독): 섹션의 콘텐츠 무게중심이 한쪽(주로 좌·상)에 쏠리고 반대쪽 40%+ 가 콘텐츠·의도된 여백 위계 없이 비어 있는지 본다. 핵심 구분 - 의도적 비대칭 균형(asymmetric balance: 빈 쪽이 시선 유도·무게추·호흡으로 설계됨)은 정당하고, 무구성 쏠림(content-fit 으로 좌측에 붙이고 남는 공간 방치)만 플래그다. centered-hero-default 와 경계: 그쪽은 중앙 수렴, 이 항목은 한쪽 쏠림 + 반대쪽 void - 둘 다 구성을 결정하지 않은 무결정의 다른 발현이다. undisciplined-grid 와 동시 발화 가능(관통선 부재가 쏠림으로 드러남). 처방 규칙(구속): 빈 쪽을 장식으로 메우지 말고 비대칭 균형으로 재구성한다.' }, name: 'Left-Skewed Uncomposed', koName: '좌편향 무구성', description: '콘텐츠가 화면 좌측·상단 한쪽으로 쏠리고 반대쪽(주로 우측)은 의도 없이 비어 있다. 비대칭이지만 asymmetric balance 가 아니라 무구성의 산물이다.', tell: '요소를 content-fit 으로 왼쪽에 붙이고 남는 공간을 방치했다. 무게추·시선 유도로 설계된 비대칭이 아니라 "결정하지 않아 한쪽에 몰린" 쏠림이다.', whyDisliked: '의도적 비대칭 균형은 긴장감을 주지만 무구성 쏠림은 그냥 "덜 만들다 만" 인상을 준다. 균형 감각이 있는 눈에 반대쪽 void 가 즉시 걸린다.', severity: 'strong', cause: 'no-constraint', aliases: ['accidental skew', 'uncomposed asymmetry', '한쪽 쏠림'], escapeNote: '한쪽 void 를 장식으로 메우지 말고(오브·그라디언트 금지) 비대칭 균형으로 재구성한다: 빈 쪽에 기존 콘텐츠의 무게추(보조 정보·이미지·여백 위계)를 재배치하거나, 콘텐츠 폭·정렬을 재산정해 트랙을 채운다. 균형은 대칭이 아니라 시각 무게의 의도적 배분이다 - 빈 쪽에도 역할(호흡·시선 유도)을 명시적으로 준다.', source: '사용자 관찰 2026-07 (surf-tutorial 사이클1: 좌편향 무구성)' },
              { id: 'default-equal-thirds', detect: { kind: 'hybrid', signals: ['grid-template-columns: *(1fr ?){3}', 'grid-cols-3', 'repeat\\(3, ?1fr\\)'], note: '신호는 후보 수집용(3등분 그리드 선언 열거, 양의 구성 축) - 3등분 자체는 정당하므로 신호 단독 판정 금지. 판정 기준(구속): 칸 크기가 우선순위를 담는가, 아니면 결정 회피의 반사인가. 영역의 세 항목이 실제로 동등 중요도면 정당하고, 무엇이 더 중요한지 결정하기 어려워 반사적으로 균등분할했으면 플래그. 균형을 "같은 크기" 로 오해한 무결정이 정체다. icon-top-three-cards 와 경계: 그쪽은 특정 콘텐츠 패턴(아이콘+제목+설명 카드 3개), 이 항목은 영역 구성 전반의 균등 N등분 반사(카드가 아니어도, 3 아닌 균등분할도 포함). uniform-rounding-sizing(동일 크기·반경 획일)·bento-overuse 와 동시 발화 가능. 처방 규칙(구속): 새 요소를 더하지 말고 기존 항목의 상대 크기·배치만 재비율한다.' }, name: 'Default Equal Thirds', koName: '근거 없는 균등분할', description: '우선순위를 정하지 않은 영역을 반사적으로 동일 크기 3등분(또는 균등 N등분) 카드로 나눈다. 균형을 "같은 크기" 로 오해한 결과다.', tell: '무엇이 더 중요한지 결정하기 어려울 때 균등분할로 도망친다. 칸 크기가 콘텐츠 우선순위의 함수가 아니라 "정하지 않기로 한" 흔적이다.', whyDisliked: '셋이 늘 동등해 시선이 멈출 곳이 없고, 균형이 "의도된 무게 배분" 이 아니라 "결정 회피" 로 읽힌다.', severity: 'weak', cause: 'underspec', aliases: ['reflexive equal split', '균등분할 반사', 'default 3-col'], escapeNote: '균등분할 대신 우선순위 기반 비대칭 구성으로 재비율한다: 가장 중요한 하나를 dominant 트랙(예: 2fr)에 두고 나머지를 보조 트랙으로 재배치한다. 새 요소를 더하지 말고(장식 금지) 기존 항목의 상대 크기·배치만 재구성한다. 균형 = 같은 크기가 아니라 우선순위에 따른 시각 무게의 배분.', source: '사용자 관찰 2026-07 (surf-tutorial 사이클1: 균등분할 반사)' },
            ],
          },
        ],
      },
    ],
  },

  // ================================================================
  // Part 4: 컴포넌트 · UI 키트
  // ================================================================
  {
    id: 'slop-part-4',
    number: 4,
    label: '컴포넌트 · UI 키트',
    description: '특정 라이브러리 디폴트와 정형 컴포넌트, 로그인 이후 화면의 생성 디폴트가 그대로 노출되는 신호',
    type: 'ai-slop',
    count: 16,
    categories: [
      {
        id: 'slop-cat-7',
        number: 7,
        name: 'Kit Defaults',
        subtitle: 'UI 키트 디폴트',
        definition: '스타일 개입 없이 라이브러리 기본 룩이 그대로 드러나는 클리셰.',
        count: 8,
        groups: [
          {
            label: null,
            items: [
              { id: 'shadcn-default', detect: { kind: 'hybrid', signals: ['rounded-(xl|2xl)|zinc-[89]00'], note: 'shadcn/v0 기본값은 중립 zinc/black 계열(purple 편향과 별개). 동일 radius+뉴트럴 회색+고스트 버튼 세트의 무커스텀 노출일 때. MUI 프로젝트에선 보통 해당 없음' }, previewSpec: { type: 'beforeAfter', left: { label: 'Slop', spec: { type: 'repeat', cols: 2, count: 4, labels: ['디폴트 버튼', '디폴트 카드', '디폴트 인풋', '디폴트 배지'] } }, right: { label: 'Escape', spec: { type: 'split', dir: 'row', ratio: [1.8, 1, 1, 1], labels: ['FilledCard (브랜드 토큰)', '8px', '16px', '24px'] } } }, name: 'shadcn Default Look', koName: 'shadcn 디폴트', description: 'shadcn/ui 기본 스타일을 한 줄도 손대지 않고 그대로 노출한다.', tell: 'AI 에이전트가 복붙하도록 설계된 키트라 개입 없는 페이지가 동일 룩으로 수렴한다.', whyDisliked: '"AI 인터페이스의 비공식 깃발" 로 불릴 만큼 출처가 빤히 보인다.', severity: 'strong', cause: 'underspec', escape: [{ name: 'Padding Scale', dict: 'layout' }, { name: 'FilledCard', dict: 'design' }], source: 'The Fountain Institute' },
              { id: 'lucide-only-icons', detect: { kind: 'hybrid', signals: ['lucide-react'], note: '주의: 이 프로젝트는 design-system 룰이 lucide 를 표준 채택했으므로 사용 자체는 신호 아님. 커스텀 아이콘 0 + 장식 목적 남용일 때만' }, previewSpec: { type: 'beforeAfter', left: { label: 'Slop', spec: { type: 'repeat', cols: 4, count: 8, label: 'Lucide 24px' } }, right: { label: 'Escape', spec: { type: 'split', dir: 'row', ratio: [1.4, 1], labels: ['브랜드 커스텀 SVG', '필요한 곳만 모션'] } } }, name: 'Lucide-Only Icons', koName: 'Lucide 아이콘 일색', description: 'shadcn 기본 아이콘 세트(Lucide)나 Hero Icons 만 일관되게 쓴다.', tell: '커스텀·혼용 없이 단일 세트라 키트 디폴트가 그대로 보인다.', whyDisliked: '브랜드 아이콘 언어가 없어 어디서 본 듯한 인상을 준다.', severity: 'weak', cause: 'underspec', escape: [{ name: 'SVGMorphing', dict: 'design' }], source: 'The Fountain Institute' },
              { id: 'pill-eyebrow-badge', detect: { kind: 'hybrid', signals: ['rounded-full|borderRadius: *(999|9999)'], note: '히어로 헤드라인 바로 위 위치일 때만' }, previewSpec: { type: 'beforeAfter', left: { label: 'Slop', spec: { type: 'areas', cols: '1fr 2fr 1fr', rows: 'repeat(3, 1fr)', areas: ['. a .', '. b .', '. c .'], labels: { a: '알약 배지 (New!)', b: '헤드라인', c: '서브카피' } } }, right: { label: 'Escape', spec: { type: 'areas', cols: '1fr 2fr 1fr', rows: '1fr 1.6fr 1fr', areas: ['. . .', '. m .', '. . .'], labels: { m: '헤드라인 자체가 초점 (배지 없음)' } } } }, name: 'Pill Eyebrow Badge', koName: '헤드라인 위 알약 라벨', description: '오버사이즈 헤드라인 바로 위에 작은 대문자 pill chip 을 단다.', tell: '"default AI SaaS hero" 의 고정 부품.', whyDisliked: '거의 모든 AI 랜딩이 같은 자리에 같은 알약을 단다.', severity: 'strong', cause: 'median', escape: [{ name: 'Focal Point', dict: 'layout' }], source: 'developersdigest' },
              { id: 'colored-left-border-cards', detect: { kind: 'code', signals: ['borderLeft: *.[2-6]px solid|border-l-4'], note: '좌측 3~4px 컬러 스트라이프는 패턴 자체가 AI 대표 티다(비디자이너 AI 디자인의 가장 흔한 강조 흉내). 처방 함정 명문화(surf-tutorial 회차 실패): 처방을 "줄 색만 교체" 로 내면 패턴은 그대로 남아 회피가 된다 - 도구가 재색으로 빠져나간 실전 실패 사례. 좌border 패턴은 삭제가 정답이고, 재색은 티인 패턴을 유지한 채 도망치는 것이다. 강조가 필요하면 좌border 가 아니라 figure-ground(명도·배경층 분리)·elevation(그림자)·크기·여백 위계로 만든다.' }, previewSpec: { type: 'beforeAfter', left: { label: 'Slop', spec: { type: 'repeat', cols: 1, count: 3, label: '좌측 컬러 스트라이프 + 카드' } }, right: { label: 'Escape', spec: { type: 'areas', cols: '1fr 2fr 1fr', rows: '1fr 1.4fr 1fr', areas: ['g g g', '. m .', 'b b b'], labels: { g: '일반 카드 (배경층)', m: '강조 카드 (명도·그림자 분리)', b: '일반 카드' } } } }, name: 'Colored Left Border Cards', koName: '카드 좌측 컬러 스트라이프', description: '카드·인용구 왼쪽 가장자리에 3~4px 색 줄을 일괄로 넣는다.', tell: '강조 장치가 없을 때 좌측 스트라이프로 때우는 디폴트. 좌측 컬러 줄 패턴 자체가 티라, 줄 색만 바꿔 다는 재색은 회피이고 삭제가 정답이다.', whyDisliked: '모든 카드가 같은 장식을 달아 위계가 평탄해지고, AI 가 강조를 흉내 낸 대표 흔적으로 즉시 읽힌다.', severity: 'weak', cause: 'median', aliases: ['left accent stripe', '좌측 컬러 보더'], escape: [{ name: 'Figure-Ground', dict: 'layout' }], escapeNote: '좌border 카드는 삭제한다(재색 금지). 줄 색만 교체하는 것은 티인 패턴을 남기는 회피다. 강조는 figure-ground(명도·배경층·그림자로 카드를 분리)와 크기·여백 위계로 만든다.', source: 'developersdigest, 사용자 관찰 2026-07 (surf-tutorial 회차: 재색 회피 실패)' },
              { id: 'dead-cta', detect: { kind: 'code', signals: ['href="#"', "href=.#."], note: '빈 onClick 핸들러 포함. 검증 부재(no-verify)의 대표 신호' }, previewSpec: { type: 'beforeAfter', left: { label: 'Slop', spec: { type: 'split', dir: 'col', ratio: [1.6, 1], labels: ['히어로 + Get Started CTA', '클릭해도 아무 데도 안 감 (href=\"#\")'] } }, right: { label: 'Escape', spec: { type: 'split', dir: 'col', ratio: [1.6, 1], labels: ['CTA 는 실제 목적지에 연결', 'hover·loading·disabled 상태 정의'] } } }, name: 'Dead "Get Started" CTA', koName: '작동 안 하는 CTA', description: '"Get Started" 버튼이 아무 데도 안 가거나 같은 페이지로 루프한다.', tell: '생성 후 클릭을 점검하지 않은 흔적.', whyDisliked: '실제로 동작하지 않아 신뢰를 즉시 무너뜨린다.', severity: 'strong', cause: 'no-verify', escape: [{ name: 'Button', dict: 'design' }], source: 'developersdigest, The Fountain Institute' },
              { id: 'emoji-icon-navigation', detect: { kind: 'code', signals: ['[🏠🚀💎📞⚡🔥🎯🎉]'], note: 'nav·헤딩·불릿 텍스트 노드 한정 판정. 정식 검출은 Unicode Emoji_Presentation 프로퍼티 regex. 이미지로 렌더된 이모지는 grep 밖' }, previewSpec: { type: 'beforeAfter', left: { label: 'Slop', spec: { type: 'split', dir: 'row', ratio: [1, 1, 1, 1], labels: ['🏠 홈', '🚀 기능', '💎 가격', '📞 문의'] } }, right: { label: 'Escape', spec: { type: 'split', dir: 'row', ratio: [1, 1, 1, 1], labels: ['홈', '기능', '가격', '문의'] } } }, name: 'Emoji Icon Navigation', koName: '이모지 네비게이션', description: '사이드바·네브바에 아이콘 대신 이모지를 쓴다.', tell: '아이콘 시스템을 만들지 않고 이모지로 대체한 흔적.', whyDisliked: '플랫폼마다 다르게 렌더되고 장난스러워 신뢰를 깎는다.', severity: 'weak', cause: 'no-constraint', escape: [{ name: 'NavigationMenu', dict: 'design' }], source: 'developersdigest' },
              { id: 'sparkle-ai-branding', detect: { kind: 'code', signals: ['✨|Sparkles'], note: '4각 별 SVG·lucide Sparkles 아이콘이 AI 기능 라벨마다 반복될 때. 2026 실무자 피로 트렌드 (Slate 2025-12, Creative Boom 2026)' }, previewSpec: { type: 'beforeAfter', left: { label: 'Slop', spec: { type: 'typeSpec', samples: [{ text: '✨ AI 어시스턴트', size: '1rem', weight: 700 }, { text: '✨ AI 요약 · ✨ AI 추천 · ✨ AI 검색', size: '0.8rem', dim: true }] } }, right: { label: 'Escape', spec: { type: 'typeSpec', samples: [{ text: '기능 실체를 담은 이름 + 전용 아이콘', size: '1rem', weight: 700 }, { text: '스파클 글리프는 금지 목록에 올립니다', size: '0.8rem', dim: true }] } } }, name: 'Sparkle AI Branding', koName: '4각 스파클 AI 브랜딩', description: 'AI 기능마다 4각 별 스파클 글리프와 그라디언트를 붙이는 2024-2025 업계 공통 반사.', tell: '스파클 이모지·4-point star SVG 가 AI 기능 표시마다 반복된다.', whyDisliked: '모든 AI 제품이 같은 글리프를 써서 차별화가 0 이 된다.', severity: 'weak', cause: 'median', escapeNote: '기능의 실체를 나타내는 전용 아이콘과 이름을 만들고, 스파클 글리프는 금지 목록에 올린다.', source: 'slate.com, creativeboom.com' },
              { id: 'decorative-status-dots', detect: { kind: 'judgment', note: '내비 항목·카드 헤더·섹션 타이틀 옆에 실제 상태와 무관한 색색 점을 장식으로 붙임. 리서치가 명시적으로 candidate new taxonomy item 으로 지목. 실제 상태 표시(온라인/에러 등)는 제외.' }, name: 'Decorative Status Dots', koName: '장식용 상태 점', description: '내비·카드 헤더·라벨 옆에 초록/주황 점을 붙이지만 어떤 상태도 나타내지 않는 순수 장식이다.', tell: '"실시간/활성" 느낌만 흉내 내려 상태 점을 장식으로 뿌린다. 의미 없는 신호.', whyDisliked: '진짜 상태 표시와 혼동을 일으키고, 대시보드처럼 보이려는 겉치레로 읽힌다.', severity: 'weak', cause: 'no-constraint', aliases: ['fake status dot', 'decorative indicator'], escapeNote: '점은 실제 상태(온라인·경고·진행)에만 쓴다. 장식이 목적이면 제거하고 타이포·여백으로 구분한다.', source: 'deep-research 2026-07 (meaningless colored status dots, flagged candidate)' },
            ],
          },
        ],
      },
      {
        id: 'slop-cat-14',
        number: 14,
        name: 'In-App UI Defaults',
        subtitle: '제품 내부 UI 디폴트',
        definition: '로그인 이후 화면(대시보드·리스트·설정)에서 드러나는 생성 디폴트. 랜딩 클리셰보다 늦게 명명된 축으로, 판정 기준은 데이터·상태·위계가 실사용의 함수인가다.',
        count: 8,
        groups: [
          {
            label: null,
            items: [
              { id: 'rainbow-status-list', detect: { kind: 'hybrid', signals: ['bg-(green|red|yellow|blue|orange|purple|pink)-[0-9]{3}', '(badge|status|chip|tag)'], note: '측정형: 리스트·테이블의 상태 표시가 쓰는 고유 유채색 수를 세서 3종 이상 + "정상/normal/완료" 같은 무사건 상태에도 유채색이면 플래그. 색이 심각도의 함수(오류=적, 경고=황, 정상=회색)로 환원되면 정당. StyleSeed 저자가 자기 룰("vary status states through color diversity")이 무지개를 가르치고 있었다고 고백한 사례라, 수정 시 대상 프로젝트의 스타일 가이드 문구도 함께 점검한다.' }, name: 'Rainbow Status List', koName: '무지개 상태 리스트', description: '리스트의 모든 행이 서로 다른 색 배지를 단다. 아무 일 없는 "정상" 행까지 색이 입혀져 있다.', tell: '색은 "여기 봐라" 신호인데 전 행을 칠하면 신호가 사라진다. 학습된 "시각적 다양성" 규칙이 의미 체계를 덮어쓴 흔적.', whyDisliked: '진짜 주의가 필요한 행이 묻히고, 색이 정보가 아니라 장식임이 드러난다.', severity: 'strong', cause: 'no-constraint', escapeNote: '상태 색 = 심각도 전용으로 재정의한다. 정상은 회색, 유채색은 주의·오류에만. 장식 목적의 색 다양성은 금지.', source: 'StyleSeed/kiwibreaksme (DEV) 2026-07-02' },
              { id: 'democracy-of-metrics', detect: { kind: 'judgment', note: '측정형(지표 위젯 클러스터 한정): KPI 카드 4개 이상이 면적·숫자 폰트 크기 모두 동일하면 플래그. "대문자 오버라인 + 대형 숫자" 카드가 전 KPI 에 동일 반복되는 것(StyleSeed CC-9c "repeated identically for every KPI")이 대표 발현형. 이중 발화 경계: suffocating-density 와 동시 발화 가능하나 이 항목은 지표 위젯만 보고 처방도 다르다(이 항목 = 핵심 지표 1개의 시각 승격, density = 여백·호흡).' }, name: 'Democracy of Metrics', koName: '지표 민주주의', description: '4x3 균일 카드 그리드에 모든 KPI 가 동일 크기·스타일로 나열된다. 가장 중요한 숫자가 나머지와 똑같이 보인다.', tell: '"clean = 균일 그리드" 라는 평균값으로 수렴해 지표 간 위계를 결정한 흔적이 없다.', whyDisliked: '실무자가 대시보드 약 30개를 리디자인하며 반복 지목: 핵심 지표(churn)가 다른 11개와 똑같이 보이면 대시보드가 아니라 표다.', severity: 'strong', cause: 'median', aliases: ['uppercase-overline big-number card'], escapeNote: '가장 중요한 지표 1개를 크기·위치로 승격하고 나머지는 보조 티어로 강등한다. 모든 지표가 동등하면 아무것도 중요하지 않다.', source: 'V.Mehta/Bootcamp Medium 2026-03, StyleSeed 2026-07' },
              { id: 'placeholder-data-shipped', detect: { kind: 'code', signals: ['[Ll]orem [Ii]psum', 'User Name|John Doe|Jane Doe|홍길동', 'Item [123]\\b'], note: '사용자 노출 렌더 텍스트 한정(테스트 픽스처·스토리북 파일은 제외). 데이터가 레이아웃을 좌우한다: $4.99 와 $12,847.32 는 다른 공간을 쓰고, 샘플 데이터 없이 만든 차트는 비율이 틀린다. 실데이터 없이 레이아웃만 생성해 그대로 출고한 흔적.' }, name: 'Placeholder Data Shipped', koName: '플레이스홀더 데이터 출고', description: 'Lorem Ipsum, "User Name", "Item 1/2/3", 비현실적 차트 비율이 화면에 그대로 노출된다.', tell: '실데이터의 분포(최장·최단·빈 값)로 레이아웃을 검증한 적이 없다.', whyDisliked: '한 칸이라도 발견되는 순간 화면 전체가 목업으로 읽혀 신뢰가 무너진다.', severity: 'strong', cause: 'underspec', escapeNote: '현실 분포를 반영한 샘플 데이터(최장·최단·빈 값·극단값)를 먼저 정의하고 그 데이터로 레이아웃을 검증한 뒤 출고한다.', source: 'GenDesigns, 0xminds 2026' },
              { id: 'everything-is-a-modal', detect: { kind: 'hybrid', signals: ['(Modal|Dialog|confirm)\\(', 'toast'], note: '복구 가능한 액션까지 확인 모달로 감싸고 toast 를 남발할 때. 복구 불가 액션(삭제·결제)의 확인은 정당. 국내 실무(토스)는 불필요한 팝업을 기획 단계에서 잘라낸다.' }, name: 'Everything Is a Modal', koName: '전부 모달 처리', description: '모든 액션에 확인 모달이 뜨고 성공할 때마다 toast 가 쌓인다.', tell: '액션별 위험도를 분류한 흔적 없이 "확인 = 안전" 디폴트가 일괄 적용됐다.', whyDisliked: '흐름이 매번 끊겨 도구가 아니라 관문처럼 느껴진다.', severity: 'weak', cause: 'no-constraint', escapeNote: '복구 가능한 액션은 즉시 실행 + 실행 취소(undo)로, 모달은 복구 불가·파괴적 액션에만 쓴다.', source: '0xminds, 토스 UX라이팅 2026' },
              { id: 'missing-states', detect: { kind: 'hybrid', signals: ['isLoading|Skeleton|EmptyState'], note: '부재 기반 판정: 신호 grep 은 존재 확인용이고, 데이터 뷰(테이블·리스트·차트) 대비 loading/empty/error 처리 부재가 텔(missing-micro-interactions 와 같은 방식). 성공 상태만 생성된 화면은 신규 유저·느린 네트워크·오류에서 무너진다("테이블은 비면 무너진다").' }, name: 'Missing States', koName: '상태 누락', description: '성공 상태만 있고 loading/empty/error 상태가 설계되지 않았다.', tell: '해피패스만 생성하고 상태 매트릭스를 검증하지 않은 흔적.', whyDisliked: '데이터가 없거나 느린 실사용 첫 순간에 빈 화면·깨진 화면이 나온다.', severity: 'weak', cause: 'no-verify', escapeNote: '모든 데이터 뷰에 loading/empty/error 3상태를 명시 설계한다. empty 는 다음 행동 안내를 담는다.', source: '0xminds 2026' },
              { id: 'waiting-room-dashboard', detect: { kind: 'judgment', note: '신규 유저 시점 검사: 데이터 0 상태에서 첫 화면이 빈 카드 여러 개 + 추세선 없는 그래프 + 구석의 할 일 목록이면 플래그. 필드서비스 SaaS 사용자가 9개 요약 위젯을 무시하고 오늘의 작업으로 직행한 사례가 근거. missing-states(empty 미설계)와 결합 빈도 높음.' }, name: 'Waiting-Room Dashboard', koName: '대기실 대시보드', description: '신규 유저의 첫 화면이 빈 요약 카드와 데이터 없는 그래프로 채워져 있고, 정작 할 일은 구석에 있다.', tell: '활동이 없는 유저에게 요약 화면을 강제한다. "대시보드 = 홈" 이라는 템플릿 반사.', whyDisliked: '"제품 경험이 아니라 대기실을 만들었다" 는 원문 그대로, 첫 세션에서 제품이 비어 보인다.', severity: 'weak', cause: 'underspec', escapeNote: '첫 화면을 사용자의 첫 작업(오늘 할 일·시작 가이드)으로 설계하고, 요약 대시보드는 데이터가 쌓인 뒤 의미를 갖는 위치로 옮긴다.', source: 'RedStudio.ie 2026' },
              { id: 'icon-only-sidebar', detect: { kind: 'hybrid', signals: ['(aside|Sidebar)'], note: '사이드바 내비 항목이 아이콘만이고 텍스트 라벨이 없을 때. 접힘 상태의 아이콘 온리(펼치면 라벨)와 보편 관용 아이콘(홈·설정) 소수는 정당. 비전문 유저가 의미를 추측해야 하는 도메인 아이콘의 라벨 생략이 텔.' }, name: 'Icon-Only Sidebar', koName: '라벨 없는 아이콘 사이드바', description: '사이드바에 아이콘만 나열되고 텍스트 라벨이 없다.', tell: '"미니멀 = 라벨 제거" 디폴트. 유저가 아이콘을 학습해야 한다는 비용을 계산한 흔적이 없다.', whyDisliked: '비전문 유저가 매번 아이콘 뜻을 추측해야 하고, 실무 리디자인에서 라벨 추가가 단골 처방이다.', severity: 'weak', cause: 'no-constraint', escapeNote: '내비 항목에 텍스트 라벨을 병기한다. 공간이 좁으면 접힘/펼침으로 해결하고 기본 상태에 라벨을 남긴다.', source: 'Eleken(LogitudeWorld) 2026' },
              { id: 'meaningless-decorative-chart', detect: { kind: 'judgment', note: '차트가 답하는 질문이 없으면 플래그: 축·기간·단위 없는 스파크라인, 데이터 2~3점짜리 파이, 벤토 칸을 채우는 장식 그래프, 하락 추세인데 아무도 언급하지 않는 주간활성 라인(Uizard 류 클러터). 실지표·실질문에 연결된 차트는 정당. bento-overuse 와 결합 빈도 높음.' }, name: 'Meaningless Decorative Chart', koName: '무의미 장식 차트', description: '아무 질문에도 답하지 않는 차트가 "데이터 있는 제품" 느낌을 내려고 칸을 채운다.', tell: '데이터 티를 내려는 장식용 차트("chart that does not contribute to anything").', whyDisliked: '읽으려는 순간 정보가 없음이 드러나 화면 전체의 신뢰를 깎는다.', severity: 'weak', cause: 'no-constraint', escapeNote: '차트마다 "이 그림이 답하는 질문" 을 한 문장으로 적지 못하면 삭제한다. 지표는 숫자 + 증감 한 줄이 장식 차트보다 낫다.', source: 'slopless.design(Malewicz), Uizard 관찰 2026' },
            ],
          },
        ],
      },
    ],
  },

  // ================================================================
  // Part 5: 일러스트 · 이미지
  // ================================================================
  {
    id: 'slop-part-5',
    number: 5,
    label: '일러스트 · 이미지',
    description: '생성 이미지 특유의 매끈함·과렌더링·해부 오류 신호',
    type: 'ai-slop',
    count: 6,
    categories: [
      {
        id: 'slop-cat-8',
        number: 8,
        name: 'Generated Imagery',
        subtitle: '생성 이미지',
        definition: '생성 모델 특유의 룩과 결함이 그대로 노출되는 클리셰.',
        count: 6,
        groups: [
          {
            label: null,
            items: [
              { id: 'corporate-memphis', detect: { kind: 'judgment', note: '이미지 육안 판정: 얼굴 없는 인물, 과장된 사지, 플랫 파스텔' }, previewSpec: { type: 'beforeAfter', left: { label: 'Slop', spec: { type: 'image', src: '/dictionary/slop-previews/corporate-memphis.jpg', label: '코퍼릿 멤피스 재현' } }, right: { label: 'Escape', spec: { type: 'image', src: 'https://nufykiziszkpvfwgpdzr.supabase.co/storage/v1/object/public/visual-asset/taxonomy/printmaking-drawing/linocut.jpg', label: 'Linocut (visual 사전 실물 샘플)' } } }, name: 'Corporate Memphis', koName: '코퍼릿 멤피스', description: '작은 머리에 길고 구부러진 사지, 얼굴 없는 인물이 춤추는 플랫 일러스트와 비현실 피부톤.', tell: '2017 Facebook Alegria 발 과포화 스타일이 디폴트로 굳었다.', whyDisliked: '개성을 지운 "글로벌 무난체" 라 조롱의 대상이 된 지 오래다.', severity: 'strong', cause: 'median', aliases: ['Alegria', 'Big Tech Art'], escape: [{ name: 'Linocut', dict: 'visual' }, { name: 'Risograph', dict: 'visual' }], source: 'Wikipedia, Webflow' },
              { id: 'plastic-ai-illustration', detect: { kind: 'judgment', note: '광택 플라스틱 질감·무텍스처 육안 판정' }, previewSpec: { type: 'beforeAfter', left: { label: 'Slop', spec: { type: 'image', src: '/dictionary/slop-previews/plastic-ai-illustration.jpg', label: '플라스틱 AI 일러스트 재현' } }, right: { label: 'Escape', spec: { type: 'image', src: 'https://nufykiziszkpvfwgpdzr.supabase.co/storage/v1/object/public/visual-asset/taxonomy/printmaking-drawing/etching.jpg', label: 'Etching (visual 사전 실물 샘플)' } } }, name: 'Plastic AI Illustration', koName: '플라스틱 AI 일러스트', description: '약간 너무 매끈하고 너무 대칭이며 플라스틱 질감에 완벽한 조명을 가진 일러스트.', tell: '손맛·불완전성이 없어 "사람이 그린 적 없음" 이 드러난다.', whyDisliked: '균질한 완벽함이 차갑고 가짜처럼 느껴진다(uncanny).', severity: 'strong', cause: 'underspec', escape: [{ name: 'Etching', dict: 'visual' }, { name: 'Woodcut', dict: 'visual' }], source: 'UX Planet' },
              { id: 'octane-blob-neon', detect: { kind: 'judgment', note: '다크 위 무지갯빛 블롭 렌더 육안 판정' }, previewSpec: { type: 'beforeAfter', left: { label: 'Slop', spec: { type: 'image', src: '/dictionary/slop-previews/octane-blob-neon.jpg', label: '옥테인 블롭·네온 재현' } }, right: { label: 'Escape', spec: { type: 'image', src: 'https://nufykiziszkpvfwgpdzr.supabase.co/storage/v1/object/public/visual-asset/taxonomy/tone-shading/flat-fill.jpg', label: 'Flat Fill (visual 사전 실물 샘플)' } } }, name: 'Octane 3D Blob / Neon Render', koName: '옥테인 3D 블롭·네온 렌더', description: '발광 네온, 옥테인 렌더 글로시 3D 오브·블롭을 배경 비주얼로 쓴다.', tell: 'Midjourney·생성 3D 의 시그니처 룩.', whyDisliked: '내용과 무관한 장식이라 공허하고 양산형으로 읽힌다.', severity: 'weak', cause: 'median', escape: [{ name: 'Flat Fill', dict: 'visual' }], source: 'developersdigest' },
              { id: 'ai-stock-smoothness', detect: { kind: 'judgment', note: '손·눈·배경 텍스트 확대 검사 (모공 없는 피부, 손가락 수, 뭉개진 글자)' }, previewSpec: { type: 'beforeAfter', left: { label: 'Slop', spec: { type: 'image', src: '/dictionary/slop-previews/ai-stock-smoothness.jpg', label: 'AI 스톡 매끈함 재현' } }, right: { label: 'Escape', spec: { type: 'split', dir: 'col', ratio: [1.6, 1], labels: ['실제 인물·실제 현장 사진', '보정은 노출·색까지만 (결함 은폐 금지)'] } } }, name: 'AI Stock Smoothness & Anatomy Glitches', koName: 'AI 스톡 매끈함·해부 오류', description: '과한 조명, 어긋난 비율, 손가락·텍스트 깨짐, 플라스틱 피부의 생성 스톡 이미지.', tell: '디테일(손·눈·글자)을 확대하면 어긋남이 드러난다.', whyDisliked: '점검 없이 박아넣은 결함이라 아마추어·날림 인상을 준다.', severity: 'strong', cause: 'no-verify', escape: [{ name: 'Image', dict: 'design' }], source: 'Originality.AI, doooob' },
              { id: 'generic-ai-logo', detect: { kind: 'judgment', note: '육각형+그라디언트+뇌·회로·인피니티 조합 육안 판정' }, previewSpec: { type: 'beforeAfter', left: { label: 'Slop', spec: { type: 'image', src: '/dictionary/slop-previews/generic-ai-logo.jpg', label: 'AI 로고 클리셰 재현' } }, right: { label: 'Escape', spec: { type: 'areas', cols: '1fr 2fr 1fr', rows: '1fr 1fr 1fr', areas: ['. . .', '. m .', '. . .'], labels: { m: '여백 중심 워드마크 (심볼 최소)' } } } }, name: 'Generic AI Logo Tropes', koName: 'AI 로고 클리셰', description: '헥사곤, 소용돌이(swirl), 뉴럴넷·뇌·회로 모티프에 그라디언트 + 산세리프 워드마크.', tell: 'OpenAI 소용돌이 이후 "진지한 AI" 로고가 템플릿화됐다.', whyDisliked: '경쟁 로고와 구별이 안 돼 브랜드 자산이 되지 못한다.', severity: 'weak', cause: 'median', escape: [{ name: 'Negative Space', dict: 'layout' }], source: 'ebaqdesign' },
              { id: 'fake-avatar-stack', detect: { kind: 'hybrid', signals: ['pravatar|loremfaces|randomuser|ui-avatars|thispersondoesnotexist'], note: 'AI 생성 얼굴·플레이스홀더 아바타 서비스가 팀 소개·활동 피드·후기에 반복 삽입될 때. 같은 생성 미학의 얼굴이 뭉쳐 "함께 있어야 어울리는" 일관성 자체가 티.' }, name: 'Fake Avatar Stack', koName: '가짜 아바타 스택', description: 'AI 생성 얼굴들이 팀·후기·활동 피드에 아바타로 반복 등장한다.', tell: '실사용자 데이터가 없음을 생성 얼굴로 가린 흔적.', whyDisliked: '알아채는 순간 후기·팀 전체가 허구로 읽혀 신뢰가 역전된다.', severity: 'weak', cause: 'underspec', escapeNote: '실인물 사진을 쓰거나, 없으면 이니셜 아바타·일러스트 체계로 대체한다. 가짜 얼굴은 없느니만 못하다.', source: 'LoremFaces/Pravatar 관찰 2026' },
            ],
          },
        ],
      },
    ],
  },

  // ================================================================
  // Part 6: 카피 · UX 라이팅
  // ================================================================
  {
    id: 'slop-part-6',
    number: 6,
    label: '카피 · UX 라이팅',
    description: '문구·문장부호·포맷·한국어 로컬라이제이션에서 드러나는 AI 글쓰기의 티',
    type: 'ai-slop',
    count: 13,
    categories: [
      {
        id: 'slop-cat-9',
        number: 9,
        name: 'Phrasing & Punctuation',
        subtitle: '문구·문장부호',
        definition: '상투어와 정형 구문, 특정 문장부호의 과사용, 한국어 로컬라이제이션 결함 클리셰.',
        count: 13,
        groups: [
          {
            label: null,
            items: [
              { id: 'em-dash-overuse', detect: { kind: 'code', signals: ['—'], note: '시대 민감: OpenAI 가 2025 말 모델에서 완화했다는 보도. 이 프로젝트는 no-em-dash 룰이라 1건도 플래그' }, previewSpec: { type: 'beforeAfter', left: { label: 'Slop', spec: { type: 'prose', lines: ['단순한 도구가 아닙니다 — 철학입니다 — 그리고 여정입니다.', '모든 문장 — 어디에나 — 대시가 끼어듭니다.'] } }, right: { label: 'Escape', spec: { type: 'prose', lines: ['단순한 도구가 아닙니다. 철학이고, 여정입니다.', '부연은 쉼표와 마침표로 잇습니다.'] } } }, name: 'Em-Dash Overuse', koName: 'em-dash 남발', description: '한 단락에 em-dash 를 서너 개씩 넣어 부연과 전환을 잇는다.', tell: '학술·저널 코퍼스가 고품질로 가중 학습돼 모델이 과사용한다.', whyDisliked: '사람은 구두점을 무의식적으로 섞는데 AI 는 한 부호에 쏠린다.', severity: 'weak', cause: 'median', escape: [{ name: 'Caption', dict: 'design' }], source: 'Rolling Stone, Wikipedia' },
              { id: 'ai-buzzword-stack', detect: { kind: 'code', signals: ['unleash|elevate|seamless|robust|cutting-edge|delve|harness|empower', '혁신적|시너지|잠재력을 극대화|여정을 시작'], note: '어휘 텔은 모델 세대별 교체(2023-mid24: delve·tapestry·testament / mid24-mid25: align with·fostering·showcasing / 지속 코어: crucial·pivotal·vibrant·underscore). 리스트 시대 갱신 필수 (Wikipedia Signs of AI writing, COLING 2025)' }, previewSpec: { type: 'beforeAfter', left: { label: 'Slop', spec: { type: 'prose', lines: ['잠재력을 극대화하는 시너지 기반 혁신 솔루션으로 여정을 시작하세요.', '혁신적인 시너지가 당신의 잠재력을 한 단계 끌어올립니다.'] } }, right: { label: 'Escape', spec: { type: 'prose', lines: ['디자인 시안을 코드로 바꿔 주는 도구입니다.', '오늘 첫 화면을 만들어 보세요.'] } } }, escapeNote: '추상 명사(혁신·시너지·여정)를 제품이 실제로 하는 일 한 문장으로 교체한다.', name: 'AI Buzzword Stack', koName: 'AI 상투어 더미', description: 'unleash·elevate·seamless·robust·cutting-edge·delve·harness 를 쌓아 인상만 준다.', tell: '구체성 없는 상투어가 문장마다 반복된다.', whyDisliked: '무엇을 하는 제품인지 끝까지 알 수 없다.', severity: 'strong', cause: 'median', escape: [], source: 'Content Beta, Wikipedia' },
              { id: 'vague-aspirational-headline', detect: { kind: 'judgment', note: '무엇을·누구에게·어떤 결과인지 측정 가능한 사실의 부재 판정' }, previewSpec: { type: 'beforeAfter', left: { label: 'Slop', spec: { type: 'prose', lines: ['가능성의 미래를 여는 새로운 기준'] } }, right: { label: 'Escape', spec: { type: 'prose', lines: ['피그마 시안을 30분 안에 배포 가능한 페이지로'] } } }, escapeNote: '무엇을·누구에게·어떤 결과인지 측정 가능한 사실로 헤드라인을 다시 쓴다.', name: 'Vague Aspirational Headline', koName: '막연한 포부형 헤드라인', description: '"Build the future of work" 류 본 헤드라인을 평균낸 무의미 문구.', tell: '구체 가치 없이 거대 비전만 던지는 디폴트.', whyDisliked: '아무 제품에나 붙어 식별·기억이 안 된다.', severity: 'strong', cause: 'median', escape: [], source: '925studios' },
              { id: 'rule-of-three-everywhere', detect: { kind: 'hybrid', signals: ['하게. [가-힣]+하게. ', ', [a-z]+, and [a-z]+'], note: '콤마 3연 프레임만 정규식 검출 가능, 형용사 판별은 판단 필요. 가중 플래그로만 쓰고 이진 판정 금지' }, previewSpec: { type: 'beforeAfter', left: { label: 'Slop', spec: { type: 'prose', lines: ['빠르게. 간단하게. 강력하게.', '계획하고, 실행하고, 성장하세요.'] } }, right: { label: 'Escape', spec: { type: 'prose', lines: ['설치 없이 브라우저에서 바로 시작합니다.'] } } }, escapeNote: '셋 묶음이 실제 구조를 반영할 때만 쓰고, 아니면 하나의 구체 문장으로 줄인다.', name: 'Rule of Three Everywhere', koName: '3의 법칙 남용', description: '형용사 셋, 짧은 구 셋을 모든 섹션에 반복해 충실해 보이게 위장한다.', tell: '내용 밀도와 무관하게 3개 묶음이 기계적으로 반복된다.', whyDisliked: '리듬이 단조롭고 의도가 아니라 습관으로 읽힌다.', severity: 'weak', cause: 'median', escape: [], source: 'Wikipedia, Olivia Cal' },
              { id: 'not-just-x-but-y', detect: { kind: 'code', signals: ['[Nn]ot just [^,.]+, but', '뿐만 아니라|단순한 [^,.]{1,20}가 아니라'] }, previewSpec: { type: 'beforeAfter', left: { label: 'Slop', spec: { type: 'prose', lines: ['단순한 툴이 아니라, 완전한 플랫폼입니다.', '기능이 아니라 경험입니다.'] } }, right: { label: 'Escape', spec: { type: 'prose', lines: ['컴포넌트 200개와 배포 파이프라인이 함께 옵니다.'] } } }, escapeNote: '"X가 아니라 Y" 대조 틀을 버리고 Y의 실체를 직접 서술한다.', name: 'Not Just X but Y', koName: '대조 구문 반복', description: '"It is not just A, it is B" 류 균형 대조문을 반복한다.', tell: '깊이를 흉내 내는 정형 수사 구조.', whyDisliked: '같은 틀이 반복돼 공허한 멋부림으로 읽힌다.', severity: 'weak', cause: 'median', escape: [], source: 'Wikipedia, Olivia Cal' },
              { id: 'bold-header-colon-lists', detect: { kind: 'code', signals: ['[*][*][^*]+[*][*]:', '<strong>[^<]+</strong>:'] }, previewSpec: { type: 'beforeAfter', left: { label: 'Slop', spec: { type: 'prose', lines: ['**속도**: 압도적으로 빠른 성능', '**신뢰**: 검증된 보안 체계', '**확장**: 무한한 가능성'] } }, right: { label: 'Escape', spec: { type: 'prose', lines: ['첫 로드 0.8초, SOC2 인증.', '팀 100명까지 같은 요금입니다.'] } } }, escapeNote: '볼드 명사+콜론 나열 대신 사실을 담은 문장으로 잇는다.', name: 'Bold-Header Colon Lists', koName: '볼드 헤더 콜론 리스트', description: '불릿마다 볼드 헤더 + 콜론 + 설명 형식에 핵심어를 과도하게 볼드 처리한다.', tell: 'AI 답변 포맷이 그대로 사용자 카피로 새어 나온다.', whyDisliked: '말하는 사람이 아니라 요약기가 쓴 글로 읽힌다.', severity: 'weak', cause: 'median', escape: [], source: 'Wikipedia' },
              { id: 'emoji-overuse', detect: { kind: 'hybrid', signals: ['[🚀✨💯🎉🔥]'], note: '문단당 2개 이상 플래그' }, previewSpec: { type: 'beforeAfter', left: { label: 'Slop', spec: { type: 'prose', lines: ['🚀 지금 시작하세요! ✨ 놀라운 기능 💯'] } }, right: { label: 'Escape', spec: { type: 'prose', lines: ['지금 시작하세요. 첫 프로젝트는 무료입니다.'] } } }, escapeNote: '이모지는 의미를 더할 때 한 문단 최대 1개, 장식용은 제거한다.', name: 'Emoji Overuse', koName: '이모지 남발', description: '초록 체크, 반복 스마일리를 본문·불릿에 과하게 넣는다.', tell: '강조를 이모지로 때우는 디폴트 포맷.', whyDisliked: '진지함을 깎고 시각적으로 산만하다.', severity: 'weak', cause: 'no-constraint', escape: [], source: 'developersdigest, Olivia Cal' },
              { id: 'hedging-language', detect: { kind: 'hybrid', signals: ['아마도|일반적으로|대부분의 경우|수 있습니다|것으로 보입니다'], note: '법적 고지 등 정당한 헤징과 구분' }, previewSpec: { type: 'beforeAfter', left: { label: 'Slop', spec: { type: 'prose', lines: ['아마도 도움이 될 수 있을 것으로 보입니다.', '일반적으로 대부분의 경우 효과적일 수 있습니다.'] } }, right: { label: 'Escape', spec: { type: 'prose', lines: ['한글 자막 오인식을 평균 92% 줄입니다.'] } } }, escapeNote: '책임 회피 부사(아마도·일반적으로·~일 수 있습니다)를 근거 있는 단정으로 바꾼다.', name: 'Hedging Language', koName: '책임 회피 어법', description: '"may help", "can potentially" 처럼 확언을 피하는 어법이 깔린다.', tell: '모델의 안전 어조가 마케팅 카피에까지 남는다.', whyDisliked: '자신 없는 제품처럼 읽혀 설득력이 떨어진다.', severity: 'weak', cause: 'median', escape: [], source: 'Olivia Cal' },
              { id: 'korean-ai-translationese', detect: { kind: 'hybrid', signals: ['당신의|그것은|에 있어|게임 체인저'], note: '후보 탐지만. 최종 판정·윤문은 humanize-korean 계열 몫' }, previewSpec: { type: 'beforeAfter', left: { label: 'Slop', spec: { type: 'prose', lines: ['당신의 여정에 있어 그것은 게임 체인저가 될 것입니다.'] } }, right: { label: 'Escape', spec: { type: 'prose', lines: ['도입 첫 주에 배포 시간이 절반으로 줄었습니다.'] } } }, escapeNote: '영어 구문 직역(당신의·~에 있어·그것은)을 한국어 어순과 주어 생략으로 다시 쓴다.', name: 'Korean AI Translationese', koName: '한국어 AI 번역투', description: '"오늘날 빠르게 변화하는", 무생물 주어, 과한 피동·병렬 등 영어 직역체 한국어.', tell: '영어 코퍼스 패턴이 한국어로 옮겨와 어색한 번역투가 된다.', whyDisliked: '한국 독자에게 즉시 "기계가 쓴 글" 로 들킨다.', severity: 'strong', cause: 'median', aliases: ['번역투', 'AI 티'], escape: [], source: 'humanize-korean (내부)' },
              { id: 'honorific-level-mismatch', detect: { kind: 'hybrid', signals: ['습니다|하십시오', '해요|하세요|어요|예요'], note: '측정형: 한 화면의 사용자 노출 UI 문자열에서 합쇼체(-습니다/-하십시오)와 해요체(-해요/-하세요)가 동시 출현하면 플래그. "~하실 수 있습니다" 와 "~할 수 있어요" 혼재, 과한 "-시-" 남발 포함. LLM 이 문장 단위로 생성해 전역 경어 레벨을 못 지키는 것이 원인. 예외: 법적 고지·약관 인용처럼 문서 성격이 다른 블록의 병존, 브랜드 보이스 문서가 혼용을 의도 규정한 경우(참고로 토스 기준은 "상황, 맥락을 불문하고 모든 문구에 해요체").' }, name: 'Honorific Level Mismatch', koName: '경어 레벨 불일치', description: '한 화면에서 해요체와 합쇼체가 뒤섞이고 "-시-" 가 과하게 붙는다.', tell: '제품 전체의 말투를 하나로 정한 흔적이 없다. 문장 단위 생성의 전형적 봉합선.', whyDisliked: '모어 화자는 톤 불일치를 즉시 느낀다. 여러 사람이 아니라 한 기계가 문장마다 다르게 쓴 티.', severity: 'strong', cause: 'no-constraint', escapeNote: '제품 전체의 경어 레벨을 하나로 정하고(예: 해요체 통일) 전 문자열을 일괄 검수한다.', source: '토스 UX라이팅 가이드, im-not-ai v2.0 (E-7) 2026-05' },
              { id: 'josa-bracket-exposure', detect: { kind: 'code', signals: ['을\\(를\\)|를\\(을\\)|이\\(가\\)|가\\(이\\)|은\\(는\\)|와\\(과\\)|으로\\(로\\)'], note: '사용자 화면에 노출되는 텍스트 한정: "{name}을(를) 삭제할까요?" 병기 괄호가 렌더에 그대로 보이면 강신호. 소스의 i18n 템플릿 문자열이 조사 라이브러리(josa 등)로 런타임 처리되면 정상 관행이므로 제외한다(처리 코드 존재를 확인하고 판정). 조사 오결합("홍길동님이가")도 동급. 모어 화자는 조사를 거의 틀리지 않아 오결합·괄호 노출은 기계/비원어민 신호(국립국어원·나무위키 명시).' }, name: 'Josa Bracket Exposure', koName: '조사 병기 괄호 노출', description: '"{name}을(를)", "파일을(를) 삭제할까요?" 처럼 조사 병기 괄호가 화면에 그대로 노출된다.', tell: '받침 기반 이형태(이/가, 을/를) 처리 로직 없이 병기를 하드코딩했다.', whyDisliked: '모어 화자는 절대 안 틀리는 지점이라 한 번 보이면 기계 생성임이 확정적으로 읽힌다.', severity: 'strong', cause: 'no-verify', escapeNote: '받침 유무 기반 조사 선택 로직(조사 라이브러리)을 넣거나, 조사가 필요 없는 문형으로 다시 쓴다.', source: '국립국어원 어문규범, 나무위키 2026' },
              { id: 'direct-translation-ui-labels', detect: { kind: 'hybrid', signals: ['>(제출하기|시작하기|더 알아보기|자세히 알아보기)<', '>취소<'], note: '영어 UI 관용구(Submit/Get Started/Learn More)의 1:1 직역("제출하기/시작하기")이 화면 전반에 기계적으로 반복될 때. 개별 사용은 정당. 다이얼로그의 "취소" 는 진행 중 작업이 취소된다는 오해를 낳아 토스는 "닫기" 로 통일("취소는 사용자가 하고 있는 작업이 취소된다고 오해할 수 있어 쓰지 않아요").' }, name: 'Direct-Translation Button Labels', koName: '직역 버튼 레이블', description: '"제출하기·시작하기·더 알아보기" 같은 영어 관용구 직역이 버튼마다 반복되고, 다이얼로그마다 "취소" 가 붙는다.', tell: '레이블이 상황·결과가 아니라 영어 원문의 함수다.', whyDisliked: '국내 관례(동사형·상황별 레이블, KRDS·토스)와 어긋나 번역기 티가 난다.', severity: 'weak', cause: 'median', escapeNote: '버튼 레이블을 그 행동의 결과 중심으로 다시 쓴다(무엇이 일어나는지). 다이얼로그 닫기 버튼은 "닫기".', source: 'KRDS, 토스 UX라이팅, brunch 2026' },
              { id: 'untranslated-ui-terms', detect: { kind: 'code', signals: ['>Loading\\.{0,3}<|>No data<|>Coming soon<|>Error<'], note: '한글 UI 안에 "Loading...", "No data" 등 미번역 영어가 잔존하거나 "설정(Settings)" 식 병기가 과다할 때. 사용자 노출 문자열만 판정(로그·코드·개발자 도구는 제외). 영어 중심 코퍼스에서 원문이 잔존한 흔적으로, im-not-ai 카테고리 B(영어 인용·용어 과다)의 UI 판.' }, name: 'Untranslated English UI Terms', koName: '미번역 영어 UI 용어', description: '한글 화면 곳곳에 "Loading...", "No data" 가 남고 "설정(Settings)" 병기가 과하다.', tell: '문자열 전수 검수 없이 영어 디폴트가 새어 나왔다.', whyDisliked: '로컬라이즈가 마감되지 않은 반제품 인상을 주고, 생성 후 검수 부재가 드러난다.', severity: 'weak', cause: 'median', escapeNote: '사용자 노출 문자열을 전수 한글화하고, 원어 병기는 처음 등장 1회로 제한한다.', source: 'im-not-ai v2.0 카테고리 B, 2026-05' },
            ],
          },
        ],
      },
    ],
  },

  // ================================================================
  // Part 7: 모션 · 인터랙션
  // ================================================================
  {
    id: 'slop-part-7',
    number: 7,
    label: '모션 · 인터랙션',
    description: '목적 없는 움직임과 다듬지 않은 상호작용의 신호',
    type: 'ai-slop',
    count: 4,
    categories: [
      {
        id: 'slop-cat-10',
        number: 10,
        name: 'Motion Defaults',
        subtitle: '모션 디폴트',
        definition: '의미 없이 적용되거나 빠진 모션과 마이크로 인터랙션 클리셰.',
        count: 4,
        groups: [
          {
            label: null,
            items: [
              { id: 'generic-fade-in', detect: { kind: 'code', signals: ['whileInView|useInView|data-aos|ScrollReveal'], note: '전 섹션 동일 페이드인 반복일 때. 단발 사용은 정당' }, name: 'Generic Fade-In on Scroll', koName: '천편일률 페이드인', description: '모든 스크롤 등장 애니메이션이 동일 타이밍·이징의 fade-up 으로 처리된다.', tell: '상태·맥락과 무관하게 같은 효과가 전 요소에 일괄 적용된다.', whyDisliked: '모션이 정보를 전달하지 않고 장식으로만 반복된다.', severity: 'weak', cause: 'median', escape: [{ name: 'StaggeredReveal', dict: 'design' }, { name: 'ScrollReveal', dict: 'design' }], source: 'developersdigest' },
              { id: 'motion-without-meaning', detect: { kind: 'judgment', note: '모션이 상태·인과를 전달하는지 장식인지 판단' }, name: 'Motion Without Meaning', koName: '의미 없는 모션', description: '튕기는 버튼, 흔들리는 아이콘, 떠다니는 배지처럼 목적 없는 움직임을 넣는다.', tell: '"움직이면 좋다" 는 디폴트 가정으로 모션을 남발한다.', whyDisliked: '주의를 분산시키고 피로를 유발한다.', severity: 'weak', cause: 'no-constraint', escape: [{ name: 'LayoutAnimation', dict: 'design' }], source: 'developersdigest' },
              { id: 'missing-micro-interactions', detect: { kind: 'hybrid', signals: [':hover'], note: '인터랙티브 요소 대비 hover/focus 스타일 부재율로 근사. 신호는 존재 확인용이고 부재가 텔' }, name: 'Missing Micro-Interactions', koName: '마이크로 인터랙션 부재', description: '아무 일도 안 하는 hover, 피드백 없는 클릭처럼 상태 전환이 비어 있다.', tell: '디폴트 템플릿을 다듬지 않은 흔적.', whyDisliked: '반응이 없어 죽은 화면처럼 느껴진다.', severity: 'weak', cause: 'no-verify', escape: [{ name: 'HoverCard', dict: 'design' }, { name: 'SpringPhysics', dict: 'design' }], source: 'The Fountain Institute' },
              { id: 'parallax-marquee-overuse', detect: { kind: 'code', signals: ['parallax|marquee|Marquee'] }, name: 'Parallax & Marquee Overuse', koName: '패럴랙스·마키 남용', description: '패럴랙스 배경과 무한 흐르는 로고 마키를 맥락 없이 기본으로 넣는다.', tell: '"트렌디한 사이트" 의 부품을 무비판 복제한다.', whyDisliked: '성능을 깎고 콘텐츠보다 효과가 앞선다.', severity: 'weak', cause: 'no-constraint', escape: [{ name: 'Parallax', dict: 'design' }, { name: 'Marquee', dict: 'design' }], source: 'community' },
            ],
          },
        ],
      },
    ],
  },

  // ================================================================
  // Part 8: 메타 · 근본 원인
  // ================================================================
  {
    id: 'slop-part-8',
    number: 8,
    label: '메타 · 근본 원인',
    description: '개별 클리셰를 낳는 구조적 원인. 처방의 출발점',
    type: 'ai-slop',
    count: 7,
    categories: [
      {
        id: 'slop-cat-11',
        number: 11,
        name: 'Root Causes',
        subtitle: '근본 원인',
        definition: '표면 클리셰를 만드는 메커니즘. 한 항목이 여러 Part 의 신호를 동시에 설명한다.',
        count: 7,
        groups: [
          {
            label: null,
            items: [
              { id: 'styling-before-content-model', detect: { kind: 'judgment', note: '역산 검사(audit 0단계): 화면의 콘텐츠 인벤토리(무슨 텍스트·이미지·데이터를 보여주는가)를 우선순위 목차로 재구성했을 때 레이아웃 칸의 크기·순서가 그 우선순위의 함수인지 확인. 아니면 스타일이 콘텐츠 모델보다 먼저 결정된 것. 콘텐츠 목차화·상수화(slopslap 0단계)가 양화 절차다. 이 검사를 통과하지 못한 화면에 "AI 티 없음" 판정을 내릴 수 없다.' }, name: 'Styling Before Content Model', koName: '콘텐츠 모델 없는 스타일 선행', description: '콘텐츠를 목차화·상수화해 우선순위를 정하기 전에 스타일 무드부터 입힌다. 레이아웃이 콘텐츠의 함수가 아니라 무드의 함수가 된다.', tell: '표면 스타일은 화려한데 어떤 칸이 왜 그 크기인지 설명이 안 된다. 규율 없는 그리드·질식 밀도·수제 연출 알리바이 등 2세대 슬롭 전반의 상류 원인.', whyDisliked: '디자인의 첫 결정(무엇을 어떤 순서로 보여줄 것인가)이 빠져 있어, 스타일을 걷어내면 남는 것이 없다.', severity: 'strong', cause: 'underspec', aliases: ['mood-first design', '기획 없는 스타일'], escapeNote: '콘텐츠를 먼저 목차화·상수화하고(slopslap 0단계 콘텐츠 상수화), 전역 그리드 모듈을 정의한 뒤, 레이아웃 칸을 우선순위의 함수로 재설계한다. 스타일은 마지막이다.', source: '사용자 관찰 2026-07 (audit 1순위 검증 항목)' },
              { id: 'mean-best-aesthetic', detect: { kind: 'judgment', note: '동질화는 pre-AI 부터 진행(CHI 2021: 2007년 이후 레이아웃 거리 30%+ 감소, 라이브러리 재사용과 상관 0.77). LLM 은 확률적 기본값으로 의도적 선택을 대체하며 가속 (arXiv 2603.13036)' }, name: 'Mean-Best Aesthetic', koName: '평균의 평균 미감', description: '제약이 없으면 LLM 이 학습 코퍼스의 중앙값을 출력해 "무난함" 으로 수렴한다.', tell: '모든 표면 클리셰가 결국 여기서 파생되는 우산 개념.', whyDisliked: '디자인은 결정의 총합인데 결정이 빠진 평균만 남는다.', severity: 'strong', cause: 'median', aliases: ['mean best', 'median aesthetic'], escape: [{ name: 'Asymmetric Balance', dict: 'layout' }], source: 'r/vibecoding, prg.sh' },
              { id: 'vague-taste-word-prompting', detect: { kind: 'judgment', note: '프롬프트 처방만으로 치유 불가가 실증됨(CHBAH 2025: 창의성 프롬프트·파라미터·CoT 로도 집단 다양성이 인간 대비 절반 이하). 구체 명세와 사람 개입이 유일한 처방' }, name: 'Vague Taste-Word Prompting', koName: '취향 단어만 던지기', description: '"modern, clean, premium" 같은 취향 단어만 주고 구체 명세를 안 준다.', tell: '명세가 없으니 모델이 디폴트로 채운다.', whyDisliked: '의도가 전달되지 않아 결과가 매번 같은 평균으로 떨어진다.', severity: 'strong', cause: 'underspec', escape: [], source: 'illustration.app' },
              { id: 'no-brand-constraint', detect: { kind: 'judgment', note: '2025 기준 생성 도구는 디자인 시스템을 신뢰성 있게 적용 못 함(NN/g). 토큰·가드레일 문서 존재 여부 확인' }, name: 'No Brand Constraint', koName: '제약 부재', description: '브랜드 토큰·접근성 기준·콘텐츠 가드레일 없이 생성만 빠르게 한다.', tell: '유행 패턴을 무비판 적용한 흔적이 화면 전반에 깔린다.', whyDisliked: '차별화의 근거가 없어 경쟁 화면과 구별되지 않는다.', severity: 'strong', cause: 'no-constraint', escape: [], source: 'developersdigest, illustration.app' },
              { id: 'differentiation-failure', detect: { kind: 'judgment', note: '경쟁·레퍼런스 대비 차별 요소를 지목할 수 있는지 판단' }, name: 'Differentiation Failure', koName: '차별화 실패', description: '결과가 동시대 다른 AI 산출물과 구별되지 않는 동질화 상태.', tell: '"어디서 본 것 같다" 가 첫 반응이 된다.', whyDisliked: '브랜드 자산이 쌓이지 않고 기억에 남지 않는다.', severity: 'strong', cause: 'median', aliases: ['homogenization', '동질화'], escape: [{ name: 'Anti-AI Humantouch Type', dict: 'design' }], source: 'Forbes, AXE-WEB' },
              { id: 'no-pre-implementation-verification', detect: { kind: 'judgment', note: '구현 전 명세·구현 후 점검 절차의 존재 여부 확인' }, name: 'No Pre-Implementation Verification', koName: '구현 전·후 검증 부재', description: '생성한 결과를 사람이 점검하지 않아 슬롭 폰트·깨진 위계·죽은 링크가 남는다.', tell: '한국 커뮤니티가 진단의 무게중심으로 짚는 원인.', whyDisliked: '결함이 그대로 배포돼 날림 인상을 굳힌다.', severity: 'strong', cause: 'no-verify', escape: [{ name: 'Aspect-ratio Discipline', dict: 'layout' }], source: 'Threads(KR), Instagram(KR)' },
              { id: 'cargo-cult-2020-web', detect: { kind: 'judgment', note: '2015-2020 유행 요소(그라디언트·글래스·오버사이즈 radius)의 무비판 답습 판단' }, name: 'Cargo Cult of 2020 Web', koName: '2020 웹의 화석화', description: '2018~2022 유행 패턴을 현재의 "모던" 으로 착각해 재생산한다.', tell: '학습 데이터 시점에 미감이 고정돼 시간이 멈춘 듯하다.', whyDisliked: '이미 지난 트렌드라 낡고 뒤처진 인상을 준다.', severity: 'weak', cause: 'median', escape: [{ name: 'Swiss / Editorial', dict: 'design' }], source: 'prg.sh, community' },
            ],
          },
        ],
      },
    ],
  },
];
