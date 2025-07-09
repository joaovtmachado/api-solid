/*
  Warnings:

  - You are about to drop the column `gym_id` on the `check_ins` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `check_ins` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "check_ins" DROP CONSTRAINT "check_ins_gym_id_fkey";

-- DropForeignKey
ALTER TABLE "check_ins" DROP CONSTRAINT "check_ins_user_id_fkey";

-- AlterTable
ALTER TABLE "check_ins" DROP COLUMN "gym_id",
DROP COLUMN "user_id";
