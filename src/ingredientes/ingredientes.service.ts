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
    return this.prisma.ingredientes.create( { data : createIngredienteDto } );
  }

  findAll() {
    return this.prisma.ingredientes.findMany();
  }

  findOne(id: number) {
    return this.prisma.ingredientes.findUnique({ where: { id } });
   }

  update(id: number, data: UpdateIngredienteDto) {
    console.log(data);
    return this.prisma.ingredientes.update(
      { where : {id},
      data
    });
  }

  remove(id: number) {
    return this.prisma.ingredientes.delete( { where : { id }});
  }
}
