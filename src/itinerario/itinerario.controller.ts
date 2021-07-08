import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { Itinerario } from './itinerario.interface';
import { ItinerarioService } from './itinerario.service';

@Controller('itinerario')
export class ItinerarioController {

    constructor(private readonly service: ItinerarioService) {}

  @Get()
  async findAll() {
    return await this.service.findAll();
  }

  @Get(':id')
  async find(@Param('id') id: string) {
    return await this.service.findOne(id);
  }

  @Post()
  async create(@Body() create: Itinerario) {
    return await this.service.create(create);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() update: Itinerario) {
    return await this.service.update(id, update);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.service.delete(id);
  }

}
