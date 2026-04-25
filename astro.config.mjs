import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
// NOTE: Update `site` to https://cranesconsulting.com once the custom domain
// is pointed at Netlify and HTTPS is provisioned. Until then, the live
// hostname must be set here so absolute URLs (og:image, sitemap, canonical)
// resolve correctly when scraped by social platforms and search engines.
export default defineConfig({
  site: 'https://cranes-consulting.netlify.app',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap(),
  ],
});
