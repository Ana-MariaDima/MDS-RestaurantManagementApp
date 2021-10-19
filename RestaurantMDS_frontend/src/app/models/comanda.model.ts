import {Model} from "../model";
import { Chelner } from "./chelner.model";
import { Client } from "./client.model";
import { Comandamancare } from "./comandamancare.model";
import { Masa } from "./masa.model";

export class Comanda extends Model{
  Id: number;
  Cost:number;
  ModPlata:string;
  MasaId: number;
  ChelnerId: number;
  ClientId: number;
  constructor(id:number, cost: number, modplata: string, MasaId: number, ChelnerId: number, ClientId: number) {
    super();
    //signature-start :: sep=;
    this.Id = id;
    this.Cost = cost;
    this.ModPlata = modplata;
    this.MasaId = MasaId;
    this.ChelnerId = ChelnerId;
    this.ClientId = ClientId;
    //signature-end

  }

 static from(obj:any):Comanda{
   return new Comanda(obj.id,obj.cost,obj.modPlata,obj.masaId,obj.chelnerId,obj.clientId);
 }


}

/*

        public int Cost { get; set; }

        public string ModPlata { get; set; }

        public List<ComandaMancare> ComandaMancare { get; set; }

        public int MasaId { get; set; }
        public virtual Masa Masa { get; set; }
        public int ChelnerId { get; set; }
        public virtual Chelner Chelner { get; set; }

        public int ClientId { get; set; }

        public virtual Client Client { get; set; }
*/
