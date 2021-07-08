import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ReservacionController } from './reservacion.controller';
import { ReservacionService } from './reservacion.service';
import { ReservacionSchema } from './schema/reservacion.schema';

@Module({
  controllers: [ReservacionController],
  providers: [ReservacionService],
  imports: [
    MongooseModule.forFeature([{ name: 'reservacion', schema: ReservacionSchema }]),
  ],
})
export class ReservacionModule {}
