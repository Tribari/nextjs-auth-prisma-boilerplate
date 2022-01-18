/*
  Warnings:

  - You are about to drop the column `blockedAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `isBlocked` on the `User` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "UserStatus" AS ENUM ('ACTIVE', 'DISABLED');

-- AlterTable
ALTER TABLE "User" DROP COLUMN "blockedAt",
DROP COLUMN "isBlocked",
ADD COLUMN     "status" "UserStatus" NOT NULL DEFAULT E'ACTIVE';
