import { Prisma } from '@prisma/client';

export class Ingrediente implements Prisma.IngredientesUncheckedCreateInput {
  id?: number;
  nome: string;
  createdAt?: Date;
  updatedAt?: Date;
  
}
