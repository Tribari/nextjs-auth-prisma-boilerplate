import prisma from '@/lib/prisma'
import { UserRole, UserStatus } from '@prisma/client'

export type UserProps = {
    id: string,
    name?: string | null,
    email: string | null,
    status: UserStatus,
    role: UserRole,
    image?: string | null,
}

const prismaSelect = {
    id: true,
    name: true,
    email: true,
    status: true,
    role: true,
    image: true,
}

export async function getUsers() : Promise<UserProps[] | null> {
    return await prisma.user.findMany({
        select: prismaSelect
    })
}

export async function getUser(userId: string) : Promise<UserProps | null> {
    return await prisma.user.findUnique({
        where: {
            id: userId?.toString()
        },    
        select: prismaSelect
    })
}

export async function getUserByEmail(email: string) : Promise<UserProps | null> {
    return await prisma.user.findUnique({
        where: {
            email: email?.toString()
        },    
        select: prismaSelect
    })
}

export async function getUserRole(userId: string) : Promise<UserRole | null> {
    const user = await prisma.user.findUnique({
        where: {
            id: userId?.toString()
        },    
        select: {
            role: true
        }
    })
    if(user) return <UserRole>user.role

    return null
}

export async function setUserRole(userId: string, role: UserRole = UserRole.REGISTERED) : Promise<UserProps | null> {
    return await prisma.user.update({
        where: {
            id: userId
        },
        data: {
            role: role
        },
        select: prismaSelect
    })
}
