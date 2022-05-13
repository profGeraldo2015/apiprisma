import { Injectable } from '@nestjs/common';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { ResultadoDto } from './dto/resultado.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Produtos, Prisma } from '@prisma/client';

@Injectable()
export class ProdutoService {
  constructor(private readonly prisma: PrismaService) {

   }

  

  create(createProdutoDto: CreateProdutoDto) {
    return 'This action adds a new produto';
  }

  findAll() {
    return this.prisma.produtos.findMany({
      include:{ ingrediente: true, categoria: true },
    });
  }

  findOne(id: number) {


    return this.prisma.produtos.findUnique({ where: { id } , include:{ ingrediente: true, categoria: true }});
  }

  update(id: number, updateProdutoDto: UpdateProdutoDto) {
    return `This action updates a #${id} produto`;
  }

  remove(id: number) {
    return `This action removes a #${id} produto`;
  }
}
