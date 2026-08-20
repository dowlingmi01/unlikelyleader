import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Analytics from '../components/Analytics';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Analytics />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
