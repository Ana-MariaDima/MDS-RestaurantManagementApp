import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Chelner } from '../models/chelner.model';
import { ApiService } from '../shared/api.service';
declare var $: any;

@Component({
  selector: 'app-chelneri',
  templateUrl: './chelneri.component.html',
  styleUrls: ['./chelneri.component.css']
})
export class ChelneriComponent implements OnInit {
  chelneri:Array<Chelner> = [];
  table:any;
  constructor(private api:ApiService, private router:Router, private _route:ActivatedRoute) { }

  ngOnInit() {


    this.api.getChelners().subscribe((res) =>{
      var result:Array<Chelner> = (res as Array<any>).map(x=>Chelner.from(x));
      this.chelneri = result
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
    this.api.deleteChelner(id).subscribe(res=>{
      console.warn(res)
      window.location.reload()
    })
  }

  addChelner(){
    var salariu = parseInt((document.getElementById('salariu-add') as any).value || "1");
    var nume = (document.getElementById('nume-add') as any).value || " ";
    var prenume = (document.getElementById('prenume-add') as any).value || " ";

    var chelner = new Chelner(-1,nume,prenume,salariu,[])
    this.api.addChelner(chelner).subscribe(res=>{
        console.warn("added",res);
        this.closeAddModal()
        window.location.reload()
    });
  }

  updateChelner(){
    var id = ((document.getElementById('id-update') as any).value as number)
    var nume = (document.getElementById('nume-update') as any).value
    var prenume = (document.getElementById('prenume-update') as any).value
    var salariu = parseFloat((document.getElementById('salariu-update') as any).value) || 1
    var comenzi = (this.chelneri.find(c=>c.Id == id))?.Comanda || []
    var chelner = new Chelner(id,nume,prenume,salariu,comenzi)
    console.warn("updating",chelner)
    this.api.editChelner(chelner).subscribe(res=>{
      console.log(res)
      window.location.reload()
    })
  }

  redirectToComenzi(chelner:Chelner){
    console.log("redirecting")
    this.router.navigate(['/comenzi',{4:(chelner.Nume+" "+chelner.Prenume)}])
  }

  openAddModal = ()=>{
    document.getElementsByClassName('add-modal')[0].classList.remove("hidden")
  }

  closeAddModal(){
    document.getElementsByClassName('add-modal')[0].classList.add("hidden")
  }

  openUpdateModal = (chelner:Chelner)=>{
    (document.getElementById('nume-update') as any).value = chelner.Nume;
    (document.getElementById('prenume-update') as any).value = chelner.Prenume;
    (document.getElementById('salariu-update') as any).value = chelner.Salariu;

    (document.getElementById('id-update') as any).value = chelner.Id;

    document.getElementsByClassName('update-modal')[0].classList.remove("hidden")
  }

  closeUpdateModal = ()=>{
    document.getElementsByClassName('update-modal')[0].classList.add("hidden")
  }

}
