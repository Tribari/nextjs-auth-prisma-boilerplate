import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"
import LayoutComponent from '@/components/layout'
import { UserRole } from '@prisma/client'

const sitename = "NEXTJS-PRISMA-BOILERPLATE"

const mainMenuEntries = [
  {
    name: "Home",
    url: "/"
  }, 
  {
    name: "Dashboard",
    url: "/dashboard",
    access: [UserRole.REGISTERED, UserRole.USER, UserRole.MANAGER, UserRole.ADMIN]
  },
  {
    name: "Users",
    url: "/users",
    access: [UserRole.ADMIN]
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
