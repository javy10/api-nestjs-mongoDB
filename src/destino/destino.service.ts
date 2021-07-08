import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Destino } from './destino.interface';

@Injectable()
export class DestinoService {
  constructor(
    @InjectModel('destinos') private readonly model: Model<Destino>,
  ) {}

  async findAll(): Promise<Destino[]> {
    return await this.model.find().exec();
  }

  async findOne(id: string): Promise<Destino> {
    return await this.model.findById(id).exec();
  }

  async create(create: Destino): Promise<Destino> {
    return await new this.model(create).save();
  }

  async update(id: string, update: Destino): Promise<Destino> {
    return await this.model.findByIdAndUpdate(id, update).exec();
  }
  async delete(id: string): Promise<Destino> {
    return await this.model.findByIdAndDelete(id).exec();
  }
  v;
}
