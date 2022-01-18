import { deleteUser, setUserRole, setUserStatus, UserProps } from '@/lib/user'
import { UserRole } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from "next-auth/react"

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    const session = await getSession({ req })
    const { id } = req.query

    if(session) {
        if (req.method === 'PATCH' && session.role === UserRole.ADMIN) {
            const { role, status } = req.body
            if(role) {
                const user = await setUserRole(id.toString(), role)
            }
            if(status) {
                const user = await setUserStatus(id.toString(), status)
            }
            res.status(200)
        } 
        else if(req.method === 'DELETE' && session.role === UserRole.ADMIN) {
            const user = await deleteUser(id.toString())
            res.status(200).json(user)
        } else {
            res.statusMessage = 'Not authorized!';
            res.status(401);
        }
    } else {
        res.statusMessage = 'Not authorized!';
        res.status(401);
    }

    res.end()
}
