# Consent Comics — Partnerships Command Center

A React + Vite app that ships the dual-view Partnerships tool for Consent Comics:

- **Internal CRM Tracker** — 289-target outreach pipeline with status, stage, notes, search, filtering, persistent edits, ability to add new contacts, and the 30/60/90 Roadmap.
- **Partner Pitch view** — a public-facing landing page that tells the Consent Comics story.

Toggle between the two views from the header.

---

## Quick deploy to Vercel via GitHub

The fastest path. About 5 minutes if you have a GitHub account and a Vercel account already.

### Step 1 — Push this folder to a new GitHub repo

If you've never done this before, follow GitHub's [Quickstart](https://docs.github.com/en/get-started/quickstart/create-a-repo). The basic flow:

1. Create a new repository on GitHub (call it something like `consent-comics-partnerships`). Make it **Private** unless you want the code to be public.
2. From inside this folder, run:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/consent-comics-partnerships.git
git push -u origin main
```

(Replace `YOUR-USERNAME` and the repo name with your actual values.)

### Step 2 — Connect to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in (you can sign in with GitHub).
2. Click **Add New… → Project**.
3. Find your `consent-comics-partnerships` repo in the list and click **Import**.
4. Vercel will auto-detect this as a Vite project. The defaults are correct — you don't need to change anything:
   - Framework Preset: **Vite**
   - Build Command: `npm run build` (auto)
   - Output Directory: `dist` (auto)
5. Click **Deploy**.
6. Wait ~60 seconds. Vercel gives you a URL like `https://consent-comics-partnerships.vercel.app`.

### Step 3 — (Optional) Add a custom domain

In your Vercel project → Settings → Domains, add any domain you own. Follow Vercel's DNS instructions.

### Step 4 — Future updates

Any time you push a commit to your `main` branch on GitHub, Vercel auto-deploys it. Done.

---

## Run locally (optional)

If you want to preview before deploying, or make changes:

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

To build for production locally:

```bash
npm run build
npm run preview
```

---

## Important notes

### Persistence is per-browser

This app uses `localStorage` to remember your edits, status updates, added contacts, and roadmap progress. **That data lives in whatever browser you're using.** It does not sync across devices, browsers, or users. If you open the deployed URL on your laptop and your phone, you'll see different data on each.

If you need true multi-user sync, this would need a backend (Supabase, Firebase, etc.) — significantly more work. The current setup is right for a solo operator using one main browser.

### Anyone with the URL can see everything

There's no authentication. Anyone with the URL can see the full CRM, the roadmap, all 289 targets, your status notes, anything you've added. **Treat the URL as semi-confidential.** Don't post it publicly. Share it only with people you trust to see your operational data.

If you need login protection later, Vercel has a [Password Protection](https://vercel.com/docs/security/deployment-protection) feature on Pro plans, or you can switch to a deployment platform with auth built in.

### The page is marked `noindex`

The `<meta name="robots" content="noindex">` tag in `index.html` tells search engines not to list this page. That's intentional — it adds a layer of obscurity (it doesn't make it private, but it makes it less discoverable).

### Offline-friendly, no analytics, no tracking

This app makes zero outbound network calls except to load Google Fonts. No analytics, no tracking, no user data leaves the browser.

---

## Project structure

```
consent-comics-partnerships/
├── public/
│   └── favicon.svg            # CC monogram favicon
├── src/
│   ├── App.jsx                # The full app — CRM, Roadmap, Pitch view, all data embedded
│   └── main.jsx               # React entry point
├── index.html                 # HTML shell
├── package.json               # Dependencies (React, Vite)
├── vite.config.js             # Vite config (React plugin)
└── README.md                  # This file
```

The whole app is one file: `src/App.jsx`. The CRM data (organizations, colleges, parent media, self-care media, gaps to fill) is embedded as a JavaScript constant near the top — `RAW_DATA`. If you want to update the seed data outside the app's "Add Contact" feature, edit that constant directly.

---

## Updating the seed data

The simplest way to add or change contacts long-term is to use the in-app **Add New Contact** button on each list. Those additions are saved to localStorage and persist.

If you want to update the *baked-in* dataset (so anyone visiting fresh sees them), edit `RAW_DATA` in `src/App.jsx`, commit, push to GitHub. Vercel auto-deploys.

---

## Questions / common issues

**"It says no preview URL" or build fails on Vercel.** Make sure `package.json` is committed and Vercel detected the Vite framework. The default Vite preset on Vercel just works.

**"My edits disappeared after I deployed."** Expected — `localStorage` is per-browser. Edits made on your local dev server don't transfer to the deployed version. They live where they were made.

**"I want to share just the Pitch view."** The Pitch tab is in the same app. Anyone you share the URL with can toggle to the CRM. If you want a separate pitch-only deployment, ask for a stripped-down version.
