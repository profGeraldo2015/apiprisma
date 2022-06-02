import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateComandaDto } from './dto/create-comanda.dto';
import { UpdateComandaDto } from './dto/update-comanda.dto';
import { ResultadoDto } from './dto/resultado.dto';
import { Status, StatusC } from '@prisma/client';

@Injectable()
export class ComandasService {
  constructor(private readonly prisma: PrismaService) {

  }

  create(createComandaDto: CreateComandaDto) {
    //console.log(createComandaDto);
    return this.prisma.comandas.create({
      data: createComandaDto
    }).then((result) => {
      //console.log(result);
      //console.log('comanda id ',result.id);
      //console.log('numeroMesa',result.numeroMesa);
      //gravando na tabela pivot comandas_mesas
      
            this.prisma.mesasComandas.create({
              data: {
                "comandasId": result.id,
                "mesasId": createComandaDto.numeroMesa
              }

            }).then((result) => {
              //console.log('resultado ', result);
              
            }).catch((error) => {
              console.log(error);
              return <ResultadoDto>{
                status: false,
                mensagem: "Erro...mesascomandas não foi criado"
              }
            });

            //alterar status da mesas 
            this.prisma.mesas.update({ 
              where : { 
                id:createComandaDto.numeroMesa  
              }, 
              data:{
                "status": 'OCUPADA'
              }
            }).then((result) => {
              console.log('resultado alterado mesa status', result);
              
            }).catch((error) => {

            });

      return <ResultadoDto>{
        status: true,
        mensagem: "Gravado com sucesso"
      }
      
    }).catch((error) => {
      console.log(error);
      return <ResultadoDto>{
        status: false,
        mensagem: "Erro..."
      }
    });

  }

  findAll() {
    return this.prisma.comandas.findMany({

      include: {

        produtos: {
          select: {
            nome: true,
          },
        },
        garcom: {
          select: {
            nome: true,
          },
        },
        mesascomandas: true,
      },

    });
  }

  findOne(id: number) {
    return this.prisma.comandas.findMany({
      where : { id },
      include: {

        produtos: {
          select: {
            nome: true,
          },
        },
        garcom: {
          select: {
            nome: true,
          },
        },
        mesascomandas: true,
      },

    
    });
  }
//METODO GERAL QUE BUSCA QUALQUER CAMPO NO DB
  findAny(campo: string , valor: number) {
    return this.prisma.comandas.findMany({
      where : { [campo] : valor },
      include: {
        produtos: {
          select: {
            nome: true,
          },
        },
        garcom: {
          select: {
            nome: true,
          },
        },
        mesascomandas: true,
      },
    });
  }


  
  findStatus(status: StatusC) {
  //  return this.prisma.comandas.findMany({ where : { statusC :status } });
    return this.prisma.comandas.findMany({
      where : { statusC : status },
      include: {
        produtos: {
          select: {
            nome: true,
          },
        },
        garcom: {
          select: {
            nome: true,
          },
        },
        mesascomandas: true,
      },
    });
  }


  findGarcom(garcomId: number) {
    //  return this.prisma.comandas.findMany({ where : { statusC :status } });
      return this.prisma.comandas.findMany({
        where : { garcomId : garcomId },
        include: {
          produtos: {
            select: {
              nome: true,
            },
          },
          garcom: {
            select: {
              nome: true,
            },
          },
          mesascomandas: true,
        },
      });
    }
  

  update(id: number, updateComandaDto: UpdateComandaDto) {
    return `This action updates a #${id} comanda`;
  }

  remove(id: number) {
    return `This action removes a #${id} comanda`;
  }
}
