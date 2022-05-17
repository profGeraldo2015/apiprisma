/*
  Warnings:

  - The primary key for the `Comandas` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `numeromesa` on the `Comandas` table. All the data in the column will be lost.
  - The primary key for the `Mesas` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `MesasComandas` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `numeroMesa` to the `Comandas` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "MesasComandas" DROP CONSTRAINT "MesasComandas_comandasId_fkey";

-- DropForeignKey
ALTER TABLE "MesasComandas" DROP CONSTRAINT "MesasComandas_mesasId_fkey";

-- AlterTable
ALTER TABLE "Comandas" DROP CONSTRAINT "Comandas_pkey",
DROP COLUMN "numeromesa",
ADD COLUMN     "numeroMesa" INTEGER NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Comandas_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Comandas_id_seq";

-- AlterTable
ALTER TABLE "Mesas" DROP CONSTRAINT "Mesas_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Mesas_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Mesas_id_seq";

-- AlterTable
ALTER TABLE "MesasComandas" DROP CONSTRAINT "MesasComandas_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "mesasId" SET DATA TYPE TEXT,
ALTER COLUMN "comandasId" SET DATA TYPE TEXT,
ADD CONSTRAINT "MesasComandas_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "MesasComandas_id_seq";

-- AddForeignKey
ALTER TABLE "MesasComandas" ADD CONSTRAINT "MesasComandas_mesasId_fkey" FOREIGN KEY ("mesasId") REFERENCES "Mesas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MesasComandas" ADD CONSTRAINT "MesasComandas_comandasId_fkey" FOREIGN KEY ("comandasId") REFERENCES "Comandas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
