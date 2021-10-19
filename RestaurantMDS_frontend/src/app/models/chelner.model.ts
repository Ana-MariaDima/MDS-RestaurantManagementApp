import { Comanda } from "./comanda.model";

export class Chelner {
  Id: number;
  public  Nume: string;

  public  Prenume: string;
  public  Salariu: number;

  public  Comanda: Array<Comanda>;
  constructor(id:number, nume: string, prenume: string, salariu:number, comenzi: Array<Comanda>) {
    this.Id = id;
    this.Nume = nume;
    this.Prenume = prenume;
    this.Salariu = salariu;
    this.Comanda = comenzi;
  }

  static from(obj:any):Chelner{
    return new Chelner(parseInt(obj.id)||-1,obj.nume,obj.prenume,parseInt(obj.salariu)||0,[]);
  }
}
