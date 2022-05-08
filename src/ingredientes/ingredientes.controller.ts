import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { IngredientesService } from './ingredientes.service';
import { CreateIngredienteDto } from './dto/create-ingrediente.dto';
import { UpdateIngredienteDto } from './dto/update-ingrediente.dto';

@Controller('ingredientes')
export class IngredientesController {
  constructor(private readonly ingredientesService: IngredientesService) { }


  //create(@Body() createIngredienteDto: CreateIngredienteDto) {
  @Post()
  create(@Body() createIngredienteDto: CreateIngredienteDto) {
    console.log('entrei aqui');
    console.log(createIngredienteDto);
    return this.ingredientesService.create(createIngredienteDto);
    //return 'teste';
  }

  @Get()
  findAll() {
    console.log('entrei aqui busca toods');
    return this.ingredientesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ingredientesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIngredienteDto: UpdateIngredienteDto) {
    return this.ingredientesService.update(+id, updateIngredienteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ingredientesService.remove(+id);
  }
}
