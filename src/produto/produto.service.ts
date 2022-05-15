import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { CreateProdutoDto2 } from './dto/create.dto';
import { ResultadoDto } from './dto/resultado.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';

@Injectable()
export class ProdutoService {
  constructor(private readonly prisma: PrismaService) {

  }

  create(createProdutoDto: CreateProdutoDto) {
    console.log(createProdutoDto);
    //return createProdutoDto;//'This action adds a new produto';
    return this.prisma.produtos.create({ data: createProdutoDto })
      .then((result) => {
        console.log(result);
        //this.prisma._IngredientesToProdutos.create({
        //  data:{produto: {connect: {id: result.id}}, ingrediente: {connect: {id: createProdutoDto.ingrediente}}},
        //});
        return <ResultadoDto>{
          status: true,
          mensagem: "Gravado com sucesso"
        }
      })
      .catch((error) => {
        console.log(error);
        return <ResultadoDto>{
          status: false,
          mensagem: "Erro..."
        }
      });
  }

  create2(createProdutoDto2: CreateProdutoDto2) {

    console.log(createProdutoDto2.ingrediente);

    //this.prisma._IngredientesToProdutos.create({ data: createProdutoDto2.ingredientes });

    //return createProdutoDto;//'This action adds a new produto';
    createProdutoDto2.ingrediente.map(x => console.log(x));

    return this.prisma.produtos.create({

      data: {
        
           
             nome : createProdutoDto2.nome,
             descricao: createProdutoDto2.descricao,
             preco: createProdutoDto2.preco,
             categoriaId :createProdutoDto2.categoriaId,
          
        

        //ingrediente: {
        //  connect: createProdutoDto2.ingrediente,
        //},
      },
    
    }).then((result) => {
      console.log(result);
      //this.prisma._IngredientesToProdutos.create({
      //  data:{produto: {connect: {id: result.id}}, ingrediente: {connect: {id: createProdutoDto.ingrediente}}},
      //});
      return <ResultadoDto>{
        status: true,
        mensagem: "Gravado com sucesso"
      }
    })
      .catch((error) => {
        console.log(error);
        return <ResultadoDto>{
          status: false,
          mensagem: "Erro..."
        }
      });
  }

  findAll() {
    return this.prisma.produtos.findMany({

      include: {
        ingrediente: {
          select: {
            nome: true,
          },
        },
        categoria: {
          select: {
            nome: true,
          },
        },
      }
    });
  }

  findOne(id: number) {


    return this.prisma.produtos.findUnique({ where: { id }, include: { ingrediente: true, categoria: true } });
  }

  update(id: number, updateProdutoDto: UpdateProdutoDto) {
    return `This action updates a #${id} produto`;
  }

  remove(id: number) {
    return `This action removes a #${id} produto`;
  }
}
