import { ApiProperty } from '@nestjs/swagger';
import * as mongoose from 'mongoose';

export const clienteSchema = new mongoose.Schema({

  //@ApiProperty({ description: "Nombre del cliente"})
  nombre: String,
  //@ApiParam({ description: "Edad del cliente"})
  edad: Number,
  telefono: String,
  email: { type: String, trim: true, default: '', match: [/.+\@.+\..+/, ''] },
});
