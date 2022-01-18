import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/email";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from '@/lib/prisma';
import { getUserStatus } from "@/lib/user";
import { UserStatus } from "@prisma/client";

export default NextAuth({
    pages: {
      signIn:         '/auth/signin',
      newUser:        '/auth/new-user',
      verifyRequest:  '/auth/verify-request',
      error:          '/auth/error',
      signOut:        '/auth/signout'
    },
    callbacks: {
      session({ session, token, user }) {
        session.userId = user.id;
        session.role = user.role;
        return session
      },
      async signIn({ user, account, profile, email, credentials }) {
        if(user && user.id) {
          const status = await getUserStatus(user.id.toString())
          return status === UserStatus.ACTIVE
        }
        return true
        // Or you can return a URL to redirect to:
        // return '/unauthorized'
      }
    },
    providers: [
        EmailProvider({
            server: {
                host: process.env.EMAIL_SERVER_HOST,
                port: process.env.EMAIL_SERVER_PORT,
                auth: {
                  user: process.env.EMAIL_SERVER_USER,
                  pass: process.env.EMAIL_SERVER_PASSWORD
                }
              },
              from: process.env.EMAIL_FROM
        }),
    ],
    adapter: PrismaAdapter(prisma),
    secret: process.env.SECRET,
});