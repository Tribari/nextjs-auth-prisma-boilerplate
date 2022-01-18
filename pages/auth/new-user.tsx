import PageTitle from '@/components/layout/elements'
import type { NextPage } from 'next'

const NewUser: NextPage = () => {

  return (
    <>
      <PageTitle>Welcome</PageTitle>
      <div className="text-center">
        The first time here, eh?
      </div>
    </>
  )
}

export default NewUser
