import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
// NOTE: `site` controls absolute URLs (og:image, sitemap, canonical).
// Currently set to the netlify.app subdomain so social-card scrapers can
// resolve assets while DNS for cranesconsultingfl.com is being propagated.
// Once `cranesconsultingfl.com` resolves to this Netlify site and HTTPS is
// auto-provisioned, change to: site: 'https://cranesconsultingfl.com',
export default defineConfig({
  site: 'https://cranes-consulting.netlify.app',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap(),
  ],
});
