# Skill: GitHub Pages Deployment for Portfolio Repo

## Repo Facts
- repo: `mahfuz-rahman007/github-profile-page`
- custom domain: `mahfujrahman.com`
- current Pages source: `main` branch root
- `CNAME` file exists and must be preserved

## Deployment Rule
Any rebuild must keep the custom domain working.

## Before Changes
Check:
- current branch status
- Pages configuration
- whether deployment remains branch-based or moves to GitHub Actions
- whether `CNAME` is preserved in output

## Safe Default
If migrating to Astro, prefer one of these:
1. build static output and deploy via GitHub Actions to Pages
2. or commit static output if the repo strategy remains simple

Recommendation: prefer **GitHub Actions deploy** once the app has a real build step.

## Non-Negotiables
- preserve `CNAME`
- ensure asset URLs work on the custom domain
- avoid breaking root-level hosting assumptions
- test generated output locally before deploy

## Pages Checks
Important current facts observed:
- Pages status: `built`
- source branch: `main`
- source path: `/`
- custom domain present
- `https_enforced`: currently `false`

## Future Improvement Suggestion
After the rebuilt app is stable, review whether GitHub Pages HTTPS enforcement can be enabled cleanly for the custom domain.

## Validation Checklist
Before deployment approval:
- home page renders correctly
- nested routes work
- direct-link refresh works for static pages
- `CNAME` exists in final deploy output
- images, fonts, and CSS paths resolve correctly
- no broken canonical / meta / OG basics
