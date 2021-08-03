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
import { Cliente } from './cliente.dto';
import { Clientes } from './clientes.interface';
import { ClientesService } from './clientes.service';

@ApiTags('Esta es la documentación para la colección Clientes')
@Controller('clientes')
export class ClientesController {
  constructor(private readonly service: ClientesService) {}
  
  @Get()
  async findAll(@Res() res) {
    const clientes = await this.service.findAll();
    return res.status(HttpStatus.OK).json({
      message: 'Todos los clientes',
      clientes
    });
  }

  @Get('/:id')
  async find(@Res() res, @Param('id') id: string) {
    const cliente = await this.service.findOne(id);
    return res.status(HttpStatus.OK).json({
      message: 'Un cliente',
      cliente
    });
  }

  @Post('/create')
  async create(@Body() createClient: Clientes) {
    return await this.service.create(createClient);
  }
  // Prueba de post en la documentacion
  @Post('/create')
  async createSwagger(@Res() res, @Body() createClient: Cliente) {
    const clienteCreate = await this.service.createswagger(createClient);
    if (!clienteCreate) throw new NotFoundException('No se pudo crear el cliente');
    return res.status(HttpStatus.OK).json({
      message: 'Se creo el cliente exitosamente',
      clienteCreate
    });
    
  }

  @Put('/update/:id')
  async update(@Res() res, @Param('id') id: string, @Body() updateClient: Cliente) {
    const clienteUpdate = await this.service.update(id, updateClient);
    if (!clienteUpdate) throw new NotFoundException('El cliente no existe');
    return res.status(HttpStatus.OK).json({
      message: 'El cliente se actualizo con exito',
      clienteUpdate
    });
  }
  

  @Delete('/delete/:id')
  async delete(@Res() res, @Param('id') id: string ) {
    const clienteDelete = await this.service.delete(id);
    if (!clienteDelete) throw new NotFoundException('El cliente no existe');
    return res.status(HttpStatus.OK).json({
      message: 'El cliente se elimino con exito',
      clienteDelete
    });
    
  }
}
