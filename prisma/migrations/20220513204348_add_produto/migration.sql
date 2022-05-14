/*
  Warnings:

  - A unique constraint covering the columns `[produtoId]` on the table `Cardapio` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `produtoId` to the `Cardapio` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cardapio" ADD COLUMN     "produtoId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Cardapio_produtoId_key" ON "Cardapio"("produtoId");

-- AddForeignKey
ALTER TABLE "Cardapio" ADD CONSTRAINT "Cardapio_produtoId_fkey" FOREIGN KEY ("produtoId") REFERENCES "Produtos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
