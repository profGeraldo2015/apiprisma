/*
  Warnings:

  - Added the required column `numeroMesa` to the `Comandas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Comandas" ADD COLUMN     "numeroMesa" INTEGER NOT NULL;
