import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import { articles } from './src/data/articles.ts';

// Articles report their own dateModified; every other page uses the build date.
const SITE = 'https://cranesconsultingfl.com';
const BUILD_DATE = new Date().toISOString();
const articleLastmod = new Map(articles.map((a) => [`${SITE}/insights/${a.slug}/`, `${a.dateModified}T12:00:00.000Z`]));

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
      serialize: (item) => ({ ...item, lastmod: articleLastmod.get(item.url) ?? BUILD_DATE }),
    }),
  ],
  vite: {
    // Keep scripts and CSS as external files so the netlify.toml CSP can stay 'self'-only.
    build: { assetsInlineLimit: 0 },
  },
});
