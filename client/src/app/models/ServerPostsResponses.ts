import { Computer } from "./computer";
import { Other } from "./other";
import { Phone } from "./phone";

export interface PostNewComputer { 
    msg: string;
    newComputer: Computer;
}

export interface PostNewPhone { 
    msg: string;
    newPhone: Phone;
}

export interface PostNewOther { 
    msg: string;
    newOther: Other;
}
