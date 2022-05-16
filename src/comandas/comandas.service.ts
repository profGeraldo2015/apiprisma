import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateComandaDto } from './dto/create-comanda.dto';
import { UpdateComandaDto } from './dto/update-comanda.dto';

@Injectable()
export class ComandasService {
  constructor(private readonly prisma: PrismaService) {

  }
  create(createComandaDto: CreateComandaDto) {
    return this.prisma.comandas.create({ data: createComandaDto });
    return 'This action adds a new comanda';
  }

  findAll() {
    return this.prisma.comandas.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} comanda`;
  }

  update(id: number, updateComandaDto: UpdateComandaDto) {
    return `This action updates a #${id} comanda`;
  }

  remove(id: number) {
    return `This action removes a #${id} comanda`;
  }
}
