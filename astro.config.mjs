import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
// `site` controls absolute URLs (og:image, sitemap, canonical, JSON-LD).
// Custom domain is live with HTTPS, so we use the real production hostname.
// The cranes-consulting.netlify.app subdomain remains as a Netlify alias.
export default defineConfig({
  site: 'https://cranesconsultingfl.com',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap(),
  ],
});
