import Head from 'next/head';
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  SITE_URL,
} from '../lib/site';

export type SeoProps = {
  /** Full document title (as shown in the browser tab). */
  title: string;
  description?: string;
  /** Path only, e.g. `/keynotes` or `` for home. */
  path?: string;
  /** Absolute URL or site-relative path to share image. */
  image?: string;
  /** When true, asks crawlers not to index this URL. */
  noindex?: boolean;
  ogType?: 'website' | 'article' | 'profile' | 'book';
  /** One or more schema.org JSON-LD objects. */
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
};

function absoluteUrl(pathOrUrl: string): string {
  if (pathOrUrl.startsWith('http://') || pathOrUrl.startsWith('https://')) {
    return pathOrUrl;
  }
  const path = pathOrUrl.startsWith('/') ? pathOrUrl : `/${pathOrUrl}`;
  return `${SITE_URL}${path}`;
}

export default function Seo({
  title,
  description = DEFAULT_DESCRIPTION,
  path = '',
  image = DEFAULT_OG_IMAGE,
  noindex = false,
  ogType = 'website',
  jsonLd,
}: SeoProps) {
  const canonicalPath = path === '/' ? '' : path;
  const url = absoluteUrl(canonicalPath || '/');
  const imageUrl = absoluteUrl(image);
  const robots = noindex ? 'noindex, nofollow' : 'index, follow';
  const schemas = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {schemas.map((schema, index) => (
        <script
          // eslint-disable-next-line react/no-danger
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </Head>
  );
}
