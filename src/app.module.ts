import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { IngredientesModule } from './ingredientes/ingredientes.module';
import { CategoriaModule } from './categoria/categoria.module';
import { ProdutoModule } from './produto/produto.module';
import { MesasModule } from './mesas/mesas.module';
import { ComandasModule } from './comandas/comandas.module';

@Module({
  imports: [PrismaModule, UserModule, IngredientesModule, CategoriaModule, ProdutoModule, MesasModule, ComandasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
