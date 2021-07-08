import *as mongoose from 'mongoose';
export const vueloSchema = new mongoose.Schema({
  itinerario_id: { type: mongoose.Types.ObjectId},
  capacidad: Number,
  nVuelo: String
});