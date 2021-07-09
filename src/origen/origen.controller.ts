import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Origen } from './origen.interface';
import { OrigenService } from './origen.service';
import { Origens } from './origenes.dto';

@ApiTags('Esta es la documentación para la colección Origen')
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
  async create(@Body() create: Origens) {
    return await this.service.create(create);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() update: Origens) {
    return await this.service.update(id, update);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.service.delete(id);
  }
}
