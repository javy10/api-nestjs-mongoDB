import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Itinerario } from './itinerario.interface';

@Injectable()
export class ItinerarioService {

    constructor(
        @InjectModel('itinerario') private readonly model: Model<Itinerario>,
      ) {}
    
      async findAll(): Promise<Itinerario[]> {
        return await this.model.find().exec();
      }
    
      async findOne(id: string): Promise<Itinerario> {
        return await this.model.findById(id).exec();
      }
    
      async create(create: Itinerario): Promise<Itinerario> {
        return await new this.model(create).save();
      }
    
      async update(id: string, update: Itinerario): Promise<Itinerario> {
        return await this.model.findByIdAndUpdate(id, update).exec();
      }
      async delete(id: string): Promise<Itinerario> {
        return await this.model.findByIdAndDelete(id).exec();
      }

}
