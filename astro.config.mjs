import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
// `site` controls absolute URLs (og:image, sitemap, canonical, JSON-LD).
// Custom domain is live with HTTPS, so we use the real production hostname.
// The cranes-consulting.netlify.app subdomain remains as a Netlify alias.
export default defineConfig({
  site: 'https://cranesconsultingfl.com',
  trailingSlash: 'always',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap({ filter: (page) => !/\/(thanks|404)\/$/.test(page) }),
  ],
  vite: {
    // Keep scripts and CSS as external files so the netlify.toml CSP can stay 'self'-only.
    build: { assetsInlineLimit: 0 },
  },
});
