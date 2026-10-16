import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import { execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { articles } from './src/data/articles.ts';

// Sitemap lastmod must be stable across builds (Google ignores lastmod it can't trust).
// Articles use dateModified from src/data/articles.ts. Other pages use the last git commit
// that touched their source file; a page with no commit yet gets no lastmod.
const SITE = 'https://cranesconsultingfl.com';
const articleLastmod = new Map(articles.map((a) => [`${SITE}/insights/${a.slug}/`, `${a.dateModified}T12:00:00.000Z`]));

function pageSource(url) {
  const path = new URL(url).pathname.replace(/\/$/, '') || '/index';
  return [`src/pages${path}.astro`, `src/pages${path}/index.astro`].find((f) => existsSync(f));
}

function gitLastmod(url) {
  const file = pageSource(url);
  if (!file) return undefined;
  const date = execFileSync('git', ['log', '-1', '--format=%cI', '--', file], { encoding: 'utf8' }).trim();
  return date ? new Date(date).toISOString() : undefined;
}

// https://astro.build/config
// `site` controls absolute URLs (og:image, sitemap, canonical, JSON-LD).
// Custom domain is live with HTTPS, so we use the real production hostname.
// The cranes-consulting.netlify.app subdomain remains as a Netlify alias.
export default defineConfig({
  site: SITE,
  trailingSlash: 'always',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap({
      filter: (page) => !/\/(thanks|404|download)\/$/.test(page),
      serialize: (item) => {
        const lastmod = articleLastmod.get(item.url) ?? gitLastmod(item.url);
        return lastmod ? { ...item, lastmod } : { ...item };
      },
    }),
  ],
  vite: {
    // Keep scripts and CSS as external files so the netlify.toml CSP can stay 'self'-only.
    build: { assetsInlineLimit: 0 },
  },
});
