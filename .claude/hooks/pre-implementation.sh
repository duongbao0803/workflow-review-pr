#!/bin/bash
# =============================================================================
# Pre-Implementation Hook for Claude Code
# Triggered BEFORE Write / Edit / MultiEdit tool calls.
# Blocks the first file-write in a session and forces Claude to read
# .claude/CLAUDE.md + docs/PATTERN.md before making any code changes.
# =============================================================================

set -euo pipefail

# ── Session-scoped sentinel (unique per project directory) ───────────────────
SENTINEL_FILE="/tmp/.claude_impl_rules_ack_$(echo "$PWD" | md5sum | cut -d' ' -f1)"

if [ ! -f "$SENTINEL_FILE" ]; then
  # Create sentinel — subsequent edits in this session pass through
  touch "$SENTINEL_FILE"

  # ── Block with a clear reminder message ─────────────────────────────────
  cat <<'EOF'
{
  "action": "block",
  "message": "🛑 [MANDATORY] Trước khi chỉnh sửa hoặc tạo bất kỳ file nào, bạn PHẢI đọc skill hướng dẫn implement:\n\n📋 BẮT BUỘC ĐỌC NGAY:\n  1. `.claude/skills/implementation/SKILL.md`\n  2. Các docs được nhắc đến trong file skill đó.\n\nSau khi đọc xong, hãy tiếp tục thực hiện lại thao tác này."
}
EOF
  exit 2
fi

# ── Allow — rules already acknowledged this session ─────────────────────────
exit 0
