import { Schema } from 'mongoose';
export const vueloSchema = new Schema({
  id: { type: Schema.Types.ObjectId },
  itinerario_id: { type: Schema.Types.ObjectId},
  capacidad: Number,
  nVuelo: String
});