import PageTitle from '@/components/layout/elements'
import type { NextPage, GetServerSideProps } from 'next'
import { useSession, getSession } from "next-auth/react"
import { getUsers, UserProps } from '@/lib/user'
import { UserRole } from '@prisma/client'
import UserListComponent from '@/components/userlist'

type Props = {
    users?: UserProps[] | null
}

const Users: NextPage<Props> = ({users}) => {
    const { data: session } = useSession()

    if(session && session.role === UserRole.ADMIN) {
        return (
            <>
                <PageTitle>Users</PageTitle>
                <UserListComponent users={users} />
            </>
        )
    } else {
        return (
            <>
                <PageTitle>Users</PageTitle>
                <div className="text-center">
                    Access denied!
                </div>
            </>
        )
    }
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const session = await getSession(context)

    if(session && session.role === UserRole.ADMIN) {
        const users = await getUsers()

        return {
            props: {
                users: users
            }
        }
    }

    return {
        props: {
            
        }
    }
}

export default Users
