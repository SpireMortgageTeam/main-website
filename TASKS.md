# Website Refactor — Task Chunks

Pick one chunk at a time. Do it. Push it. Move to the next. This is how a multi-week refactor doesn't become overwhelming.

**Working rule:** never have more than ONE chunk "in progress" at a time. Finish before starting the next.

**Done criteria for every chunk:** the change is visible when you run `npm run dev` locally, and the work is pushed to GitHub. That's it.

---

## How chunks work

Each chunk has:
- **Goal** — what's being built (one sentence)
- **Done when** — what "finished" looks like, visually
- **Approx time** — rough estimate (most are half a day or less)
- **Depends on** — earlier chunks that must be done first (if any)

If a chunk feels too big when you start it, split it into smaller chunks here and tackle the first piece.

---

## Foundation chunks (do these in order)

### Chunk 1 · Local dev environment
**Goal:** Get a working Next.js + Tailwind project running on your machine.
**Done when:** You can open `http://localhost:3000` in your browser and see "Hello Spire" (or whatever stub text we put on the home page).
**Time:** 30–45 min (with Tor walking through it first time).
**Depends on:** Nothing. Start here.

### Chunk 2 · Spire brand tokens in Tailwind
**Goal:** Add Spire's colors and fonts to Tailwind so they're available everywhere.
**Done when:** The home page background uses `#316728` somewhere and you can write `bg-spire-green` or `text-spire-green` in components.
**Time:** 30 min.
**Depends on:** Chunk 1.

### Chunk 3 · Layout shell (header + footer)
**Goal:** Build the site-wide header (logo, nav menu) and footer (contact, social, legal).
**Done when:** Every page on the site shows the same header and footer.
**Time:** 2 hours.
**Depends on:** Chunk 2.

---

## Page chunks (can be done in any order after Chunk 3)

### Chunk 4 · Home page
**Goal:** Build the home page — hero, services overview, social proof, CTA.
**Done when:** `/` renders the home page with Spire branding, no broken images, no Lorem Ipsum.
**Time:** 1 day (split into sub-chunks: hero, services section, social proof, CTA).
**Depends on:** Chunk 3.

### Chunk 5 · About / Our Team page
**Goal:** Spire's story + team grid with photos and bios.
**Done when:** `/about` renders with the team grid working on desktop and mobile.
**Time:** Half day.
**Depends on:** Chunk 3.

### Chunk 6 · Calculators page
**Goal:** Embed the existing calculator suite from the Builds repo as a Next.js component.
**Done when:** `/mortgage-calculators` shows all 5 calculators (Mortgage, Max Mortgage, Required Income, Compare, Purchase) and they work.
**Time:** Half day.
**Depends on:** Chunk 3.

### Chunk 7 · Mortgage products / services page
**Goal:** Describe Spire's mortgage products. Could be one page or several.
**Done when:** `/services` (or wherever Renée wants it) renders cleanly.
**Time:** Half day.
**Depends on:** Chunk 3.

### Chunk 8 · Renewals page
**Goal:** Renewal-specific landing page (entry point for the renewal pipeline).
**Done when:** `/renewals` renders cleanly with the renewal calculator embedded.
**Time:** Half day.
**Depends on:** Chunks 3 and 6.

### Chunk 9 · First-time buyers page
**Goal:** First-time buyer landing page (often the highest-traffic mortgage page).
**Done when:** `/first-time-buyers` renders cleanly with the affordability calculator embedded.
**Time:** Half day.
**Depends on:** Chunks 3 and 6.

### Chunk 10 · Contact page
**Goal:** Contact form that submits leads into HubSpot.
**Done when:** `/contact` shows the form, form submission creates a HubSpot contact.
**Time:** Half day (the HubSpot wiring is the slow part).
**Depends on:** Chunk 3.

### Chunk 11 · Apply Now page
**Goal:** Application intake form or link to PureLend.
**Done when:** `/apply` either renders the form OR cleanly redirects/embeds the PureLend application flow.
**Time:** Variable — depends on what Renée wants.
**Depends on:** Chunk 3.

---

## Feature chunks (do these later)

### Chunk 12 · Chatbot embed
**Goal:** Embed the Spire chatbot on every page.
**Done when:** A chat icon appears bottom-right on every page, clicking it opens the bot.
**Time:** 1 hour (iframe) or 1 day (native component import from `Builds/projects/chatbot/`).
**Depends on:** Chunk 3, and the chatbot being deployed somewhere.

### Chunk 13 · Blog system
**Goal:** Blog post template, blog index, and a way for Renée to publish posts.
**Done when:** `/blog` shows a list of posts, individual posts render at `/blog/<slug>`, Renée can add a post.
**Time:** 1 day.
**Depends on:** Chunk 3.

### Chunk 14 · SEO basics
**Goal:** Meta tags, Open Graph, sitemap.xml, robots.txt.
**Done when:** Every page has correct meta titles and descriptions, social shares show the right preview image.
**Time:** Half day.
**Depends on:** Most pages built.

### Chunk 15 · Performance pass
**Goal:** Lighthouse score 90+ on home page.
**Done when:** Lighthouse reports 90+ for Performance and Accessibility.
**Time:** Half day.
**Depends on:** Most pages built.

---

## Cutover chunks (do these last)

### Chunk 16 · Pre-cutover review with Renée
**Goal:** Renée walks through the new site, signs off page by page.
**Done when:** Renée has explicitly approved every page in writing (Slack, email, or commit).
**Time:** 1-2 hours of her time, can be done async.
**Depends on:** Chunks 4-11 + 14.

### Chunk 17 · DNS cutover
**Goal:** Point `spiremortgage.ca` at the new Vercel deployment.
**Done when:** Loading `spiremortgage.ca` shows the new site.
**Time:** 30 min DNS change + 1-24 hours propagation.
**Depends on:** Chunk 16.

### Chunk 18 · Decommission Squarespace
**Goal:** Cancel the Squarespace subscription.
**Done when:** Subscription cancelled, savings flow to Spire's bottom line.
**Time:** 10 min.
**Depends on:** Chunk 17 + 1 week of monitoring the new site for issues.

---

## When to ask for help

If you're stuck on a chunk for more than 30 min without progress, slack/text Tor. Don't burn an afternoon on something that's a 2-minute fix.

If a chunk turns out to be bigger than expected, split it here in this file and update the time estimate. Future you (or me) will thank you.

If Renée wants something not on this list, add it. The list is living, not locked.

---

## Progress log

Mark chunks done as you ship them. Date them so we can see velocity.

- [x] Chunk 1 · Local dev environment — 2026-05-21
- [x] Chunk 2 · Spire brand tokens in Tailwind — 2026-05-21
- [x] Chunk 3 · Layout shell (header + footer) — 2026-05-22
- [x] Chunk 4 · Home page — 2026-05-22
- [ ] Chunk 5 · About / Our Team
- [ ] Chunk 6 · Calculators page
- [ ] Chunk 7 · Mortgage services
- [ ] Chunk 8 · Renewals
- [ ] Chunk 9 · First-time buyers
- [ ] Chunk 10 · Contact
- [ ] Chunk 11 · Apply
- [ ] Chunk 12 · Chatbot
- [ ] Chunk 13 · Blog
- [ ] Chunk 14 · SEO
- [ ] Chunk 15 · Performance
- [ ] Chunk 16 · Pre-cutover review
- [ ] Chunk 17 · DNS cutover
- [ ] Chunk 18 · Decommission Squarespace
