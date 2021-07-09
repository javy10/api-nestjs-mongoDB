import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ClientesModule } from './clientes/clientes.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Documentacion

  const options = new DocumentBuilder()
    .setTitle ('Documento de información del cliente')
    .setDescription ('Se usa para agregar, eliminar y modificar información del cliente')
    .setVersion('1.0')
    .build();
 
  const clientesDocument = SwaggerModule.createDocument(app, options, {
         include: [ClientesModule], // módulos incluidos
  });
  SwaggerModule.setup('documentacion/clientes', app, clientesDocument);

  const config = new DocumentBuilder()
  .setTitle('API PROYECTO FINAL')
  .setDescription('API del proyecto final')
  .setVersion('1.0')
  //.addTag('Clientes')
  .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('documentacion', app, document);

// Documentacion

  await app.listen(3000);
}
bootstrap();
