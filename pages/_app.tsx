import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react';
import Navbar from '../component/Navbar';
import '../styles/navbar.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Navbar/>
      <Component {...pageProps} />
    </SessionProvider>
  )
}