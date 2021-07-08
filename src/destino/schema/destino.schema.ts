import { Schema } from 'mongoose';


export const destinoSchema = new Schema({
  id: { type: Schema.Types.ObjectId },
  aeropuerto: String,
  ciudad: String,
  nCiudad: Number,
});
