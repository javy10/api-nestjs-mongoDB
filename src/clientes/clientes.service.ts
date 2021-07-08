import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Clientes } from './clientes.interface';

@Injectable()
export class ClientesService {
  constructor(
    @InjectModel('clientes') private readonly model: Model<Clientes>,
  ) {}

  async findAll(): Promise<Clientes[]> {
    return await this.model.find().exec();
  }

  async findOne(id: string): Promise<Clientes> {
    return await this.model.findById(id).exec();
  }

  async create(create: Clientes): Promise<Clientes> {
    // return await new this.model({
    //   ...createTodoDto,
    //   createdAt: new Date(),
    // }).save();
    return await new this.model(create).save();
  }

  async update(id: string, update: Clientes): Promise<Clientes> {
    return await this.model.findByIdAndUpdate(id, update).exec();
  }
  async delete(id: string): Promise<Clientes> {
    return await this.model.findByIdAndDelete(id).exec();
  }
}
