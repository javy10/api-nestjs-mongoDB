import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrigenController } from './origen.controller';
import { OrigenService } from './origen.service';
import { origenSchema } from './schema/origen.schema';
@Module({
  controllers: [OrigenController],
  providers: [OrigenService],
  imports: [
    MongooseModule.forFeature([{ name: 'origen', schema: origenSchema }]),
  ],
})
export class OrigenModule {}
