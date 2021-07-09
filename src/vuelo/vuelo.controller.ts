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
import { Vuelo } from './vuelo.interface';
import { VueloService } from './vuelo.service';
import { Vuelos } from './vuelos.dto';

@ApiTags('Esta es la documentación para la colección Vuelo')
@Controller('vuelo')
export class VueloController {
    constructor(private readonly service: VueloService) {}

  @Get()
  async findAll() {
    return await this.service.findAll();
  }

  @Get(':id')
  async find(@Param('id') id: string) {
    return await this.service.findOne(id);
  }

  @Post()
  async create(@Body() createVuelo: Vuelos) {
    return await this.service.create(createVuelo);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateVuelo: Vuelos) {
    return await this.service.update(id, updateVuelo);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.service.delete(id);
  }
}
