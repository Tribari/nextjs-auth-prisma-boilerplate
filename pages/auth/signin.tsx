import PageTitle from '@/components/layout/elements'
import type { NextPage, GetServerSideProps } from 'next'
import { getCsrfToken } from "next-auth/react"

const SignIn: NextPage = ({ csrfToken }: any) => {

  return (
    <>
      <PageTitle>Sign in</PageTitle>
      <div className="text-center">
        <form method="post" action="/api/auth/signin/email">
          <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
          <label className="pr-4">
            <input type="email" placeholder="Your Email address" id="email" name="email" className="p-4 border w-1/4" />
          </label>
          <button type="submit" className="p-4 bg-sky-600 hover:bg-sky-800 text-white rounded">Sign in with Email</button>
        </form>
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const csrfToken = await getCsrfToken(context)

    return {
      props: { csrfToken },
    }
}

export default SignIn
