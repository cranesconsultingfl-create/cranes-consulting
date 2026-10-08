export const SITE = 'https://cranesconsultingfl.com';
export const ORG_ID = `${SITE}/#organization`;

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
