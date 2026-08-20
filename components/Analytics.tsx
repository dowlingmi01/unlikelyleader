import Script from 'next/script';
import Head from 'next/head';

/**
 * Loads analytics only when env vars are set:
 * - NEXT_PUBLIC_PLAUSIBLE_DOMAIN (e.g. theunlikelyleader.com)
 * - NEXT_PUBLIC_GA_MEASUREMENT_ID (e.g. G-XXXXXXXX)
 * - NEXT_PUBLIC_GSC_VERIFICATION (Google Search Console meta token)
 */
export default function Analytics() {
  const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const gscVerification = process.env.NEXT_PUBLIC_GSC_VERIFICATION;

  return (
    <>
      {gscVerification ? (
        <Head>
          <meta name="google-site-verification" content={gscVerification} />
        </Head>
      ) : null}

      {plausibleDomain ? (
        <Script
          defer
          data-domain={plausibleDomain}
          src="https://plausible.io/js/script.js"
          strategy="afterInteractive"
        />
      ) : null}

      {gaId ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}', { anonymize_ip: true });
            `}
          </Script>
        </>
      ) : null}
    </>
  );
}
