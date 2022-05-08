import { Injectable } from '@nestjs/common';
import { CreateIngredienteDto } from './dto/create-ingrediente.dto';
import { UpdateIngredienteDto } from './dto/update-ingrediente.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Ingredientes, Prisma } from '@prisma/client';

@Injectable()
export class IngredientesService {
  constructor(private readonly prisma: PrismaService) {

  }

  create(createIngredienteDto: CreateIngredienteDto) {
  //  create(data: any) {
    
   // console.log(data)
   // const datateste = { "nome": "teste" };
    return this.prisma.ingredientes.create( { data : createIngredienteDto } );
  }

  async findAll() {

    const prisma = new PrismaService();

    const ingredientes = await prisma.ingredientes.findMany();

    //return `This action returns all ingredientes`;
    return ingredientes;
    //return this.prisma.ingredientes.findMany();
  }

  findOne(id: number) {
    return this.prisma.ingredientes.findFirst({ where: { id } });
 //   return `This action returns a #${id} ingrediente`;
  }

  update(id: number, updateIngredienteDto: UpdateIngredienteDto) {
    console.log(updateIngredienteDto);
    return `This action updates a #${id} ingrediente`;
  }

  remove(id: number) {
    return `This action removes a #${id} ingrediente`;
  }
}
