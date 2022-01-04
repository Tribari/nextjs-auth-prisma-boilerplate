import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/email";
import { PrismaClient } from "@prisma/client";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

const prisma = new PrismaClient();

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
        return session
      },
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