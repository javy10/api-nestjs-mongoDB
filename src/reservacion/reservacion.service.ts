import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Reservacion } from './reservacion.interface';
import { Reservacions } from './reservacions.dto';

@Injectable()
export class ReservacionService {
    constructor(
        @InjectModel('reservacion') private readonly model: Model<Reservacions>,
      ) {}

    async findAll(): Promise<Reservacions[]> {
        return await this.model.find().exec();
      }
    
    async findOne(id: string): Promise<Reservacions> {
        return await this.model.findById(id).exec();
      }
    
    async create(create: Reservacions): Promise<Reservacions> {
        // return await new this.model({
        //   ...createTodoDto,
        //   createdAt: new Date(),
        // }).save();
        return await new this.model(create).save();
      }
    
    async update(id: string, update: Reservacions): Promise<Reservacions> {
        return await this.model.findByIdAndUpdate(id, update).exec();
      }
    async delete(id: string): Promise<Reservacions> {
        return await this.model.findByIdAndDelete(id).exec();
      }
}
