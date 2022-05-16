
import { IsNumber,IsDecimal, IsDate , IsOptional } from 'class-validator';
import { Comanda} from '../entities/comanda.entity';


export class CreateComandaDto {
    @IsNumber()
    garcomId: number;
    @IsNumber()
    produtoId: number;
    @IsNumber()
    quantidade: number;
    @IsDecimal()
    valor: number;
    @IsDate()
    @IsOptional()
    createdAt?: Date;
    @IsDate()
    @IsOptional()
    updatedAt?: Date;

}
