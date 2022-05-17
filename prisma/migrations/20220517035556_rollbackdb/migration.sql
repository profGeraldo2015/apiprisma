/*
  Warnings:

  - The primary key for the `Comandas` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Comandas` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Mesas` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Mesas` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `MesasComandas` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `MesasComandas` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `numeroMesa` on the `Comandas` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `mesasId` on the `MesasComandas` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `comandasId` on the `MesasComandas` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "MesasComandas" DROP CONSTRAINT "MesasComandas_comandasId_fkey";

-- DropForeignKey
ALTER TABLE "MesasComandas" DROP CONSTRAINT "MesasComandas_mesasId_fkey";

-- AlterTable
ALTER TABLE "Comandas" DROP CONSTRAINT "Comandas_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "numeroMesa",
ADD COLUMN     "numeroMesa" INTEGER NOT NULL,
ADD CONSTRAINT "Comandas_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Mesas" DROP CONSTRAINT "Mesas_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Mesas_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "MesasComandas" DROP CONSTRAINT "MesasComandas_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "mesasId",
ADD COLUMN     "mesasId" INTEGER NOT NULL,
DROP COLUMN "comandasId",
ADD COLUMN     "comandasId" INTEGER NOT NULL,
ADD CONSTRAINT "MesasComandas_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "MesasComandas" ADD CONSTRAINT "MesasComandas_mesasId_fkey" FOREIGN KEY ("mesasId") REFERENCES "Mesas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MesasComandas" ADD CONSTRAINT "MesasComandas_comandasId_fkey" FOREIGN KEY ("comandasId") REFERENCES "Comandas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
