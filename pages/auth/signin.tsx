import PageTitle from '@/components/layout/elements'
import type { NextPage, GetServerSideProps } from 'next'
import { getProviders, getCsrfToken, signIn } from "next-auth/react"

const SignIn: NextPage = ({ csrfToken, providers }: any) => {

  return (
    <>
      <PageTitle>Sign in</PageTitle>
      <div className="text-center w-96 m-auto bg-sky-100 p-4 rounded shadow">

        <form method="post" action="/api/auth/signin/email" className="">
          <input name="csrfToken" type="hidden" defaultValue={csrfToken}/>
          <label className="pr-4">
            <input type="email" placeholder="Your Email address" id="email" name="email" className="p-4 border w-full" />
          </label>
          <div className="mt-4">
            <button type="submit" className="p-4 w-full bg-sky-600 hover:bg-sky-800 text-white rounded">Sign in with Email</button>
          </div>
        </form>

        <div className="relative flex py-4 items-center">
            <div className="flex-grow border-t border-sky-200"></div>
            <div className="flex-shrink mx-4 text-sm font-bold uppercase text-sky-600">or</div>
            <div className="flex-grow border-t border-sky-200"></div>
        </div>

        <div className="">
          <button onClick={() => signIn('github', { callbackUrl: 'http://localhost:3000/' })} 
              className="p-4 w-full bg-sky-600 hover:bg-sky-800 text-white rounded">
            Sign in with Github
          </button>
        </div>

      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const csrfToken = await getCsrfToken(context)
    const providers = await getProviders()
    return {
      props: { csrfToken, providers },
    }
}

export default SignIn
