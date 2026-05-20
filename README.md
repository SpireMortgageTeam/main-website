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
| 3. Calculator integration | Native components imported from [`Builds/projects/mortgage-calculators`](https://github.com/SpireMortgageTeam/Builds/tree/main/projects/mortgage-calculators) | Week 2-3 |
| 4. Chatbot integration | Native renee-ai component imported from [`Builds/projects/chatbot`](https://github.com/SpireMortgageTeam/Builds/tree/main/projects/chatbot) | Week 3 |
| 5. Blog / SEO content | Blog system + initial migration | Week 3-4 |
| 6. Cutover | DNS swap, decommission Squarespace | Week 4+ |

## Important

The current Squarespace site at `spiremortgage.ca` stays live until this replatform is feature-complete and signed off. Don't change DNS or otherwise break the live site while building here.

## Brand reference

Source of truth for brand colors, voice, and team info: [`Builds/context.md`](https://github.com/SpireMortgageTeam/Builds/blob/main/context.md).

Primary brand colour: **`#316728`** (deep green).

## Getting started (when scaffolding begins)

```bash
git clone https://github.com/SpireMortgageTeam/main-website.git
cd main-website
npx create-next-app@latest . --typescript --tailwind --app --no-src-dir
```

After scaffold: install Tailwind brand tokens reflecting `#316728` and the typography choices Renée + Riley confirm.

## Owner + collaborators

- **Lead:** Riley (Marketing) — Claude Design + content
- **Support:** Tor (during engagement) — Next.js infrastructure, deployment, integrations
- **Sign-off:** Renée before any DNS or live cutover changes
