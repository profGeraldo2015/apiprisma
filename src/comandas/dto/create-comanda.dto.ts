
import { ApiProperty } from '@nestjs/swagger/dist/decorators/api-property.decorator';
import { IsDate, IsNumber, IsOptional } from 'class-validator';


export class CreateComandaDto {
    @ApiProperty({
        description: 'Contém o número da mesa',
        example: '8',
    })
    @IsNumber()
    numeroMesa: number;

    @ApiProperty()
    @IsNumber()
    garcomId: number;
    @ApiProperty()
    @IsNumber()
    produtoId: number;
    @ApiProperty()
    @IsNumber()
    quantidade: number;
    @ApiProperty()
    @IsNumber()
    @IsOptional()
    valor: number;
    @ApiProperty()
    @IsDate()
    @IsOptional()
    createdAt?: Date;
    @ApiProperty()
    @IsDate()
    @IsOptional()
    updatedAt?: Date;
    @ApiProperty({description: 'Contém o status da comanda, no caso a data que foi realizado o pedido', example: 'Aguardando'})
    @IsDate()
    @IsOptional()
    entrada?: Date;
    @ApiProperty({description: 'Contém o status da comanda, no caso a data que foi para a produção do prato pela cozinha', example: 'Produzindo'})
    @IsDate()
    @IsOptional()
    producao?: Date;
    @ApiProperty()
    @IsDate()
    @IsOptional()
    saida?: Date;
    
}
