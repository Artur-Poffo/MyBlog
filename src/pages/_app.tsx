import type { AppProps } from 'next/app'

import GlobalStyles from '../styles/globals'
import NavBar from "../components/NavBar"
import MobileMenu from '../components/MobileMenu'
import Footer from '../components/Footer'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <MobileMenu />
      <Component {...pageProps} />
      <Footer />
      <GlobalStyles />
    </>
  )
}
