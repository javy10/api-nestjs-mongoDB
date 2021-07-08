import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Reservacion } from './reservacion.interface';

@Injectable()
export class ReservacionService {
    constructor(
        @InjectModel('reservacion') private readonly model: Model<Reservacion>,
      ) {}

    async findAll(): Promise<Reservacion[]> {
        return await this.model.find().exec();
      }
    
    async findOne(id: string): Promise<Reservacion> {
        return await this.model.findById(id).exec();
      }
    
    async create(create: Reservacion): Promise<Reservacion> {
        // return await new this.model({
        //   ...createTodoDto,
        //   createdAt: new Date(),
        // }).save();
        return await new this.model(create).save();
      }
    
    async update(id: string, update: Reservacion): Promise<Reservacion> {
        return await this.model.findByIdAndUpdate(id, update).exec();
      }
    async delete(id: string): Promise<Reservacion> {
        return await this.model.findByIdAndDelete(id).exec();
      }
}
