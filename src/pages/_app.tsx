import GlobalStyles from '../styles/globals'
import type { AppProps } from 'next/app'

import NavBar from "../components/NavBar"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <GlobalStyles />
    </>
  )
}
