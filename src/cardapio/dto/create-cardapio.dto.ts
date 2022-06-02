import { IsString, IsNumber, IsDate, IsOptional } from "class-validator";


export class CreateCardapioDto {
    @IsString()
    nome:      string;
    @IsString()
    descricao: string;
    @IsNumber()
    preco:    number;
    @IsNumber()
    produtoId: number;
    @IsDate()
    @IsOptional()
    createdAt?: Date;
    @IsDate()
    @IsOptional()
    updatedAt?: Date;




}
