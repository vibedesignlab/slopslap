# slopslap Reference Matrix — 스키마·계약 (Plan B)

점검 결과(findings)를 사전 수집한 레퍼런스 매트릭스에 통과시켜, 파편 수정이 아니라 **방향 조합(칼라·그리드·타이포 전략)을 하나로 확정**하고 과감하게 transform 한다. 값은 전부 실제 소스에서 수집(손 타이핑 금지).

## 셀 키

```
cellKey = <tell>            # taxonomy-id (교체형만; 삭제형은 매트릭스 없음)
        + "__" + <section>  # hero | pricing | features | faq | footer | nav | cta | generic
        + "__" + <bold>     # on | off
```
- C(간격)·D(타입)·E(색)은 페이지-전역 계약이라 대개 `section=generic`.
- B(그리드·섹션 레이아웃)는 `section` 구체값(hero/pricing/…)이 의미 있음.
- 조회는 결정적: finding → cellKey 정규화 → 가장 긴 prefix + alias 매칭.

## 답안 유닛 스키마

```jsonc
{
  "id": "<unit-id>",
  "cellKeys": ["unscaled-spacing-ladder__generic__off", ...],  // 한 유닛이 여러 셀 커버 가능
  "styleTag": "minimal|editorial|swiss-grid|classic-serif|tech-dark|brutalist|playful|organic",
  "direction": "짧은 방향 라벨(사람용, 집행은 contract 숫자만 씀)",
  "contract": {                     // ★ 실측값. 집행 snap 기준.
    "spacingLadder_px": [ ... ],    // 수집 사이트의 실측 간격 히스토그램 → 사다리
    "typeScale_px": [ ... ],        // 실측 font-size 스케일
    "typeRatio": 1.25,              // 도출된 모듈러 비
    "palette": { "accent": ["#..."], "neutralRamp": ["#..."], "semantic": {...} },
    "measure_ch": [60,75],
    "gridRatios": ["1fr 1fr", "3fr 2fr"],
    "fontRoles": { "display": "...", "body": "...", "mono": "..." }
  },
  "evidence": { "screenshot": "shots/<id>.webp", "sourceUrl": "https://...", "capturedAt": "<ISO>", "license": "public-observed" },
  "check": "이 유닛 적용됐는지 소스에서 실측할 술어"
}
```

## 모드 게이트 (★ 리덕티브 계약과의 충돌 방지)

slopslap 기본은 **reductive**(삭제>축소>교체, 재설계 범위 밖). Plan B transform 은 별도 모드다.

- `mode=reductive` (기본): 기존 파이프라인. 매트릭스는 참고(리포트)만, 집행은 대상서 도출.
- `mode=transform` (명시적 선택 시): 점검 결과 전체 → 매트릭스 통과 → **방향 조합 1벌 확정** → 영역 집행자들이 그 조합의 contract 를 **공동 소비**해 일관 전환. 카피·정보·순서는 여전히 불가침(재설계라도 콘텐츠는 보존).

## 레드팀 (설계 시점 자기심문 — 실행 전 대응 완료)

1. **답안지→하우스스타일 median화**: 셀당 유닛 ≥3, **styleTag 상이 ≥3 강제**. 선택은 대상 콘텐츠·BOLD·컨셉선언에서 도출(회피만을 근거로 한 결정 무효 — 택소노미 계약). 단일 소스 사이트 ≤10%, 단일 styleTag ≤35%.
2. **transform vs reductive 충돌**: 명시적 모드 게이트로 분리. 몰래 재설계 금지.
3. **포화 착시**: coverage-report 의 결핍 카운트=0 이 포화(느낌 아님). 미스 셀은 라이브 폴백 후 편입.
4. **라이선스**: 값·구조 패턴만 차용, 마크업·에셋 복제 금지. evidence 에 출처 기록.
5. **신선도**: 매트릭스는 재생성 스크립트 산출물. 소스 개편 시 재수집.

## median 가드 (Phase 4 최종 시험)

스타일 다른 두 타깃을 같은 매트릭스에 통과 → **두 after 가 서로 달라야** 합격. 같으면 답안지가 정답지가 된 것(레드팀 1 실패).
