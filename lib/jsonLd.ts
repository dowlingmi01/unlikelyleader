import { DEFAULT_DESCRIPTION, DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL, BOOK_AMAZON_URL } from './site';

const SAME_AS = [
  'https://www.instagram.com/michaeldowling440',
  'https://www.linkedin.com/in/dowlingmichael/',
  'https://www.youtube.com/@michaeldowling9437',
];

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/images/UnlikelyLeaderLogoMark.png`,
    sameAs: SAME_AS,
    founder: {
      '@type': 'Person',
      name: 'Michael Dowling',
    },
  };
}

export function personJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Michael Dowling',
    url: `${SITE_URL}/about`,
    jobTitle: 'Author, Speaker, Leadership Advisor',
    worksFor: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    sameAs: SAME_AS,
    image: `${SITE_URL}/images/MD-Photo3.jpeg`,
  };
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    description: DEFAULT_DESCRIPTION,
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

export function bookJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Book',
    name: 'The Unlikely Leader: Breaking the Bias That Keeps Greater Leaders Invisible',
    url: `${SITE_URL}/book`,
    image: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
    description:
      'A book about the people who have been underestimated, the myths that have held them back, and the leadership the future actually needs.',
    author: {
      '@type': 'Person',
      name: 'Michael Dowling',
    },
    inLanguage: 'en',
    bookFormat: 'https://schema.org/Hardcover',
    offers: {
      '@type': 'Offer',
      url: BOOK_AMAZON_URL,
      availability: 'https://schema.org/InStock',
    },
  };
}

export type FaqItem = { question: string; answer: string };

export function faqJsonLd(items: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export const ASSESSMENT_FAQS: FaqItem[] = [
  {
    question: 'What is the Unlikely Leader assessment?',
    answer:
      'It is a short leadership assessment that surfaces your tendencies, hidden strengths, and growth edges so you can see how you show up, decide, relate, and lead.',
  },
  {
    question: 'Who is the assessment for?',
    answer:
      'Emerging leaders, managers and people leaders, professionals exploring their leadership identity, and anyone who has felt overlooked by traditional leadership definitions.',
  },
  {
    question: 'What do I receive after completing it?',
    answer:
      'You receive a profile that helps you understand your style and strengths, then use that insight to grow more intentionally.',
  },
];

export const HOW_IT_WORKS_FAQS: FaqItem[] = [
  {
    question: 'How does the Leadership Assessment work?',
    answer:
      'You answer a short series of questions designed to surface leadership patterns. Your results map to archetypes that describe different ways of leading.',
  },
  {
    question: 'What are the eight leadership archetypes?',
    answer:
      'The model includes Commander, Trailblazer, Standard-Bearer, Catalyst, Strategist, Integrator, Anchor, and Guide—each reflecting a distinct leadership posture.',
  },
  {
    question: 'Is this the same as a personality test?',
    answer:
      'No. It focuses on leadership tendencies and how you show up under real workplace dynamics, not a full personality inventory.',
  },
];
