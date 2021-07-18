import { Injectable } from '@angular/core';
import { Status, Task } from './entities/task';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks:Task[]=[
      { 
        id:1,
        name:"Kekclient2000",
        description:"Skdjso jfijer ofjeriofj oerirejfor efjoerf ioreferf",
        assignee:"Ivan",
        status:Status.InQA,
        timestamp: new Date()
      },
      {
        id:2,
        name:"Kekclient2001",
        description:"Skdjso jfijer ofjeriofj oerirejfor efjoerf ioreferf",
        assignee:"Ivan",
        status:Status.Closed,
        timestamp: new Date()
      },
      {
        id:3,
        name:"Kekclient2002",
        description:"Skdjso jfijer ofjeriofj oerirejfor efjoerf ioreferf",
        assignee:"Ivan",
        status:Status.Open,
        timestamp: new Date()
      },
      {
        id:4,
        name:"Kekclient2003",
        description:"Skdjso jfijer ofjeriofj oerirejfor efjoerf ioreferf",
        assignee:"Ivan",
        status:Status.Resolved,
        timestamp: new Date()
      }
  ];

  constructor(private logService:LogService) { 
      if(!localStorage.getItem('tasks')){
        this.putTasksInStorage(this.tasks);
      }
  }

  getTask(id:number): Task| undefined {
    let allTasks:Task[] = this.getAllTasks();
    let task = allTasks.find(task => task.id === id);
    if (!task) {
      this.logService.wrn(`Task with id - ${id} not found.`);
    }
    return task; 
  }

  getAllTasks():Task[] {
    let tasks:Task[] = [];
    let tasksStringFormat: string | null = localStorage.getItem('tasks');
    if(tasksStringFormat){
      try{
        tasks = JSON.parse(tasksStringFormat);
        this.logService.log("Getting all tasks.");
      }
      catch(e){
        this.logService.err(e);
      }
    }
    else{
      this.logService.wrn("No data in local storage.");
    }
    return tasks;
  }

  addTask(task:Task):boolean{

    const allTasks:Task[] = this.getAllTasks();
    task.id = allTasks[allTasks.length - 1].id++;
    allTasks.push(task);
    this.putTasksInStorage(allTasks);

    //!!!!
    return true;
  }

  deleteTask(id:number):boolean{
    const allTasks:Task[] = this.getAllTasks();
    const indexOfTask:number = allTasks.findIndex(task => task.id === id);
    const resultTasksArray:Task[] = allTasks.splice(indexOfTask,1);
    let isTaskDeleted = true;

    if(allTasks.length === resultTasksArray.length){
      this.logService.wrn("Something went wrong while deleting task.");
      isTaskDeleted = false;
    }

    this.putTasksInStorage(resultTasksArray);

    return isTaskDeleted;
  }

  updateTask(id:number,task:Task):boolean{
    return true;
  }

  private putTasksInStorage(tasks:Task[]):void{
    this.logService.log("Initializing local storage.");
    const tasksStringFormat:string=JSON.stringify(tasks);
    localStorage.setItem('tasks',tasksStringFormat);
  }

}
