import PageTitle from '@/components/layout/elements'
import type { NextPage } from 'next'
import { useRouter } from "next/router"

const Error: NextPage = () => {
    const { query } = useRouter()

    return (
        <>
            <PageTitle>An error occured</PageTitle>
            <div className="text-center">
                {query.error}
            </div>
        </>
    )
}

export default Error
