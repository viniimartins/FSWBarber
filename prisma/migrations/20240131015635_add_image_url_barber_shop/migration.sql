/*
  Warnings:

  - Added the required column `imageUrl` to the `Barbershop` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Barbershop" ADD COLUMN     "imageUrl" TEXT NOT NULL;
