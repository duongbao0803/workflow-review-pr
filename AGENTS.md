# Agent Instructions

## How to Find Your Rules

Each AI-powered IDE has its own dedicated rules folder. You MUST go to the folder that matches your IDE and read the rules there. Do NOT scan the entire project. Do NOT guess conventions.

| IDE / Agent              | Rules Location                                    |
| ------------------------ | ------------------------------------------------- |
| **Cursor**               | `.cursor/rules/*.mdc`                             |
| **Claude Code**          | `.claude/CLAUDE.md`                               |
| **GitHub Copilot**       | `.github/copilot-instructions.md`                 |
| **Antigravity / Gemini** | Read this file (`AGENTS.md`) directly — see below |
| **Other / Unknown**      | `.agents/rules/`                                  |

> **IMPORTANT:** If your IDE is not listed above, go to `.agents/rules/` and read the rule files there. That is the universal fallback.

### Cursor Enforcement (Critical)

When working in Cursor, read `.cursor/rules/*.mdc` before doing any substantial task.
For any PR review request, you must read `docs/PR_REVIEW.md` and `docs/PATTERN.md` first, and during review you must validate each changed file against `docs/PATTERN.md` before running the final `gh pr review` command.

---

## Rules for Antigravity / Gemini (inline)

Since Antigravity and Gemini read `AGENTS.md` as their native entry point, the rules are defined inline below.

### Mandatory First Step

Before performing ANY task in this repository, you MUST identify the task type below and read the mandatory documentation. Do NOT skip this step. Do not guess conventions.

### 1. PR Review Tasks

**Keywords:** "review PR", "PR #N", "review pull request", "check PR", "review this PR", "giúp review PR", "review PR số", "xem PR", "kiểm tra PR", "đọc PR"

- **MUST READ:** `docs/PR_REVIEW.md` — **source of truth duy nhất cho workflow review (5 bước, gh CLI, comment style)**
- **MUST READ:** `docs/PATTERN.md` — checklist validate từng file thay đổi
- **Workflow:** Đọc `docs/PR_REVIEW.md` và làm theo đúng như trong đó. Không được tự ý làm khác.

### 2. Implementation Tasks

**Keywords:** "implement", "build", "create", "add feature", "code", "refactor", "fix bug", "sửa bug", "tạo màn hình", "thêm tính năng", "viết code", "tạo component"

- **MUST READ:** `docs/PATTERN.md` — **source of truth duy nhất cho kiến trúc, directory structure & coding conventions**
- **Workflow:** Đọc `docs/PATTERN.md` và làm theo đúng như trong đó. Không được tự ý làm khác.
