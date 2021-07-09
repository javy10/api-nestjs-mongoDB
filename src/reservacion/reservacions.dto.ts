import { ApiProperty } from "@nestjs/swagger";
import { Decimal128 } from "mongoose";


export class Reservacions {

    @ApiProperty({
        description: 'Id del cliente'
    })
        cliente_id: string;
    @ApiProperty({
        description: 'Id del vuelo'
    })
        vuelo_id: string;
    @ApiProperty({
        description: 'Clase de vuelo'
    })
        clase: string;
    @ApiProperty({
        description: 'Numero del asiento'
    })
        aciento: string;
    @ApiProperty({
        description: 'Precio del vuelo'
    })
        precio: Number;
    @ApiProperty({
        description: 'Descuento si aplica'
    })
        descuento: Number;
    @ApiProperty({
        description: 'Precio con descuento'
    })
        preciodes: Number;
}