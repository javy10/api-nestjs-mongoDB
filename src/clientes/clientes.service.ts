import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Clientes } from './clientes.interface';
import { Cliente } from './cliente.dto';

@Injectable()
export class ClientesService {
  constructor(
    //@InjectModel('clientes') private readonly model: Model<Clientes>,
    @InjectModel('clientes') private readonly modelo: Model<Cliente>,
  ) {}
  

  async findAll(): Promise<Cliente[]> {
    return await this.modelo.find().exec();
  }

  async findOne(id: string): Promise<Cliente> {
    return await this.modelo.findById(id).exec();
  }

  async create(create: Cliente): Promise<Cliente> {
    // return await new this.model({
    //   ...createTodoDto,
    //   createdAt: new Date(),
    // }).save();
    return await new this.modelo(create).save();
  }
  async createswagger(crear: Cliente): Promise<Cliente> {
    // return await new this.model({
    //   ...createTodoDto,
    //   createdAt: new Date(),
    // }).save();
    return await new this.modelo(crear).save();
  }

  async update(id: string, update: Cliente): Promise<Cliente> {
    return await this.modelo.findByIdAndUpdate(id, update).exec();
  }
  
  async delete(id: string): Promise<Cliente> {
    return await this.modelo.findByIdAndDelete(id).exec();
  }
}
