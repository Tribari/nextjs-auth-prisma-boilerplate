import { UserProps } from '@/lib/user'
import UserListItem from './item'
import { useEffect, useState } from 'react'

type Props = {
    users?: UserProps[] | null
}

export default function UserListComponent({users}: Props) {
    const [origData, setOrigData] = useState(users)
    const [userlist, setUserlist] = useState(users)
    const [searchTerm, setSearchTerm] = useState("")

    useEffect(() => {
        setUserlist(origData?.filter(user => user.email?.toLowerCase().includes(searchTerm)))
    }, [searchTerm])

    const updateData = async (userId: string, data: Object) => {
        try {
            const res = await fetch(`/api/users/${userId}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            })
            if(res.status==200) {
                
            }else if(res.status) {
                console.log(res.statusText)
            }else {
                console.log("Unknown error")
            }
        } catch(error) {
            console.error(error)
        }
    }

    const deleteData = async (userId: string, ) => {
        var result = confirm("Do you really want to delete this user permanently?");

        if(result) {
            try {
                const res = await fetch(`/api/users/${userId}`, {
                    method: "DELETE",
                    headers: { "Content-Type": "application/json" }
                })
                if(res.status==200) {  
                    setOrigData(origData?.filter(user => userId !== user.id))
                    setUserlist(origData)
                }else if(res.status) {
                    console.log(res.statusText)
                }else {
                    console.log("Unknown error")
                }
            } catch(error) {
                console.error(error)
            }
        }
    }

    const searchData = async (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value)
    }

    return (
        <>
            <div>
                <input type="text" 
                    name="search" 
                    placeholder="Search by Email" 
                    className="mb-4 py-2 px-4 border border-gray-300" 
                    value={searchTerm} 
                    onChange={searchData}
                />
            </div>
            <table className="border-collapse w-full">
                <thead>
                    <tr className="text-left">
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                            EMAIL
                        </th>
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                            STATUS
                        </th>
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                            ROLE
                        </th>
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                            DELETE
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {userlist && userlist.map((user,index) => {
                        return(
                            <UserListItem user={user} updateData={updateData} deleteData={deleteData} key={index}/>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}