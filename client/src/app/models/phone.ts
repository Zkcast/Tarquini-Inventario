import { Sector } from "./sector";

export interface Phone {
  tipo: 'Phone';
  Sector: Sector;
  id: string;
  inventario: string;
  puesto: string;
  ubicacion: string;
  usuario: string;
  marca: string;
  nromodelo: string;
  micro: string;
  memoriainterna: string;
  ram: string;
  imei: string;
  serie: string;
  codigodebarras: string;
  cfgcorreoempresa: string;
  wpbusiness: string;
  nrofactura: string;
  fechafactura: string;
  proveedor: string;
  entregaplanilla: string;
  versionandroid: string;
  microsd: string;
  fuente: string;
  nro: string;
  usuarioclaro: string;
  accesorios: string;
  cfggmail: string;
  observaciones: string;
}
