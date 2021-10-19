import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-produse',
  templateUrl: './produse.component.html',
  styleUrls: ['./produse.component.css']
})
export class ProduseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    (window as any).closeUpdateModal = ()=>{
      document.getElementsByClassName('update-modal')[0].classList.add("hidden")
    }
    (window as any).openUpdateModal = ()=>{
      document.getElementsByClassName('update-modal')[0].classList.remove("hidden")
    }
    (window as any).openAddModal = ()=>{
      document.getElementsByClassName('add-modal')[0].classList.remove("hidden")
    }
    (window as any).closeAddModal = ()=>{
      document.getElementsByClassName('add-modal')[0].classList.add("hidden")
    }
  }
  ngAfterViewInit(): void {

  }
  ngAfterViewChecked() {
    $('table').DataTable()
    $('#DataTables_Table_0_wrapper').addClass('wrapper')
  }


}
