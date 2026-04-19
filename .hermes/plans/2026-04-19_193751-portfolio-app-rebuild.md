# Portfolio App Rebuild Plan

**Goal:** Evolve `github-profile-page` from a single static page into a premium multi-page personal-brand frontend application.

## What was inspected
- pulled latest repo changes successfully
- confirmed custom domain via `CNAME`: `mahfujrahman.com`
- confirmed GitHub Pages is currently deploying from `main` root
- current Pages config is legacy branch deploy
- current site is a single `index.html`
- current live site is a dark single-page profile

## Recommendation
Use **Astro + Tailwind + MDX/content collections** as the default architecture.

### Why this is the right default
- ideal for static hosting on GitHub Pages
- clean path to multi-page blog + project details
- high performance by default
- visually flexible for a design-heavy portfolio
- supports selective React islands later without SPA overkill

## Framework tradeoff summary
### Astro
Best default for this repo.
- strongest content architecture
- easiest static deploy story
- excellent performance
- scales well into blog + case-study site

### Next / React-heavy app
Use only if advanced interactivity becomes central.
- more ecosystem power
- more complexity than needed right now

### Nuxt
Reasonable if Vue preference becomes explicit.
- good framework
- not the simplest default for this hosting/setup today

## Design Direction
Aim for a hybrid aesthetic:
- Linear precision
- Framer drama
- Vercel restraint

### Visual traits
- premium dark or dark-capable surfaces
- disciplined typography
- sharp spacing rhythm
- minimal but high-quality motion
- strong section hierarchy

## Proposed information architecture
### Phase 1
- `/`
- `/projects`
- `/projects/[slug]`
- `/blog`
- `/blog/[slug]`
- `/about`

### Optional Phase 2
- `/uses`
- `/contact`
- `/resume`
- `/playground`

## Proposed implementation phases
### Phase 0 - Foundation
- create framework scaffold
- configure Tailwind
- define design tokens
- create layout shell
- preserve GitHub Pages compatibility

### Phase 1 - Brand system
- typography scale
- color system
- spacing tokens
- button / card / badge primitives
- nav + footer

### Phase 2 - Home page rebuild
- hero
- featured work
- strengths / proof
- writing teaser
- CTA section

### Phase 3 - Content system
- project collection
- blog collection
- reusable card and detail templates

### Phase 4 - Deployment hardening
- move to Actions deploy if needed
- preserve `CNAME`
- validate paths and domain behavior

## Likely file structure after migration
- `src/pages/`
- `src/components/`
- `src/layouts/`
- `src/content/blog/`
- `src/content/projects/`
- `src/styles/`
- `public/`

## Immediate next moves
1. choose Astro as the default stack unless user objects
2. scaffold the app in a feature branch or clean working tree
3. build the design system primitives before page detail work
4. create content models for projects and blog
5. implement the home page last enough to benefit from the primitives, but early enough to lock the brand direction

## Risks to watch
- overbuilding interactivity too early
- adding too many visual ideas at once
- losing the custom domain during deployment changes
- shipping a flashy design with weak content hierarchy

## Repo-local guidance added
- `AGENTS.md`
- `.agents/skills/portfolio-north-star.md`
- `.agents/skills/astro-tailwind-architecture.md`
- `.agents/skills/github-pages-deployment.md`
- `.agents/skills/content-and-routing-plan.md`

## Suggested next execution task
Create the new Astro app architecture and deployment pipeline while preserving GitHub Pages + `CNAME` support.
