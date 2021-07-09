import { ApiProperty } from "@nestjs/swagger";

export class Destinos{

    @ApiProperty({
        description: 'Nombre del aeropuerto'
    })
        Aeropuerto: string;
    @ApiProperty({
        description: 'Ciudad de destino'
    })
        Ciudad: string;
    @ApiProperty({
        description: 'Codigo postal'
    })
        Codciudad: number;

}