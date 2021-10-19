import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Chelner } from '../models/chelner.model';
import { Client } from '../models/client.model';
import { Comanda } from '../models/comanda.model';
import { Comandamancare } from '../models/comandamancare.model';
import { Mancare } from '../models/mancare.model';
import { Masa } from '../models/masa.model';
import { ApiService } from '../shared/api.service';
declare var $: any;

@Component({
  selector: 'app-comenzimancare',
  templateUrl: './comenzimancare.component.html',
  styleUrls: ['./comenzimancare.component.css']
})
export class ComenzimancareComponent implements OnInit {
  comenzimancare:Array<Comandamancare>;
  mancaruri:Array<Mancare>;
  toate_mancarurile: Array<any>;
  toate_comenzile: Array<any>;
  toti_chelnerii:Array<any>;
  toti_clientii:Array<any>;
  toate_mesele:Array<any>;
  table:any;
  mancare_selectata= 1;
  constructor(private api:ApiService, private router:Router, private _route:ActivatedRoute) {
    this.comenzimancare = [];
    this.mancaruri = [];
    this.toate_mancarurile = [];
    this.toate_comenzile = [];
    this.toti_chelnerii = [];
    this.toti_clientii = [];
    this.toate_mesele = [];
  }


  ngOnInit() {
    (window as any).openAddModal = ()=>{
      document.getElementsByClassName('add-modal')[0].classList.remove("hidden")
    }

    this.api.getComenziMancare().subscribe(async (res) =>{

      var result:Array<Comandamancare> = (res as Array<any>).map(x=>Comandamancare.from(x));
      var i = 0;
      result.forEach(comanda=>{
         this.api.getMancare(comanda.MancareId).toPromise().then(rs=>{
         var mancare:Mancare = Mancare.from(rs);
         this.mancaruri.push(mancare);
         console.log(mancare)
         if(i >= result.length-1){
          (window as any).mancaruri = this.mancaruri;
          (async ()=>{
            this.toate_mancarurile = (await this.api.getMancaruri().toPromise()) as Array<Mancare>;
            this.toate_mesele = (await this.api.getMese().toPromise()) as Array<Masa>;
            this.toti_clientii = (await this.api.getClients().toPromise()) as Array<Client>;
            this.toti_chelnerii = (await this.api.getChelners().toPromise()) as Array<Chelner>;
            this.toate_comenzile = (await this.api.getComenzi().toPromise()) as Array<Comanda>;
            this.comenzimancare = result;
            (window as any).ctx = this;
            console.log(this.toate_mancarurile)
            setTimeout(()=>{
              var a = $('table').DataTable()
              console.log($().addClass)
              if($().addClass != undefined){
                console.warn($('#DataTables_Table_0_wrapper').addClass)
                $('#DataTables_Table_0_wrapper').addClass('wrapper')
              }
              this.table = a;

              (window as any).table = this.table;
              (window as any).snp = this._route.snapshot.paramMap;
              if(this._route.snapshot.paramMap.keys.length>0){
                var column = this._route.snapshot.paramMap.keys[0];
                this.table.column(parseInt(column)).search(this._route.snapshot.paramMap.get(column)).draw()
              }

            },100);
          })()
         }
         i++;
        });
      });
    });

  }
  ngAfterViewInit(): void {

  }
  ngAfterViewChecked() {

  }

  delete(id:number){
    this.api.deleteComandaMancare(id).subscribe(res=>{
      console.warn(res)
      window.location.reload()
    })
  }

  addComandaMancare(){
    var comanda = ((document.getElementById('comanda-add') as any).value || -1);
    var cantitate = ((document.getElementById('cantitate-add') as any).value || 1);
    var mancare = ((document.getElementById('mancare-add') as any).value || 1);

    var cmd = new Comandamancare(-1,cantitate,mancare,comanda);
    this.api.addComandaMancare(cmd).subscribe(res=>{
        console.warn("added",res);
        this.closeAddModal()
        window.location.reload()
    });
  }

  updateComandaMancare(){
    var id = ((document.getElementById('id-update') as any).value as number)
    var comanda = ((document.getElementById('comanda-update') as any).value || " unknown");
    var cantitate = ((document.getElementById('cantitate-update') as any).value || " unknown");
    var mancare = ((document.getElementById('mancare-update') as any).value || " unknown");

    var comandamancare = new Comandamancare(id,cantitate,mancare,comanda)
    console.warn("updating",comandamancare)
    this.api.editComandaMancare(comandamancare).subscribe(res=>{
      console.log(res)
      window.location.reload()
    })
  }

  closeAddModal(){
    document.getElementsByClassName('add-modal')[0].classList.add("hidden")
  }

  openUpdateModal = (comanda:Comandamancare)=>{
    (document.getElementById('id-update') as any).value = comanda.Id;
    (document.getElementById('cantitate-update') as any).value  = comanda.NrPortii;
    (document.getElementById('mancare-update') as any).value = comanda.MancareId;
    console.log( (document.getElementById('mancare-update') as any).value);
    (document.getElementById('comanda-update') as any).value = comanda.ComandaId;
    document.getElementsByClassName('update-modal')[0].classList.remove("hidden");
  }

  closeUpdateModal = ()=>{
    document.getElementsByClassName('update-modal')[0].classList.add("hidden")
  }

  getClient(id:number){
    console.log(this.toti_clientii.find(client=>client.id == id),"called CLient")
    return this.toti_clientii.find(client=>client.id == id)
  }
  getChelner(id:number){
    console.log( this.toti_chelnerii.find(c=>c.id == id),"called getChelner")
    return this.toti_chelnerii.find(c=>c.id == id)
  }
  getMasa(id:number){
    console.log(this.toate_mesele.find(m=>m.id == id), "getMasa")
    return this.toate_mesele.find(m=>m.id == id)
  }

  redirectToComezni(id:number){
    this.router.navigate(['/comenzi',{0:id}]);
  }

}
