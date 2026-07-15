# 배포 계획 — slopslap (Claude Code plugin)

`slopslap` 스킬을 Claude Code **plugin**으로 패키징해 git + marketplace 로 배포하는 계획.
공식 문서: <https://code.claude.com/docs/en/plugins.md>, <https://code.claude.com/docs/en/plugin-marketplaces.md>

---

## 0. 배포 대상 = 이 레포 전체

현재 7개 파일이 slopslap 의 최소 의존 세트다(별도 정리 불필요):

```
.claude/skills/slopslap/SKILL.md              # 스킬 진입점
.claude/skills/slopslap/references/inspection-areas.md  # 규칙 SSOT + check 스키마
scripts/scan-slop-signals.mjs                   # 스캐너 (aiSlopTaxonomyData.js 를 require)
scripts/build-findings-report.mjs               # 리포트 빌더 (node 내장만)
src/data/aiSlopTaxonomyData.js                  # 택소노미 SSOT
README.md  .gitignore  LICENSE
```

의존 그래프: SKILL → inspection-areas + scan-slop + taxonomy · scan-slop **require** taxonomy · build-report → node 내장만 · taxonomy → import 0.
→ **plugin 안에서 `scripts/` 와 `src/data/` 의 상대 위치만 유지되면** 스캐너는 `import.meta.url` 기준으로 taxonomy 를 자동으로 찾는다(코드 수정 불필요).

---

## 1. ⚠️ 배포 전 필수 — 경로 치환

스킬이 **에이전트에게 지시하는 경로**는 상대경로라, plugin 설치 후(캐시로 복사됨) 사용자 프로젝트 cwd 기준으로 깨진다. `${CLAUDE_PLUGIN_ROOT}` 접두로 바꾼다.

| 파일 | 현재 (로컬 테스트용) | 배포용 |
|---|---|---|
| `SKILL.md` L35 | `node scripts/scan-slop-signals.mjs <경로>` | `node ${CLAUDE_PLUGIN_ROOT}/scripts/scan-slop-signals.mjs <경로>` |
| `SKILL.md` L35 | `src/data/aiSlopTaxonomyData.js` | `${CLAUDE_PLUGIN_ROOT}/src/data/aiSlopTaxonomyData.js` |
| `inspection-areas.md` L3 | `src/data/aiSlopTaxonomyData.js` | `${CLAUDE_PLUGIN_ROOT}/src/data/aiSlopTaxonomyData.js` |
| `SKILL.md` (build-report 호출부) | `scripts/build-findings-report.mjs` | `${CLAUDE_PLUGIN_ROOT}/scripts/build-findings-report.mjs` |

치환 스크립트(배포 브랜치에서만 실행, 로컬 테스트본은 상대경로 유지):
```bash
sed -i '' 's#scripts/scan-slop-signals.mjs#${CLAUDE_PLUGIN_ROOT}/scripts/scan-slop-signals.mjs#g; s#scripts/build-findings-report.mjs#${CLAUDE_PLUGIN_ROOT}/scripts/build-findings-report.mjs#g; s#src/data/aiSlopTaxonomyData.js#${CLAUDE_PLUGIN_ROOT}/src/data/aiSlopTaxonomyData.js#g' \
  .claude/skills/slopslap/SKILL.md .claude/skills/slopslap/references/inspection-areas.md
```

---

## 2. plugin.json (작성 완료)

`.claude-plugin/plugin.json` — 이미 생성됨. `skills: ["./.claude/skills/"]` 로 현재 구조를 그대로 스킬 소스로 지정.
버전은 **명시적 관리**(`version: "1.0.0"`) — commit SHA 자동 추적보다 사용자에게 명확.

## 3. self-marketplace (이 레포를 marketplace 겸용으로)

별도 marketplace 레포 없이 이 레포 하나로 배포 가능. `.claude-plugin/marketplace.json` 추가:

```json
{
  "name": "groovelb-slop",
  "owner": { "name": "groovelb", "email": "groovelb@gmail.com" },
  "description": "AI-slop 제거 도구 모음",
  "plugins": [
    { "name": "slopslap", "source": ".", "description": "AI-slop 병렬-점검 파이프라인 스킬" }
  ]
}
```

---

## 4. git 배포

```bash
# 배포 브랜치에서 경로 치환(1번) 후
git checkout -b release/v1.0.0
# (1번 sed 실행)
git add -A
git commit -m "release: slopslap v1.0.0 (plugin 패키징 + 경로 ${CLAUDE_PLUGIN_ROOT} 전환)"
git tag v1.0.0

# GitHub 원격 연결 + 푸시
git remote add origin https://github.com/groovelb/slopslap.git   # 레포명 예시
git push -u origin release/v1.0.0 v1.0.0
# main 배포로 쓰려면 main 에 머지 후 push
```

## 5. 설치·사용 흐름 (사용자 관점)

```bash
/plugin marketplace add groovelb/slopslap      # GitHub owner/repo
/plugin install slopslap@groovelb-slop
/slopslap                                       # 또는 namespace: /slopslap:slopslap
```

## 6. 배포 전 검증

```bash
claude plugin validate .                          # plugin.json·구조 유효성
claude --plugin-dir .                             # 로컬에서 plugin 로드 테스트 (경로 치환본으로)
```

## 7. 업데이트 배포

```bash
# plugin.json 의 version 을 1.1.0 으로 수정 후
git commit -am "release: v1.1.0" && git tag v1.1.0 && git push origin main v1.1.0
# 사용자: /plugin update slopslap@groovelb-slop
```

---

## 체크리스트

- [ ] 경로 치환(1번) — 배포 브랜치에서 sed 실행
- [ ] `.claude-plugin/marketplace.json` 추가(self-marketplace, 3번)
- [ ] `claude plugin validate .` 통과
- [ ] `claude --plugin-dir .` 로컬 로드 확인 (스킬 등록·스캐너 경로 동작)
- [ ] GitHub 레포 생성 + push + `v1.0.0` 태그
- [ ] `/plugin marketplace add` → `/plugin install` → `/slopslap` E2E 확인
- [ ] (선택) Anthropic 공식 디렉토리 제출: <https://platform.claude.com/plugins/submit>

## 주의

- **로컬 테스트본은 상대경로 유지**(현재 상태). 경로 치환은 배포 브랜치에서만 — main 개발 흐름을 깨지 않는다.
- `scripts/scan-slop-signals.mjs` 는 자기 위치 기준으로 taxonomy 를 찾으므로 **코드 수정 불필요**. 치환 대상은 SKILL·references 의 지시 경로뿐.
- plugin 설치 시 파일은 캐시로 복사된다 → 스킬이 참조하는 모든 경로는 `${CLAUDE_PLUGIN_ROOT}` 기준이어야 한다.
