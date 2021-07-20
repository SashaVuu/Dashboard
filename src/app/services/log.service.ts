import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  // private tasks: Task[] = [
  //   {
  //     id: 1,
  //     name: "Kekclient2000",
  //     description: "Skdjso jfijer ofjeriofj oerirejfor efjoerf ioreferf",
  //     assignee: "Ivan",
  //     status: Status.InQA,
  //     timestamp: this.formatDate(new Date())
  //   },
  //   {
  //     id: 2,
  //     name: "Kekclient2001",
  //     description: "Skdjso jfijer ofjeriofj oerirejfor efjoerf ioreferf",
  //     assignee: "Ivan",
  //     status: Status.Closed,
  //     timestamp: this.formatDate(new Date())
  //   },
  //   {
  //     id: 3,
  //     name: "Kekclient2002",
  //     description: "Skdjso jfijer ofjeriofj oerirejfor efjoerf ioreferf",
  //     assignee: "Ivan",
  //     status: Status.Open,
  //     timestamp: this.formatDate(new Date())
  //   },
  //   {
  //     id: 4,
  //     name: "Kekclient2003",
  //     description: "Skdjso jfijer ofjeriofj oerirejfor efjoerf ioreferf",
  //     assignee: "Ivan",
  //     status: Status.Resolved,
  //     timestamp: this.formatDate(new Date())
  //   }
  // ];

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
