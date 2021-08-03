import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ClientesModule } from './clientes/clientes.module';
import { DestinoModule } from './destino/destino.module';
import { ItinerarioModule } from './itinerario/itinerario.module';
import { OrigenModule } from './origen/origen.module';
import { ReservacionModule } from './reservacion/reservacion.module';
import { VueloModule } from './vuelo/vuelo.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  // Documentacion

  //Documentacion del cliente
  const options = new DocumentBuilder()
    .setTitle ('Documento de información del cliente')
    .setDescription ('Se usa para agregar, eliminar y modificar información del cliente')
    .setVersion('1.0')
    .build();
 
  const clientesDocument = SwaggerModule.createDocument(app, options, {
         include: [ClientesModule], // módulos incluidos
  });
  SwaggerModule.setup('documentacion/clientes', app, clientesDocument);
  // Fin de la documentacion del cliente

  //Documentacion del origen
  const origen = new DocumentBuilder()
    .setTitle ('Documento de información del origen del vuelo')
    .setDescription ('Se usa para agregar, eliminar y modificar información del origen de vuelo')
    .setVersion('1.0')
    .build();
 
  const origenDocument = SwaggerModule.createDocument(app, origen, {
         include: [OrigenModule], // módulos incluidos
  });
  SwaggerModule.setup('documentacion/origen', app, origenDocument);
  // Fin de la documentacion del origen

  //Documentacion del Destino
  const destino = new DocumentBuilder()
    .setTitle ('Documento de información del destino del vuelo')
    .setDescription ('Se usa para agregar, eliminar y modificar información del destino del vuelo')
    .setVersion('1.0')
    .build();
 
  const destinoDocument = SwaggerModule.createDocument(app, destino, {
         include: [DestinoModule], // módulos incluidos
  });
  SwaggerModule.setup('documentacion/destino', app, destinoDocument);
  // Fin de la documentacion del Destino

  //Documentacion del Itinerario
  const itinerario = new DocumentBuilder()
    .setTitle ('Documento de información del itinerario de vuelos')
    .setDescription ('Se usa para agregar, eliminar y modificar información del itinerario de vuelos')
    .setVersion('1.0')
    .build();
 
  const itinerarioDocument = SwaggerModule.createDocument(app, itinerario, {
         include: [ItinerarioModule], // módulos incluidos
  });
  SwaggerModule.setup('documentacion/itinerario', app, itinerarioDocument);
  // Fin de la documentacion del Destino

  //Documentacion de la reservacion
  const reservacion = new DocumentBuilder()
    .setTitle ('Documento de información del itinerario de las reservaciones')
    .setDescription ('Se usa para agregar, eliminar y modificar información de las reservaciones')
    .setVersion('1.0')
    .build();
 
  const reservacionDocument = SwaggerModule.createDocument(app, reservacion, {
         include: [ReservacionModule], // módulos incluidos
  });
  SwaggerModule.setup('documentacion/reservacion', app, reservacionDocument);
  // Fin de la documentacion de la reservacion

  //Documentacion de los vuelos
  const vuelo = new DocumentBuilder()
  .setTitle('Documento de información del itinerario de vuelos')
  .setDescription('Se usa para agregar, eliminar y modificar información de los vuelos')
  .setVersion('1.0')
  .build();
  const vueloDocument = SwaggerModule.createDocument(app, vuelo, {
    include: [VueloModule],
  });
  SwaggerModule.setup('documentacion/vuelo', app, vueloDocument);
  // Fin de la documentacion de los vuelos

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
