// Single source for every insights article: the index, homepage "From the field",
// related-article blocks, services page links, JSON-LD dates and sitemap lastmod.
// Newest first. When an article's content changes, bump dateModified.

export type ServiceAnchor =
  | 'money-audit'
  | 'back-office'
  | 'software-adoption'
  | 'margin-recovery'
  | 'fractional-pmo'
  | 'grant-programs';

export const SERVICE_LABELS: Record<ServiceAnchor, string> = {
  'money-audit': 'Money Audit',
  'back-office': 'AI Office Training',
  'software-adoption': 'Software Adoption',
  'margin-recovery': 'Margin Recovery Sprint',
  'fractional-pmo': 'Fractional PMO',
  'grant-programs': 'Grant & Rebuild Programs',
};

export interface Article {
  slug: string;
  title: string;
  /** Meta description, 150-155 characters. */
  description: string;
  /** Card copy on the index and in related blocks. */
  summary: string;
  category: string;
  read: string;
  datePublished: string;
  dateModified: string;
  /** Services this article supports. The first one is the primary service link. */
  services: ServiceAnchor[];
  /** Slugs of 3 related articles, in display order. */
  related: string[];
  /** Also point to the free paperwork pack. */
  paperworkPack?: boolean;
}

export const articles: Article[] = [
  {
    slug: 'change-order-template-subcontractors',
    title: 'Change Order Template for Subcontractors That GCs Approve',
    description: 'A free change order template for subcontractors, what a GC checks before signing, and an AI prompt that turns a voice note into a change order in minutes.',
    summary: 'A copy-and-paste change order template, the five reasons GCs push back, how to price a change so it gets signed, and an AI prompt that drafts it from a voice note.',
    category: 'Getting Paid',
    read: '7 min read',
    datePublished: '2026-10-15',
    dateModified: '2026-10-15',
    services: ['back-office', 'money-audit'],
    related: ['pay-app-approved-first-time', 'margin-leak-checklist', 'hurricane-delay-notice'],
    paperworkPack: true,
  },
  {
    slug: 'certificate-of-insurance-gc-checklist',
    title: 'What a GC Checks on Your Certificate of Insurance',
    description: 'What GCs check on a subcontractor certificate of insurance, why certificates get rejected, and an AI prompt that gets the right one in one email.',
    summary: 'Why general contractors reject subcontractor certificates of insurance, what they look for, and one email that gets the right certificate from your agent.',
    category: 'Paperwork',
    read: '5 min read',
    datePublished: '2026-10-08',
    dateModified: '2026-10-08',
    services: ['back-office'],
    related: ['pay-app-approved-first-time', 'hurricane-delay-notice', 'ai-adoption-playbook'],
    paperworkPack: true,
  },
  {
    slug: 'hurricane-delay-notice',
    title: 'Hurricane Delay Notices for Florida Subcontractors',
    description: 'Florida subcontractors: how to send a written hurricane delay notice, what to include, when to send it, and an AI prompt that drafts it fast.',
    summary: 'How to send a written delay notice when a storm stops work: what to include, when to send it, and an AI prompt that drafts it in two minutes.',
    category: 'Getting Paid',
    read: '5 min read',
    datePublished: '2026-10-08',
    dateModified: '2026-10-08',
    services: ['back-office'],
    related: ['change-order-template-subcontractors', 'pay-app-approved-first-time', 'certificate-of-insurance-gc-checklist'],
    paperworkPack: true,
  },
  {
    slug: 'pay-app-approved-first-time',
    title: 'How to Get Your Pay App Approved the First Time',
    description: 'Why GCs bounce subcontractor pay applications, a first-submission checklist, and AI prompts that catch problems before you send. From the GC side.',
    summary: 'Why GCs bounce subcontractor pay applications, a first-submission checklist, and AI prompts that catch the problems before you hit send.',
    category: 'Getting Paid',
    read: '6 min read',
    datePublished: '2026-10-08',
    dateModified: '2026-10-08',
    services: ['back-office', 'money-audit'],
    related: ['change-order-template-subcontractors', 'certificate-of-insurance-gc-checklist', 'hurricane-delay-notice'],
    paperworkPack: true,
  },
  {
    slug: 'ai-adoption-playbook',
    title: 'The Small Business AI Adoption Playbook',
    description: 'A five-step plan for small businesses to get real hours back from ChatGPT, Claude and Copilot: pick workflows, set guardrails, train, measure.',
    summary: 'A five-step plan for getting real hours back from ChatGPT, Claude, and Copilot: find the right workflows, set guardrails, train by role, and measure what it saves.',
    category: 'AI & Automation',
    read: '5 min read',
    datePublished: '2026-09-25',
    dateModified: '2026-10-08',
    services: ['back-office', 'software-adoption'],
    related: ['pay-app-approved-first-time', 'shelfware-software-audit', 'margin-leak-checklist'],
    paperworkPack: true,
  },
  {
    slug: 'shelfware-software-audit',
    title: 'The Shelfware Construction Software Audit',
    description: 'A 10-question audit for small GCs paying for Procore, Buildertrend or JobTread but using a fraction of it. Find the gap worth closing in 20 minutes.',
    summary: 'A 10-question audit for small GCs paying $6–12K/year for Procore, Buildertrend, or JobTread but only using a fraction of what they bought. Diagnose the gap in 20 minutes.',
    category: 'Software & Tech',
    read: '9 min read',
    datePublished: '2026-04-24',
    dateModified: '2026-10-08',
    services: ['software-adoption'],
    related: ['ai-adoption-playbook', 'margin-leak-checklist', 'cdbg-dr-readiness-guide'],
  },
  {
    slug: 'margin-leak-checklist',
    title: 'The Small Contractor Margin Leak Checklist',
    description: 'Seven operating leaks quietly costing a $5M contractor two points of net margin every year, how to spot each one, and the 30-day fix for each.',
    summary: 'Seven operating pains quietly costing a $5M contractor two points of net margin every year. Each one has a 30-day fix.',
    category: 'Operations',
    read: '8 min read',
    datePublished: '2026-04-24',
    dateModified: '2026-10-08',
    services: ['margin-recovery', 'money-audit', 'fractional-pmo'],
    related: ['change-order-template-subcontractors', 'pay-app-approved-first-time', 'shelfware-software-audit'],
  },
  {
    slug: 'cdbg-dr-readiness-guide',
    title: 'CDBG-DR Contractor Readiness Guide',
    description: 'What small Tampa Bay GCs need in place before bidding Helene and Milton CDBG-DR rebuild work, and the three paperwork mistakes that stop payment.',
    summary: 'What small Tampa GCs need to have in place before bidding federally-funded Helene / Milton rebuild work, and the three mistakes that stop payment.',
    category: 'Grants & Compliance',
    read: '10 min read',
    datePublished: '2026-04-24',
    dateModified: '2026-10-08',
    services: ['grant-programs'],
    related: ['margin-leak-checklist', 'pay-app-approved-first-time', 'hurricane-delay-notice'],
  },
];

export const articleHref = (slug: string) => `/insights/${slug}/`;

export function getArticle(slug: string): Article {
  const a = articles.find((x) => x.slug === slug);
  if (!a) throw new Error(`Unknown article slug: ${slug}`);
  return a;
}

/** "October 2026" style label for cards and article headers. */
export function displayDate(iso: string): string {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString('en-US', { month: 'long', year: 'numeric', timeZone: 'UTC' });
}

export const latestArticles = (n: number) => articles.slice(0, n);

export const articlesForService = (anchor: ServiceAnchor) => articles.filter((a) => a.services.includes(anchor));
