import { Component, OnInit } from '@angular/core';
import { Mancare } from '../models/mancare.model';
import { ApiService } from '../shared/api.service';
declare var $: any;

@Component({
  selector: 'app-mancaruri',
  templateUrl: './mancaruri.component.html',
  styleUrls: ['./mancaruri.component.css']
})
export class MancaruriComponent implements OnInit {
  mancaruri:Array<Mancare> = [];
  constructor(private api:ApiService) { }

  ngOnInit() {
    (window as any).  openAddModal = ()=>{
      document.getElementsByClassName('add-modal')[0].classList.remove("hidden")
    }

    this.api.getMancaruri().subscribe((res) =>{
      var result:Array<Mancare> = (res as Array<any>).map(x=>Mancare.from(x));
      this.mancaruri = result
      setTimeout(()=>{
        $('table').DataTable()
        $('#DataTables_Table_0_wrapper').addClass('wrapper')
      },1);
    })

  }
  ngAfterViewInit(): void {

  }
  ngAfterViewChecked() {

  }

  delete(id:number){
    this.api.deleteMancare(id).subscribe(res=>{
      console.warn(res)
      window.location.reload()
    })
  }

  addMancare(){
    var nume = ((document.getElementById('nume-add') as any).value || " unknown");
    var cantitate = parseInt((document.getElementById('cantitate-add') as any).value) || 1;
    var mancare = new Mancare(-1,nume,cantitate)
    this.api.addMancare(mancare).subscribe(res=>{
        console.warn("added",res);
        this.closeAddModal()
        window.location.reload()
    });
  }

  updateMancare(){
    var id = ((document.getElementById('id-update') as any).value as number)
    var nume = (document.getElementById('nume-update') as any).value
    var cantitate = parseFloat((document.getElementById('cantitate-update') as any).value) || 1
    var mancare = new Mancare(id,nume,cantitate)
    console.warn("updating",mancare)
    this.api.editMancare(mancare).subscribe(res=>{
      console.log(res)
      window.location.reload()
    })
  }



  closeAddModal(){
    document.getElementsByClassName('add-modal')[0].classList.add("hidden")
  }

  openUpdateModal = (mancare:Mancare)=>{
    (document.getElementById('nume-update') as any).value = mancare.Nume;
    (document.getElementById('cantitate-update') as any).value = mancare.Cantitate;
    (document.getElementById('id-update') as any).value = mancare.Id;

    document.getElementsByClassName('update-modal')[0].classList.remove("hidden")
  }

  closeUpdateModal = ()=>{
    document.getElementsByClassName('update-modal')[0].classList.add("hidden")
  }
}
