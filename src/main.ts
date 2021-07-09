import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Documentacion
  const config = new DocumentBuilder()
  .setTitle('API PROYECTO FINAL')
  .setDescription('API del proyecto final')
  .setVersion('1.0')
  //.addTag('Clientes')
  .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('documentacion', app, document);

// Documentacion
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
