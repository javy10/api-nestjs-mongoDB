import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Origen } from './origen.interface';
import { OrigenService } from './origen.service';

@Controller('origen')
export class OrigenController {
  constructor(private readonly service: OrigenService) {}

  @Get()
  async findAll() {
    return await this.service.findAll();
  }

  @Get(':id')
  async find(@Param('id') id: string) {
    return await this.service.findOne(id);
  }

  @Post()
  async create(@Body() create: Origen) {
    return await this.service.create(create);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() update: Origen) {
    return await this.service.update(id, update);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.service.delete(id);
  }
}
