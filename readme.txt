BREEDER'S FIELD LEDGER — Palworld 1.0  (installable web app / PWA)

WHAT'S IN HERE
  index.html            the app
  manifest.webmanifest  makes it installable
  sw.js                 service worker (offline support)
  icon-192/512, apple-touch-icon, favicon-32   app icons
Keep all files together in ONE folder — the paths are relative.

HOW TO PUBLISH A LINK (pick one, all free, ~2 minutes)

  Easiest — Netlify Drop:
   1. Go to  https://app.netlify.com/drop
   2. Drag this whole folder onto the page.
   3. You get an https link like  https://your-name.netlify.app
   4. Send that link to your friends.

  Alternative — GitHub Pages:
   1. Create a repo, upload these files to the root.
   2. Settings > Pages > Deploy from branch > main / root.
   3. Share the github.io link.

  (Cloudflare Pages and Vercel work the same way.)

HOW FRIENDS INSTALL IT ON THEIR PHONE
  iPhone / iPad (Safari):
   Open the link > tap the Share button > "Add to Home Screen" > Add.
  Android (Chrome):
   Open the link > tap "Install app" (or menu > Install app / Add to Home screen).

After that it has its own icon, opens fullscreen like a native app, and
works offline once it has loaded the first time.

NOTE: it must be opened over an https:// link for install + offline to work.
Opening index.html directly from a file will show the app but WON'T install.
