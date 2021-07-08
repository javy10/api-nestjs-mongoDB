import { 
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,  
} from '@nestjs/common';
import { Reservacion } from './reservacion.interface';
import { ReservacionService } from './reservacion.service';

@Controller('reservacion')
export class ReservacionController {
    constructor(private readonly service: ReservacionService) {}

  @Get()
  async findAll() {
    return await this.service.findAll();
  }

  @Get(':id')
  async find(@Param('id') id: string) {
    return await this.service.findOne(id);
  }

  @Post()
  async create(@Body() createReservacion: Reservacion) {
    return await this.service.create(createReservacion);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateReservacion: Reservacion) {
    return await this.service.update(id, updateReservacion);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.service.delete(id);
  }
}
