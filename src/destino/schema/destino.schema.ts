import { Schema } from 'mongoose';


export const destinoSchema = new Schema({
  Id: { type: Schema.Types.ObjectId },
  Aeropuerto: String,
  Ciudad: String,
  Codciudad: Number,
});
