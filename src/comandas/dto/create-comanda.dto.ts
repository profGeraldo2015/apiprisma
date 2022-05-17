
import { IsNumber,IsDecimal, IsDate , IsOptional, IsString } from 'class-validator';
import { Comanda} from '../entities/comanda.entity';


export class CreateComandaDto {
    @IsNumber()
    numeroMesa: number;
    @IsNumber()
    garcomId: number;
    @IsNumber()
    produtoId: number;
    @IsNumber()
    quantidade: number;

    @IsNumber()
    @IsOptional()
    valor: number;

    @IsDate()
    @IsOptional()
    createdAt?: Date;
    @IsDate()
    @IsOptional()
    updatedAt?: Date;
    
    @IsDate()
    @IsOptional()
    entrada?: Date;
    @IsDate()
    @IsOptional()
    producao?: Date;
    @IsDate()
    @IsOptional()
    saida?: Date;
    
}
