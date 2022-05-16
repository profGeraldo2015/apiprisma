import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateMesaDto } from './dto/create-mesa.dto';
import { UpdateMesaDto } from './dto/update-mesa.dto';

@Injectable()
export class MesasService {
  constructor(private readonly prisma: PrismaService) {

  }
  
  create(createMesaDto: CreateMesaDto) {

    return this.prisma.mesas.create({ data:createMesaDto});//'This action adds a new mesa';
  }

  findAll() {
    return this.prisma.mesas.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} mesa`;
  }

  update(id: number, updateMesaDto: UpdateMesaDto) {
    return `This action updates a #${id} mesa`;
  }

  remove(id: number) {
    return `This action removes a #${id} mesa`;
  }
}
