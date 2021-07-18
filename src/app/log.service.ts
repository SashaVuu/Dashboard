import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() { }

  log(message:string):void{
    console.log("LOG:" + message);
  }

  //Error
  err(message:string):void{
    console.error("ERR:" + message);
  }

  //Warning
  wrn(message:string):void{
    console.warn("WRN:" + message);
  }


}
