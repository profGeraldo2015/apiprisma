
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

const config = new DocumentBuilder()
.setTitle('Cardapio')
.setDescription('Controle de Restaurante')
.setVersion('1.0')
.addTag('Restaurante')
.build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, document);

  // Pipes
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  await app.listen(3002);
}

bootstrap();