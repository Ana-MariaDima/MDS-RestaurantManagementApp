import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Result } from '../result';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private route : ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
  }
  showLoader():void{
    document.getElementById('loader')?.classList.remove("hidden");
  }

  hideLoader():void{
    document.getElementById('loader')?.classList.add("hidden");
  }

  trigger_search():void{
    var searched_text = (document.getElementsByClassName('search_input')[0].getAttribute("value") as string);
    this.searchByText(searched_text).then(results=>{
        this.hideLoader();
        this.router.navigate(['/results',{results:results}]);
    })
    this.showLoader();
  }

  searchByText(text:string):Promise<Array<Result>>{
      return new Promise<Array<Result>>((resolve,reject)=>{
        //call the server
        //resolve(results)


      })

  }

  mouseDown(){
    document.getElementsByClassName('search_trigger')[0].classList.add("clicking");
  }

  mouseUp(){
    document.getElementsByClassName('search_trigger')[0].classList.remove("clicking");

  }

}
