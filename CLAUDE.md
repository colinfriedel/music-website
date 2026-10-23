@AGENTS.md

# music.colinfriedel.com

A one-page electronic press kit for Colin's solo music. Venues and bookers (mostly coffee shops, restaurants, open mics) get this link and should be able to hear him, see him perform, see where he's played, and know how to book him in under a minute. Sibling of colinfriedel.com (repo at `../portfolio`): same look, separate repo and Vercel project.

## Hard rules
- **Never write Colin's copy.** All text lives in `src/content/music.ts`. Use his wording verbatim, flag likely typos, and offer suggestions separately for him to approve. A `null` field shows a dashed "Placeholder: ..." box.
- **No em dashes** anywhere in site text.
- **Privacy:** Valley Oak Respite Center residents are adults with dementia. Only use photos from there where no resident is identifiable; ask Colin if unsure. Never put his phone number on the page; email only.
- Keep all text rendering through React (escaped); never use `dangerouslySetInnerHTML` for data.
- Respect `prefers-reduced-motion`.
- Static site only: no backend, CMS, or live API calls. System font stack only; no web fonts or CDNs.
- Search indexing is controlled by `site.indexable` in `src/content/music.ts` (drives metadata, `robots.txt`, and `sitemap.xml`).
- Don't touch DNS or domain settings. Don't modify `../portfolio`; read and copy from it only.

## Where things live
- `src/content/music.ts`: every bit of text, links, recordings, videos (YouTube IDs), photos, experience list.
- `src/app/site.css`: all styles. Tokens `--ink --ink-soft --paper --accent --line`, `.panel`, `.pill`, `.cta`, `.ph`. Background photos are the `--bg-d` / `--bg-m` variables on `.bg`.
- `src/app/globals.css`: Tailwind without preflight, on purpose (the styles rely on browser defaults).
- `src/components/Lightbox.tsx` + `lightbox.css`: full-screen photo viewer, copied from the portfolio.
- `public/images/og.jpg`: 1200x630 link preview image.

## Images and audio
- Photos go in `public/images/stage/`. Resize to about 1600px on the long edge, JPEG quality about 80 (under about 400 KB), and strip EXIF/GPS before committing: `sips -Z 1600 -s formatOptions 80 f.jpg` then `exiftool -all= -overwrite_original f.jpg`.
- Audio goes in `public/audio/`: AAC (.m4a) or MP3 at about 192 to 256 kbps, never WAV. Strip metadata and move the index to the front: `ffmpeg -i in.m4a -map 0:a -c copy -map_metadata -1 -movflags +faststart out.m4a`. ffmpeg isn't installed; ask Colin before installing it.

## Checking a change
`npm run lint`, `npm run build`, then load the page and check: no horizontal overflow at 390px wide; looks good at 1280x720, 1440x800, 1920x1080; photo viewer opens, arrows and Esc work; audio plays; no console errors.

## Workflow
- `main` is live (Vercel). Work on a branch, open a PR, and Colin reviews the Vercel preview. Merge only when Colin says "merge".
