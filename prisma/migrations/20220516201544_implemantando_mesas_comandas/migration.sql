/*
  Warnings:

  - Added the required column `entrada` to the `Comandas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `producao` to the `Comandas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `saida` to the `Comandas` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('VAZIA', 'OCUPADA');

-- CreateEnum
CREATE TYPE "StatusC" AS ENUM ('AGUARDANDO', 'PRODUZINDO', 'ENTREGUE');

-- AlterTable
ALTER TABLE "Cardapio" ALTER COLUMN "descricao" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Comandas" ADD COLUMN     "entrada" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "producao" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "saida" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "statusC" "StatusC" NOT NULL DEFAULT E'AGUARDANDO';

-- AlterTable
ALTER TABLE "Mesas" ADD COLUMN     "status" "Status" NOT NULL DEFAULT E'VAZIA';
