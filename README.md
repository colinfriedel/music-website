# music.colinfriedel.com

One-page music and booking site for Colin Friedel. Built with Next.js, React, and TypeScript, deployed on Vercel.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Editing

- **Text, links, recordings, photos:** `src/content/music.ts`. Anything left as `null` shows a placeholder box.
- **Styles and background photo:** `src/app/site.css`.
- **Images:** `public/images/stage/` (resize to about 1600px and strip metadata first; see `CLAUDE.md`).
- **Audio:** `public/audio/`.

Run `npm run lint` and `npm run build` before opening a PR.
