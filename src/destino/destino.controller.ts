import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Destino } from './destino.interface';
import { DestinoService } from './destino.service';

@Controller('destino')
export class DestinoController {
  constructor(private readonly service: DestinoService) {}

  @Get()
  async findAll() {
    return await this.service.findAll();
  }

  @Get(':id')
  async find(@Param('id') id: string) {
    return await this.service.findOne(id);
  }

  @Post()
  async create(@Body() create: Destino) {
    return await this.service.create(create);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() update: Destino) {
    return await this.service.update(id, update);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.service.delete(id);
  }
}
