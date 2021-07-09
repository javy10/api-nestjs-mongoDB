import { ApiProperty } from "@nestjs/swagger";

export class Itinerarios{

    @ApiProperty({
        description: 'Fecha de vuelo'
    })
        Fecha: string;
    @ApiProperty({
        description: 'Hora del vuelo'
    })
        Hora: string;
    @ApiProperty({
        description: 'Codigo postal'
    })
        Destino_id: String;
    @ApiProperty({
        description: 'Codigo postal'
    })
        Origen_id: String;

}