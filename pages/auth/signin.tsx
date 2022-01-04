import type { NextPage, GetServerSideProps } from 'next'
import { getCsrfToken } from "next-auth/react"

const SignIn: NextPage = ({ csrfToken }: any) => {

  return (
    <form method="post" action="/api/auth/signin/email">
      <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
      <label>
        Email address
        <input type="email" id="email" name="email" />
      </label>
      <button type="submit">Sign in with Email</button>
    </form>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const csrfToken = await getCsrfToken(context)

    return {
      props: { csrfToken },
    }
}

export default SignIn
