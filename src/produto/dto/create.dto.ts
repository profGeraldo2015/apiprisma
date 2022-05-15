import { IsString, IsDate , IsArray,IsNumber, IsOptional } from 'class-validator';

export class CreateProdutoDto2 {
    @IsString()
    nome:      string;
    @IsString()
    descricao: string;
    @IsNumber()
    preco:    number;
    @IsNumber()
    categoriaId: number;
    @IsArray()
    ingrediente: [];
    @IsDate()
    @IsOptional()
    createdAt?: Date;
    @IsDate()
    @IsOptional()
    updatedAt?: Date;
}
