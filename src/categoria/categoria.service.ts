import { Injectable } from '@nestjs/common';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Categorias, Prisma } from '@prisma/client';
import { ResultadoDto } from './dto/resultado.dto';


@Injectable()
export class CategoriaService {

  constructor(private readonly prisma: PrismaService){

  }

  create(createCategoriaDto: CreateCategoriaDto) {
    return this.prisma.categorias.create({ data : createCategoriaDto})
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
    return this.prisma.categorias.findMany();
  }

  findOne(id: number) {
    return this.prisma.categorias.findUnique({ where : {id}});
  }

  update(id: number, data: UpdateCategoriaDto) {
    return this.prisma.categorias.update({ where : { id }, data })
    .then((result)=>{
      return <ResultadoDto>{
        status: true,
        mensagem: "Alterado com sucesso"
      }
    })
    .catch((error)=>{
      return <ResultadoDto>{
        status: false,
        mensagem: "Erro..."
    }});

  }

  remove(id: number) {
    return this.prisma.categorias.delete( { where :{ id} });
  }
}
