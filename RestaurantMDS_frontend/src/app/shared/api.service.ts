import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Client} from '../models/client.model';
import {Comanda} from '../models/comanda.model';
import {Mancare} from '../models/mancare.model';
import { Comandamancare } from '../models/comandamancare.model';
import { Chelner } from '../models/chelner.model';
import { Masa } from '../models/masa.model';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) {}

  header = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  baseUrl = 'http://localhost:5001/api';


  addClient(client: Client){
    return this.http.post(this.baseUrl + '/client', client, { headers: this.header });
  }

  editClient(model:Client){
    return this.http.put(this.baseUrl + '/client/' + model.Id.toString(), model, { headers: this.header });
  }


  getClient(id: number){
    return this.http.get(this.baseUrl + '/client/' + id.toString(), { headers: this.header });
  }
  getClients(){

    return this.http.get(this.baseUrl + '/client/', { headers: this.header });
  }

  deleteClient(id:number){
    return this.http.delete(this.baseUrl + '/client/' + id.toString(), { headers: this.header });

  }

  addChelner(chelner: Chelner){
    return this.http.post(this.baseUrl + '/chelner', chelner, { headers: this.header });
  }

  editChelner(model:Chelner){
    return this.http.put(this.baseUrl + '/chelner/' + model.Id.toString(), model, { headers: this.header });
  }

  getChelner(id: number){

    return this.http.get(this.baseUrl + '/chelner/' + id.toString(), { headers: this.header });
  }
  getChelners(){

    return this.http.get(this.baseUrl + '/chelner/', { headers: this.header });
  }

  deleteChelner(id:number){
    return this.http.delete(this.baseUrl + '/chelner/' + id.toString(), { headers: this.header });

  }

  addComanda(comanda:Comanda){
    return this.http.post(this.baseUrl + '/comanda/', comanda, { headers: this.header });
  }
  editComanda(model:Comanda){
    return this.http.put(this.baseUrl + '/comanda/' + model.Id.toString(), model, { headers: this.header });
  }
  getComanda(id: number){
    return this.http.get(this.baseUrl + '/comanda/' + id.toString(), { headers: this.header });
  }
  getComenzi(){
    return this.http.get(this.baseUrl + '/comanda/', { headers: this.header });
  }

  deleteComanda(id: number){
    return this.http.delete(this.baseUrl + '/comanda/' + id.toString(), { headers: this.header });

  }

  addMancare(mancare:Mancare){
    return this.http.post(this.baseUrl + '/mancare', mancare, { headers: this.header });

  }
  addMasa(masa:Masa){
    return this.http.post(this.baseUrl + '/masa', masa, { headers: this.header });

  }

  editMancare(model:Mancare){
    return this.http.put(this.baseUrl + '/mancare/' + model.Id.toString(), model, { headers: this.header });
  }
  getMancare(id: number){
    return this.http.get(this.baseUrl + '/mancare/' + id.toString(), { headers: this.header });
  }

  getMancaruri(){
    return this.http.get(this.baseUrl + '/mancare/', { headers: this.header });
  }

  getMese(){
    return this.http.get(this.baseUrl + '/masa/', { headers: this.header });
  }
  getMasa(id:number){
    return this.http.get(this.baseUrl + '/masa/'+id.toString(), { headers: this.header });
  }

  editMasa(model:any){
    return this.http.put(this.baseUrl + '/masa/' + model.Id.toString(), model, { headers: this.header });
  }

  deleteMancare(id:number){
    return this.http.delete(this.baseUrl + '/mancare/' + id.toString(), { headers: this.header });

  }
  deleteMasa(id:number){
    return this.http.delete(this.baseUrl + '/masa/' + id.toString(), { headers: this.header });

  }

  addComandaMancare(comandamancare: Comandamancare){
    return this.http.post(this.baseUrl + '/comandamancare', comandamancare, { headers: this.header });

  }

  getComandaMancare(id:number){
    return this.http.get(this.baseUrl + '/comandamancare/' + id.toString(), { headers: this.header });
  }

  getComenziMancare(){
    return this.http.get(this.baseUrl + '/comandamancare', { headers: this.header });
  }

  editComandaMancare(model:Comandamancare){
    return this.http.put(this.baseUrl + '/comandamancare/' + model.Id.toString(), model, { headers: this.header });
  }


  deleteComandaMancare(id: number){
    return this.http.delete(this.baseUrl + '/comandamancare/' + id.toString(), { headers: this.header });

  }

}
