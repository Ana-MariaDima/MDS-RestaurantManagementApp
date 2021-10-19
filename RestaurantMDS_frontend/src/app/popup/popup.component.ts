import { ChangeDetectorRef, Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Model } from '../model';

@Component({
  selector: 'custom_popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css'],
})
export class PopupComponent implements OnInit {
  signature:string;
  loaded_object:string;
  target_model!:Object;
  buttons_callbacks!:{[name:string]:Function}[];
  settings:{[setting:string]:boolean} | undefined;

  constructor(private changeDetector: ChangeDetectorRef) {
    this.signature = "";
    this.loaded_object = "";
    //this.buttons_callbacks = {} as {[name:string]:Function}[];
  }
  ngOnInit(){}

  init(model:Model, buttons_callbacks:{[name:string]:Function}[], settings?:{[setting:string]:boolean}): void {
    this.target_model = {};
    this.signature = JSON.stringify(Object.keys(this.target_model));
    this.loaded_object = ""
    var lO ={} as {[key: string]: any};
    Object.keys(this.target_model).forEach(key=>{
      lO[key] = "";
    });
    this.buttons_callbacks = buttons_callbacks;
    this.changeDetector.detectChanges();

  }

  load(obj:Model, buttons_callbacks?:{[name:string]:Function}[]){
    if(!this.checkSignature(obj))
        throw new Error("Couldn't load object, signature doesn't match!");

    var keys:string[] = Object.keys(this.target_model);
    var dynamic_obj  = (obj as {[k: string]: any});
    var lO = {} as {[key: string]: any};

    console.log("keys" ,keys)
    keys.forEach(key=>{
      lO[key] = dynamic_obj[key]
    });

    this.setLoadedObject(lO);
    if(buttons_callbacks){
      this.buttons_callbacks = buttons_callbacks;
    }


    this.changeDetector.detectChanges();
    console.log("detectet called")
  }

  getLoadedModel():Object{
      return this.loaded_object? JSON.parse(this.loaded_object) : {};
  }

  getButtons():string[]{
    return this.buttons_callbacks?Object.entries(this.buttons_callbacks).map(button_cb=>{return Object.keys(button_cb[1])[0]}):[]
  }

  getCallback(button:string):Function{
    var callback:any = (this.buttons_callbacks.find(bc=>Object.keys(bc)[0] == button) as any)[button];
    return callback?callback:()=>{console.log("no callback found for ",button)};
  }

  private setLoadedObject(obj:Object){
    this.loaded_object = JSON.stringify(obj);
  }

  private checkSignature(obj:Object):boolean{
    var csign:string = JSON.stringify(Object.keys(obj));
   // this.target_model = JSON.parse(JSON.stringify(obj));
    return csign == this.signature;
  }

  changeSignature(new_model:Object){
    this.signature = JSON.stringify(Object.keys(new_model));
    this.loaded_object = "";
    var dynamic_obj = (new_model as {[k: string]: any});
    var lO = {} as {[key: string]: any};
    Object.keys(new_model).forEach(key=>{
      lO[key] = dynamic_obj[key];
    });
    this.setLoadedObject(lO);
  }

}
