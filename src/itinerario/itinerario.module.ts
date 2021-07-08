import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ItinerarioController } from './itinerario.controller';
import { ItinerarioService } from './itinerario.service';
import { itinerarioSchema } from './schema/itinerario.schema';

@Module({
  controllers: [ItinerarioController],
  providers: [ItinerarioService],
  imports: [
    MongooseModule.forFeature([{ name: 'itinerario', schema: itinerarioSchema }]),
  ],
})
export class ItinerarioModule {


}
