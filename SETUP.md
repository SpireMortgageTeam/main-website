# Local Setup — main-website

First-time setup on your machine. ~30-45 minutes the first time. After that, it's a 10-second `git pull && npm run dev`.

## What you need installed

Open your terminal and run each. If a command returns a version number, you're good. If "command not found," install it.

```bash
git --version       # need any version
node --version      # need v18 or higher
npm --version       # comes with node
```

Don't have Node? Install Homebrew first (`brew --version` to check), then `brew install node`.

Don't have Homebrew? Run this one-liner:
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

## Clone the repo

```bash
mkdir -p ~/dev
cd ~/dev
git clone https://github.com/SpireMortgageTeam/main-website.git
cd main-website
```

## First-time project setup

If the repo doesn't have `package.json` yet (we haven't done Chunk 1 yet), run:

```bash
npx create-next-app@latest . --typescript --tailwind --app --no-src-dir --import-alias "@/*"
```

This scaffolds a fresh Next.js project in the current folder. Accept all the defaults.

If the repo already has `package.json` (Chunk 1 done), just install:

```bash
npm install
```

## Run the dev server

```bash
npm run dev
```

You should see something like:
```
▲ Next.js 15.0.0
- Local:        http://localhost:3000
```

Open `http://localhost:3000` in your browser. The site is running on your machine. Edit any file, save it, and the browser updates automatically.

## Daily workflow

Every time you sit down to work:

```bash
cd ~/dev/main-website
git pull                  # grab anyone else's work
npm run dev               # start the dev server
```

When you're done with a chunk (or even part of one):

```bash
git add .
git commit -m "what I just changed in plain language"
git push
```

That's it. See `runbooks/git_basics.md` in the Builds repo if anything about git feels unclear.

## If something breaks

| Symptom | First thing to try |
|---|---|
| `npm run dev` fails with a weird error | `rm -rf node_modules && npm install` then try again |
| Browser shows old version after editing | Hard refresh (Cmd+Shift+R on Mac) |
| Port 3000 already in use | `npm run dev -- -p 3001` (or just close the other thing) |
| `git pull` says merge conflict | Don't panic. Slack/text Tor. |

## Stop the dev server

In the terminal where it's running: `Ctrl+C`.
