-- CreateTable
CREATE TABLE "Usser" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Usser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Categorias" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Categorias_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Produtos" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "preco" DOUBLE PRECISION NOT NULL,
    "categoriaId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Produtos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ingredientes" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Ingredientes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Mesas" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Mesas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Garcom" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "Garcom_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comandas" (
    "id" SERIAL NOT NULL,
    "mesaId" INTEGER NOT NULL,
    "garcomId" INTEGER NOT NULL,
    "produtoId" INTEGER NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Comandas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cardapio" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "preco" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Cardapio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_IngredientesToProdutos" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Usser_email_key" ON "Usser"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Categorias_nome_key" ON "Categorias"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "Ingredientes_nome_key" ON "Ingredientes"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "Garcom_nome_key" ON "Garcom"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "Comandas_produtoId_key" ON "Comandas"("produtoId");

-- CreateIndex
CREATE UNIQUE INDEX "Cardapio_nome_key" ON "Cardapio"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "_IngredientesToProdutos_AB_unique" ON "_IngredientesToProdutos"("A", "B");

-- CreateIndex
CREATE INDEX "_IngredientesToProdutos_B_index" ON "_IngredientesToProdutos"("B");

-- AddForeignKey
ALTER TABLE "Produtos" ADD CONSTRAINT "Produtos_categoriaId_fkey" FOREIGN KEY ("categoriaId") REFERENCES "Categorias"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comandas" ADD CONSTRAINT "Comandas_produtoId_fkey" FOREIGN KEY ("produtoId") REFERENCES "Produtos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comandas" ADD CONSTRAINT "Comandas_mesaId_fkey" FOREIGN KEY ("mesaId") REFERENCES "Mesas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comandas" ADD CONSTRAINT "Comandas_garcomId_fkey" FOREIGN KEY ("garcomId") REFERENCES "Garcom"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_IngredientesToProdutos" ADD FOREIGN KEY ("A") REFERENCES "Ingredientes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_IngredientesToProdutos" ADD FOREIGN KEY ("B") REFERENCES "Produtos"("id") ON DELETE CASCADE ON UPDATE CASCADE;
