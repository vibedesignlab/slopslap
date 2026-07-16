/**
 * slopslap Reference Corpus — 자동 생성 파일. 직접 편집 금지.
 * 생성: `npm run gen-references` (scripts/gen-reference-data.mjs)
 * 값 출처(전부 실제 외부 소스): tailwindcss@3.4.19 · @radix-ui/colors@3.0.0 · WCAG 2.1(W3C).
 * 손 타이핑 상수 아님 — 위 패키지/스펙에서 뽑은 값이다. 무키·무료(MIT/W3C), 런타임은 이 파일만 읽어 오프라인.
 * finding 의 taxonomy-id 로 join(가장 긴 prefix + alias). applies:false = 삭제형(차용값 없음).
 */
export const REFERENCE_SOURCES = {
  "tailwind": {
    "name": "tailwindcss@3.4.19 defaultTheme",
    "url": "https://tailwindcss.com/docs/customizing-spacing",
    "license": "MIT",
    "fetchedFrom": "npm package"
  },
  "radix": {
    "name": "@radix-ui/colors@3.0.0",
    "url": "https://www.radix-ui.com/colors",
    "license": "MIT",
    "fetchedFrom": "npm package"
  },
  "wcag": {
    "name": "WCAG 2.1 SC 1.4.3 / 1.4.11",
    "url": "https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html",
    "license": "W3C standard",
    "fetchedFrom": "spec constant"
  }
};

export const REFERENCE_DATA = {
  "unscaled-spacing-ladder": {
    "applies": true,
    "area": "C",
    "source": "tailwind",
    "principle": "간격은 눈대중이 아니라 실제 디자인시스템 간격 스케일의 rung 으로 snap 한다.",
    "target": {
      "ladder_px": [
        2,
        4,
        6,
        8,
        10,
        12,
        14,
        16,
        20,
        24,
        28,
        32,
        36,
        40,
        44,
        48,
        56,
        64,
        80,
        96,
        112,
        128,
        144,
        160,
        176,
        192,
        208,
        224,
        240,
        256
      ],
      "offLadderMaxRatio": 0.2,
      "note": "tailwindcss@3.4.19 의 실제 spacing 스케일(rem→px, ≤256). 자체 도출값을 최근접 rung 으로 정렬(동률 작은쪽), BOLD=off 시 매크로 상향 스냅 금지."
    },
    "exemplars": [
      {
        "label": "Google: \"SaaS landing spacing rhythm\" 예시",
        "url": "https://www.google.com/search?q=SaaS%20landing%20spacing%20rhythm+design+inspiration",
        "gate": "open"
      },
      {
        "label": "Land-book (열림)",
        "url": "https://land-book.com/?search=SaaS%20landing%20spacing%20rhythm",
        "gate": "open"
      },
      {
        "label": "Mobbin (로그인)",
        "url": "https://mobbin.com/",
        "gate": "login"
      }
    ]
  },
  "unscaled-type-hierarchy": {
    "applies": true,
    "area": "D",
    "source": "tailwind",
    "principle": "전 폰트 크기를 실제 타입 스케일의 rung 으로 snap 한다.",
    "target": {
      "scale_px": [
        12,
        14,
        16,
        18,
        20,
        24,
        30,
        36,
        48,
        60,
        72,
        96,
        128
      ],
      "scale_named": [
        {
          "key": "xs",
          "px": 12
        },
        {
          "key": "sm",
          "px": 14
        },
        {
          "key": "base",
          "px": 16
        },
        {
          "key": "lg",
          "px": 18
        },
        {
          "key": "xl",
          "px": 20
        },
        {
          "key": "2xl",
          "px": 24
        },
        {
          "key": "3xl",
          "px": 30
        },
        {
          "key": "4xl",
          "px": 36
        },
        {
          "key": "5xl",
          "px": 48
        },
        {
          "key": "6xl",
          "px": 60
        },
        {
          "key": "7xl",
          "px": 72
        },
        {
          "key": "8xl",
          "px": 96
        },
        {
          "key": "9xl",
          "px": 128
        }
      ],
      "lineHeight": {
        "body": 1.5,
        "heading": 1.15,
        "ui": 1.3
      },
      "note": "tailwindcss@3.4.19 의 실제 fontSize 스케일(rem→px). 관측 크기를 최근접 rung 으로 snap, 위계 보존."
    },
    "exemplars": [
      {
        "label": "Google: \"editorial web typography scale\" 예시",
        "url": "https://www.google.com/search?q=editorial%20web%20typography%20scale+design+inspiration",
        "gate": "open"
      },
      {
        "label": "Land-book (열림)",
        "url": "https://land-book.com/?search=editorial%20web%20typography%20scale",
        "gate": "open"
      },
      {
        "label": "Mobbin (로그인)",
        "url": "https://mobbin.com/",
        "gate": "login"
      }
    ]
  },
  "decorative-semantic-color": {
    "applies": true,
    "area": "E",
    "source": "radix",
    "principle": "무지개 hue 순환 대신 accent 1개 + 중립 램프로 수렴. 실제 접근성 램프의 스텝 규약을 쓴다.",
    "target": {
      "neutralRamp": {
        "name": "slate",
        "steps12": [
          "#fcfcfd",
          "#f9f9fb",
          "#f0f0f3",
          "#e8e8ec",
          "#e0e1e6",
          "#d9d9e0",
          "#cdced6",
          "#b9bbc6",
          "#8b8d98",
          "#80838d",
          "#60646c",
          "#1c2024"
        ]
      },
      "accentRamps": [
        {
          "name": "red",
          "steps12": [
            "#fffcfc",
            "#fff7f7",
            "#feebec",
            "#ffdbdc",
            "#ffcdce",
            "#fdbdbe",
            "#f4a9aa",
            "#eb8e90",
            "#e5484d",
            "#dc3e42",
            "#ce2c31",
            "#641723"
          ]
        },
        {
          "name": "blue",
          "steps12": [
            "#fbfdff",
            "#f4faff",
            "#e6f4fe",
            "#d5efff",
            "#c2e5ff",
            "#acd8fc",
            "#8ec8f6",
            "#5eb1ef",
            "#0090ff",
            "#0588f0",
            "#0d74ce",
            "#113264"
          ]
        },
        {
          "name": "green",
          "steps12": [
            "#fbfefc",
            "#f4fbf6",
            "#e6f6eb",
            "#d6f1df",
            "#c4e8d1",
            "#adddc0",
            "#8eceaa",
            "#5bb98b",
            "#30a46c",
            "#2b9a66",
            "#218358",
            "#193b2d"
          ]
        },
        {
          "name": "amber",
          "steps12": [
            "#fefdfb",
            "#fefbe9",
            "#fff7c2",
            "#ffee9c",
            "#fbe577",
            "#f3d673",
            "#e9c162",
            "#e2a336",
            "#ffc53d",
            "#ffba18",
            "#ab6400",
            "#4f3422"
          ]
        },
        {
          "name": "violet",
          "steps12": [
            "#fdfcfe",
            "#faf8ff",
            "#f4f0fe",
            "#ebe4ff",
            "#e1d9ff",
            "#d4cafe",
            "#c2b5f5",
            "#aa99ec",
            "#6e56cf",
            "#654dc4",
            "#6550b9",
            "#2f265f"
          ]
        },
        {
          "name": "orange",
          "steps12": [
            "#fefcfb",
            "#fff7ed",
            "#ffefd6",
            "#ffdfb5",
            "#ffd19a",
            "#ffc182",
            "#f5ae73",
            "#ec9455",
            "#f76b15",
            "#ef5f00",
            "#cc4e00",
            "#582d1d"
          ]
        }
      ],
      "stepConvention": {
        "solidBg": 9,
        "hoverBg": 10,
        "lowContrastText": 11,
        "highContrastText": 12
      },
      "note": "@radix-ui/colors@3.0.0 실제 12스텝 hex. 시리즈(카드 등) 아이콘은 단일 accent, 장식 hue 추가 금지."
    },
    "exemplars": [
      {
        "label": "Google: \"restrained brand color palette web\" 예시",
        "url": "https://www.google.com/search?q=restrained%20brand%20color%20palette%20web+design+inspiration",
        "gate": "open"
      },
      {
        "label": "Land-book (열림)",
        "url": "https://land-book.com/?search=restrained%20brand%20color%20palette%20web",
        "gate": "open"
      },
      {
        "label": "Mobbin (로그인)",
        "url": "https://mobbin.com/",
        "gate": "login"
      }
    ]
  },
  "saturated-multicolor-palette": {
    "applies": true,
    "area": "E",
    "source": "radix",
    "principle": "고채도 다색 대신 accent 1 + 중립 램프.",
    "target": {
      "neutralRamp": {
        "name": "slate",
        "steps12": [
          "#fcfcfd",
          "#f9f9fb",
          "#f0f0f3",
          "#e8e8ec",
          "#e0e1e6",
          "#d9d9e0",
          "#cdced6",
          "#b9bbc6",
          "#8b8d98",
          "#80838d",
          "#60646c",
          "#1c2024"
        ]
      },
      "accentRamps": [
        {
          "name": "red",
          "steps12": [
            "#fffcfc",
            "#fff7f7",
            "#feebec",
            "#ffdbdc",
            "#ffcdce",
            "#fdbdbe",
            "#f4a9aa",
            "#eb8e90",
            "#e5484d",
            "#dc3e42",
            "#ce2c31",
            "#641723"
          ]
        },
        {
          "name": "blue",
          "steps12": [
            "#fbfdff",
            "#f4faff",
            "#e6f4fe",
            "#d5efff",
            "#c2e5ff",
            "#acd8fc",
            "#8ec8f6",
            "#5eb1ef",
            "#0090ff",
            "#0588f0",
            "#0d74ce",
            "#113264"
          ]
        },
        {
          "name": "green",
          "steps12": [
            "#fbfefc",
            "#f4fbf6",
            "#e6f6eb",
            "#d6f1df",
            "#c4e8d1",
            "#adddc0",
            "#8eceaa",
            "#5bb98b",
            "#30a46c",
            "#2b9a66",
            "#218358",
            "#193b2d"
          ]
        }
      ],
      "stepConvention": {
        "solidBg": 9,
        "lowContrastText": 11,
        "highContrastText": 12
      },
      "note": "@radix-ui/colors@3.0.0 실제 램프로 수렴."
    },
    "exemplars": [
      {
        "label": "Google: \"minimal accent color web design\" 예시",
        "url": "https://www.google.com/search?q=minimal%20accent%20color%20web%20design+design+inspiration",
        "gate": "open"
      },
      {
        "label": "Land-book (열림)",
        "url": "https://land-book.com/?search=minimal%20accent%20color%20web%20design",
        "gate": "open"
      },
      {
        "label": "Mobbin (로그인)",
        "url": "https://mobbin.com/",
        "gate": "login"
      }
    ]
  },
  "low-contrast-body": {
    "applies": true,
    "area": "E",
    "source": "wcag",
    "principle": "본문 대비 ≥4.5:1, 대형·UI ≥3:1 (WCAG 2.1 SC 1.4.3 / 1.4.11).",
    "target": {
      "minContrast": {
        "bodyText": 4.5,
        "largeText": 3,
        "uiComponent": 3
      },
      "fix": "전경 명도 조정 우선(같은 hue), Radix 램프 step 11↑ 사용."
    },
    "exemplars": [
      {
        "label": "Google: \"accessible text contrast web\" 예시",
        "url": "https://www.google.com/search?q=accessible%20text%20contrast%20web+design+inspiration",
        "gate": "open"
      },
      {
        "label": "Land-book (열림)",
        "url": "https://land-book.com/?search=accessible%20text%20contrast%20web",
        "gate": "open"
      },
      {
        "label": "Mobbin (로그인)",
        "url": "https://mobbin.com/",
        "gate": "login"
      }
    ]
  },
  "numbered-overline-fetish": {
    "applies": false,
    "area": "A",
    "principle": "단발 오버라인·중복 라벨은 삭제. 차용값 없음."
  },
  "all-caps-eyebrow": {
    "applies": false,
    "area": "A",
    "principle": "장식용 all-caps eyebrow 삭제."
  },
  "undisciplined-grid": {
    "applies": false,
    "area": "B",
    "principle": "임의 소수 fr → 하모닉 비. measure 는 텍스트 가독폭(~65ch)에서 도출 — 이건 조판 공리라 패키지 소스 없음, 값 차용 아니라 규칙 적용."
  },
  "meaningless-container-nesting": {
    "applies": false,
    "area": "B",
    "principle": "표면 속 표면·유령 래퍼 flatten. 차용값 없음."
  },
  "colored-left-border-cards": {
    "applies": false,
    "area": "B",
    "principle": "좌측 컬러 보더 삭제. 차용값 없음."
  },
  "italic-serif-accent": {
    "applies": false,
    "area": "D",
    "principle": "장식 이탤릭 제거(font-style:normal). 차용값 없음."
  }
};

export const REFERENCE_ALIASES = {
  "wcag-contrast": "low-contrast-body",
  "contrast": "low-contrast-body",
  "low-contrast": "low-contrast-body",
  "rainbow-palette": "decorative-semantic-color",
  "multicolor-palette": "saturated-multicolor-palette",
  "type-scale": "unscaled-type-hierarchy",
  "font-role-map": "unscaled-type-hierarchy",
  "grid-anarchy": "undisciplined-grid",
  "overline": "numbered-overline-fetish",
  "eyebrow": "all-caps-eyebrow"
};

export function lookupReference(findingId) {
  if (!findingId) return null;
  const base = String(findingId).trim().toLowerCase().split(/[\s(]/)[0].replace(/[.,]$/, '');
  let best = null;
  for (const alias of Object.keys(REFERENCE_ALIASES)) {
    if (base === alias || base.startsWith(alias + '-') || base.includes(alias)) {
      const canon = REFERENCE_ALIASES[alias];
      if (!best || canon.length > best.length) best = canon;
    }
  }
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
