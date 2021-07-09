import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Origen } from './origen.interface';

@Injectable()
export class OrigenService {
  constructor(@InjectModel('origen') private readonly model: Model<Origen>) {}

  async findAll(): Promise<Origen[]> {
    return await this.model.find().exec();
  }

  async findOne(id: string): Promise<Origen> {
    return await this.model.findById(id).exec();
  }

  async create(create: Origen): Promise<Origen> {
    return await new this.model(create).save();

  }

  async update(id: string, update: Origen): Promise<Origen> {
    return await this.model.findByIdAndUpdate(id, update).exec();
  }
  async delete(id: string): Promise<Origen> {
    return await this.model.findByIdAndDelete(id).exec();
  }
}
