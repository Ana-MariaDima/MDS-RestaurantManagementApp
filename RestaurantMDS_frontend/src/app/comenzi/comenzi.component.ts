import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Chelner } from '../models/chelner.model';
import { Client } from '../models/client.model';
import { Comanda } from '../models/comanda.model';
import { Masa } from '../models/masa.model';
import { ApiService } from '../shared/api.service';
declare var $: any;

@Component({
  selector: 'app-comenzi',
  templateUrl: './comenzi.component.html',
  styleUrls: ['./comenzi.component.css'],

})
export class ComenziComponent implements OnInit {
  comenzi:Array<Comanda>;
  mese:Array<Masa>;
  chelneri:Array<Chelner>
  clienti:Array<Client>
  toate_mesele: Array<any>;
  toti_chelnerii: Array<any>;
  toti_clientii: Array<any>;
  table:any;

  constructor(private api:ApiService, private router:Router,private _route: ActivatedRoute) {
    this.comenzi = []
    this.mese = []
    this.chelneri = []
    this.clienti = []
    this.toate_mesele = []
    this.toti_chelnerii = []
    this.toti_clientii = []
  }


  ngOnInit() {
    (window as any).  openAddModal = ()=>{
      document.getElementsByClassName('add-modal')[0].classList.remove("hidden")
    }

    this.api.getComenzi().subscribe(async (res) =>{
      console.log(res);
      var result:Array<Comanda> = (res as Array<any>).map(x=>Comanda.from(x));
      var i = 0;
      (window as any).com = this;
      (window as any).callback = ()=>{
        var execs = (window as any).execs? (window as any).execs:0;
        execs++;
        if(execs >= 3){
          (async()=>{
            this.toate_mesele = (await this.api.getMese().toPromise()) as Array<Masa>;
            this.toti_chelnerii = (await this.api.getChelners().toPromise()) as Array<Chelner>;
            this.toti_clientii = (await this.api.getClients().toPromise()) as Array<Client>;

            this.comenzi = result;
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


            },1);
          })()
        }
        (window as any).execs = execs;
      }
      result.forEach(comanda=>{
         this.api.getChelner(comanda.ChelnerId).toPromise().then(rs=>{
          var chl:Chelner = Chelner.from(rs);
         this.chelneri.push(chl);
        (window as any).callback()
        });
        this.api.getClient(comanda.ClientId).toPromise().then(rs=>{
          var clnt:Client = Client.from(rs);
         this.clienti.push(clnt);
         (window as any).callback()
        });

        this.api.getMasa(comanda.MasaId).toPromise().then(rs=>{
          var masa:Masa = Masa.from(rs);
         this.mese.push(masa);
         (window as any).callback()
        });
      })



    })

  }
  ngAfterViewInit(): void {

  }
  ngAfterViewChecked() {

  }

  delete(id:number){
    this.api.deleteComanda(id).subscribe(res=>{
      console.warn(res)
      window.location.reload()
    })
  }

  addComanda(){
    var cost = ((document.getElementById('cost-add') as any).value as number)
    var metoda = ((document.getElementById('metoda-add') as any).value || "unknown");
    var chelner = ((document.getElementById('chelner-add') as any).value || "unknown");
    var masa = ((document.getElementById('masa-add') as any).value || "unknown");
    var client = ((document.getElementById('client-add') as any).value || "unknown");

    var cmd = new Comanda(-1,cost,metoda,masa,chelner,client);
    this.api.addComanda(cmd).subscribe(res=>{
        console.warn("added",res);
        this.closeAddModal()
        window.location.reload()
    });
  }

  updateComanda(){
    var id = ((document.getElementById('id-update') as any).value as number)
    var cost = ((document.getElementById('cost-update') as any).value as number)
    var metoda = ((document.getElementById('metoda-update') as any).value || "unknown");
    var chelner = ((document.getElementById('chelner-update') as any).value || "unknown");
    var masa = ((document.getElementById('masa-update') as any).value || "unknown");
    var client = ((document.getElementById('client-update') as any).value || "unknown");

    var comanda = new Comanda(id,cost,metoda,masa,chelner,client);
    console.warn("updating",comanda)
    this.api.editComanda(comanda).subscribe(res=>{
      console.log(res)
      window.location.reload()
    })
  }



  closeAddModal(){
    document.getElementsByClassName('add-modal')[0].classList.add("hidden")
  }

  openUpdateModal = (comanda:Comanda)=>{
    (document.getElementById('id-update') as any).value = comanda.Id;
    (document.getElementById('cost-update') as any).value  = comanda.Cost;
    (document.getElementById('metoda-update') as any).value = comanda.ModPlata;
    (document.getElementById('masa-update') as any).value = comanda.MasaId;
    (document.getElementById('chelner-update') as any).value = comanda.ChelnerId;
    (document.getElementById('client-update') as any).value = comanda.ClientId;

    document.getElementsByClassName('update-modal')[0].classList.remove("hidden")
  }

  closeUpdateModal = ()=>{
    document.getElementsByClassName('update-modal')[0].classList.add("hidden")
  }

  redirectToComenziMancare(id:number){
      this.router.navigate(['/comenzimancare',{3:id}]);
  }
  redirectToClients(id:number){
    this.router.navigate(['/clienti',{0:id}]);
  }
  redirectToMese(id:number){
    this.router.navigate(['/mese',{0:id}]);
  }
  redirectToChelneri(id:number){
    this.router.navigate(['/chelneri',{0:id}]);
  }
}
