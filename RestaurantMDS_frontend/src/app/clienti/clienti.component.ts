import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Client } from '../models/client.model';
import { ApiService } from '../shared/api.service';
declare var $: any;

@Component({
  selector: 'app-clienti',
  templateUrl: './clienti.component.html',
  styleUrls: ['./clienti.component.css']
})
export class ClientiComponent implements OnInit {
  clienti:Array<Client> = [];
  table:any;
  constructor(private api:ApiService, private _route:ActivatedRoute) { }

  ngOnInit() {
    (window as any).  openAddModal = ()=>{
      document.getElementsByClassName('add-modal')[0].classList.remove("hidden")
    }

    this.api.getClients().subscribe((res) =>{
      var result:Array<Client> = (res as Array<any>).map(x=>Client.from(x));
      this.clienti = result
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
    })

  }
  ngAfterViewInit(): void {

  }
  ngAfterViewChecked() {

  }

  delete(id:number){
    this.api.deleteClient(id).subscribe(res=>{
      console.warn(res)
      window.location.reload()
    })
  }

  addClient(){
    var nume = ((document.getElementById('nume-add') as any).value || " unknown");
    var prenume = ((document.getElementById('prenume-add') as any).value || " unknown");
    var telefon = ((document.getElementById('telefon-add') as any).value || " unknown");


    var client = new Client(-1,nume,prenume,telefon)
    this.api.addClient(client).subscribe(res=>{
        console.warn("added",res);
        this.closeAddModal()
        window.location.reload()
    });
  }

  updateClient(){
    var id = ((document.getElementById('id-update') as any).value as number)
    var nume = ((document.getElementById('nume-update') as any).value || " unknown");
    var prenume = ((document.getElementById('prenume-update') as any).value || " unknown");
    var telefon = ((document.getElementById('telefon-update') as any).value || " unknown");
    var client = new Client(id,nume,prenume,telefon)
    console.warn("updating",client)
    this.api.editClient(client).subscribe(res=>{
      console.log(res)
      window.location.reload()
    })
  }



  closeAddModal(){
    document.getElementsByClassName('add-modal')[0].classList.add("hidden")
  }

  openUpdateModal = (client:Client)=>{
    (document.getElementById('id-update') as any).value = client.Id;
    (document.getElementById('nume-update') as any).value  = client.Nume;
    (document.getElementById('prenume-update') as any).value = client.Prenume;
    (document.getElementById('telefon-update') as any).value = client.NrTelefon;

    document.getElementsByClassName('update-modal')[0].classList.remove("hidden")
  }

  closeUpdateModal = ()=>{
    document.getElementsByClassName('update-modal')[0].classList.add("hidden")
  }
}
