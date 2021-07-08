import *as mongoose from 'mongoose';
export const ReservacionSchema = new mongoose.Schema({
  cliente_id: { type: mongoose.Types.ObjectId},
  vuelo_id: { type: mongoose.Types.ObjectId},
  clase: String,
  aciento: String,
  precio: Number,
  descuento: Number,
  preciodes: Number,
});