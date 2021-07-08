import { time } from 'console';
import { Schema } from 'mongoose';
//import { OneToMany } from 'typeorm'
import { destinoSchema } from 'src/destino/schema/destino.schema';

export const itinerarioSchema = new Schema({
  Id: { type: Schema.Types.ObjectId },
  Fecha: Date,
  Hora: String,
  Destino_id_: { type: Schema.Types.ObjectId },
  Origen_id: { type: Schema.Types.ObjectId }
});
