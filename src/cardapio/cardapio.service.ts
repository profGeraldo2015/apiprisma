import { Injectable } from '@nestjs/common';
import { CreateCardapioDto } from './dto/create-cardapio.dto';
import { UpdateCardapioDto } from './dto/update-cardapio.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ResultadoDto } from './dto/Resultado.dto';

@Injectable()
export class CardapioService {
  
  constructor(private readonly prisma: PrismaService) {

  }

  create(createCardapioDto: CreateCardapioDto) {
    return this.prisma.cardapio.create({ data: createCardapioDto })
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
    //return 'This action adds a new cardapio';
  }

  findAll() {
    console.log('findAll');
    return this.prisma.cardapio.findMany({
      include: {
        
        produtos: {
          select: {
            nome: true,
            descricao: true,
            preco: true,
            categoria: true,
            
           }
        },
      }
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} cardapio`;
  }

  update(id: number, updateCardapioDto: UpdateCardapioDto) {
    return `This action updates a #${id} cardapio`;
  }

  remove(id: number) {
    return `This action removes a #${id} cardapio`;
  }
}
