import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { IngredientesModule } from './ingredientes/ingredientes.module';
import { CategoriaModule } from './categoria/categoria.module';
import { ProdutoModule } from './produto/produto.module';

@Module({
  imports: [PrismaModule, UserModule, IngredientesModule, CategoriaModule, ProdutoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
