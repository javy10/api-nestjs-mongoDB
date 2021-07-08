import { time } from 'console';
import *as mongoose from 'mongoose';
//import { OneToMany } from 'typeorm';
import { destinoSchema } from 'src/destino/schema/destino.schema';

export const itinerarioSchema = new mongoose.Schema({
  Fecha: Date,
  Hora: String,
  Destino_id_: { type: mongoose.Types.ObjectId },
  Origen_id: { type: mongoose.Types.ObjectId }
});
