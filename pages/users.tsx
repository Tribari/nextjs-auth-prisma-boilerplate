import PageTitle from '@/components/layout/elements'
import type { NextPage, GetServerSideProps } from 'next'
import { useSession, getSession } from "next-auth/react"
import { getUsers, UserProps } from '@/lib/user'
import { UserRole } from '@prisma/client'

type Props = {
    users?: UserProps[] | null
}

const Users: NextPage<Props> = ({users}) => {
    const { data: session } = useSession()

    if(session && session.role === UserRole.ADMIN) {
        return (
            <>
                <PageTitle>Users</PageTitle>

                <table className="border-collapse w-full">
                    <thead>
                        <tr className="text-left">
                            <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                                No.
                            </th>
                            <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                                EMAIL
                            </th>
                            <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                                STATUS
                            </th>
                            <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                                ROLE
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {users && users.map((user, index) => (
                            <tr key={index} className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                                <td className="w-full lg:w-auto p-3 text-gray-800 border border-b block lg:table-cell relative lg:static">
                                    {index+1}
                                </td>
                                <td className="w-full lg:w-auto p-3 text-gray-800 border border-b block lg:table-cell relative lg:static">
                                    {user.email}
                                </td>
                                <td className="w-full lg:w-auto p-3 text-gray-800 border border-b block lg:table-cell relative lg:static">
                                    {user.status}
                                </td>
                                <td className="w-full lg:w-auto p-3 text-gray-800 border border-b block lg:table-cell relative lg:static">
                                    {user.role}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

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
