import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Masa } from '../models/masa.model';
import { ApiService } from '../shared/api.service';
declare var $: any;

@Component({
  selector: 'app-mese',
  templateUrl: './mese.component.html',
  styleUrls: ['./mese.component.css']
})
export class MeseComponent implements OnInit {
  mese:Array<Masa> = [];
  table:any;
  constructor(private api:ApiService, private _route:ActivatedRoute) { }

  ngOnInit() {


    this.api.getMese().subscribe((res) =>{
      var result:Array<Masa> = (res as Array<any>).map(x=>Masa.from(x));
      this.mese = result
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
    this.api.deleteMasa(id).subscribe(res=>{
      console.warn(res)
      window.location.reload()
    })
  }

  addMasa(){
    var locuri = parseInt((document.getElementById('locuri-add') as any).value || "1");
    var locatie = (document.getElementById('locatie-add') as any).value || " ";
    var masa = new Masa(-1,locatie,locuri)
    this.api.addMasa(masa).subscribe(res=>{
        console.warn("added",res);
        this.closeAddModal()
        window.location.reload()
    });
  }

  updateMasa(){
    var id = ((document.getElementById('id-update') as any).value as number)
    var loc = (document.getElementById('locatie-update') as any).value
    var locuri = parseFloat((document.getElementById('locuri-update') as any).value) || 1
    var masa = new Masa(id,loc,locuri)
    console.warn("updating",masa)
    this.api.editMasa(masa).subscribe(res=>{
      console.log(res)
      window.location.reload()
    })
  }

  openAddModal = ()=>{
    document.getElementsByClassName('add-modal')[0].classList.remove("hidden")
  }

  closeAddModal(){
    document.getElementsByClassName('add-modal')[0].classList.add("hidden")
  }

  openUpdateModal = (masa:Masa)=>{
    (document.getElementById('locatie-update') as any).value = masa.Locatie;
    (document.getElementById('locuri-update') as any).value = masa.NrLocuri;
    (document.getElementById('id-update') as any).value = masa.Id;

    document.getElementsByClassName('update-modal')[0].classList.remove("hidden")
  }

  closeUpdateModal = ()=>{
    document.getElementsByClassName('update-modal')[0].classList.add("hidden")
  }

}
