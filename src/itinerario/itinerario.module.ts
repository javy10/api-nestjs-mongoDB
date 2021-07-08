import { Module } from '@nestjs/common';
import { ItinerarioService } from './itinerario.service';

@Module({
  providers: [ItinerarioService]
})
export class ItinerarioModule {}
