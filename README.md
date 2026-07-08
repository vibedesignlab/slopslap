# slop-toolkit-test

`slop-auditor`(점검 에이전트) + `slop-fix`(수정 스킬)를 **격리해서 테스트**하는 독립 프로젝트. 원본 레포(vibe-design-starter-kit)와 무관하게 자체 완결로 돈다. 모든 경로는 이 프로젝트 기준 상대경로.

## 구조

```
.claude/
  agents/slop-auditor.md        # 점검 에이전트 (read-only, 게슈탈트 판정 + 삭제 사다리)
  skills/slop-fix/SKILL.md       # 수정 스킬 (과감·빼기 우선)
  skills/stable-layout/          # 에이전트가 L0/L1 판단에 참조
scripts/
  scan-slop-signals.mjs          # 택소노미 detect 신호 스캐너
  scan-layer-signals.mjs         # 구조 층 신호 스캐너
src/data/
  aiSlopTaxonomyData.js          # SSOT (62항목, v0.4)
  layoutTaxonomyData.js          # L1 아키타입 판단용
test-targets/
  aprilpm-clone/                 # 샘플 점검 대상 (정적 HTML+CSS)
```

## 테스트 방법

### 1. 스캐너 단독 (기계 패스만)
```bash
node scripts/scan-slop-signals.mjs test-targets/aprilpm-clone
node scripts/scan-layer-signals.mjs test-targets/aprilpm-clone
```

### 2. 에이전트로 점검 (Claude Code)
이 폴더에서 Claude Code를 열면 `slop-auditor` 에이전트와 `/slop-fix` 스킬이 자동 등록된다.
- 점검만: "test-targets/aprilpm-clone 슬롭 점검해" -> slop-auditor 디스패치
- 점검+수정: "/slop-fix" 로 aprilpm-clone de-slopping

새 점검 대상을 넣으려면 `test-targets/` 에 사이트를 복사한다.

## 기대 동작 (이번 개편분 검증 포인트)

- 리포트 **첫 줄이 "AI로 읽힘 (강/약) / 아니오" 게슈탈트 판정**으로 시작하는가
- 처방이 **삭제 > 축소 > 교체** 사다리로, 삭제를 과감히 제안하는가
- px->rem 같은 **코드 위생은 부록으로 강등**되고 헤드라인을 차지하지 않는가
- 카피 공식·기믹·템플릿 게슈탈트를 **코드 신호보다 우선**으로 잡는가

## 주의

- 에이전트/스킬은 이 프로젝트에 귀속(전역 등록 아님). 다른 데서 안 뜬다.
- 스캐너 기본 대상은 `app/` + `src/components` 이므로, 외부 타깃은 경로를 명시해 실행한다.
