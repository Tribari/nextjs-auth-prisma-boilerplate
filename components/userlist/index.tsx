import { UserProps } from '@/lib/user'
import UserListItem from './item'

type Props = {
    users?: UserProps[] | null
}

export default function UserListComponent({users}: Props) {

    return (
        <table className="border-collapse w-full">
            <thead>
                <tr className="text-left">
                    <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                        ID
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
                {users && users.map((user,index) => {
                    return(
                        <UserListItem user={user} key={index}/>
                    )
                })}
            </tbody>
        </table>
    )
}