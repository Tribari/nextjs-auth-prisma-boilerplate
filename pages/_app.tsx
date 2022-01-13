import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"
import LayoutComponent from '@/components/layout'

export default function MyApp({Component, pageProps: { session, ...pageProps }}: AppProps) {
  return (
    <SessionProvider session={session}>
      <LayoutComponent>
        <Component {...pageProps}/>
      </LayoutComponent>
    </SessionProvider>
  )
}
