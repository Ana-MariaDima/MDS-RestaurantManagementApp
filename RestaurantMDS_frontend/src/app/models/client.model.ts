export class Client {
  Id: number;

  public  Nume:string;
  public  Prenume: string;
  public  NrTelefon: string;

  constructor(id:number, nume:string, prenume:string, nrtel:string) {
    this.Id = id;
    this.Nume = nume;
    this.Prenume = prenume;
    this.NrTelefon = nrtel;
  }

  static from(obj:any):Client{
    return new Client(obj.id,obj.nume,obj.prenume,obj.nrTelefon);
  }
}
