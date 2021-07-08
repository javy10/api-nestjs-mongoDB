import { Schema } from 'mongoose';


export const destinoSchema = new Schema({
  Aeropuerto: String,
  Ciudad: String,
  Codciudad: Number,
});
