# Skill: Content and Routing Plan

## Purpose
Use this when shaping the portfolio into a multi-page application.

## Content Model
Two primary content systems:

### Projects
Each project should eventually support:
- title
- slug
- summary
- role
- stack
- year
- status
- thumbnail / cover
- problem
- approach
- outcome
- links (repo / live / case study)
- featured flag

### Blog Posts
Each post should support:
- title
- slug
- excerpt
- publish date
- tags
- reading time
- cover (optional)
- body content

## Routing Structure
- `/projects`
- `/projects/[slug]`
- `/blog`
- `/blog/[slug]`

## Page Intent
### Projects Index
Should feel like a curated product shelf, not a random dump.

### Project Detail
Should read like a sharp case study:
- context
- what was built
- key decisions
- outcomes / lessons

### Blog Index
Should feel editorial and scannable.

### Blog Detail
Should prioritize reading comfort and typography.

## Ordering Rules
- feature strongest work first
- quality over quantity
- avoid empty sections with placeholder content

## Content Standard
Every project entry should answer:
- what problem existed?
- what did Mahfuz do?
- what was the result?

If a project cannot answer that clearly, it is not ready for featured placement.
