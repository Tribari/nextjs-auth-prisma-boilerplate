import { UserProps } from '@/lib/user'
import React, { useState } from 'react'
import ToggleComponent from '@/components/layout/toggle'
import { UserStatus } from '@prisma/client'

type Props = {
    user: UserProps
}

export default function UserListItem({user}: Props) {
    const [role, setRole] = useState(user.role.toString())
    const [status, setStatus] = useState(user.status === UserStatus.ACTIVE ? true : false)

    const changeRole = async (e: React.ChangeEvent<HTMLSelectElement>, id: string) => {
        e.preventDefault()
        const {value} = e.target

        try {
            const res = await fetch(`/api/users/${id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({role: value.toString()}),
            })
            if(res.status==200) {
                setRole(value)
            }else if(res.status) {
                console.log(res.statusText)
            }else {
                console.log("Unknown error")
            }
        } catch(error) {
            console.error(error)
        }
    }

    const changeStatus = async (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.checked)
        setStatus(e.target.checked)
    }

    return (
        <tr className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
            <td className="w-full lg:w-auto p-3 text-gray-800 border border-b block lg:table-cell relative lg:static">
                {user.id}
            </td>
            <td className="w-full lg:w-auto p-3 text-gray-800 border border-b block lg:table-cell relative lg:static">
                {user.email}
            </td>
            <td className="w-full lg:w-auto p-3 text-gray-800 border border-b block lg:table-cell relative lg:static">
                <ToggleComponent value={status} labelActive="Active" labelInactive="Deactivated" handleChange={changeStatus} />
            </td>
            <td className="w-full lg:w-auto p-3 text-gray-800 border border-b block lg:table-cell relative lg:static">
                <select name="role" value={role} onChange={(e) => changeRole(e, user.id)}>
                    <option>REGISTERED</option>
                    <option>USER</option>
                    <option>MANAGER</option>
                    <option>ADMIN</option>
                </select>
            </td>
        </tr>
    )
}