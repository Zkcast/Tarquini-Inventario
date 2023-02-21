import { Sector } from "./sector";

export interface Other {
    tipo: 'Other';
    Sector: Sector;
    id: string;
    SectorId: string;
    inventario: string;
    puesto: string;
    ubicacion: string;
    usuario: string;
    nombre: string;
    codigodebarras: string;
    articulo: string;
    marca: string;
    modelo: string;
    nrofactura: string;
    nroserie: string;
    entregaplanilla: string;
    observaciones: string;
}
