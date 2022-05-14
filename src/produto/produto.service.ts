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

console.log(createProdutoDto);
    
    //return createProdutoDto;//'This action adds a new produto';

    return this.prisma.produtos.create( { data : createProdutoDto } )
    .then((result)=>{
      return <ResultadoDto>{
        status: true,
        mensagem: "Gravado com sucesso"
      }
    })
    .catch((error)=>{
      console.log(error);
      return <ResultadoDto>{
        status: false,
        mensagem: "Erro..."
    }});




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
