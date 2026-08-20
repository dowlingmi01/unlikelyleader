/** Canonical production origin — override with NEXT_PUBLIC_SITE_URL if needed. */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://www.theunlikelyleader.com'
).replace(/\/$/, '');

export const SITE_NAME = 'Unlikely Leader';

export const DEFAULT_DESCRIPTION =
  'Unlikely Leader — Redefining what it means to lead by challenging outdated leadership myths and helping overlooked leaders rise from who they truly are.';

/** Default social share image (1200×630). */
export const DEFAULT_OG_IMAGE = '/images/og-default.png';

/** Amazon product page for The Unlikely Leader. */
export const BOOK_AMAZON_URL =
  'https://www.amazon.com/Unlikely-Leader-Breaking-Leaders-Invisible/dp/1997739100';
