import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"
import LayoutComponent from '@/components/layout'

const sitename = "NEXTJS-PRISMA-BOILERPLATE"

const mainMenuEntries = [
  {
    name: "Home",
    url: "/"
  }, 
  {
    name: "Users",
    url: "/users"
  }
]

export default function MyApp({Component, pageProps: { session, ...pageProps }}: AppProps) {
  return (
    <SessionProvider session={session}>
      <LayoutComponent 
        sitename={sitename} 
        mainMenu={mainMenuEntries}
      >
        <Component {...pageProps}/>
      </LayoutComponent>
    </SessionProvider>
  )
}
