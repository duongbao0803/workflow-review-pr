---
name: pr-review
description: >
  Thực hiện full code review cho một GitHub Pull Request.
  Tự động kích hoạt khi user nhắc đến: "review PR", "PR #N",
  "review pull request", "check PR", "review this PR",
  "giúp review PR", "review PR số", "xem PR", "kiểm tra PR", "đọc PR".
allowed-tools:
  - Bash
  - Read
  - Glob
  - Grep
---

# Skill: PR Review

## Mandatory First Step

Trước khi làm bất cứ điều gì, đọc:

1. `docs/PR_REVIEW.md` — **đây là source of truth duy nhất cho toàn bộ workflow review**
2. `docs/PATTERN.md` — architecture checklist bắt buộc khi validate từng file thay đổi

> Toàn bộ quy trình (5 bước, gh CLI commands, cách viết comment, ví dụ thực tế) đều nằm trong `docs/PR_REVIEW.md`. Đọc và làm theo đúng như vậy. Không được tự ý làm khác.
