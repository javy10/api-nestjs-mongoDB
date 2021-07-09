import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Itinerario } from './itinerario.interface';
import { Itinerarios } from './itinerarios.dto';

@Injectable()
export class ItinerarioService {

    constructor(
        @InjectModel('itinerario') private readonly model: Model<Itinerarios>,
      ) {}
    
      async findAll(): Promise<Itinerarios[]> {
        return await this.model.find().exec();
      }
    
      async findOne(id: string): Promise<Itinerarios> {
        return await this.model.findById(id).exec();
      }
    
      async create(create: Itinerarios): Promise<Itinerarios> {
        return await new this.model(create).save();
      }
    
      async update(id: string, update: Itinerarios): Promise<Itinerarios> {
        return await this.model.findByIdAndUpdate(id, update).exec();
      }
      async delete(id: string): Promise<Itinerarios> {
        return await this.model.findByIdAndDelete(id).exec();
      }

}
