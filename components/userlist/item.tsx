import { UserProps } from '@/lib/user'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import ToggleComponent from '@/components/layout/toggle'
import { UserStatus } from '@prisma/client'
import { useSession } from "next-auth/react"
import { AlertButton } from '../layout/button'

type Props = {
    user: UserProps,
    updateData: Function,
    deleteData: Function
}

export default function UserListItem({user, updateData, deleteData}: Props) {
    const [role, setRole] = useState(user.role.toString())
    const [status, setStatus] = useState(user.status === UserStatus.ACTIVE ? true : false)
    const { data: session } = useSession()

    useEffect(() => {
        updateData(user.id, {role: role.toString()})
    }, [role])

    useEffect(() => {
        const newStatus = status ? UserStatus.ACTIVE : UserStatus.DISABLED
        updateData(user.id, {status: newStatus.toString()})
    }, [status])

    const changeRole = async (e: React.ChangeEvent<HTMLSelectElement>) => {
        const {value} = e.target
        setRole(value)
    }

    const changeStatus = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const {checked} = e.target
        setStatus(checked)
    }

    const deleteUser = async (e: React.MouseEvent<HTMLButtonElement>) => {
        deleteData(user.id)
    }

    return (
        <tr className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
            <td className="w-full lg:w-24 p-3 text-gray-800 border border-b block lg:table-cell relative lg:static text-center">
                {user.image &&
                    <div className="relative m-auto w-12 h-12 overflow-hidden rounded-full shadow-md border-2 border-gray-200">
                        <Image
                            src={user.image}
                            alt={user.name ? user.name : 'Picture of the user'}
                            layout="fill"
                            objectFit="cover"
                            />
                    </div>
                }
            </td>
            <td className="w-full lg:w-auto p-3 text-gray-800 border border-b block lg:table-cell relative lg:static">
                {user.email}
                {user.name &&
                    <span className="ml-2 py-1 px-2 text-xs bg-sky-200 rounded-full">
                        {user.name}
                    </span>
                }
            </td>
            <td className="w-full lg:w-40 p-3 text-gray-800 border border-b block lg:table-cell relative lg:static">
                {session?.userId != user.id &&
                    <ToggleComponent value={status} labelActive="Active" labelInactive="Disabled" onClick={changeStatus} />
                } 
                {session?.userId === user.id &&
                    <span className="text-xs text-gray-700 uppercase">{user.status}</span>
                }
            </td>
            <td className="w-full lg:w-44 p-3 text-gray-800 border border-b block lg:table-cell relative lg:static">
                {session?.userId != user.id &&
                    <select name="role" value={role} onChange={changeRole} className="py-2">
                        <option>REGISTERED</option>
                        <option>USER</option>
                        <option>MANAGER</option>
                        <option>ADMIN</option>
                    </select>
                } 
                {session?.userId === user.id &&
                    <span className="py-2 px-1">{user.role}</span>
                }
            </td>
            <td className="w-full lg:w-24 p-3 text-gray-800 border border-b block lg:table-cell relative lg:static">
                {session?.userId != user.id &&
                    <AlertButton onClick={deleteUser}>Delete</AlertButton>
                }
            </td>
        </tr>
    )
}