export const SITE = 'https://cranesconsultingfl.com';
export const ORG_ID = `${SITE}/#organization`;
export const LOGO_URL = `${SITE}/logo-512.png`;

export interface ArticleInput {
  headline: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
}

export function articleSchema(a: ArticleInput): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: a.headline,
    description: a.description,
    datePublished: a.datePublished,
    dateModified: a.dateModified ?? a.datePublished,
    mainEntityOfPage: `${SITE}${a.path}`,
    image: `${SITE}/og-default.png`,
    author: { '@type': 'Person', name: 'Tyler Alexander', url: `${SITE}/about/` },
    publisher: { '@id': ORG_ID },
  };
}

export function faqSchema(faqs: { q: string; a: string }[]): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

/** Breadcrumb trail. Home is added automatically; pass the rest in order. */
export function breadcrumbSchema(crumbs: { name: string; path: string }[]): Record<string, unknown> {
  const trail = [{ name: 'Home', path: '/' }, ...crumbs];
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: `${SITE}${c.path}`,
    })),
  };
}
