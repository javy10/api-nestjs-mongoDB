import { Decimal128 } from "mongoose";

export interface Reservacion {
    id?: string;
    cliente_id: string;
    vuelo_id: string,
    clase: string;
    aciento: string;
    precio: Decimal128;
    descuento: Decimal128;
    preciodes: Decimal128;
}
