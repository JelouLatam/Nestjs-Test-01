import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LoggerMiddleware } from './app.middleware';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  app.use(new LoggerMiddleware().use);

  const config = new DocumentBuilder()
    .setTitle('To Do List API')
    .setDescription('To Do List Swagger API Documentation')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('documentation', app, document);

  await app.listen(3000);
}
bootstrap();
