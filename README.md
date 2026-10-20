# Anushka Singh: Portfolio

Next.js 14 (App Router) + TypeScript + Tailwind CSS. Static, no backend.

## Run locally
```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck
npm run build && npm start
```
Requires Node 18.17+. Fonts (Newsreader, Hanken Grotesk, JetBrains Mono) are fetched from Google Fonts at build time, so the build needs internet access.

## Update content
All content lives in `data/`. Do not edit components to change text.

| File | Controls |
|---|---|
| `data/profile.ts` | name, email, links (empty = hidden), hero line, availability line, summary text, skill groups, nav |
| `data/projects.ts` | project tabs (problem / approach / outcome / metrics) |
| `data/experience.ts` | experience |
| `data/education.ts` | schools, degrees, dates and coursework |
| `data/papers.ts` | publications, one-line summaries and links |

The theme is a word-game palette: tile colors green, yellow, gray (`absent`) and keyboard-key gray (`key`). They are CSS variables at the top of `app/globals.css`. Data files use these names as `tone` values.

## Deploy
**Vercel (recommended):** push to GitHub, import the repo at vercel.com/new, deploy. Set `NEXT_PUBLIC_SITE_URL` to your production URL (used for canonical, Open Graph, sitemap).

**Netlify / other:** build command `npm run build`, use the Next.js runtime/adapter.

**GitHub Pages (static):** add `output: "export"` and `images: { unoptimized: true }` to `next.config.mjs`, run `npm run build`, and publish `out/`. Set `basePath` if serving from `/repo-name`.

