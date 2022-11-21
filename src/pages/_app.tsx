import GlobalStyles from '../styles/globals'
import MobileMenu from '../components/MobileMenu'
import type { AppProps } from 'next/app'

import NavBar from "../components/NavBar"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <MobileMenu />
      <Component {...pageProps} />
      <GlobalStyles />
    </>
  )
}
