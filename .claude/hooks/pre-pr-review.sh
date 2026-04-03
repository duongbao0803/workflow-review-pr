#!/bin/bash
# =============================================================================
# Pre-PR-Review Hook for Claude Code
# Triggered BEFORE any Bash tool call.
# Reads JSON payload from stdin, checks if the command is a `gh pr` operation,
# and if the agent hasn't acknowledged the mandatory rules yet, blocks execution
# and reminds Claude to read .claude/CLAUDE.md first.
# =============================================================================

set -euo pipefail

# ── Read the full JSON payload from Claude Code ──────────────────────────────
INPUT=$(cat)

# ── Extract the actual bash command from the payload ─────────────────────────
COMMAND=$(echo "$INPUT" | python3 -c "
import sys, json
try:
    data = json.load(sys.stdin)
    # Claude Code sends tool_input.command for Bash tool
    cmd = data.get('tool_input', {}).get('command', '')
    print(cmd)
except Exception:
    print('')
" 2>/dev/null || echo "")

# ── Check if this is a `gh pr` related command ───────────────────────────────
if echo "$COMMAND" | grep -qiE '^\s*gh\s+pr\s+(view|diff|review|list|checkout|checks|status)'; then

  # ── Check for a session-level "rules acknowledged" sentinel ──────────────
  # We use a temp file scoped to the current project to avoid blocking repeatedly.
  SENTINEL_FILE="/tmp/.claude_pr_rules_ack_$(echo "$PWD" | md5sum | cut -d' ' -f1)"

  if [ ! -f "$SENTINEL_FILE" ]; then
    # Create the sentinel so subsequent gh pr calls are NOT blocked this session
    touch "$SENTINEL_FILE"

    # ── Output a BLOCK response (exit code 2) with a clear message ───────
    cat <<'EOF'
{
  "action": "block",
  "message": "🛑 [MANDATORY] Trước khi chạy bất kỳ lệnh `gh pr` nào, bạn PHẢI đọc skill quy trình review.\n\n📋 BẮT BUỘC ĐỌC NGAY:\n  1. `.claude/skills/pr-review/SKILL.md`\n  2. Các docs được nhắc đến trong file skill đó.\n\nSau khi đọc xong, hãy tiếp tục thực hiện lại lệnh này."
}
EOF
    exit 2
  fi

fi

# ── Allow all other commands to pass through ─────────────────────────────────
exit 0
