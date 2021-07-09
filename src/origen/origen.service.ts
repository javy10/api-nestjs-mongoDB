import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Origen } from './origen.interface';
import { Origens } from './origenes.dto';

@Injectable()
export class OrigenService {
  constructor(@InjectModel('origen') private readonly model: Model<Origens>) {}

  async findAll(): Promise<Origens[]> {
    return await this.model.find().exec();
  }

  async findOne(id: string): Promise<Origens> {
    return await this.model.findById(id).exec();
  }

  async create(create: Origens): Promise<Origens> {
    return await new this.model(create).save();

  }

  async update(id: string, update: Origens): Promise<Origens> {
    return await this.model.findByIdAndUpdate(id, update).exec();
  }
  async delete(id: string): Promise<Origens> {
    return await this.model.findByIdAndDelete(id).exec();
  }
}
