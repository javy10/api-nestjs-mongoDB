import { Schema } from 'mongoose';
//import { OneToMany } from 'typeorm'
import { destinoSchema } from 'src/destino/schema/destino.schema';

export const itinerarioSchema = new Schema({
  id: { type: Schema.Types.ObjectId },
  fecha: Date,
  hora: String
});
