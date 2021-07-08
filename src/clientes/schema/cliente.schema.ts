import { Schema } from 'mongoose';
export const clienteSchema = new Schema({
  id: { type: Schema.Types.ObjectId },
  nombre: String,
  edad: Number,
  telefono: String,
  email: { type: String, trim: true, default: '', match: [/.+\@.+\..+/, ''] },
});
