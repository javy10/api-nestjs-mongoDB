import { Schema } from 'mongoose';
export const ReservacionSchema = new Schema({
  id: { type: Schema.Types.ObjectId },
  cliente_id: { type: Schema.Types.ObjectId},
  vuelo_id: { type: Schema.Types.ObjectId},
  clase: String,
  aciento: String,
  precio: Number,
  descuento: Number,
  preciodes: Number,
});