import { Injectable } from '@nestjs/common';
import { CreateIngredienteDto } from './dto/create-ingrediente.dto';
import { UpdateIngredienteDto } from './dto/update-ingrediente.dto';
import { ResultadoDto } from './dto/resultado.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Ingredientes, Prisma } from '@prisma/client';

@Injectable()
export class IngredientesService {
  constructor(private readonly prisma: PrismaService) {

  }

  create(createIngredienteDto: CreateIngredienteDto) {
    return this.prisma.ingredientes.create( { data : createIngredienteDto } )
    .then((result)=>{
      return <ResultadoDto>{
        status: true,
        mensagem: "Gravado com sucesso"
      }
    })
    .catch((error)=>{
      return <ResultadoDto>{
        status: false,
        mensagem: "Erro..."
    }});
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
