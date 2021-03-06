import { IsDate, IsNumber, IsOptional, IsString } from 'class-validator';


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
