import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as ga from '@/libs/ga/index';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = url => {
      ga.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    console.log(handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
      console.log(handleRouteChange);
    };
  }, [router.events]);
  return <Component {...pageProps} />;
}
