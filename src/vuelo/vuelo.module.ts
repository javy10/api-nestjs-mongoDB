import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { vueloSchema } from './schema/vuelo.schema';
import { VueloController } from './vuelo.controller';
import { VueloService } from './vuelo.service';

@Module({
  controllers: [VueloController],
  providers: [VueloService],
  imports: [
    MongooseModule.forFeature([{ name: 'vuelo', schema: vueloSchema }]),
  ],
})
export class VueloModule {}
