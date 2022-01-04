import type { NextPage } from 'next'
import { useSession, signIn, signOut } from "next-auth/react"
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const { data: session } = useSession();

  if(session) {
    return <>
      Signed in as {session.user?.email} <br/>
      <button onClick={() => signOut()}>Sign out</button>
    </>
  }
  return <>
    Not signed in <br/>
    <button onClick={() => signIn()}>Sign in</button>
  </>
}

export default Home
