/**
 * Vibe Dictionary: AI-slop Taxonomy v0.3 데이터
 *
 * 8 Parts · 11 Categories · 54 Keywords
 * v0.2: 전 항목 id 부여 + previewSpec(Slop vs Escape 시연)·escapeNote 필드 신설.
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
 *
 * 출처 등급 주의: 대부분 실무 블로그·커뮤니티(tier C) 관찰이다. 학술 1차 근거는
 * 동질화(homogenization) 담론(Forbes, Oxford JAAC)이 이론적으로 뒷받침할 뿐,
 * 개별 클리셰 명칭은 커뮤니티 합의 수준이다.
 */

export const AI_SLOP_TAXONOMY_STATS = {
  parts: 8,
  categories: 11,
  keywords: 62,
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
    description: '색·그라디언트·재질에서 가장 먼저 드러나는 AI 시그니처',
    type: 'ai-slop',
    count: 9,
    categories: [
      {
        id: 'slop-cat-1',
        number: 1,
        name: 'Gradient & Color',
        subtitle: '그라디언트·색',
        definition: '특정 색과 그라디언트로 화면을 덮어 마무리한 듯 보이게 하는 클리셰.',
        count: 6,
        groups: [
          {
            label: null,
            items: [
              { id: 'purple-blue-gradient', detect: { kind: 'code', signals: ['linear-gradient(?=[^)]*(#7c3aed|#8b5cf6|#a855f7))(?=[^)]*(#3b82f6|#6366f1|#2563eb))', 'from-(purple|violet|indigo)-'], note: 'shadcn/v0 계열 기본값은 중립 zinc 라 raw Tailwind·무명세 생성물에서 가장 강한 신호. 계보는 Tailwind UI bg-indigo-500 (창시자 승인·미계량, Adam Wathan 2025-08 사과 트윗)' }, previewSpec: { type: 'beforeAfter', left: { label: 'Slop', spec: { type: 'swatch', band: 'linear-gradient(135deg, #7c3aed 0%, #3b82f6 100%)', bandLabel: 'hero gradient', chips: [{ color: '#7c3aed', label: '#7C3AED' }, { color: '#6366f1', label: '#6366F1' }, { color: '#3b82f6', label: '#3B82F6' }] } }, right: { label: 'Escape', spec: { type: 'swatch', chips: [{ color: '#1b1d1f', label: 'Dominant 60%', flex: 6 }, { color: '#4a4f55', label: 'Secondary 30%', flex: 3 }, { color: '#1f9e5a', label: 'Accent 10%', flex: 1 }] } } }, name: 'Purple-Blue Gradient', koName: '보라-파랑 그라디언트', description: '히어로 배경·CTA·오브·텍스트에 보라에서 파랑으로 흐르는 그라디언트가 반복된다.', tell: '구성·위계 고민 없이 그라디언트로 표면을 덮어 "혁신적" 인상을 흉내 낸다.', whyDisliked: '2015~2020 모던 웹의 화석이라 즉시 낡고 무난하게 읽힌다. AI 데모의 비공식 깃발로 굳었다.', severity: 'strong', cause: 'median', aliases: ['AI Purple', 'VibeCode Purple'], escape: [{ name: 'Monochromatic', dict: 'design' }, { name: '60% Dominant', dict: 'design' }], source: 'prg.sh, r/webdev' },
              { id: 'indigo-accent', detect: { kind: 'code', signals: ['#6366f1|#4f46e5|#818cf8', 'bg-indigo-[45]00'], note: '브랜드가 인디고를 의도 채택했으면 신호 아님. 프로젝트 팔레트 밖 하드코딩일 때만 플래그' }, previewSpec: { type: 'beforeAfter', left: { label: 'Slop', spec: { type: 'swatch', chips: [{ color: '#6366f1', label: '버튼' }, { color: '#6366f1', label: '링크' }, { color: '#6366f1', label: '포커스' }, { color: '#6366f1', label: '배지' }] } }, right: { label: 'Escape', spec: { type: 'swatch', chips: [{ color: '#17191b', label: 'Dominant 60%', flex: 6 }, { color: '#5a5f66', label: 'Secondary 30%', flex: 3 }, { color: '#b45309', label: '브랜드 Accent 10%', flex: 1 }] } } }, name: 'Indigo-500 Accent', koName: '인디고 액센트', description: '버튼·링크·포커스 상태가 하나같이 라벤더-인디고 한 톤(#6366f1 류)으로 칠해진다.', tell: 'Tailwind UI 디폴트 bg-indigo-500 이 학습 데이터를 오염시켜 누출된 단일 액센트.', whyDisliked: '브랜드 색을 고른 흔적이 없어 "아무 색도 결정 안 한" 인상을 준다.', severity: 'weak', cause: 'median', aliases: ['bg-indigo-500'], escape: [{ name: '10% Accent', dict: 'design' }, { name: 'Complementary', dict: 'design' }], source: 'adamwathan (X), prg.sh' },
              { id: 'everywhere-glow', detect: { kind: 'hybrid', signals: ['0 0 [2-9][0-9]px', 'drop-shadow'], note: '컬러 글로우 20px+ 가 여러 요소에 반복될 때. 단일 포컬 글로우는 정당. 다크모드와 페어링되는 무목적 글로우가 2026 확인 패턴 (Fountain Institute)' }, previewSpec: { type: 'beforeAfter', left: { label: 'Slop', spec: { type: 'swatch', band: 'radial-gradient(circle at 30% 40%, rgba(124,58,237,0.85), transparent 60%), radial-gradient(circle at 72% 62%, rgba(59,130,246,0.75), transparent 55%)', bandLabel: '모든 요소 뒤 글로우', chips: [{ color: '#7c3aed', label: 'glow' }, { color: '#3b82f6', label: 'glow' }, { color: '#22d3ee', label: 'glow' }] } }, right: { label: 'Escape', spec: { type: 'areas', cols: '1fr 2fr 1fr', rows: '1fr 1.6fr 1fr', areas: ['g g g', '. m .', 'b b b'], labels: { g: '배경 (가라앉힘)', m: '전경 (빛은 한 곳만)', b: '배경' } } } }, name: 'Everywhere Glow', koName: '도처의 컬러 글로우', description: '요소 뒤마다 큰 컬러 글로우와 네온 외곽 발광, 부드러운 box-shadow 가 깔린다.', tell: '깊이를 만드는 대신 글로우로 균일하게 덮어 빛의 의도가 없다.', whyDisliked: '모든 요소가 똑같이 빛나 위계가 사라지고 눈이 피로해진다.', severity: 'weak', cause: 'no-constraint', escape: [{ name: 'Figure-Ground', dict: 'layout' }, { name: 'Z-axis Layering', dict: 'layout' }], source: 'developersdigest' },
              { id: 'iridescent-palette', detect: { kind: 'hybrid', signals: ['#22d3ee|#67e8f9|#a78bfa|#f472b6'], note: '다크 배경 + 고채도 시안·핑크·퍼플 동시 출현 플래그. 위계(도미넌트/액센트) 존재 여부는 판단 필요' }, previewSpec: { type: 'beforeAfter', left: { label: 'Slop', spec: { type: 'swatch', chips: [{ color: '#0b0f14', label: '다크 바탕', flex: 3 }, { color: '#22d3ee', label: '네온 시안' }, { color: '#a78bfa', label: '메탈릭 퍼플' }, { color: '#f472b6', label: '무지갯빛 핑크' }] } }, right: { label: 'Escape', spec: { type: 'swatch', chips: [{ color: '#14532d', label: '기준색', flex: 2 }, { color: '#3f6212', label: '인접색 1' }, { color: '#713f12', label: '인접색 2' }] } } }, name: 'Iridescent Computational Palette', koName: '무지갯빛 계산적 팔레트', description: '다크 위 시안·네온 액센트, 무지갯빛·메탈릭 색 관계로 "하이퍼리얼" 표면을 만든다.', tell: '전통 색 조화가 아니라 계산으로 뽑은 듯한 색 관계라 인공적으로 느껴진다.', whyDisliked: '실제 브랜드·콘텐츠 맥락과 무관해 차갑고 공허하게 읽힌다.', severity: 'weak', cause: 'median', escape: [{ name: 'Analogous', dict: 'design' }, { name: 'Split-Complementary', dict: 'design' }], source: 'developersdigest, UX Planet' },
              { id: 'mesh-aurora-background', detect: { kind: 'hybrid', signals: ['radial-gradient[^;]{0,120}radial-gradient', 'blur-3xl'], note: '근거 강등(v0.3): 3.2M Reddit 코퍼스 연구의 자체 적대 검증에서 키워드 아티팩트로 기각된 유일 텔. 단독 판정 금지, everywhere-glow 와 결합 시에만 취급' }, previewSpec: { type: 'beforeAfter', left: { label: 'Slop', spec: { type: 'swatch', band: 'linear-gradient(120deg, #f0abfc 0%, #818cf8 45%, #67e8f9 100%)', bandLabel: '어느 사이트든 같은 오로라 히어로', chips: [{ color: '#f0abfc', label: '#F0ABFC' }, { color: '#818cf8', label: '#818CF8' }, { color: '#67e8f9', label: '#67E8F9' }] } }, right: { label: 'Escape', spec: { type: 'areas', cols: '2fr 1fr 2fr', rows: '2fr 1fr 2fr', areas: ['. . .', '. m .', '. . .'], labels: { m: '콘텐츠가 주인공 (배경 비움)' } } } }, name: 'Mesh/Aurora Background Default', koName: '메시·오로라 배경 디폴트', description: '블러 처리된 컬러 블롭이 흐르는 오로라·메시 그라디언트를 모든 히어로 배경에 쓴다.', tell: '콘텐츠와 무관하게 배경만 화려해 "빈 화면 채우기" 로 읽힌다.', whyDisliked: '같은 배경이 수많은 AI 사이트에 반복돼 개성이 0 이 된다.', severity: 'weak', cause: 'no-constraint', escape: [{ name: 'Negative Space', dict: 'layout' }, { name: 'Swiss / Editorial', dict: 'design' }], source: '925studios' },
              { id: 'saturated-multicolor-palette', detect: { kind: 'hybrid', signals: ['#00d9ff|#ff006e|#39ff14|#ccff00'], note: '고채도 액센트 hue 3개 이상 동시 사용 플래그. 위계 부재 판정은 사람 몫 (Fountain Institute 2026, 3-0 검증)' }, previewSpec: { type: 'beforeAfter', left: { label: 'Slop', spec: { type: 'swatch', chips: [{ color: '#00d9ff', label: '일렉트릭 블루' }, { color: '#ff006e', label: '핫핑크' }, { color: '#39ff14', label: '애시드 그린' }] } }, right: { label: 'Escape', spec: { type: 'swatch', chips: [{ color: '#1b1d1f', label: 'Dominant 60%', flex: 6 }, { color: '#5a5f66', label: 'Secondary 30%', flex: 3 }, { color: '#0e7a4e', label: 'Accent 10%', flex: 1 }] } } }, name: 'Saturated Multicolor Palette', koName: '풀채도 다색 팔레트', description: '일렉트릭 블루, 핫핑크, 애시드 그린 같은 고채도 색 여러 개가 도미넌트·액센트 위계 없이 한 화면에 동시에 깔린다.', tell: '색은 많은데 어느 색도 맡은 역할이 없다. 게이밍·크립토 학습 데이터의 잔향.', whyDisliked: '시선이 갈 곳을 못 정하고, 브랜드 색을 고른 흔적이 없다.', severity: 'weak', cause: 'median', escape: [{ name: '60% Dominant', dict: 'design' }, { name: '10% Accent', dict: 'design' }], source: 'thefountaininstitute.com' },
              { id: 'floating-gradient-orb', detect: { kind: 'hybrid', signals: ['radial-gradient', 'filter: *blur'], note: '히어로 뒤 흐릿한 원형 보라-파랑 오브. blur 처리된 방사형 그라디언트가 배경 장식으로 떠 있으면 후보. 의도적 브랜드 배경은 제외.' }, name: 'Floating Gradient Orb', koName: '떠다니는 그라디언트 오브', description: '히어로 섹션 뒤에 흐릿한 보라-파랑 원형 그라디언트 오브가 둥둥 떠 있다.', tell: '빈 배경을 채우려 blur 오브를 뿌려 "디자인된" 척한다. 구성이 아니라 장식으로 공간을 때운다.', whyDisliked: 'purple-blue 그라디언트의 쌍둥이 신호라 AI 생성물임이 한눈에 읽힌다.', severity: 'weak', cause: 'median', aliases: ['blurred orb', 'violet orb'], escapeNote: '배경 장식을 지우고 여백으로 위계를 만들거나, 실제 콘텐츠(제품 스크린샷·타이포)로 히어로를 채운다.', source: 'deep-research 2026-07 (floating violet gradient orbs behind hero)' },
              { id: 'tasteful-default-cream-serif', detect: { kind: 'judgment', note: '2026 신흥 패턴. 크림/베이지 배경 + 세리프 헤드라인 + 세이지 그린(또는 앰버) 액센트 조합이 "취향 있는 기본값" 으로 굳어 반복. 보라 그라디언트의 반작용. 실제 브랜드 의도면 제외.' }, name: 'Cream + Serif + Sage Default', koName: '크림·세리프·세이지 기본값', description: '보라를 피한 대신 크림 배경 + 세리프 제목 + 세이지 그린이 새로운 무난한 기본값으로 반복된다.', tell: '"AI 안 같아 보이려는" 선택 자체가 또 하나의 디폴트가 됐다. 탈-보라가 새 클리셰로 수렴한다.', whyDisliked: '개성처럼 보이지만 2026 생성물 다수가 같은 팔레트로 수렴해 결국 또 다른 평균값이다.', severity: 'weak', cause: 'median', aliases: ['tasteful default', 'sage green trend', 'amber-cream accent'], escapeNote: '팔레트를 콘텐츠·브랜드 근거에서 도출한다. 유행 조합을 반사적으로 쓰지 말고 대비·역할을 먼저 정한다.', source: 'deep-research 2026-07 (cream+serif+sage tasteful default)' },
              { id: 'safe-green-regression', detect: { kind: 'hybrid', signals: ['#10b981|#059669|#34d399', 'emerald-[45]00|text-emerald|bg-emerald'], note: '보라/인디고를 프롬프트로 금지하면 모델이 기본 에메랄드 그린(Safe Green)으로 회귀. 브랜드가 초록을 의도 채택했으면 제외. 프로젝트 팔레트 밖 에메랄드 지배일 때만 후보.' }, name: 'Safe Green Regression', koName: '세이프 그린 회귀', description: '보라를 금지당한 모델이 이번엔 에메랄드 그린 한 톤으로 회귀해 버튼·액센트를 칠한다.', tell: '한 디폴트를 막으면 다음 디폴트로 옮겨갈 뿐, 색을 결정한 흔적은 여전히 없다.', whyDisliked: '보라 대신 초록일 뿐 "아무 색도 안 고른" 구조는 그대로다.', severity: 'weak', cause: 'median', aliases: ['emerald default', 'safe green'], escapeNote: '금지 목록만 주지 말고 브랜드 근거로 팔레트를 적극 지정한다. 색을 역할(dominant/secondary/accent)로 배분한다.', source: 'deep-research 2026-07 (emerald Safe Green regression after indigo ban)' },
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
        count: 3,
        groups: [
          {
            label: null,
            items: [
              { id: 'glassmorphism-default', detect: { kind: 'code', signals: ['backdrop-filter: *blur|backdropFilter'], note: 'Apple Liquid Glass(2025) 채택으로 선택적 사용은 정당. 표면 전면·무분별 적용일 때만 슬롭 (Creative Boom 2026 피로 트렌드 #3)' }, previewSpec: { type: 'beforeAfter', left: { label: 'Slop', spec: { type: 'swatch', band: 'linear-gradient(135deg, rgba(255,255,255,0.28), rgba(255,255,255,0.06))', bandLabel: '반투명 유리 카드 (가독성 희생)', chips: [{ color: '#7c3aed', label: '비치는 배경' }, { color: '#3b82f6', label: '비치는 배경' }] } }, right: { label: 'Escape', spec: { type: 'split', dir: 'row', ratio: [1, 1], labels: ['Outlined 카드 (명확한 경계)', '본문 (대비 통제)'] } } }, name: 'Glassmorphism Default', koName: '글래스모피즘 디폴트', description: '프로스티드 글라스 반투명 카드를 맥락 없이 기본값으로 깐다.', tell: '2022년 유행이 LLM 디폴트로 굳어, 가독성·맥락 판단 없이 자동 적용된다.', whyDisliked: '텍스트 대비를 깨고 저사양에서 무거우며 유행이 지난 인상을 준다.', severity: 'weak', cause: 'no-constraint', escape: [{ name: 'Swiss / Editorial', dict: 'design' }, { name: 'OutlinedCard', dict: 'design' }], source: 'developersdigest' },
              { id: 'permanent-dark-mode', detect: { kind: 'judgment', note: '다크 자체는 정당. 라이트 대안·시스템 연동(prefers-color-scheme, 토글) 부재가 신호' }, previewSpec: { type: 'beforeAfter', left: { label: 'Slop', spec: { type: 'swatch', chips: [{ color: '#0b0d10', label: '상시 다크', flex: 4 }, { color: '#6b7280', label: '중간 회색 본문', flex: 2 }, { color: '#374151', label: '대문자 라벨', flex: 1 }] } }, right: { label: 'Escape', spec: { type: 'split', dir: 'row', ratio: [1, 0.5, 1], labels: ['다크 상태', '와이프 전환 (View Transitions)', '라이트 상태'] } } }, name: 'Permanent Dark Mode', koName: '상시 다크모드', description: '토글 없이 항상 켜진 다크 테마에 중간 회색 본문, 대문자 라벨을 얹는다.', tell: '"테크스럽게 보이려는" 디폴트라 라이트 대안을 만든 흔적이 없다.', whyDisliked: '강제된 다크는 장문 가독성을 떨어뜨리고 선택권을 뺏는다.', severity: 'weak', cause: 'median', escape: [{ name: 'DarkModeTransition', dict: 'design' }], source: 'developersdigest, r/ClaudeAI' },
              { id: 'low-contrast-body', detect: { kind: 'hybrid', signals: ['color: *(#6b7280|#9ca3af|#71717a|#64748b)'], note: '확정 판정은 본문-배경 대비 4.5:1 미만 계산. grep 은 중간 회색 hex 후보 탐지까지' }, previewSpec: { type: 'beforeAfter', left: { label: 'Slop', spec: { type: 'swatch', chips: [{ color: '#111418', label: '배경', flex: 2 }, { color: '#565d66', label: '본문 (AA 미달)', flex: 2 }] } }, right: { label: 'Escape', spec: { type: 'typeSpec', samples: [{ text: '본문은 AA(4.5:1) 이상으로 둡니다', size: '0.9rem', weight: 400 }, { text: '강조는 명도 낮추기가 아니라 굵기로 만듭니다', size: '0.9rem', weight: 800 }] } } }, name: 'Low-Contrast Body', koName: '저대비 본문', description: '다크 테마에서 본문이 WCAG AA 를 못 넘는 중간 회색으로 깔린다.', tell: '미감 우선으로 명도를 낮춰 접근성 점검을 건너뛴 흔적.', whyDisliked: '실제로 읽기 어려워 사용자를 배제하고, 점검 안 한 티가 명확하다.', severity: 'strong', cause: 'no-verify', escape: [{ name: 'Weight Contrast', dict: 'layout' }], source: 'developersdigest' },
              { id: 'ubiquitous-soft-shadow', detect: { kind: 'code', signals: ['box-shadow:[^;]*rgba', 'shadow-(sm|md|lg|xl)'], note: 'shadcn/Tailwind 의 저투명도 회색 드롭섀도(shadow-lg 등)를 모든 카드·버튼에 무차별 적용. everywhere-glow 가 컬러 발광이라면 이건 무채색 소프트 섀도. 의도적 단일 elevation 체계는 제외.' }, name: 'Ubiquitous Soft Shadow', koName: '무차별 소프트 섀도', description: '모든 카드·버튼·인풋에 낮은 투명도 회색 드롭섀도를 똑같이 깔아 elevation 위계가 없다.', tell: 'shadow-lg 같은 프레임워크 기본 그림자를 요소 구분 없이 그대로 둔다.', whyDisliked: '떠 있는 것과 붙어 있는 것의 구분이 사라져 화면이 흐리멍덩해진다.', severity: 'weak', cause: 'median', aliases: ['shadow-lg everywhere', 'default drop shadow'], escapeNote: 'elevation 을 2~3단 토큰으로 정의하고 의미(모달>카드>평면)에 맞게만 쓴다. 대부분 표면은 그림자 대신 경계선/여백으로 구분한다.', source: 'deep-research 2026-07 (low-opacity subtle box shadows)' },
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
    description: '폰트 선택과 조합에서 드러나는 "고른 적 없음" 의 신호',
    type: 'ai-slop',
    count: 6,
    categories: [
      {
        id: 'slop-cat-3',
        number: 3,
        name: 'Typeface Defaults',
        subtitle: '서체 디폴트',
        definition: '안전한 산세리프와 반복되는 조합으로 수렴하는 클리셰.',
        count: 4,
        groups: [
          {
            label: null,
            items: [
              { id: 'inter-for-everything', detect: { kind: 'code', signals: ['fontFamily[^;}]{0,60}(Inter|Geist|Space Grotesk|Instrument Serif)|family=(Inter|Geist)|font-(inter|geist)'], note: '후보 폰트 목록은 시대 민감(2026 현재 Instrument Serif 가 최신 반사). 브랜드 의도 채택은 제외, 역할 분화 없는 단독 스택일 때만' }, previewSpec: { type: 'beforeAfter', left: { label: 'Slop', spec: { type: 'typeSpec', samples: [{ text: '헤드라인도 같은 그로테스크', size: '1.2rem', weight: 600 }, { text: '본문도 같은 그로테스크', size: '0.85rem' }, { text: '라벨도 같은 그로테스크', size: '0.7rem', dim: true }] } }, right: { label: 'Escape', spec: { type: 'typeSpec', samples: [{ em: '대비 세리프 디스플레이', size: '1.3rem', weight: 700 }, { text: '본문은 산세리프로 대비를 만듭니다', size: '0.8rem' }] } } }, name: 'Inter for Everything', koName: 'Inter 도배', description: 'Inter·Geist·Poppins 같은 안전한 산세리프를 모든 텍스트에 쓴다.', tell: '학습 데이터에서 가장 흔한 폰트라 의도적 서체 선택이 없었음을 드러낸다.', whyDisliked: '브랜드 목소리가 사라지고 모든 사이트가 형제처럼 보인다.', severity: 'weak', cause: 'median', escape: [{ name: 'High-Contrast Serif', dict: 'design' }, { name: 'Variable Fonts', dict: 'design' }, { name: 'Anti-AI Humantouch Type', dict: 'design' }], source: 'developersdigest, 925studios' },
              { id: 'italic-serif-accent', detect: { kind: 'hybrid', signals: ['fontStyle[^,}]{0,20}italic'], note: '헤드라인 중 한 단어만 세리프 이탤릭으로 갈아타는 패턴. 인용·서지 관행과 구분' }, previewSpec: { type: 'beforeAfter', left: { label: 'Slop', spec: { type: 'typeSpec', samples: [{ pre: '우리는 ', em: '진짜', post: ' 성장을 만듭니다', size: '1.05rem', weight: 700 }, { pre: '팀을 위한 ', em: 'unfair', post: ' advantage', size: '1.05rem', weight: 700 }] } }, right: { label: 'Escape', spec: { type: 'typeSpec', samples: [{ text: '위계는 크기와 굵기로 만듭니다', size: '1.3rem', weight: 800 }, { text: '한 문장 안에서 서체를 갈아타는 대신 스케일 대비로 강조합니다', size: '0.75rem', dim: true }] } } }, name: 'Italic Serif Accent Word', koName: '이탤릭 세리프 강조어', description: 'Inter 일색 히어로에서 단어 하나만 이탤릭 세리프로, 또는 큰 이탤릭 세리프를 메인 헤드라인으로 쓴다.', tell: '2025~2026 "유니버설 AI 스타트업 히어로" 로 급부상한 단일 패턴.', whyDisliked: '차별화를 노린 장치가 역설적으로 가장 흔한 신호가 됐다.', severity: 'strong', cause: 'median', escape: [{ name: 'Scale Contrast', dict: 'layout' }, { name: 'Weight Contrast', dict: 'layout' }], source: 'developersdigest, Figma trends' },
              { id: 'repeated-font-combos', detect: { kind: 'judgment', note: '로드된 폰트 조합(Inter+Playfair 류)이 레퍼런스 조합과 일치하는지 대조' }, previewSpec: { type: 'beforeAfter', left: { label: 'Slop', spec: { type: 'typeSpec', samples: [{ em: '세리프 헤드라인', size: '1.1rem', weight: 700 }, { text: '그로테스크 본문', size: '0.75rem' }, { em: '또 세리프 헤드라인', size: '1.1rem', weight: 700 }, { text: '또 그로테스크 본문', size: '0.75rem', dim: true }] } }, right: { label: 'Escape', spec: { type: 'typeSpec', samples: [{ text: '브랜드가 고른 그로테스크 하나로', size: '1.15rem', weight: 800 }, { text: '굵기 축만으로 위계를 만듭니다', size: '0.8rem' }] } } }, name: 'Repeated Font Combos', koName: '반복 폰트 조합', description: 'Space Grotesk + Instrument Serif + Geist 같은 조합이 페이지마다 재등장한다.', tell: '특정 "트렌디" 조합이 데모마다 복제돼 출처가 같아 보인다.', whyDisliked: '폰트 페어링을 직접 한 게 아니라 빌려온 인상을 준다.', severity: 'weak', cause: 'median', escape: [{ name: 'Neo-Grotesque Sans', dict: 'design' }], source: 'developersdigest' },
              { id: 'all-caps-eyebrow', detect: { kind: 'hybrid', signals: ['textTransform[^,}]{0,20}uppercase', 'uppercase tracking-'], note: '대문자는 인간 관행(AP 스타일)과 겹쳐 단독 오탐 높음. 히어로 알약 배지·트래킹 확장과 결합 시 승격' }, previewSpec: { type: 'beforeAfter', left: { label: 'Slop', spec: { type: 'typeSpec', samples: [{ text: 'INTRODUCING OUR PLATFORM', size: '0.65rem', spacing: '0.2em', dim: true }, { text: 'Build Better Products Today', size: '1.15rem', weight: 700 }] } }, right: { label: 'Escape', spec: { type: 'typeSpec', samples: [{ text: '굵기로 구분한 라벨', size: '0.7rem', weight: 700 }, { text: '문장형 헤드라인은 그대로 둡니다', size: '1.1rem' }] } } }, name: 'All-Caps Eyebrow / Title Case', koName: '대문자 라벨·타이틀케이스', description: '섹션 라벨을 작은 대문자 자간으로, 헤딩을 모든 단어 첫 글자 대문자로 쓴다.', tell: 'SaaS 템플릿의 기본 위계 신호를 그대로 답습한다.', whyDisliked: '읽기 리듬을 끊고 정형화된 마케팅 톤을 강요한다.', severity: 'weak', cause: 'median', escape: [{ name: 'Weight Contrast', dict: 'layout' }], source: 'developersdigest' },
              { id: 'monospace-body-aesthetic', detect: { kind: 'hybrid', signals: ['font-family:[^;]*mono', 'font-mono|Geist Mono|JetBrains Mono'], note: '본문·UI 전반을 모노스페이스로 깔아 "개발자스러운" 인상을 노림. Inter 도배의 2026 사촌. 코드 블록·터미널 UI 의 정당한 모노는 제외, 본문/헤드라인 모노 지배일 때만 후보.' }, name: 'Monospace Body Aesthetic', koName: '모노스페이스 본문 미감', description: '코드도 아닌 본문·헤드라인·UI 를 통째로 모노스페이스로 깔아 "테크" 분위기를 흉내 낸다.', tell: '보라/Inter 를 피하려다 이번엔 Geist Mono 류 모노스페이스가 새 반사 기본값이 됐다.', whyDisliked: '장문 가독성이 떨어지고, "개발자 감성" 자체가 또 하나의 균질한 클리셰로 굳었다.', severity: 'weak', cause: 'median', aliases: ['Geist Mono everything', 'developer aesthetic'], escapeNote: '모노스페이스는 코드·수치·라벨에만 역할로 쓴다. 본문은 가독성 있는 비례 서체를 콘텐츠 근거로 고른다.', source: 'deep-research 2026-07 (monospace body regression)' },
            ],
          },
        ],
      },
      {
        id: 'slop-cat-4',
        number: 4,
        name: 'Type Effects',
        subtitle: '텍스트 효과',
        definition: '텍스트에 거는 장식 효과의 무분별한 적용.',
        count: 2,
        groups: [
          {
            label: null,
            items: [
              { id: 'gradient-text', detect: { kind: 'code', signals: ['WebkitBackgroundClip[^,}]{0,20}text|background-clip: *text|bg-clip-text'] }, previewSpec: { type: 'beforeAfter', left: { label: 'Slop', spec: { type: 'swatch', band: 'linear-gradient(90deg, #7c3aed, #3b82f6)', bandLabel: '헤드라인에 그라디언트 클리핑', chips: [{ color: '#7c3aed', label: '시작색' }, { color: '#3b82f6', label: '끝색' }] } }, right: { label: 'Escape', spec: { type: 'typeSpec', samples: [{ text: '단색 대형 헤드라인', size: '1.4rem', weight: 800 }, { text: '크기 대비가 시선을 끕니다', size: '0.75rem', dim: true }] } } }, name: 'Gradient Text', koName: '그라디언트 텍스트', description: '헤드라인·키워드에 보라-파랑 그라디언트 색을 입힌다.', tell: '강조 수단이 없을 때 색 그라디언트로 때우는 디폴트.', whyDisliked: '대비·가독성을 해치고 컬러 클리셰를 텍스트까지 확장한다.', severity: 'weak', cause: 'no-constraint', escape: [{ name: 'Scale Contrast', dict: 'layout' }], source: 'developersdigest' },
              { id: 'extreme-hierarchy-cliche', detect: { kind: 'hybrid', signals: ['font-size: *(9[6-9]|1[0-9][0-9])px'], note: '96px+ 디스플레이와 12px 라벨 극단 병치 + 중간 티어 부재일 때' }, previewSpec: { type: 'beforeAfter', left: { label: 'Slop', spec: { type: 'typeSpec', samples: [{ text: '거대 디스플레이', size: '1.8rem', weight: 900 }, { text: '중간 단계 없이 극소 라벨', size: '0.55rem', dim: true }] } }, right: { label: 'Escape', spec: { type: 'typeSpec', samples: [{ text: 'Display', size: '1.5rem', weight: 800 }, { text: 'Headline', size: '1.15rem', weight: 700 }, { text: 'Body', size: '0.85rem' }, { text: 'Caption', size: '0.7rem', dim: true }] } } }, name: 'Extreme Hierarchy Cliché', koName: '극단 위계 클리셰', description: '120px+ 헤드라인과 10~12px 마이크로 텍스트만 병치하고 중간 단계가 없다.', tell: '드라마만 노려 모듈러 스케일 없이 크기를 양극단으로 던진다.', whyDisliked: '중간 정보가 사라져 위계가 아니라 충돌로 읽힌다.', severity: 'weak', cause: 'underspec', escape: [{ name: 'Modular Scale', dict: 'layout' }], source: 'community' },
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
    description: '페이지 골격과 섹션 순서가 모두 형제처럼 같아지는 신호',
    type: 'ai-slop',
    count: 8,
    categories: [
      {
        id: 'slop-cat-5',
        number: 5,
        name: 'Page Skeleton',
        subtitle: '페이지 골격',
        definition: '히어로와 섹션 순서가 정형화되어 수렴하는 클리셰.',
        count: 4,
        groups: [
          {
            label: null,
            items: [
              { id: 'centered-hero-default', detect: { kind: 'hybrid', signals: ['textAlign[^,}]{0,20}center', 'text-center'], note: '중앙 정렬 + 배지 + 헤드라인 + 서브 + CTA 쌍 수직 스택 구조는 코드 읽기로 판정. AI 시그니처 세트(Inter+인디고+3카드)와 결합 시 강신호' }, previewSpec: { type: 'beforeAfter', left: { label: 'Slop', spec: { type: 'areas', cols: '1fr 2fr 1fr', rows: 'repeat(4, 1fr)', areas: ['. a .', '. b .', '. c .', '. d .'], labels: { a: '배지', b: '중앙 헤드라인', c: '서브카피', d: 'CTA 한 쌍' } } }, right: { label: 'Escape', spec: { type: 'areas', cols: '1.6fr 1fr', rows: 'repeat(2, 1fr)', areas: ['a b', 'a c'], labels: { a: '좌측 대형 헤드라인', b: '비주얼', c: 'CTA' } } } }, name: 'Centered Hero', koName: '가운데 정렬 히어로', description: '큰 산세리프 헤드라인을 중앙에 두고 그 아래 부제와 버튼 2개를 놓는다.', tell: 'AI 가 가장 자주 수렴하는 기본 히어로 구도.', whyDisliked: '시선 유도·긴장감이 없고 모든 랜딩이 똑같아 보인다.', severity: 'strong', cause: 'median', escape: [{ name: 'Asymmetric Balance', dict: 'layout' }, { name: 'Asymmetric Split', dict: 'design' }], source: 'developersdigest, AXE-WEB' },
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
        definition: '그리드 선택과 크기 처리에서 우선순위를 지워버리는 클리셰.',
        count: 4,
        groups: [
          {
            label: null,
            items: [
              { id: 'bento-overuse', detect: { kind: 'judgment', note: '항목 유지 확정(2026 검증: 피로 클리셰로 인지되면서 동시에 지속 대량 사용). 칸 크기가 우선순위를 안 담을 때만 슬롭. 미학이 아닌 의도성 부재로 판정 (Creative Boom 2026)' }, previewSpec: { type: 'beforeAfter', left: { label: 'Slop', spec: { type: 'areas', cols: 'repeat(4, 1fr)', rows: 'repeat(2, 1fr)', areas: ['a a b c', 'd e e c'], labels: { a: '중요도 ?', b: '?', c: '?', d: '?', e: '?' } } }, right: { label: 'Escape', spec: { type: 'areas', cols: 'repeat(3, 1fr)', rows: 'repeat(3, 1fr)', areas: ['a a b', 'a a c', 'd e c'], labels: { a: '핵심 기능 (1순위)', b: '2순위', c: '2순위', d: '3순위', e: '3순위' } } } }, name: 'Bento Grid Overuse', koName: '벤토 그리드 남용', description: '크기가 다른 둥근 칸들의 그리드를 맥락 없이 기본 레이아웃으로 쓴다.', tell: 'Perplexity·Suno 류 AI 제품이 과사용해 AI 제품의 시그니처가 됐다.', whyDisliked: '칸 크기가 우선순위를 담지 않으면 그저 트렌드 흉내로 읽힌다.', severity: 'weak', cause: 'no-constraint', escape: [{ name: 'Bento Grid', dict: 'layout' }, { name: 'Hierarchical Grid', dict: 'layout' }], source: 'Landdding, openads' },
              { id: 'uniform-rounding-sizing', detect: { kind: 'hybrid', signals: ['borderRadius'], note: 'radius 값 분포를 세서 단일값이 90%+ 면 플래그. 크기 위계 부재와 결합 시 승격' }, previewSpec: { type: 'beforeAfter', left: { label: 'Slop', spec: { type: 'repeat', cols: 4, count: 8, label: '동일 크기' } }, right: { label: 'Escape', spec: { type: 'areas', cols: '2fr 1fr 1fr', rows: 'repeat(2, 1fr)', areas: ['a b c', 'a d e'], labels: { a: '주인공 (대)', b: '보조', c: '보조', d: '보조', e: '보조' } } } }, name: 'Uniform Rounding & Sizing', koName: '균일 라운드·사이즈', description: '16px 동일 라운드, 동일 패딩, 동일 카드 높이가 화면을 덮는다.', tell: '위계 대신 시각적 평탄함을 만들어 "아무 결정도 안 한" 인상을 준다.', whyDisliked: '모든 요소가 동등해 시선이 멈출 곳이 없다.', severity: 'weak', cause: 'no-constraint', escape: [{ name: 'Scale Contrast', dict: 'layout' }, { name: 'Spatial Grouping', dict: 'layout' }], source: 'developersdigest' },
              { id: 'excessive-card-nesting', detect: { kind: 'hybrid', signals: ['(Card|Paper)[^/]{0,200}(Card|Paper)'], note: 'border 또는 boxShadow+borderRadius 조상 체인 3레벨 이상에서 플래그. 2레벨은 정당한 그루핑일 수 있음. AI 이전부터의 안티패턴이라 빈도 신호이지 배타 신호 아님 (M3·Mews 디자인 시스템이 중첩 outlined 카드를 안티패턴으로 규정)' }, previewSpec: { type: 'beforeAfter', left: { label: 'Slop', spec: { type: 'stack', count: 3, labels: ['카드 레벨 1', '카드 레벨 2 (레벨 1 안)', '카드 레벨 3 (위계 실종)'] } }, right: { label: 'Escape', spec: { type: 'areas', cols: '1fr 1fr', rows: 'repeat(2, 1fr)', areas: ['a c', 'b c'], labels: { a: '그룹 1 (여백으로 묶음)', b: '그룹 1', c: '그룹 2' } } } }, name: 'Excessive Card Nesting', koName: '과도한 카드 중첩', description: '카드 안에 카드, 그 안에 또 카드. 3~4단 중첩으로 모든 것이 상자에 담겨 무엇도 중요해 보이지 않는다.', tell: 'border·그림자를 가진 컨테이너가 3단 이상 중첩되고 위계가 사라진다.', whyDisliked: '그루핑이 아니라 포장이 목적이 돼 정보 위계가 죽는다.', severity: 'weak', cause: 'no-constraint', escape: [{ name: 'Spatial Grouping', dict: 'layout' }, { name: 'Macro/Micro Whitespace', dict: 'layout' }], source: 'thefountaininstitute.com, m3.material.io' },
              { id: 'stat-banner-row', detect: { kind: 'hybrid', signals: ['[0-9]+[KM][+]|99%|24/7'], note: '출처·기간 맥락 없는 지표 4연 배치일 때' }, previewSpec: { type: 'beforeAfter', left: { label: 'Slop', spec: { type: 'repeat', cols: 4, count: 4, labels: ['10K+ Users', '99% Uptime', '4.9 Rating', '24/7 Support'] } }, right: { label: 'Escape', spec: { type: 'areas', cols: '1.4fr 1fr', rows: 'repeat(2, 1fr)', areas: ['a b', 'a c'], labels: { a: '핵심 지표 1개 + 산출 근거', b: '출처·기간', c: '지표가 의미하는 것' } } } }, name: 'Stat Banner Row', koName: '지표 배너 행', description: '"10k+ users", "99.9% uptime" 같은 숫자 메트릭을 가로로 늘어놓는다.', tell: '신뢰를 숫자로 때우는 정형 블록.', whyDisliked: '맥락 없는 숫자라 진위가 의심되고 클리셰로 읽힌다.', severity: 'weak', cause: 'median', escape: [{ name: 'Statistic', dict: 'design' }], source: 'developersdigest' },
              { id: 'over-rounded-corners', detect: { kind: 'code', signals: ['border-radius: *(2[4-9]|[3-9][0-9])px', 'rounded-(2xl|3xl)'], note: '작은 요소(버튼·배지·인풋·작은 카드)에 24px+ 반경. uniform-rounding-sizing 이 "다 같은 반경" 이라면 이건 "요소 크기 대비 너무 큰 반경". 큰 컨테이너·알약 버튼의 의도적 라운드는 제외.' }, name: 'Over-Rounded Corners', koName: '과도한 라운드 모서리', description: '작은 버튼·배지·인풋까지 24px 이상 큰 반경으로 둥글려 물방울처럼 뭉툭하다.', tell: 'Tailwind/shadcn 의 큰 rounded 기본값을 그대로 둬서 요소 크기와 무관하게 다 부풀어 보인다.', whyDisliked: '위계·정밀함이 사라지고 장난감 같은 인상을 준다. 요소 크기별 반경 조율이 없다.', severity: 'weak', cause: 'median', aliases: ['rounded-3xl everything', 'blobby corners'], escapeNote: '요소 크기에 반경을 비례시킨다. 작은 요소는 4~8px, 큰 컨테이너만 큰 반경. 반경을 스케일 토큰으로 정의한다.', source: 'deep-research 2026-07 (24px+ radius on small elements)' },
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
    description: '특정 라이브러리 디폴트와 정형 컴포넌트가 그대로 노출되는 신호',
    type: 'ai-slop',
    count: 7,
    categories: [
      {
        id: 'slop-cat-7',
        number: 7,
        name: 'Kit Defaults',
        subtitle: 'UI 키트 디폴트',
        definition: '스타일 개입 없이 라이브러리 기본 룩이 그대로 드러나는 클리셰.',
        count: 7,
        groups: [
          {
            label: null,
            items: [
              { id: 'shadcn-default', detect: { kind: 'hybrid', signals: ['rounded-(xl|2xl)|zinc-[89]00'], note: 'shadcn/v0 기본값은 중립 zinc/black 계열(purple 편향과 별개). 동일 radius+뉴트럴 회색+고스트 버튼 세트의 무커스텀 노출일 때. MUI 프로젝트에선 보통 해당 없음' }, previewSpec: { type: 'beforeAfter', left: { label: 'Slop', spec: { type: 'repeat', cols: 2, count: 4, labels: ['디폴트 버튼', '디폴트 카드', '디폴트 인풋', '디폴트 배지'] } }, right: { label: 'Escape', spec: { type: 'split', dir: 'row', ratio: [1.8, 1, 1, 1], labels: ['FilledCard (브랜드 토큰)', '8px', '16px', '24px'] } } }, name: 'shadcn Default Look', koName: 'shadcn 디폴트', description: 'shadcn/ui 기본 스타일을 한 줄도 손대지 않고 그대로 노출한다.', tell: 'AI 에이전트가 복붙하도록 설계된 키트라 개입 없는 페이지가 동일 룩으로 수렴한다.', whyDisliked: '"AI 인터페이스의 비공식 깃발" 로 불릴 만큼 출처가 빤히 보인다.', severity: 'strong', cause: 'underspec', escape: [{ name: 'Padding Scale', dict: 'layout' }, { name: 'FilledCard', dict: 'design' }], source: 'The Fountain Institute' },
              { id: 'lucide-only-icons', detect: { kind: 'hybrid', signals: ['lucide-react'], note: '주의: 이 프로젝트는 design-system 룰이 lucide 를 표준 채택했으므로 사용 자체는 신호 아님. 커스텀 아이콘 0 + 장식 목적 남용일 때만' }, previewSpec: { type: 'beforeAfter', left: { label: 'Slop', spec: { type: 'repeat', cols: 4, count: 8, label: 'Lucide 24px' } }, right: { label: 'Escape', spec: { type: 'split', dir: 'row', ratio: [1.4, 1], labels: ['브랜드 커스텀 SVG', '필요한 곳만 모션'] } } }, name: 'Lucide-Only Icons', koName: 'Lucide 아이콘 일색', description: 'shadcn 기본 아이콘 세트(Lucide)나 Hero Icons 만 일관되게 쓴다.', tell: '커스텀·혼용 없이 단일 세트라 키트 디폴트가 그대로 보인다.', whyDisliked: '브랜드 아이콘 언어가 없어 어디서 본 듯한 인상을 준다.', severity: 'weak', cause: 'underspec', escape: [{ name: 'SVGMorphing', dict: 'design' }], source: 'The Fountain Institute' },
              { id: 'pill-eyebrow-badge', detect: { kind: 'hybrid', signals: ['rounded-full|borderRadius: *(999|9999)'], note: '히어로 헤드라인 바로 위 위치일 때만' }, previewSpec: { type: 'beforeAfter', left: { label: 'Slop', spec: { type: 'areas', cols: '1fr 2fr 1fr', rows: 'repeat(3, 1fr)', areas: ['. a .', '. b .', '. c .'], labels: { a: '알약 배지 (New!)', b: '헤드라인', c: '서브카피' } } }, right: { label: 'Escape', spec: { type: 'areas', cols: '1fr 2fr 1fr', rows: '1fr 1.6fr 1fr', areas: ['. . .', '. m .', '. . .'], labels: { m: '헤드라인 자체가 초점 (배지 없음)' } } } }, name: 'Pill Eyebrow Badge', koName: '헤드라인 위 알약 라벨', description: '오버사이즈 헤드라인 바로 위에 작은 대문자 pill chip 을 단다.', tell: '"default AI SaaS hero" 의 고정 부품.', whyDisliked: '거의 모든 AI 랜딩이 같은 자리에 같은 알약을 단다.', severity: 'strong', cause: 'median', escape: [{ name: 'Focal Point', dict: 'layout' }], source: 'developersdigest' },
              { id: 'colored-left-border-cards', detect: { kind: 'code', signals: ['borderLeft: *.[2-6]px solid|border-l-4'] }, previewSpec: { type: 'beforeAfter', left: { label: 'Slop', spec: { type: 'repeat', cols: 1, count: 3, label: '좌측 컬러 스트라이프 + 카드' } }, right: { label: 'Escape', spec: { type: 'areas', cols: '1fr 2fr 1fr', rows: '1fr 1.4fr 1fr', areas: ['g g g', '. m .', 'b b b'], labels: { g: '일반 카드 (배경층)', m: '강조 카드 (명도·그림자 분리)', b: '일반 카드' } } } }, name: 'Colored Left Border Cards', koName: '카드 좌측 컬러 스트라이프', description: '카드·인용구 왼쪽 가장자리에 3~4px 색 줄을 일괄로 넣는다.', tell: '강조 장치가 없을 때 좌측 스트라이프로 때우는 디폴트.', whyDisliked: '모든 카드가 같은 장식을 달아 위계가 평탄해진다.', severity: 'weak', cause: 'median', escape: [{ name: 'Figure-Ground', dict: 'layout' }], source: 'developersdigest' },
              { id: 'dead-cta', detect: { kind: 'code', signals: ['href="#"', "href=.#."], note: '빈 onClick 핸들러 포함. 검증 부재(no-verify)의 대표 신호' }, previewSpec: { type: 'beforeAfter', left: { label: 'Slop', spec: { type: 'split', dir: 'col', ratio: [1.6, 1], labels: ['히어로 + Get Started CTA', '클릭해도 아무 데도 안 감 (href=\"#\")'] } }, right: { label: 'Escape', spec: { type: 'split', dir: 'col', ratio: [1.6, 1], labels: ['CTA 는 실제 목적지에 연결', 'hover·loading·disabled 상태 정의'] } } }, name: 'Dead "Get Started" CTA', koName: '작동 안 하는 CTA', description: '"Get Started" 버튼이 아무 데도 안 가거나 같은 페이지로 루프한다.', tell: '생성 후 클릭을 점검하지 않은 흔적.', whyDisliked: '실제로 동작하지 않아 신뢰를 즉시 무너뜨린다.', severity: 'strong', cause: 'no-verify', escape: [{ name: 'Button', dict: 'design' }], source: 'developersdigest, The Fountain Institute' },
              { id: 'emoji-icon-navigation', detect: { kind: 'code', signals: ['[🏠🚀💎📞⚡🔥🎯🎉]'], note: 'nav·헤딩·불릿 텍스트 노드 한정 판정. 정식 검출은 Unicode Emoji_Presentation 프로퍼티 regex. 이미지로 렌더된 이모지는 grep 밖' }, previewSpec: { type: 'beforeAfter', left: { label: 'Slop', spec: { type: 'split', dir: 'row', ratio: [1, 1, 1, 1], labels: ['🏠 홈', '🚀 기능', '💎 가격', '📞 문의'] } }, right: { label: 'Escape', spec: { type: 'split', dir: 'row', ratio: [1, 1, 1, 1], labels: ['홈', '기능', '가격', '문의'] } } }, name: 'Emoji Icon Navigation', koName: '이모지 네비게이션', description: '사이드바·네브바에 아이콘 대신 이모지를 쓴다.', tell: '아이콘 시스템을 만들지 않고 이모지로 대체한 흔적.', whyDisliked: '플랫폼마다 다르게 렌더되고 장난스러워 신뢰를 깎는다.', severity: 'weak', cause: 'no-constraint', escape: [{ name: 'NavigationMenu', dict: 'design' }], source: 'developersdigest' },
              { id: 'sparkle-ai-branding', detect: { kind: 'code', signals: ['✨|Sparkles'], note: '4각 별 SVG·lucide Sparkles 아이콘이 AI 기능 라벨마다 반복될 때. 2026 실무자 피로 트렌드 (Slate 2025-12, Creative Boom 2026)' }, previewSpec: { type: 'beforeAfter', left: { label: 'Slop', spec: { type: 'typeSpec', samples: [{ text: '✨ AI 어시스턴트', size: '1rem', weight: 700 }, { text: '✨ AI 요약 · ✨ AI 추천 · ✨ AI 검색', size: '0.8rem', dim: true }] } }, right: { label: 'Escape', spec: { type: 'typeSpec', samples: [{ text: '기능 실체를 담은 이름 + 전용 아이콘', size: '1rem', weight: 700 }, { text: '스파클 글리프는 금지 목록에 올립니다', size: '0.8rem', dim: true }] } } }, name: 'Sparkle AI Branding', koName: '4각 스파클 AI 브랜딩', description: 'AI 기능마다 4각 별 스파클 글리프와 그라디언트를 붙이는 2024-2025 업계 공통 반사.', tell: '스파클 이모지·4-point star SVG 가 AI 기능 표시마다 반복된다.', whyDisliked: '모든 AI 제품이 같은 글리프를 써서 차별화가 0 이 된다.', severity: 'weak', cause: 'median', escapeNote: '기능의 실체를 나타내는 전용 아이콘과 이름을 만들고, 스파클 글리프는 금지 목록에 올린다.', source: 'slate.com, creativeboom.com' },
              { id: 'decorative-status-dots', detect: { kind: 'judgment', note: '내비 항목·카드 헤더·섹션 타이틀 옆에 실제 상태와 무관한 색색 점을 장식으로 붙임. 리서치가 명시적으로 candidate new taxonomy item 으로 지목. 실제 상태 표시(온라인/에러 등)는 제외.' }, name: 'Decorative Status Dots', koName: '장식용 상태 점', description: '내비·카드 헤더·라벨 옆에 초록/주황 점을 붙이지만 어떤 상태도 나타내지 않는 순수 장식이다.', tell: '"실시간/활성" 느낌만 흉내 내려 상태 점을 장식으로 뿌린다. 의미 없는 신호.', whyDisliked: '진짜 상태 표시와 혼동을 일으키고, 대시보드처럼 보이려는 겉치레로 읽힌다.', severity: 'weak', cause: 'no-constraint', aliases: ['fake status dot', 'decorative indicator'], escapeNote: '점은 실제 상태(온라인·경고·진행)에만 쓴다. 장식이 목적이면 제거하고 타이포·여백으로 구분한다.', source: 'deep-research 2026-07 (meaningless colored status dots, flagged candidate)' },
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
    count: 5,
    categories: [
      {
        id: 'slop-cat-8',
        number: 8,
        name: 'Generated Imagery',
        subtitle: '생성 이미지',
        definition: '생성 모델 특유의 룩과 결함이 그대로 노출되는 클리셰.',
        count: 5,
        groups: [
          {
            label: null,
            items: [
              { id: 'corporate-memphis', detect: { kind: 'judgment', note: '이미지 육안 판정: 얼굴 없는 인물, 과장된 사지, 플랫 파스텔' }, previewSpec: { type: 'beforeAfter', left: { label: 'Slop', spec: { type: 'image', src: '/dictionary/slop-previews/corporate-memphis.jpg', label: '코퍼릿 멤피스 재현' } }, right: { label: 'Escape', spec: { type: 'image', src: 'https://nufykiziszkpvfwgpdzr.supabase.co/storage/v1/object/public/visual-asset/taxonomy/printmaking-drawing/linocut.jpg', label: 'Linocut (visual 사전 실물 샘플)' } } }, name: 'Corporate Memphis', koName: '코퍼릿 멤피스', description: '작은 머리에 길고 구부러진 사지, 얼굴 없는 인물이 춤추는 플랫 일러스트와 비현실 피부톤.', tell: '2017 Facebook Alegria 발 과포화 스타일이 디폴트로 굳었다.', whyDisliked: '개성을 지운 "글로벌 무난체" 라 조롱의 대상이 된 지 오래다.', severity: 'strong', cause: 'median', aliases: ['Alegria', 'Big Tech Art'], escape: [{ name: 'Linocut', dict: 'visual' }, { name: 'Risograph', dict: 'visual' }], source: 'Wikipedia, Webflow' },
              { id: 'plastic-ai-illustration', detect: { kind: 'judgment', note: '광택 플라스틱 질감·무텍스처 육안 판정' }, previewSpec: { type: 'beforeAfter', left: { label: 'Slop', spec: { type: 'image', src: '/dictionary/slop-previews/plastic-ai-illustration.jpg', label: '플라스틱 AI 일러스트 재현' } }, right: { label: 'Escape', spec: { type: 'image', src: 'https://nufykiziszkpvfwgpdzr.supabase.co/storage/v1/object/public/visual-asset/taxonomy/printmaking-drawing/etching.jpg', label: 'Etching (visual 사전 실물 샘플)' } } }, name: 'Plastic AI Illustration', koName: '플라스틱 AI 일러스트', description: '약간 너무 매끈하고 너무 대칭이며 플라스틱 질감에 완벽한 조명을 가진 일러스트.', tell: '손맛·불완전성이 없어 "사람이 그린 적 없음" 이 드러난다.', whyDisliked: '균질한 완벽함이 차갑고 가짜처럼 느껴진다(uncanny).', severity: 'strong', cause: 'underspec', escape: [{ name: 'Etching', dict: 'visual' }, { name: 'Woodcut', dict: 'visual' }], source: 'UX Planet' },
              { id: 'octane-blob-neon', detect: { kind: 'judgment', note: '다크 위 무지갯빛 블롭 렌더 육안 판정' }, previewSpec: { type: 'beforeAfter', left: { label: 'Slop', spec: { type: 'image', src: '/dictionary/slop-previews/octane-blob-neon.jpg', label: '옥테인 블롭·네온 재현' } }, right: { label: 'Escape', spec: { type: 'image', src: 'https://nufykiziszkpvfwgpdzr.supabase.co/storage/v1/object/public/visual-asset/taxonomy/tone-shading/flat-fill.jpg', label: 'Flat Fill (visual 사전 실물 샘플)' } } }, name: 'Octane 3D Blob / Neon Render', koName: '옥테인 3D 블롭·네온 렌더', description: '발광 네온, 옥테인 렌더 글로시 3D 오브·블롭을 배경 비주얼로 쓴다.', tell: 'Midjourney·생성 3D 의 시그니처 룩.', whyDisliked: '내용과 무관한 장식이라 공허하고 양산형으로 읽힌다.', severity: 'weak', cause: 'median', escape: [{ name: 'Flat Fill', dict: 'visual' }], source: 'developersdigest' },
              { id: 'ai-stock-smoothness', detect: { kind: 'judgment', note: '손·눈·배경 텍스트 확대 검사 (모공 없는 피부, 손가락 수, 뭉개진 글자)' }, previewSpec: { type: 'beforeAfter', left: { label: 'Slop', spec: { type: 'image', src: '/dictionary/slop-previews/ai-stock-smoothness.jpg', label: 'AI 스톡 매끈함 재현' } }, right: { label: 'Escape', spec: { type: 'split', dir: 'col', ratio: [1.6, 1], labels: ['실제 인물·실제 현장 사진', '보정은 노출·색까지만 (결함 은폐 금지)'] } } }, name: 'AI Stock Smoothness & Anatomy Glitches', koName: 'AI 스톡 매끈함·해부 오류', description: '과한 조명, 어긋난 비율, 손가락·텍스트 깨짐, 플라스틱 피부의 생성 스톡 이미지.', tell: '디테일(손·눈·글자)을 확대하면 어긋남이 드러난다.', whyDisliked: '점검 없이 박아넣은 결함이라 아마추어·날림 인상을 준다.', severity: 'strong', cause: 'no-verify', escape: [{ name: 'Image', dict: 'design' }], source: 'Originality.AI, doooob' },
              { id: 'generic-ai-logo', detect: { kind: 'judgment', note: '육각형+그라디언트+뇌·회로·인피니티 조합 육안 판정' }, previewSpec: { type: 'beforeAfter', left: { label: 'Slop', spec: { type: 'image', src: '/dictionary/slop-previews/generic-ai-logo.jpg', label: 'AI 로고 클리셰 재현' } }, right: { label: 'Escape', spec: { type: 'areas', cols: '1fr 2fr 1fr', rows: '1fr 1fr 1fr', areas: ['. . .', '. m .', '. . .'], labels: { m: '여백 중심 워드마크 (심볼 최소)' } } } }, name: 'Generic AI Logo Tropes', koName: 'AI 로고 클리셰', description: '헥사곤, 소용돌이(swirl), 뉴럴넷·뇌·회로 모티프에 그라디언트 + 산세리프 워드마크.', tell: 'OpenAI 소용돌이 이후 "진지한 AI" 로고가 템플릿화됐다.', whyDisliked: '경쟁 로고와 구별이 안 돼 브랜드 자산이 되지 못한다.', severity: 'weak', cause: 'median', escape: [{ name: 'Negative Space', dict: 'layout' }], source: 'ebaqdesign' },
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
    description: '문구·문장부호·포맷에서 드러나는 AI 글쓰기의 티',
    type: 'ai-slop',
    count: 9,
    categories: [
      {
        id: 'slop-cat-9',
        number: 9,
        name: 'Phrasing & Punctuation',
        subtitle: '문구·문장부호',
        definition: '상투어와 정형 구문, 특정 문장부호의 과사용 클리셰.',
        count: 9,
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
    count: 6,
    categories: [
      {
        id: 'slop-cat-11',
        number: 11,
        name: 'Root Causes',
        subtitle: '근본 원인',
        definition: '표면 클리셰를 만드는 메커니즘. 한 항목이 여러 Part 의 신호를 동시에 설명한다.',
        count: 6,
        groups: [
          {
            label: null,
            items: [
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
