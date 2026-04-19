# Portfolio Overhaul Execution Plan

> **For Hermes:** Use subagent-driven-development principles where parallel review/research helps, but keep implementation centralized when files overlap heavily.

**Goal:** Transform the current Astro portfolio into a real multi-page, high-performance, premium portfolio application with authentic content from Mahfuzur Rahman’s CV/LinkedIn/DEV profile, stronger UX, internal pages, contact/social integration, gallery, and engineer-useful revisit value.

**Architecture:** Keep Astro + Tailwind + static Pages deployment. Shift the homepage from atmosphere-heavy one-pager to a leaner, faster, content-backed gateway into deeper internal pages. Use content/data modules first, then reusable page sections, then internal pages, then polish and performance passes.

**Tech Stack:** Astro, Tailwind CSS v4, static content/data modules, GitHub Pages workflow deployment, mailto links, local/dummy image assets.

---

## Current context
- Repo already migrated to Astro and deployed through GitHub Pages workflow.
- Current homepage is visually premium but still too text-heavy and somewhat over-layered.
- Mobile performance issues were partly mitigated by disabling expensive effects on mobile.
- CV extracted successfully. Key facts available:
  - 2.5+ years experience
  - Bit Byte Technology, Themelooks
  - strong Laravel/PHP/backend core
  - Vue/Nuxt + React/Next frontend range
  - DevOps/deployment credibility
  - projects: ERP, NewBD, MyPremo, Tlcommerce, Newslooks
- DEV profile confirms article topics around Laravel queues, MySQL search, Docker/GitHub Actions deployment.

## Self-review of solution before implementation
### What the solution must avoid
- more decorative sections without deeper value
- more GPU-heavy effects for the sake of looking “cool”
- generic portfolio filler copy
- homepage bloat that delays access to actual projects/writing

### What the solution must achieve
- faster mobile-first rendering
- stronger real-content credibility
- deeper site architecture with useful revisit pages
- clearer project case-study structure
- one or two unique, memorable interactive moments
- social/contact paths that actually help conversion

### Recommended IA after review
Top nav / core pages:
- `/`
- `/projects`
- `/projects/[slug]`
- `/writing`
- `/writing/[slug]`
- `/playground`
- `/gallery`
- `/about`
- `/uses`
- `/contact`

Optional footer-only utility page:
- `/resume`

---

## Task 1: Create structured portfolio data layer

**Objective:** Move real content out of `index.astro` into reusable data structures so pages can share authentic content.

**Files:**
- Create: `src/data/profile.ts`
- Create: `src/data/projects.ts`
- Create: `src/data/articles.ts`
- Create: `src/data/gallery.ts`
- Create: `src/data/playground.ts`
- Modify: `src/pages/index.astro`

**Implementation notes:**
- `profile.ts` should include:
  - name
  - role
  - tagline
  - short bio
  - location
  - email
  - phone (optional if publicly desired; likely omit from UI)
  - socials: GitHub, LinkedIn, DEV
  - skill groups
  - experience summary
  - education summary
- `projects.ts` should define 5 real projects with richer metadata.
- `articles.ts` should define featured DEV articles with title, topic, summary, link, date.
- `gallery.ts` should define dummy image objects for now.
- `playground.ts` should define useful experiment/tool concepts.

**Commit:** `feat: add structured portfolio data modules`

---

## Task 2: Create reusable page/section primitives for multi-page IA

**Objective:** Build components that reduce repetition and make internal pages fast to implement.

**Files:**
- Create: `src/components/SocialLinks.astro`
- Create: `src/components/ContactCard.astro`
- Create: `src/components/ProjectCard.astro`
- Create: `src/components/ArticleCard.astro`
- Create: `src/components/GalleryCard.astro`
- Create: `src/components/SkillCloud.astro`
- Create: `src/components/PageHero.astro`
- Create: `src/components/PageSection.astro`
- Modify: `src/layouts/Layout.astro`
- Modify: `src/components/Nav.astro`

**Implementation notes:**
- Add real icon-based links for GitHub/LinkedIn/DEV/mail.
- `SkillCloud.astro` should create fun floating/interactive skill badges without expensive continuous animation on mobile.
- Keep interactions pointer-aware and degrade gracefully.

**Commit:** `feat: add reusable portfolio page components`

---

## Task 3: Refactor homepage for real content + better pacing + better performance

**Objective:** Replace placeholder-ish messaging with authentic portfolio content and simplify heavy/duplicative sections.

**Files:**
- Modify: `src/pages/index.astro`
- Modify: `src/styles/global.css`

**Implementation notes:**
- Tighten hero around real positioning:
  - backend-leaning full-stack engineer
  - scalable SaaS / ERP / commerce / media systems
  - production-minded execution
- Reduce small descriptive copy by ~20–30%.
- Keep one strong hero effect, one signature moment, and fewer decorative wrappers.
- Add direct pathways to Projects / Writing / Contact.
- Add real social icons in hero or top nav.
- Replace any remaining expensive mobile-only fluff with simpler rendering.

**Commit:** `feat: refactor homepage with real portfolio content`

---

## Task 4: Implement project catalog and detail pages

**Objective:** Turn projects into actual destination pages, not homepage hints.

**Files:**
- Create: `src/pages/projects/index.astro`
- Create: `src/pages/projects/[slug].astro`
- Modify: `astro.config.mjs` only if routing/content config needs it
- Use: `src/data/projects.ts`

**Implementation notes:**
Each project page should include:
- overview
- role
- stack
- challenge
- technical decisions
- outcomes / wins
- links / status
- visual blocks / screenshots placeholder

Featured project candidates:
- ERP
- NewBD
- MyPremo
- Tlcommerce
- Newslooks

**Commit:** `feat: add project catalog and case study pages`

---

## Task 5: Implement writing pages from DEV-backed content

**Objective:** Give the site a serious writing section that proves technical thinking.

**Files:**
- Create: `src/pages/writing/index.astro`
- Create: `src/pages/writing/[slug].astro`
- Use: `src/data/articles.ts`

**Implementation notes:**
- This can start as curated summaries linking out to DEV.
- Later can evolve into first-party MDX.
- Organize by topic: Laravel, performance, search, deployment.

**Commit:** `feat: add writing index and article pages`

---

## Task 6: Implement About, Uses, Contact pages

**Objective:** Add practical pages that improve trust and revisit value.

**Files:**
- Create: `src/pages/about.astro`
- Create: `src/pages/uses.astro`
- Create: `src/pages/contact.astro`

**Implementation notes:**
### About
- career summary
- engineering philosophy
- strengths
- experience timeline
- education

### Uses
- tooling / workflow / stack / setup page for engineer visitors
- useful revisit value

### Contact
- clear mailto CTA
- GitHub / LinkedIn / DEV links with icons
- short collaboration note

**Commit:** `feat: add about uses and contact pages`

---

## Task 7: Implement unique gallery page with dummy images

**Objective:** Add a distinct gallery section/page for visual storytelling and future image assets.

**Files:**
- Create: `src/pages/gallery.astro`
- Create: `public/gallery/` assets (dummy placeholders)
- Use: `src/data/gallery.ts`

**Implementation notes:**
- Make gallery unique, not just a plain image grid.
- Consider mixed card sizes / masonry-ish rhythm / lightbox-lite behavior if lightweight.
- Use local dummy images for now.
- Keep layout static-first and light.

**Commit:** `feat: add unique gallery page with placeholders`

---

## Task 8: Implement playground page with useful engineer-oriented content

**Objective:** Add a revisit-friendly section/page that feels unique and intellectually useful.

**Files:**
- Create: `src/pages/playground.astro`
- Use: `src/data/playground.ts`

**Implementation notes:**
Potential content:
- small UI/interaction experiments
- engineering notes snippets
- system design cards
- deployment recipes / patterns
- “currently exploring” ideas

This page should be interesting enough that engineer visitors actually browse it.

**Commit:** `feat: add playground page for experiments and engineering notes`

---

## Task 9: Add fun interactive skill section

**Objective:** Make skills visually alive without harming performance.

**Files:**
- Modify: `src/components/SkillCloud.astro`
- Modify: `src/styles/global.css`
- Integrate into: homepage and/or about page

**Implementation notes:**
- Floating skill icons/badges should be subtle and pointer-aware.
- On desktop: allow gentle hover response or magnetic feel.
- On mobile: static or low-motion fallback.
- Use lightweight CSS transforms, not heavy continuous particle systems.

**Commit:** `feat: add interactive skill cloud section`

---

## Task 10: Performance hardening pass

**Objective:** Make performance the top priority after all new pages/features exist.

**Files:**
- Modify: `src/styles/global.css`
- Modify: `src/layouts/Layout.astro`
- Potentially modify all pages/components for simplification

**Implementation notes:**
Focus on:
- removing remaining unnecessary blur/backdrop layers on mobile
- self-hosting or trimming fonts if feasible
- reducing DOM nesting where excessive
- disabling smooth-scroll on mobile/coarse pointers
- minimizing repeated panel wrappers
- keeping interactions composited cheaply

**Verification:**
- `npm run build`
- `npm run check`
- inspect build output size
- local visual/browser QA

**Commit:** `perf: simplify rendering and optimize mobile experience`

---

## Task 11: Final polish and navigation coherence

**Objective:** Make the whole app feel connected and intentional.

**Files:**
- Modify nav, footer, metadata, cross-links across pages
- Add footer-level links to resume/contact/socials if needed

**Implementation notes:**
- Every page should have strong onward navigation.
- Add route-aware nav highlighting if simple.
- Ensure canonical/meta/title quality is solid.

**Commit:** `feat: polish navigation metadata and cross-page UX`

---

## Validation checklist
- [ ] `npm run check` passes
- [ ] `npm run build` passes
- [ ] internal routes render
- [ ] contact mailto opens mail client
- [ ] social links work
- [ ] GitHub Pages workflow deploy succeeds
- [ ] custom domain still works
- [ ] mobile rendering is smoother than current baseline
- [ ] homepage content feels authentic and specific
- [ ] project pages feel useful, not decorative
- [ ] gallery works with dummy local images

## Risks / tradeoffs
- Too much uniqueness can become visual chaos; keep restraint.
- Too many internal pages can dilute quality if content is thin.
- Interactive skill ideas must degrade gracefully on mobile.
- Gallery/lightbox effects can become performance traps if overbuilt.

## Execution order recommendation
1. data modules
2. reusable components
3. homepage refactor
4. projects pages
5. writing pages
6. about/uses/contact
7. gallery
8. playground
9. interactive skills
10. performance hardening
11. final polish

## Final reviewer note
This plan intentionally prioritizes:
- authenticity of content
- route depth
- performance discipline
- memorable but controlled design

That is the best path to beat “OpenClaw agents doing shiny nonsense with weak substance.”
