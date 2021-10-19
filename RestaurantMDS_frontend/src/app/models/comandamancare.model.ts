import { Mancare } from "./mancare.model";

export class Comandamancare {
  Id: number;
  NrPortii: number;
  MancareId:number;
  ComandaId:number;
  constructor(id:number, nrp: number, mnc: number, cmd:number) {
    this.Id = id;
    this.NrPortii = nrp;
    this.MancareId = mnc;
    this.ComandaId = cmd;
  }
  static from(obj:any):Comandamancare{
    return new Comandamancare(obj.id,obj.nrPortii,obj.mancareId,obj.comandaId);
  }
}
