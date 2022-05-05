import type { AppProps } from 'next/app'
import Layout from '~/components/layout'
import { ProvideAuth } from '~/hooks/use-auth'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <ProvideAuth><Layout><Component {...pageProps} /></Layout></ProvideAuth>)
}

export default MyApp
