import { time } from 'console';
import *as mongoose from 'mongoose';
import { destinoSchema } from 'src/destino/schema/destino.schema';
import { origenSchema } from 'src/origen/schema/origen.schema';

export const itinerarioSchema = new mongoose.Schema({
  Fecha: Date,
  Hora: String,
  Destino_id: { type: mongoose.Types.ObjectId },
  Origen_id: { type: mongoose.Types.ObjectId }
});
