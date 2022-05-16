import { IsDate, IsOptional, IsString } from "class-validator";

export class CreateMesaDto {
    @IsString()
    descricao:string;
    @IsDate()
    @IsOptional()
    createdAt?: Date;
    @IsDate()
    @IsOptional()
    updatedAt?: Date;
}
