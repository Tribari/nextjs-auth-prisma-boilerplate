import type { NextPage } from 'next'
import { signOut } from "next-auth/react"

const SignOut: NextPage = () => {

    return (
        <>
            <button onClick={() => signOut()}>Sign out</button>
        </>
    )
}

export default SignOut
