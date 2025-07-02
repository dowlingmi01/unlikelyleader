import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Optional default meta fallback */}
        <meta name="description" content="Unlikely Leader — Redefining what it means to lead." />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
