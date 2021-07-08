import * as mongoose from 'mongoose';
export const clienteSchema = new mongoose.Schema({
  nombre: String,
  edad: Number,
  telefono: String,
  email: { type: String, trim: true, default: '', match: [/.+\@.+\..+/, ''] },
});
