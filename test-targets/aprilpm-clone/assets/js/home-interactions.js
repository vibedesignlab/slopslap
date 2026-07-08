(() => {
  const stage = document.querySelector(".word-pile-stage");
  if (!stage) {
    return;
  }

  // 전정기관 민감 사용자는 낙하 애니메이션 자체를 건너뛴다.
  // 이 가드가 무한 pill 스폰 루프도 함께 막아 준다.
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  const isMobile = window.matchMedia("(max-width: 640px)").matches;
  const words = [
    "people",
    "product",
    "AI",
    "what next?",
    "users say no",
    "metrics say yes",
    "simplicity never comes",
    "scope?",
    "edge case",
    "ship it?",
    "why now?",
    "tradeoff",
    "trust?",
    "friction",
    "next step",
    "alignment",
    "what problem?",
    "not now",
    "one more iteration",
    "signal or noise?",
    "works in demo",
    "no clear owner",
  ];
  const styles = ["", "light", "paper", "coral"];
  let count = 0;
  let laneState = null;

  const randomFrom = (seed) => {
    const value = Math.sin(seed * 12.9898) * 43758.5453;
    return value - Math.floor(value);
  };

  const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

  const getLaneState = (stageWidth) => {
    if (laneState && laneState.stageWidth === stageWidth) {
      return laneState;
    }

    const laneCount = isMobile ? 13 : 19;
    const activeLeft = Math.round(stageWidth * 0.06);
    const activeWidth = Math.round(stageWidth * 0.88);
    const laneWidth = activeWidth / laneCount;
    laneState = {
      activeLeft,
      activeWidth,
      heights: Array.from({ length: laneCount }, () => 0),
      laneCount,
      laneWidth,
      stageWidth,
    };

    return laneState;
  };

  const footprintFor = (pillWidth, laneWidth) =>
    clamp(Math.round((pillWidth / laneWidth) * 0.58), isMobile ? 2 : 3, isMobile ? 4 : 5);

  const buildContribution = (startLane, footprint, lift) => {
    const midpoint = (footprint - 1) / 2;
    const entries = [];
    let total = 0;

    for (let offset = 0; offset < footprint; offset += 1) {
      const distance = Math.abs(offset - midpoint) / Math.max(1, midpoint);
      const weight = 1 - distance * 0.36;
      total += weight;
      entries.push({ lane: startLane + offset, weight });
    }

    return entries.map((entry) => ({
      delta: Math.max(6, Math.round((lift * entry.weight) / total)),
      lane: entry.lane,
    }));
  };

  const applyContribution = (state, contribution) => {
    contribution.forEach(({ lane, delta }) => {
      state.heights[lane] += delta;
    });
  };

  const addPill = () => {
    const text = words[count % words.length];
    const pill = document.createElement("span");
    const style = styles[Math.floor(randomFrom(count + 2.7) * styles.length)];
    pill.className = `word-pill ${style}${text.length > 14 ? " long" : ""}`.trim();
    pill.textContent = text;

    const long = text.length > 14;
    const stageWidth = stage.clientWidth || 520;
    const stageHeight = stage.clientHeight || 520;
    const state = getLaneState(stageWidth);
    const pillWidth = long
      ? Math.min(220, Math.max(148, stageWidth * 0.4))
      : Math.min(170, Math.max(92, stageWidth * 0.22));
    const pillHeight = long ? 34 : 40;
    const laneCount = state.laneCount;
    const laneWidth = state.laneWidth;
    const footprint = footprintFor(pillWidth, laneWidth);
    const maxStartLane = laneCount - footprint;
    let bestLane = clamp(Math.floor(randomFrom(count + 9.3) * (maxStartLane + 1)), 0, maxStartLane);
    let bestScore = Number.POSITIVE_INFINITY;
    const candidateCount = Math.min(maxStartLane + 1, isMobile ? 9 : 11);

    for (let attempt = 0; attempt < candidateCount; attempt += 1) {
      const seeded = randomFrom(count * 11.7 + attempt * 3.1 + 17.2);
      const candidate = clamp(Math.floor(seeded * (maxStartLane + 1)), 0, maxStartLane);
      const covered = Array.from({ length: footprint }, (_, index) => candidate + index);
      const currentHeight = covered.reduce((sum, lane) => sum + state.heights[lane], 0) / footprint;
      const left = state.heights[covered[0]];
      const right = state.heights[covered[covered.length - 1]];
      const localSpread = Math.abs(left - right);
      const roughness =
        Math.abs(state.heights[candidate] - state.heights[covered[covered.length - 1]]) +
        Math.abs(
          state.heights[clamp(candidate - 1, 0, laneCount - 1)] -
            state.heights[clamp(candidate + footprint, 0, laneCount - 1)]
        );
      const score = currentHeight * 1.8 + localSpread * 0.7 + roughness * 0.16;

      if (score < bestScore) {
        bestScore = score;
        bestLane = candidate;
      }
    }

    const contribution = buildContribution(bestLane, footprint, long ? 18 : 20);
    const support = contribution.reduce((max, entry) => Math.max(max, state.heights[entry.lane]), 0);
    const laneCenter = state.activeLeft + (bestLane + footprint / 2) * laneWidth;
    const laneJitter = (randomFrom(count + 33.3) - 0.5) * laneWidth * 1.7;
    const x = Math.max(18, Math.min(stageWidth - pillWidth - 18, Math.floor(laneCenter + laneJitter - pillWidth / 2)));
    const bottomInset = isMobile ? 6 : 10;
    const bottomY = stageHeight - bottomInset;
    const landY = Math.max(32, Math.round(bottomY - support - pillHeight + 1));
    const startR = Math.floor(randomFrom(count + 20.4) * 46) - 23;
    const landR = Math.floor(randomFrom(count + 31.8) * 58) - 29;

    pill.style.setProperty("--drop-delay", `${Math.floor(randomFrom(count + 4.2) * 180)}ms`);
    pill.style.setProperty("--pill-h", `${pillHeight}px`);
    pill.style.setProperty("--drop-x", `${x}px`);
    pill.style.setProperty("--land-y", `${landY}px`);
    pill.style.setProperty("--start-r", `${startR}deg`);
    pill.style.setProperty("--land-r", `${landR}deg`);
    pill.style.zIndex = `${20 + count}`;

    stage.appendChild(pill);
    pill.addEventListener(
      "animationend",
      () => {
        pill.classList.add("is-settled");
        applyContribution(state, contribution);
      },
      { once: true }
    );

    count += 1;

    const baseDelay = isMobile ? 180 : 260;
    const jitter = isMobile
      ? Math.floor(randomFrom(count + 40.7) * 130)
      : Math.floor(randomFrom(count + 40.7) * 180);
    window.setTimeout(addPill, baseDelay + jitter);
  };

  window.setTimeout(addPill, 0);
})();
