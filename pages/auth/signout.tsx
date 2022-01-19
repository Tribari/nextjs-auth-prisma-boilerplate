import PageTitle from '@/components/layout/elements'
import type { NextPage } from 'next'
import { signOut } from "next-auth/react"

const SignOut: NextPage = () => {

    return (
        <>
            <PageTitle>Sign out</PageTitle>
            <div className="text-center">
                <button onClick={() => signOut({ callbackUrl: 'http://localhost:3000/auth/signin' })} className="p-4 bg-sky-600 hover:bg-sky-800 text-white rounded">
                    Sign out
                </button>
            </div>
        </>
    )
}

export default SignOut
