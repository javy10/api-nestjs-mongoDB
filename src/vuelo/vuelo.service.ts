import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Vuelo } from './vuelo.interface';

@Injectable()
export class VueloService {
    constructor(
        @InjectModel('vuelo') private readonly model: Model<Vuelo>,
      ) {}

    async findAll(): Promise<Vuelo[]> {
        return await this.model.find().exec();
      }
    
    async findOne(id: string): Promise<Vuelo> {
        return await this.model.findById(id).exec();
      }
    
    async create(create: Vuelo): Promise<Vuelo> {
        // return await new this.model({
        //   ...createTodoDto,
        //   createdAt: new Date(),
        // }).save();
        return await new this.model(create).save();
      }
    
    async update(id: string, update: Vuelo): Promise<Vuelo> {
        return await this.model.findByIdAndUpdate(id, update).exec();
      }
    async delete(id: string): Promise<Vuelo> {
        return await this.model.findByIdAndDelete(id).exec();
      }
}
