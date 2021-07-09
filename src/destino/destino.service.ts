import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Destino } from './destino.interface';
import { Destinos } from './destinos.dto';

@Injectable()
export class DestinoService {
  constructor(
    @InjectModel('destinos') private readonly model: Model<Destinos>,
  ) {}

  async findAll(): Promise<Destinos[]> {
    return await this.model.find().exec();
  }

  async findOne(id: string): Promise<Destinos> {
    return await this.model.findById(id).exec();
  }

  async create(create: Destinos): Promise<Destinos> {
    return await new this.model(create).save();
  }

  async update(id: string, update: Destinos): Promise<Destinos> {
    return await this.model.findByIdAndUpdate(id, update).exec();
  }
  async delete(id: string): Promise<Destinos> {
    return await this.model.findByIdAndDelete(id).exec();
  }
}
