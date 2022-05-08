import { Injectable } from '@nestjs/common';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Categorias, Prisma } from '@prisma/client';


@Injectable()
export class CategoriaService {

  constructor(private readonly prisma: PrismaService){

  }

  create(createCategoriaDto: CreateCategoriaDto) {
    return this.prisma.categorias.create({ data : createCategoriaDto});
  }

  findAll() {
    return this.prisma.categorias.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} categoria`;
  }

  update(id: number, updateCategoriaDto: UpdateCategoriaDto) {
    return `This action updates a #${id} categoria`;
  }

  remove(id: number) {
    return `This action removes a #${id} categoria`;
  }
}
