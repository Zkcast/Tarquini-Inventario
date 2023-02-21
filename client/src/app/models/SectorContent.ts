import { Computer } from "./computer";
import { Other } from "./other";
import { Phone } from "./phone";

export interface SectorContent { 
    Computers: Computer[];
    Others: Other[];
    Phones: Phone[];
    id: string;
    createdAt: string;
    nombre: string;
    updatedAt: string; 
}