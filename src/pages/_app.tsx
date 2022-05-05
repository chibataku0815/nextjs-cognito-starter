import type { AppProps } from 'next/app'
import { ProvideAuth } from '~/hooks/use-auth'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <ProvideAuth><Component {...pageProps} /></ProvideAuth>)
}

export default MyApp
