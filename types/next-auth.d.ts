import { UserRole } from "@prisma/client";
import NextAuth from "next-auth"

declare module "next-auth" {
  interface Session {
    userId: string,
    role: UserRole
  }
  interface User {
      id: string,
      role: UserRole
  }
}