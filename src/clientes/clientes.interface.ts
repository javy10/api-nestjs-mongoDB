import { ApiParam } from "@nestjs/swagger";


export interface Clientes {
  
  id?: string;
  nombre: string;
  edad: number;
  telefono: string;
  email: string;
}
