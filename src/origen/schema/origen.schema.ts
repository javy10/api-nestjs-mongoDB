import * as mongoose from 'mongoose';
export const origenSchema = new mongoose.Schema({
  aeropuerto: String,
  ciudad: String,
  nCiudad: Number,
});
