import { Decimal } from '@prisma/client/runtime';
import { IsString, IsDate , IsDecimal,IsNumber, IsOptional } from 'class-validator';
import { Produto } from '../entities/produto.entity';


export class CreateProdutoDto {
    @IsString()
    nome:      string;
    @IsString()
    descricao: string;
    @IsNumber()
    preco:    number;

    @IsNumber()
    categoriaId: number;
    @IsDate()
    @IsOptional()
    createdAt?: Date;
    @IsDate()
    @IsOptional()
    updatedAt?: Date;
}
