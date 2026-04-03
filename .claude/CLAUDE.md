# Claude Code Instructions

> **Note:** Hooks are configured in `.claude/settings.json`.
> They automatically block `gh pr` commands and file edits until you acknowledge the rules.

## Mandatory First Step

Before performing ANY task, identify the task type and load the corresponding skill below. **Do NOT skip. Do not guess conventions.**

---

## 1. PR Review Tasks → Load skill `pr-review`

**Trigger keywords (EN + VI):**
`review PR` · `PR #N` · `review pull request` · `check PR` · `review this PR`
`giúp review PR` · `review PR số` · `xem PR` · `kiểm tra PR` · `đọc PR`

**Action:** Read `.claude/skills/pr-review/SKILL.md` — it contains the full 5-step workflow.

---

## 2. Implementation Tasks → Load skill `implementation`

**Trigger keywords (EN + VI):**
`implement` · `build` · `create` · `add feature` · `code` · `refactor` · `fix bug`
`sửa bug` · `tạo màn hình` · `thêm tính năng` · `viết code` · `tạo component`

**Action:** Read `.claude/skills/implementation/SKILL.md` — it contains the full workflow + PATTERN.md conventions.
