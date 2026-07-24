# Breeder's Field Ledger — Palworld 1.0

An installable web app (PWA) and field reference for Palworld 1.0 breeding: recipes, passive builds, team-coverage planning, and base staffing. No build step, no dependencies — it's a single static page.

## What's in here

| File | Purpose |
| --- | --- |
| `index.html` | The app |
| `manifest.webmanifest` | Makes it installable |
| `sw.js` | Service worker (offline support) |
| `icon-192.png` / `icon-512.png` / `apple-touch-icon.png` / `favicon-32.png` | App icons |

Keep all files together in **one folder** — the paths are relative.

## How to publish a link

All options below are free and take about two minutes.

**Easiest — Netlify Drop**
1. Go to <https://app.netlify.com/drop>
2. Drag this whole folder onto the page.
3. You get an HTTPS link like `https://your-name.netlify.app`.
4. Send that link to your friends.

**Alternative — GitHub Pages**
1. Create a repo, upload these files to the root.
2. Settings → Pages → Deploy from branch → `main` / root.
3. Share the `github.io` link.

Cloudflare Pages and Vercel work the same way.

## How friends install it on their phone

- **iPhone / iPad (Safari):** open the link → tap **Share** → **Add to Home Screen** → **Add**.
- **Android (Chrome):** open the link → tap **Install app** (or menu → Install app / Add to Home Screen).

After that it has its own icon, opens fullscreen like a native app, and works offline once it has loaded the first time.

> **Note:** it must be opened over an `https://` link for install + offline to work. Opening `index.html` directly from a file will show the app but **won't** install.
