import { ApiProperty } from "@nestjs/swagger";

export class Cliente{

    @ApiProperty({
        description: 'Nombre del cliente'
    })
        nombre: string;
    @ApiProperty({
        description: 'Edad'
    })
        edad: number;
    @ApiProperty({
        description: 'Telefono'
    })
        telefono: string;
    @ApiProperty({
        description: 'Correo electronico'
    })
        email: string;

}