export class Masa {
  Id: number;
  Locatie: string;
  NrLocuri: number;

  constructor(id:number, locatie:string, nrLocuri: number) {
    this.Id = id;
    this.Locatie = locatie;
    this.NrLocuri = nrLocuri;
  }

  static from(obj:any):Masa{
    return new Masa(parseInt(obj.id) || -1,obj.locatie, parseInt(obj.nrLocuri));
  }
}
