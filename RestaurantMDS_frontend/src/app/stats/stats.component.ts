import { Component, OnInit } from '@angular/core';
import { Comandamancare } from '../models/comandamancare.model';
import { ApiService } from '../shared/api.service';
@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  mancaruri_records:any = {};
  clienti_records:any = {};
  chelneri_records:any = {};
  mese_records:any = {};

  constructor(private api:ApiService) { }

 async ngOnInit(): Promise<void> {

     var comenzi_mancare  = ((await this.api.getComenziMancare().toPromise()) as Array<any>);
     comenzi_mancare.forEach(cm=>{
       console.log(cm)
       var last = this.mancaruri_records[cm.mancareId]?this.mancaruri_records[cm.mancareId]:0;
        this.mancaruri_records[cm.mancareId] = last + cm.nrPortii;
     });

     var comenzi = ((await this.api.getComenzi().toPromise()) as Array<any>);
     comenzi.forEach(c=>{
      console.log(c)
      var last = this.chelneri_records[c.chelnerId]?this.chelneri_records[c.chelnerId]:0;
      this.chelneri_records[c.chelnerId] = last + 1;

      var last = this.clienti_records[c.clientId]?this.clienti_records[c.clientId]:0;
      this.clienti_records[c.clientId] = last + 1;

      var last = this.mese_records[c.masaId]?this.mese_records[c.masaId]:0;
      this.mese_records[c.masaId] = last + 1;
    });


     (window as any).mancaruri_keys = new Array<any>();
     (window as any).mancaruri_values = new Array<any>();
     (window as any).clienti_keys = new Array<any>();
     (window as any).clienti_values = new Array<any>();
     (window as any).chelneri_keys = new Array<any>();
     (window as any).chelneri_values = new Array<any>();
     (window as any).mese_keys = new Array<any>();
     (window as any).mese_values = new Array<any>();
     (window as any).backgrounds = {"mancaruri":[],"clienti":[],"chelneri":[],"mese":[]};

     var mks = Object.keys(this.mancaruri_records);
     for(let k of mks){
        var a = await this.api.getMancare(parseInt(k)).toPromise();
        var nume:string = (a as any).nume;
        var x =  (window as any).mancaruri_keys;
        x.push(nume);
        (window as any).mancaruri_values.push(this.mancaruri_records[k]);
        (window as any).backgrounds["mancaruri"].push("rgba("+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+",1)");
     };

     var clienti_ks = Object.keys(this.clienti_records);
     for(let k of clienti_ks){
        var a = await this.api.getClient(parseInt(k)).toPromise();
        var nume:string = ((a as any).nume + " " + (a as any).prenume);
        var x =  (window as any).clienti_keys;
        x.push(nume);
        (window as any).clienti_values.push(this.clienti_records[k]);
        (window as any).backgrounds["clienti"].push("rgba("+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+",1)");
     };

     var chelneri_ks = Object.keys(this.chelneri_records);
     for(let k of chelneri_ks){
        var a = await this.api.getChelner(parseInt(k)).toPromise();
        var nume:string = ((a as any).nume + " " + (a as any).prenume);
        var x =  (window as any).chelneri_keys;
        x.push(nume);
        (window as any).chelneri_values.push(this.chelneri_records[k]);
        (window as any).backgrounds["chelneri"].push("rgba("+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+",1)");
     };

     var mese_ks = Object.keys(this.mese_records);
     for(let k of mese_ks){
        var a = await this.api.getMasa(parseInt(k)).toPromise();
        var nume:string = ((a as any).locatie);
        var x = (window as any).mese_keys;
        x.push(nume);
        (window as any).mese_values.push(this.mese_records[k]);
        (window as any).backgrounds["mese"].push("rgba("+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+",1)");
     };



     (window as any).chartit();

  }
}
