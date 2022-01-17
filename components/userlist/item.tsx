import { UserProps } from '@/lib/user'
import React, { useEffect, useState } from 'react'
import ToggleComponent from '@/components/layout/toggle'
import { UserStatus } from '@prisma/client'

type Props = {
    user: UserProps
}

export default function UserListItem({user}: Props) {
    const [role, setRole] = useState(user.role.toString())
    const [status, setStatus] = useState(user.status === UserStatus.ACTIVE ? true : false)

    const updateData = async (data: Object) => {
        try {
            const res = await fetch(`/api/users/${user.id}`, {
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

    useEffect(() => {
        updateData({role: role.toString()})
    }, [role])

    useEffect(() => {
        const newStatus = status ? UserStatus.ACTIVE : UserStatus.DISABLED

        updateData({status: newStatus.toString()})
    }, [status])

    const changeRole = async (e: React.ChangeEvent<HTMLSelectElement>) => {
        const {value} = e.target
        setRole(value)
    }

    const changeStatus = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const {checked} = e.target
        setStatus(checked)
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
                <select name="role" value={role} onChange={changeRole}>
                    <option>REGISTERED</option>
                    <option>USER</option>
                    <option>MANAGER</option>
                    <option>ADMIN</option>
                </select>
            </td>
        </tr>
    )
}