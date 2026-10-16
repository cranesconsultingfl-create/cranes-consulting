export const SITE = 'https://cranesconsultingfl.com';
export const ORG_ID = `${SITE}/#organization`;
export const LOGO_URL = `${SITE}/logo-512.png`;
export const TYLER_ID = `${SITE}/about/#tyler`;

/** Sitewide Person node for Tyler. Other nodes point at it by @id. */
export const tylerSchema: Record<string, unknown> = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': TYLER_ID,
  name: 'Tyler Alexander',
  url: `${SITE}/about/`,
  jobTitle: 'Founder',
  worksFor: [
    { '@id': ORG_ID },
    { '@type': 'GeneralContractor', name: 'Alexander² Construction', url: 'https://www.a2constructionfl.com/' },
  ],
};

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
    author: { '@type': 'Person', '@id': TYLER_ID, name: 'Tyler Alexander', url: `${SITE}/about/` },
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
