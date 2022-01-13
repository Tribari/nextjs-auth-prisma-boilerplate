import PageTitle from '@/components/layout/elements'
import type { NextPage } from 'next'

const VerifyRequest: NextPage = () => {

  return (
    <>
        <PageTitle>Verification needed</PageTitle>
        <div className="text-center">
          Check your mails!
        </div>
    </>
  )
}

export default VerifyRequest
