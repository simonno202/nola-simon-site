# Everyday Futurism — everydayfuturism.com

Personal site for Nola Simon. Built with Next.js 16 (App Router), Tailwind CSS 4, TypeScript.

## Requirements

- **Node.js 24.x** (see `.nvmrc` — run `nvm use` if you have nvm)
- npm (comes with Node)

## Running locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Building for production

```bash
npm run build
npm start
```

The `prebuild` script runs automatically and syncs podcast episodes from the RSS feed before each build.

## Deploying

Pushes to `main` auto-deploy to Vercel. No manual step needed.

## Content

### Blog posts
Write `.mdx` files in `src/content/blog/`. The filename becomes the URL slug.

Every file needs this frontmatter:

```mdx
---
title: "Your Post Title"
date: "2026-03-20"
description: "One sentence shown on the card and in search results."
tags: ["leadership", "future of work"]
---

Your post content here in plain markdown.
```

### Podcast episodes
Episodes are synced automatically from the RSS feed at build time via `scripts/sync-episodes.mjs`. The result is written to `src/data/episodes.ts`. Do not edit that file manually.

### Rabbit hole levels
Edit the `LEVELS` array in `src/components/ui/RabbitHole.tsx`.

### Navigation
Edit `src/data/navigation.ts` to update nav items, social links, or the booking CTA URL.

## Key files

| File | What it does |
|---|---|
| `src/app/layout.tsx` | Root layout, fonts, analytics |
| `src/app/page.tsx` | Homepage |
| `src/app/not-found.tsx` | Custom 404 page |
| `src/components/layout/Footer.tsx` | Global footer |
| `src/components/layout/Navbar.tsx` | Navigation |
| `src/data/navigation.ts` | Nav items + social links |
| `src/data/episodes.ts` | Auto-generated podcast data |
| `src/content/blog/` | MDX blog posts |

## Maintenance

- GitHub Dependabot is configured to open weekly PRs for dependency updates (see `.github/dependabot.yml`)
- Run `npm audit` periodically to check for security issues
- Node version is pinned in `.nvmrc` — update it here and in `package.json` `engines` field together
- Domain renewals: managed separately from the code — check Vercel and your registrar annually
