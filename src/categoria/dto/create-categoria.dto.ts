import { IsString, IsDate , IsOptional } from 'class-validator';
import { Categoria } from '../entities/categoria.entity';

export class CreateCategoriaDto extends Categoria{
    @IsString()
    nome: string;
    @IsDate()
    @IsOptional()
    createdAt?: Date;
    @IsDate()
    @IsOptional()
    updatedAt?: Date;
}