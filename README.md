# Cranes Consulting — Website

Astro + Tailwind marketing site for Cranes Consulting (Tampa, FL).

## Stack

- **[Astro 5](https://astro.build)** — static site generator, zero JS by default, fast
- **[Tailwind CSS 3](https://tailwindcss.com)** — utility-first styling
- **Inter** via Google Fonts
- **Netlify Forms** for the contact form (no backend needed)
- Deploys free to Netlify, Vercel, or Cloudflare Pages

## Run locally

```bash
# 1. Install Node.js 20+ if you don't have it:
#    https://nodejs.org/

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Then open <http://localhost:4321> in your browser. Edits to any `.astro` file hot-reload automatically.

## Build for production

```bash
npm run build
npm run preview     # preview the built site locally
```

Build output goes to `dist/`.

## Deploy

### Option A — Netlify (recommended, includes free contact form)

1. Push this repo to GitHub (see **"Getting this on GitHub"** below).
2. Go to <https://app.netlify.com/start> and click **"Import from Git"**.
3. Select the `cranes-consulting` repo.
4. Netlify auto-detects Astro — build command `npm run build`, publish directory `dist`. Just click **Deploy**.
5. **Enable Forms:** Netlify Forms is on by default. Submissions show up under *Forms* in the dashboard. Configure email notifications under *Site settings → Forms → Form notifications* so contact submissions land in your inbox.
6. **Custom domain:** Go to *Domain management* and point `cranesconsulting.com` at Netlify (Netlify will give you the DNS records to set at your registrar).

### Option B — Vercel

```bash
npm i -g vercel
vercel
```

Note: Vercel doesn't have built-in form handling. Use [Formspree](https://formspree.io) or [Basin](https://usebasin.com) — free tiers both work. To switch: open `src/components/ContactForm.astro` and change the `<form>` tag's `action` attribute to the Formspree/Basin endpoint, and remove the `data-netlify` attributes.

### Option C — Cloudflare Pages

Similar to Netlify. Framework preset: Astro. Build command `npm run build`, output `dist`. Use a form backend like Formspree.

## Getting this on GitHub

```bash
cd cranes-consulting
git init
git add .
git commit -m "Initial site"

# Create an empty repo at https://github.com/new (do NOT initialize with a README)
# Then:
git remote add origin https://github.com/<your-username>/cranes-consulting.git
git branch -M main
git push -u origin main
```

## Content guide — editing the site

All pages are plain Astro files with HTML + inline data. No CMS.

| File | What to edit |
|---|---|
| `src/pages/index.astro` | Home page — hero, services preview, stats, industries, CTA |
| `src/pages/services.astro` | Services page — top of file has a `services` array, edit `summary`, `phases`, `bestFor`, `pricing` |
| `src/pages/industries.astro` | Industries page — top of file has an `industries` array |
| `src/pages/about.astro` | About / bio / certifications |
| `src/pages/contact.astro` | Contact page — email address, copy |
| `src/pages/insights/index.astro` | Insights index — edit the `posts` array to add new articles |
| `src/pages/insights/*.astro` | Individual blog posts |
| `src/components/Header.astro` | Top nav + logo |
| `src/components/Footer.astro` | Footer — email, service links |
| `src/components/ContactForm.astro` | The contact form itself |
| `public/logo.svg` · `public/favicon.svg` | Brand assets |
| `tailwind.config.mjs` | Colors, fonts, spacing |

## Adding a new blog post

1. Copy `src/pages/insights/margin-leak-checklist.astro` to a new file, e.g. `src/pages/insights/your-post-slug.astro`.
2. Update the title, description, body, and related-service panel.
3. Add an entry to the `posts` array at the top of `src/pages/insights/index.astro` so it appears in the list.

## Brand system

- **Primary navy:** `#0F2444` (navy-800)
- **Deep navy:** `#081530` (navy-900)
- **Accent amber:** `#E8A838` (amber-400)
- **Background:** `#FAFAF7` (bone-100)
- **Section accent:** `#F5F1E8` (bone-200)
- **Typography:** Inter, 400/500/600/700/800

## Before launch checklist

- [ ] Update site URL in `astro.config.mjs` (currently `https://cranesconsulting.com`)
- [ ] Create an OG image at `/public/og-default.png` (1200×630) — a simple navy background with the logo + tagline is fine
- [ ] Add your business email as a Netlify Form notification recipient
- [ ] Set up Google Business Profile for Tampa — listed as "Cranes Consulting"
- [ ] Add analytics (Plausible, Fathom, or GA4) — edit `src/layouts/Base.astro` to include the snippet
- [ ] Point the domain at Netlify
- [ ] Submit `https://cranesconsulting.com/sitemap-index.xml` to Google Search Console

## License

Proprietary. All rights reserved. © Cranes Consulting.
