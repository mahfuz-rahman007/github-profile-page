# Skill: Astro + Tailwind Portfolio Architecture

## When to Use
Use this for implementation planning or building the portfolio app unless the user explicitly chooses another framework.

## Default Stack
- Astro
- Tailwind CSS
- MDX
- Astro Content Collections
- optional React islands only for genuinely interactive widgets

## Why This Stack
This repo needs:
- static hosting compatibility
- strong performance
- beautiful marketing-style pages
- future blog + project detail pages
- low deployment friction on GitHub Pages

Astro is the best default because it gives content structure and performance without forcing SPA complexity.

## App Architecture
Prefer this structure:
- `src/pages/`
- `src/components/`
- `src/layouts/`
- `src/content/blog/`
- `src/content/projects/`
- `src/styles/`
- `public/`

## Routing Plan
- `/`
- `/projects`
- `/projects/[slug]`
- `/blog`
- `/blog/[slug]`
- `/about`

## Component System
Create reusable primitives early:
- section container
- heading block
- button variants
- project card
- blog card
- stat / badge / pill
- nav / footer
- theme surface wrappers

## Styling Rules
- define tokens first
- centralize color scale, spacing scale, radius, shadow, typography
- use Tailwind config + CSS variables rather than random utility soup
- keep section-specific styling composable

## Motion Rules
Allowed:
- fade / slide reveals
- subtle parallax or glow layers
- hover transitions
- section entrance polish

Avoid:
- scroll-jacking
- long blocking intro animations
- motion-heavy hero gimmicks

## React Usage Rule
Use React only for:
- filters
- search
- advanced interactive project showcases
- animated widgets that need client state

Do not turn the whole site into a client-rendered app unless the product genuinely demands it.

## Performance Rules
Target:
- excellent Lighthouse scores
- minimal JS by default
- optimized images
- fast first paint

## Build Simplicity Rule
Every added dependency must justify itself.
No framework tourism.
No complexity cosplay.
