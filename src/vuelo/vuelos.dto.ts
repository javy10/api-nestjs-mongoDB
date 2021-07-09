import { ApiProperty } from "@nestjs/swagger";
import { Decimal128 } from "mongoose";


export class Vuelos {

    @ApiProperty({
        description: 'Id del itinerario de vuelos'
    })
        itinerario_id: string;
    @ApiProperty({
        description: 'Capacidad del avion'
    })
        capacidad: Number;
    @ApiProperty({
        description: 'Numero de vuelo del avión'
    })
        nVuelo: string;
    
}