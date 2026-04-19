# Portfolio Frontend App - Repo Guide

## Mission
Transform this repo from a static single-page profile into a polished personal-brand frontend application that feels premium, memorable, and production-ready.

The target reaction is simple:
> "Wow."

This repo should become a design-forward portfolio app for Mahfuzur Rahman that showcases:
- engineering credibility
- product taste
- frontend craft
- project depth
- writing / blog potential

## Current State
- Current deployment: GitHub Pages
- Custom domain: `mahfujrahman.com`
- Current Pages mode: legacy branch deploy from `main` root
- Current site is a single static `index.html`

## Default Technical Direction
Unless the user explicitly asks otherwise, prefer:
- **Astro** for the app framework
- **Tailwind CSS** for styling
- **MDX / content collections** for blog + project content
- **Static export** for GitHub Pages compatibility
- **React islands only when interactive UI genuinely needs it**

### Why this default
- best fit for content-heavy portfolio + blog growth
- easy static deployment to GitHub Pages
- strong performance by default
- allows future multi-page expansion without overbuilding
- React can still be used surgically where interaction matters

## Framework Decision Rule
Use this default ranking unless requirements change:

1. **Astro + Tailwind** — default
2. **Next.js static export + Tailwind** — use if React-heavy app behavior becomes dominant
3. **Nuxt** — only if the user explicitly wants Vue/Nuxt for ecosystem preference
4. **Plain React/Vite** — only if the site becomes interaction-first rather than content-first

## Design North Star
The final UI should feel like a hybrid of:
- **Linear** precision
- **Framer** visual drama
- **Vercel** restraint

Meaning:
- sharp typography
- premium spacing
- strong hierarchy
- subtle motion
- dark-mode-first or dark-premium capable visuals
- real product polish, not template energy

Avoid:
- generic startup gradients everywhere
- cluttered hero sections
- random animations with no hierarchy
- loud colors without restraint
- Dribbble-only design with weak usability

## Information Architecture Target
Build toward this structure:
- `/` — home / hero / proof / featured work
- `/projects` — project catalog
- `/projects/[slug]` — project detail pages
- `/blog` — article index
- `/blog/[slug]` — article detail pages
- `/about` — profile, values, experience story
- optional later:
  - `/uses`
  - `/contact`
  - `/playground`
  - `/resume`

## Content Priorities
The app should communicate:
- Mahfuz builds real systems
- Mahfuz has design taste, not just engineering skill
- Mahfuz can ship polished interfaces and production systems
- Mahfuz has depth in backend + full-stack + product work

## Repo Workflow Rules
Before making changes:
1. inspect current repo state
2. pull latest changes if safe
3. respect GitHub Pages + custom domain constraints
4. prefer planning before major implementation

When implementing:
- keep architecture simple
- optimize for maintainability and speed
- preserve `CNAME` during deployment changes
- design mobile-first, then refine desktop
- verify performance, responsiveness, and visual consistency

## File / Architecture Guidelines
Preferred future structure:
- `src/pages/`
- `src/components/`
- `src/layouts/`
- `src/content/blog/`
- `src/content/projects/`
- `src/styles/`
- `public/`

If Astro is adopted, preserve static deploy compatibility.

## Styling Rules
- Use design tokens for color, spacing, type, radius, shadow
- Avoid magic values when a token can exist
- Prefer composition over giant page-specific CSS dumps
- Motion should support hierarchy, not distract from it
- Every section should have a clear visual job

## Personal Branding Rules
Design should feel:
- intelligent
- calm
- premium
- intentional
- slightly cinematic

It should not feel:
- try-hard
- noisy
- childish
- over-animated
- like a free template with a new haircut

## Deployment Rules
For GitHub Pages work:
- preserve `CNAME`
- ensure static output works from root path and custom domain
- if switching to Actions-based deploy, document it clearly
- validate that generated asset paths work with GitHub Pages

## AI Helper Notes
Repo-local guidance lives in:
- `.agents/skills/portfolio-north-star.md`
- `.agents/skills/astro-tailwind-architecture.md`
- `.agents/skills/github-pages-deployment.md`
- `.agents/skills/content-and-routing-plan.md`

Load and follow those before major portfolio work in this repo.
