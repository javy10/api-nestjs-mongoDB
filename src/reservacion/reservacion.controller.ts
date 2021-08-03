import { 
    Body,
    Controller,
    Delete,
    Get,
    HttpStatus,
    NotFoundException,
    Param,
    Post,
    Put,
    Query,
    Res,  
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Reservacion } from './reservacion.interface';
import { ReservacionService } from './reservacion.service';
import { Reservacions } from './reservacions.dto';

@ApiTags('Esta es la documentación para la colección Reservación')
@Controller('reservacion')
export class ReservacionController {
    constructor(private readonly service: ReservacionService) {}

  @Get()
  async findAll(@Res() res) {
    const reservaciones = await this.service.findAll();
    return res.status(HttpStatus.OK).json({
      message: 'Todas las reservaciones',
      reservaciones
    });

  }

  @Get('/:id')
  async find(@Res() res, @Param('id') id: string) {
    const reservacion = await this.service.findOne(id);
    return res.status(HttpStatus.OK).json({
      message: 'Una reservación',
      reservacion
    });
  }

  @Post('/create')
  async create(@Res() res, @Body() createReservacion: Reservacions) {
    const reservacionCreate = await this.service.create(createReservacion);
    if (!reservacionCreate) throw new NotFoundException('No se pudo crear la reservación');
    return res.status(HttpStatus.OK).json({
      message: 'Reservación creada exitosamente',
      reservacionCreate
    });
    
  }

  @Put('/update/:id')
  async update(@Res() res, @Param('id') id: string, @Body() updateReservacion: Reservacions) {
    const reservacionUpdate = await this.service.update(id, updateReservacion);
    if (!reservacionUpdate) throw new NotFoundException('No se pudo actualizar la reservación intenta nuevamente o no existe');
    return res.status(HttpStatus.OK).json({
      message: 'La reservacion fue actualizada',
      reservacionUpdate
    });
    
  }

  @Delete('/delete/:id')
  async delete(@Param('id') id: string, @Res() res) {
    const reservacionDelete = await this.service.delete(id);
    if (!reservacionDelete) throw new NotFoundException('La reservación que quiere eliminar no existe');
    return res.status(HttpStatus.OK).json({
      message: 'Se elimino exitosamente',
      reservacionDelete
    });
  }
}
