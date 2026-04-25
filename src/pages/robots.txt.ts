import type { APIRoute } from 'astro';

const robotsTxt = (site: string) => `User-agent: *
Allow: /

Sitemap: ${site}sitemap-index.xml
`;

export const GET: APIRoute = ({ site }) =>
  new Response(robotsTxt(site?.toString() ?? 'https://cranesconsultingfl.com/'), {
    headers: { 'Content-Type': 'text/plain' },
  });
