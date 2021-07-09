import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export interface Destino {
    Id?: string;
    Aeropuerto: string;
    Ciudad: string;
    Codciudad: number;
}
