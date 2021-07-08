import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientesController } from './clientes.controller';
import { ClientesService } from './clientes.service';
import { clienteSchema } from './schema/cliente.schema';

@Module({
  controllers: [ClientesController],
  providers: [ClientesService],
  imports: [
    MongooseModule.forFeature([{ name: 'clientes', schema: clienteSchema }]),
  ],
})
export class ClientesModule {}
