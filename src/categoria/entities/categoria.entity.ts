import { Prisma } from '@prisma/client';
export class Categoria implements Prisma.CategoriasUncheckedCreateInput {
  id?: number;
  nome: string;
  createdAt?: Date;
  updatedAt?: Date;
  
}
