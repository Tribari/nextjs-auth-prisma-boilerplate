import type { NextPage } from 'next'
import { useRouter } from "next/router"

const Error: NextPage = () => {
    const { query } = useRouter()

    return (
        <>
            An error occured: {query.error}
        </>
    )
}

export default Error
