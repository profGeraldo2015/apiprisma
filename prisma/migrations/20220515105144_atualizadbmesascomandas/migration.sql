/*
  Warnings:

  - You are about to alter the column `preco` on the `Cardapio` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(65,30)`.
  - You are about to drop the column `mesaId` on the `Comandas` table. All the data in the column will be lost.
  - You are about to alter the column `valor` on the `Comandas` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(65,30)`.
  - You are about to alter the column `preco` on the `Produtos` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(65,30)`.

*/
-- DropForeignKey
ALTER TABLE "Comandas" DROP CONSTRAINT "Comandas_mesaId_fkey";

-- AlterTable
ALTER TABLE "Cardapio" ALTER COLUMN "preco" SET DATA TYPE DECIMAL(65,30);

-- AlterTable
ALTER TABLE "Comandas" DROP COLUMN "mesaId",
ALTER COLUMN "valor" SET DATA TYPE DECIMAL(65,30);

-- AlterTable
ALTER TABLE "Produtos" ALTER COLUMN "preco" SET DATA TYPE DECIMAL(65,30);

-- CreateTable
CREATE TABLE "MesasComandas" (
    "id" SERIAL NOT NULL,
    "mesasId" INTEGER NOT NULL,
    "comandasId" INTEGER NOT NULL,

    CONSTRAINT "MesasComandas_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "MesasComandas" ADD CONSTRAINT "MesasComandas_mesasId_fkey" FOREIGN KEY ("mesasId") REFERENCES "Mesas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MesasComandas" ADD CONSTRAINT "MesasComandas_comandasId_fkey" FOREIGN KEY ("comandasId") REFERENCES "Comandas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
