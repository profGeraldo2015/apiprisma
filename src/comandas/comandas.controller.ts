import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ComandasService } from './comandas.service';
import { CreateComandaDto } from './dto/create-comanda.dto';
import { UpdateComandaDto } from './dto/update-comanda.dto';
import { Status, StatusC } from '@prisma/client';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('comandas')
@Controller('comandas')
export class ComandasController {
  constructor(private readonly comandasService: ComandasService) {}

  @Post()
  create(@Body() createComandaDto: CreateComandaDto) {
    console.log(createComandaDto);
    return this.comandasService.create(createComandaDto);
  }

  @Get()
  findAll() {
    return this.comandasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.comandasService.findOne(+id);
  }

  @Get('/status/:status')
  findStatus(@Param('status') status: StatusC ) {
    return this.comandasService.findStatus(status);
  }

  @Get('/garcom/:garcomId')
  findGarcom(@Param('garcomId') garcomId: number ) {
    return this.comandasService.findGarcom(garcomId);
  }

  @Get('/:campo/:valor')
  findany(@Param('campo') campo:string , @Param('valor') valor: number ) {
    return this.comandasService.findAny(campo, valor);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateComandaDto: UpdateComandaDto) {
    return this.comandasService.update(+id, updateComandaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.comandasService.remove(+id);
  }
}
