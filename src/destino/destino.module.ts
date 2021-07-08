import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DestinoController } from './destino.controller';
import { DestinoService } from './destino.service';
import { destinoSchema } from './schema/origen.schema';

@Module({
  controllers: [DestinoController],
  providers: [DestinoService],
  imports: [
    MongooseModule.forFeature([{ name: 'destinos', schema: destinoSchema }]),
  ],
})
export class DestinoModule {}
