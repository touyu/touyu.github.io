#!/bin/bash
# Regenerate public/ogp.png from the live top page.
# Usage: start the dev server, then  ./scripts/capture-ogp.sh [port]
set -euo pipefail
cd "$(dirname "$0")/.."

PORT="${1:-5173}"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
TMP="$(mktemp -d)/ogp-2x.png"

# ?ogp scales the card to fit 1200x630, ?theme=pink pins the random theme
"$CHROME" --headless --disable-gpu --hide-scrollbars \
  --force-device-scale-factor=2 --window-size=1200,630 --virtual-time-budget=5000 \
  --screenshot="$TMP" "http://localhost:${PORT}/?ogp&theme=pink" 2>/dev/null

python3 - "$TMP" <<'EOF'
import sys
from PIL import Image
im = Image.open(sys.argv[1]).convert('RGB')
im.resize((1200, 630), Image.LANCZOS).save('public/ogp.png', optimize=True)
print('public/ogp.png updated', im.size, '->', (1200, 630))
EOF
