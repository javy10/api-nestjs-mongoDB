import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientesModule } from './clientes/clientes.module';
import { OrigenModule } from './origen/origen.module';
import { DestinoModule } from './destino/destino.module';
import { ItinerarioController } from './itinerario/itinerario.controller';
import { ItinerarioModule } from './itinerario/itinerario.module';
import { VueloModule } from './vuelo/vuelo.module';
import { ReservacionModule } from './reservacion/reservacion.module';


const cluster = '';
@Module({
  imports: [ClientesModule, OrigenModule, DestinoModule, ItinerarioModule, VueloModule, ReservacionModule, MongooseModule.forRoot(cluster)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
