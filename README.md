# Spire Mortgage — Main Website

The future home of `spiremortgage.ca`, replatformed from Squarespace to Next.js + Vercel.

This repo is the **website refactor lane**, owned primarily by Riley (Marketing). Operational builds (calculators, chatbot, automations, scripts) live in the sibling repo [`SpireMortgageTeam/Builds`](https://github.com/SpireMortgageTeam/Builds).

## Why replatform

- Squarespace caps what we can do for the in-house chatbot, dynamic calculators, gated content
- Next.js + Vercel matches the stack we already use for `renee-ai.live` — easier to integrate
- Cleaner SEO control, faster pages, easier to evolve

## Plan

| Phase | Scope | Timeline |
|---|---|---|
| 1. Scaffold + design system | Next.js project, Tailwind, brand tokens, basic pages stubbed | Week 1-2 |
| 2. Core content migration | Home, About, Team, Contact, Calculators pages | Week 2-3 |
| 3. Calculator integration | Native components imported from `Builds/projects/mortgage-calculators` | Week 2-3 |
| 4. Chatbot integration | Native renee-ai component imported from `Builds/projects/chatbot` | Week 3 |
| 5. Blog / SEO content | Blog system + initial migration | Week 3-4 |
| 6. Cutover | DNS swap, decommission Squarespace | Week 4+ |

## Important

The current Squarespace site at `spiremortgage.ca` stays live until this replatform is feature-complete and signed off. Don't change DNS or otherwise break the live site while building here.

## Brand reference

Primary brand colour: **`#316728`** (deep green).

## Getting started

```bash
npm run dev
```

- **Set up your machine:** [`SETUP.md`](SETUP.md) — first-time install + daily workflow
- **Pick your next task:** [`TASKS.md`](TASKS.md) — chunked roadmap, one piece at a time

## Owner + collaborators

- **Lead:** Riley (Marketing) — design + content
- **Support:** Tor (during engagement) — Next.js infrastructure, deployment, integrations
- **Sign-off:** Renée before any DNS or live cutover changes
