/**
 * slopslap Reference Corpus — findings 진단(taxonomy-id)에 결정적으로 조인되는 정량 레퍼런스 SSOT.
 *
 * 왜 이 파일인가: findings 는 taxonomy-id 로 키잉되고 `검증(check)` 은 매번 소스에서 값 비교로 실행된다.
 * 그러므로 레퍼런스는 (a) 그 id 로 키잉되고 (b) check 가 대조할 수 있는 "숫자/토큰" 이어야 한다.
 * 산문·스크린샷은 집행 snap 타깃이 못 되므로 여기 두지 않는다(리포트 인용/딥링크로만).
 *
 * 차용 범위(구속): 값(사다리·비율·팔레트 램프·measure·대비 임계)만 빌린다. 구성·레이아웃·카피는 절대 차용 금지
 * (리덕티브·의미 불가침 계약). 프로젝트 자체 디자인시스템(토큰 파일·Tailwind config·Figma 변수)이 있으면
 * 그게 최우선, 이 일반 코퍼스는 폴백이다.
 *
 * 무키·무료·오프라인: 아래 값은 전부 공개·무료 소스(Tailwind MIT / Radix Colors MIT / WCAG 2.1 W3C /
 * 고전 타이포그래피 공리)에서 vendoring 했다. 런타임 네트워크·API 키 불필요.
 *
 * applies:false = 삭제/flatten 형 텔(오버라인 제거·유령 컨테이너 벗기기 등) — 차용할 값이 없다(레퍼런스 무의미).
 *
 * join 규칙: finding 의 id(접미사·괄호 붙을 수 있음)를 정규화한 뒤, 이 맵의 키 중 "가장 긴 prefix" 로 매칭한다.
 *   예: 'unscaled-spacing-ladder-hero-hug' · 'unscaled-spacing-ladder (foo)' → 'unscaled-spacing-ladder'.
 */

export const REFERENCE_SOURCES = {
  tailwind: { name: 'Tailwind CSS default theme', url: 'https://tailwindcss.com/docs/customizing-spacing', license: 'MIT' },
  radix: { name: 'Radix Colors', url: 'https://www.radix-ui.com/colors', license: 'MIT' },
  wcag: { name: 'WCAG 2.1 (SC 1.4.3 / 1.4.11)', url: 'https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html', license: 'W3C' },
  typography: { name: 'Modular scale · classic measure (Refactoring UI / Practical Typography)', url: 'https://refactoringui.com', license: 'principle' },
};

// 사람용 실앱 예시 딥링크(집행 아님 — 리포트 브라우징용). 게이트/열림 표기.
function galleries(term) {
  const q = encodeURIComponent(term);
  return [
    { label: `Google: "${term}" 디자인 예시`, url: `https://www.google.com/search?q=${q}+design+inspiration`, gate: 'open' },
    { label: 'Land-book (열림)', url: `https://land-book.com/?search=${q}`, gate: 'open' },
    { label: 'Mobbin (로그인 필요)', url: 'https://mobbin.com/', gate: 'login' },
  ];
}

export const REFERENCE_DATA = {
  // ── 영역 C: 간격 ─────────────────────────────────────────────
  'unscaled-spacing-ladder': {
    applies: true,
    area: 'C',
    principle: '간격은 눈대중이 아니라 단일 베이스의 고정 배수 사다리에서 도출한다. 티어는 각 하위의 ≥1.5×.',
    target: {
      ladder_px: [4, 8, 12, 16, 24, 32, 48, 64, 96, 128],
      base_px: 8,
      tiers: { hug: [4, 8], within: [12, 16, 24], between: [24, 32], block: [48, 64], section: [96, 128] },
      offLadderMaxRatio: 0.2,
      note: 'Tailwind 간격 스케일의 정수 px 부분집합. 자체 도출 base 가 이 사다리와 어긋나면 최근접 rung 으로 정렬(동률 시 작은 쪽). BOLD=off 시 매크로 티어는 상향 스냅 금지.',
    },
    source: 'tailwind',
    exemplars: galleries('SaaS landing spacing rhythm'),
  },

  // ── 영역 D: 타이포 스케일 ────────────────────────────────────
  'unscaled-type-hierarchy': {
    applies: true,
    area: 'D',
    principle: '전 폰트 크기는 base(본문) × 단일 비 r 의 거듭제곱으로 도출한다. 무근거 크기 혼재 금지.',
    target: {
      base_px: 16,
      ratios: { minorThird: 1.2, majorThird: 1.25, perfectFourth: 1.333 },
      lineHeight: { body: 1.5, heading: 1.15, ui: 1.3 },
      measure_ch: [60, 75],
      note: '데스크톱 본문 15~18px, r 은 1.2~1.333 중 하나로 고정. 큰 화면일수록 r↑ 가능하나 스케일당 하나만.',
    },
    source: 'typography',
    exemplars: galleries('editorial web typography scale'),
  },
  'oversized-display-type': {
    applies: true,
    area: 'D',
    principle: '디스플레이 크기도 같은 비 사다리 위의 상단 rung 이어야지, 사다리 밖 임의 초대형이 아니다.',
    target: { base_px: 16, ratios: { majorThird: 1.25, perfectFourth: 1.333 }, displayCap_vw: 8, note: '디스플레이는 스케일 최상단 rung. vw 혼용 시 상한 캡으로 폭주 방지.' },
    source: 'typography',
    exemplars: galleries('large display heading web'),
  },
  'font-family-role-map': {
    applies: true,
    area: 'D',
    principle: '폰트 패밀리는 역할 전단사(bijection): 최대 2~3개, 역할당 하나(display/body/mono). 헤딩에 mono 금지, 본문에 display 금지.',
    target: { maxFamilies: 3, roles: ['display', 'body', 'mono'], rule: 'headings→display|body, body text→body, code/label meta→mono. 한 역할에 두 패밀리 금지.' },
    source: 'typography',
    exemplars: galleries('web font pairing display body'),
  },

  // ── 영역 B: 그리드·폭 ────────────────────────────────────────
  'undisciplined-grid': {
    applies: true,
    area: 'B',
    principle: '컬럼 분할은 임의 소수(1.02fr)가 아니라 하모닉 비. 콘텐츠 폭은 단일 measure 토큰에서 도출.',
    target: {
      harmonicRatios: ['1fr 1fr', '2fr 1fr', '3fr 2fr', '1.618fr 1fr'],
      measure_ch: [60, 75],
      measureToken: '--measure',
      note: '형제 섹션은 같은 measure 토큰을 공유. 소수점 눈대중 fr 금지, 근거 있는 하모닉 비만.',
    },
    source: 'typography',
    exemplars: galleries('web layout grid columns'),
  },
  'default-equal-thirds': {
    applies: true,
    area: 'B',
    principle: '3등분은 콘텐츠가 실제 3개 동격일 때만. 아니면 콘텐츠 수·위계에서 도출한 비대칭 하모닉.',
    target: { harmonicRatios: ['2fr 1fr', '3fr 2fr'], note: '반사적 repeat(3,1fr) 금지 — 콘텐츠 개수·중요도에서 트랙 도출.' },
    source: 'typography',
    exemplars: galleries('asymmetric web layout'),
  },

  // ── 영역 E: 색·대비 ──────────────────────────────────────────
  'decorative-semantic-color': {
    applies: true,
    area: 'E',
    principle: '색은 시맨틱 역할(브랜드 accent 1 + 중립 램프 + 상태색)에서 도출한다. 항목마다 무지개 hue 순환 금지.',
    target: {
      structure: { accent: 1, neutralRamp: '9~12 step', semantic: ['success', 'warning', 'danger'] },
      radixSteps: { solidBg: 9, hoverBg: 10, lowContrastText: 11, highContrastText: 12 },
      note: 'Radix 램프처럼 단일 hue 의 명도 스텝으로 위계를 만들고, 장식 목적의 추가 hue 는 만들지 않는다. 시리즈(카드 6개 등) 아이콘은 동일 accent.',
    },
    source: 'radix',
    exemplars: galleries('restrained brand color palette web'),
  },
  'saturated-multicolor-palette': {
    applies: true,
    area: 'E',
    principle: '고채도 다색 남발 대신 accent 1 + 중립. 채도는 램프 상단 몇 스텝에만.',
    target: { maxAccentHues: 1, radixSteps: { solidBg: 9, lowContrastText: 11, highContrastText: 12 }, note: 'Radix 접근성 램프로 수렴.' },
    source: 'radix',
    exemplars: galleries('minimal accent color web design'),
  },
  'iridescent-palette': {
    applies: true,
    area: 'E',
    principle: '무지개/홀로그램 팔레트 대신 단일 accent 램프.',
    target: { maxAccentHues: 1, note: 'Radix 단일 hue 램프.' },
    source: 'radix',
    exemplars: galleries('single accent web palette'),
  },
  'low-contrast-body': {
    applies: true,
    area: 'E',
    principle: '본문 대비 ≥4.5:1, 대형(≥24px 또는 ≥18.66px bold)·UI 컴포넌트 ≥3:1 (WCAG SC 1.4.3/1.4.11).',
    target: {
      minContrast: { body: 4.5, largeText: 3.0, uiComponent: 3.0 },
      fix: '배경 변경보다 전경 명도 조정 우선, 같은 hue 안에서 해결(Radix 램프 step 11↑).',
    },
    source: 'wcag',
    exemplars: galleries('accessible text contrast web'),
  },

  // ── applies:false — 삭제/flatten 형(차용할 값 없음) ──────────────
  'numbered-overline-fetish': { applies: false, area: 'A', principle: '반복 시리즈 아닌 단발 오버라인·중복 라벨은 삭제. 레퍼런스 아니라 제거.' },
  'all-caps-eyebrow': { applies: false, area: 'A', principle: '장식용 all-caps eyebrow 삭제.' },
  'meaningless-container-nesting': { applies: false, area: 'B', principle: '표면 속 표면·유령 래퍼는 flatten. 차용 아니라 벗기기.' },
  'colored-left-border-cards': { applies: false, area: 'B', principle: '좌측 컬러 보더 패턴 자체가 텔 — 재색 아니라 삭제.' },
  'italic-serif-accent': { applies: false, area: 'D', principle: '장식 이탤릭 제거(font-style:normal). 차용값 없음.' },
};

// 서브에이전트가 붙이는 비표준 id 변형 → 코퍼스 정식 키. findings id 는 완전 표준이 아니므로 조인 견고화.
export const REFERENCE_ALIASES = {
  'wcag-contrast': 'low-contrast-body',
  'contrast': 'low-contrast-body',
  'low-contrast': 'low-contrast-body',
  'rainbow-palette': 'decorative-semantic-color',
  'multicolor-palette': 'saturated-multicolor-palette',
  'type-scale': 'unscaled-type-hierarchy',
  'font-role-map': 'font-family-role-map',
  'grid-anarchy': 'undisciplined-grid',
  'equal-thirds': 'default-equal-thirds',
  'overline': 'numbered-overline-fetish',
  'eyebrow': 'all-caps-eyebrow',
  'container-nesting': 'meaningless-container-nesting',
  'left-border': 'colored-left-border-cards',
};

// finding id → 코퍼스 엔트리 (alias 해소 후 가장 긴 prefix 매칭). 없으면 null.
export function lookupReference(findingId) {
  if (!findingId) return null;
  // 정규화: 첫 공백·괄호 이전만, 소문자
  const base = String(findingId).trim().toLowerCase().split(/[\s(]/)[0].replace(/[.,]$/, '');
  let best = null;
  // 1) alias 직접/prefix 해소
  for (const alias of Object.keys(REFERENCE_ALIASES)) {
    if (base === alias || base.startsWith(alias + '-') || base.includes(alias)) {
      const canon = REFERENCE_ALIASES[alias];
      if (!best || canon.length > best.length) best = canon;
    }
  }
  // 2) 코퍼스 키 직접 prefix 매칭(더 긴 매칭이 우선)
  for (const key of Object.keys(REFERENCE_DATA)) {
    if (base === key || base.startsWith(key + '-')) {
      if (!best || key.length > best.length) best = key;
    }
  }
  if (!best) return null;
  const entry = REFERENCE_DATA[best];
  const src = entry.source ? REFERENCE_SOURCES[entry.source] : null;
  return { key: best, ...entry, sourceMeta: src };
}
