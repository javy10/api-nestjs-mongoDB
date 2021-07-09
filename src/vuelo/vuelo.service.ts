import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Vuelo } from './vuelo.interface';
import { Vuelos } from './vuelos.dto';

@Injectable()
export class VueloService {
    constructor(
        @InjectModel('vuelo') private readonly model: Model<Vuelos>,
      ) {}

    async findAll(): Promise<Vuelos[]> {
        return await this.model.find().exec();
      }
    
    async findOne(id: string): Promise<Vuelos> {
        return await this.model.findById(id).exec();
      }
    
    async create(create: Vuelos): Promise<Vuelos> {
        // return await new this.model({
        //   ...createTodoDto,
        //   createdAt: new Date(),
        // }).save();
        return await new this.model(create).save();
      }
    
    async update(id: string, update: Vuelos): Promise<Vuelos> {
        return await this.model.findByIdAndUpdate(id, update).exec();
      }
    async delete(id: string): Promise<Vuelos> {
        return await this.model.findByIdAndDelete(id).exec();
      }
}
