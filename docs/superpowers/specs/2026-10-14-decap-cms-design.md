# Editable site copy with Decap CMS

## Goal
Andrew (CEO, non-technical) edits all editorial text of the Fangled site from a friendly web panel at `/admin`, with no code access. Changes publish directly to `main`; Vercel redeploys (~1 min).

## Decisions (agreed)
- CMS: Decap CMS, `github` backend, no editorial workflow (direct publish).
- Hosting: Vercel. Login: GitHub OAuth; Andrew uses a free GitHub account added as repo collaborator.
- Out of scope: live preview in the panel, image editing, multi-language, and the decorative mock content in `Playbook.tsx` / `Visuals.tsx` (illustrative figures stay in code).

## Architecture
1. **Content** — JSON files in `src/content/`, imported statically by components (typed, no runtime fetch, no new deps):
   `site.json` (company, social, nav, footer, capabilities, FAQ, why, practices, method, etc.), `home.json`, `about.json`, `marketing.json`, `global-trade.json`, `contact.json`, `privacy.json`, `podcasts.json`, `products.json`.
   `src/data/site.ts` re-exports typed content from JSON and keeps icons / route-to-icon mapping in code (icons keyed by index or slug). Inline JSX strings in pages move to the page JSON.
2. **Panel** — `public/admin/index.html` (Decap from CDN, pinned version) + `public/admin/config.yml`. One "file" collection per JSON; plain-language labels; lists for repeatable items; plain-text fields only.
3. **Auth** — Vercel serverless functions `api/auth.ts` (redirect to GitHub) and `api/callback.ts` (exchange code, postMessage token to Decap). Env: `GITHUB_CLIENT_ID`, `GITHUB_CLIENT_SECRET`. `config.yml` `base_url` points to the site origin, `auth_endpoint` to `api/auth`.
4. **Routing** — `vercel.json` SPA rewrite that excludes `/admin` and `/api`.
5. **Manual steps (Sebastián)** — create GitHub OAuth App (callback `<site>/api/callback`), set the two env vars in Vercel, add Andrew as collaborator. Documented in `docs/cms.md`.

## Verification
- `npm run build` (tsc + vite) and `npm run lint` pass after each page migration.
- Rendered output unchanged vs. before (text diff of built pages / visual check).
- `scripts/check-cms.mjs`: every field in `config.yml` exists in its JSON and vice versa; fails build-adjacent check on orphans.

## Risks
- Refactor touches ~9 pages plus Nav/Footer; migrate one page at a time, build green at each step.
- Text containing inline links/markup in JSX (e.g. Home eyebrow link) stays in code with only its label editable.
