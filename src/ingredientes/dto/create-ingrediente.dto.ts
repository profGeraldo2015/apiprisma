/*
import { Prisma } from '@prisma/client';
import { IsString } from 'class-validator';

export class CreateIngredienteDto implements Prisma.IngredientesCreateInput {
    @IsString()
    nome: string;
    //createdAt: Date;
    //updatedAt: Date


}
*/
import { IsString, IsDate , IsOptional } from 'class-validator';
import { Ingrediente } from '../entities/ingrediente.entity';

export class CreateIngredienteDto extends Ingrediente{
    @IsString()
    nome: string;
    @IsDate()
    @IsOptional()
    createdAt?: Date;
    @IsDate()
    @IsOptional()
    updatedAt?: Date;
}