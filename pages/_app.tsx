import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {useEffect} from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.body.addEventListener('touchmove', function(e) {
      e.preventDefault();
    }, { passive: false });
  }, []);


  return <Component {...pageProps} />
}
