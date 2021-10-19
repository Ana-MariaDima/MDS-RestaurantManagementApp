export class Mancare {
  Id: number;
  Nume: string;
  Cantitate: number;

  constructor(id:number, nume:string, cantitate: number) {
    this.Id = id;
    this.Nume = nume;
    this.Cantitate = cantitate;
  }
  static from(obj:any):Mancare{
      return new Mancare(parseInt(obj.id)||-1,obj.nume,obj.cantitate);
  }
}
