import PageTitle, { Paragraph } from '@/components/layout/elements'
import type { NextPage } from 'next'
import { useSession } from "next-auth/react"

const Dashboard: NextPage = () => {
  const { data: session } = useSession()

  if(session) {
    return (
      <>
        <PageTitle>Dashboard</PageTitle>
        <Paragraph>
          Nice to have you here!
        </Paragraph>
      </>
    )
  } else {
    return (
        <>
            <PageTitle>Dashboard</PageTitle>
            <div className="text-center">
                Access denied!
            </div>
        </>
    )
  }
}

export default Dashboard
