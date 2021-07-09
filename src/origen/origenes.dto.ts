import { ApiProperty } from "@nestjs/swagger";


export class Origens {

    @ApiProperty({
        description: 'Nombre de aeropuerto de salida'
    })
        aeropuerto: string;
    @ApiProperty({
        description: 'Nombre de la ciudad de salida'
    })
        ciudad: string;
    @ApiProperty({
        description: 'Codigo postal de la ciudad de salida'
    })
        codciudad: number;
}