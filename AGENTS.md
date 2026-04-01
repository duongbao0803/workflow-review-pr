# Agent Instructions

## How to Find Your Rules

Each AI-powered IDE has its own dedicated rules folder. You MUST go to the folder that matches your IDE and read the rules there. Do NOT scan the entire project. Do NOT guess conventions.

| IDE / Agent          | Rules Location                          |
|----------------------|-----------------------------------------|
| **Cursor**           | `.cursor/rules/*.mdc`                   |
| **Claude Code**      | `.claude/CLAUDE.md`                     |
| **GitHub Copilot**   | `.github/copilot-instructions.md`       |
| **Antigravity / Gemini** | Read this file (`AGENTS.md`) directly — see below |
| **Other / Unknown**  | `.agents/rules/`                        |

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
**Keywords:** "review PR", "PR #N", "review pull request", "check PR"
- **MUST READ:** `docs/PR_REVIEW.md`
- **MUST READ:** `docs/PATTERN.md`
- **Workflow:** Gather PR info, analyze changes against architecture pattern rules, draft comments, approve/request changes via `gh` CLI as documented in `docs/PR_REVIEW.md`.

### 2. Implementation Tasks
**Keywords:** "implement", "build", "create", "add feature", "code", "refactor", "fix bug"
- **MUST READ:** `docs/PATTERN.md`
- **Workflow:** Follow the architecture pattern, directory structure, and coding conventions defined in `docs/PATTERN.md` when proposing new files or editing existing ones.
