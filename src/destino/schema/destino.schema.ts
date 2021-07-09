import { ApiProperty } from '@nestjs/swagger';
import * as mongoose from 'mongoose';


export const destinoSchema = new mongoose.Schema({

  
  Aeropuerto: String,
  Ciudad: String,
  Codciudad: Number,
});
