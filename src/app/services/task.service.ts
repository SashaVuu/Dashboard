import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Subject } from 'rxjs';
import { EditorMode } from '../entities/editor';
import { Status, Task } from '../entities/task';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  editorModeSubject = new Subject<{mode:EditorMode, idTask?:number}>();


  private tasks:Task[]=[
      { 
        id:1,
        name:"Kekclient2000",
        description:"Skdjso jfijer ofjeriofj oerirejfor efjoerf ioreferf",
        assignee:"Ivan",
        status:Status.InQA,
        timestamp: this.formatDate(new Date())
      },
      {
        id:2,
        name:"Kekclient2001",
        description:"Skdjso jfijer ofjeriofj oerirejfor efjoerf ioreferf",
        assignee:"Ivan",
        status:Status.Closed,
        timestamp: this.formatDate(new Date())
      },
      {
        id:3,
        name:"Kekclient2002",
        description:"Skdjso jfijer ofjeriofj oerirejfor efjoerf ioreferf",
        assignee:"Ivan",
        status:Status.Open,
        timestamp: this.formatDate(new Date())
      },
      {
        id:4,
        name:"Kekclient2003",
        description:"Skdjso jfijer ofjeriofj oerirejfor efjoerf ioreferf",
        assignee:"Ivan",
        status:Status.Resolved,
        timestamp: this.formatDate(new Date())
      }
  ];

  constructor(private logService:LogService) { 
      if(!localStorage.getItem('tasks')){
        this.putTasksInStorage(this.tasks);
      }
  }

  getTask(id:number): Task | undefined {
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
    console.log("Add");
    console.log(task);

    const allTasks:Task[] = this.getAllTasks();
    const lastElement : Task|undefined = allTasks[allTasks.length - 1];
    if(lastElement && lastElement.id){
      console.log("last")
      console.log(lastElement);
      task.id = lastElement.id++;
      console.log("task id");
      console.log(task.id);
    }
    else{
      task.id=1;
    }

    allTasks.push(task);
    this.putTasksInStorage(allTasks);

    //!!!!
    return true;
  }

  deleteTask(id:number):Task[] {
    const allTasks:Task[] = this.getAllTasks();
    const indexOfTask:number = allTasks.findIndex(task => task.id === id);
    const deletedTask:Task[] = allTasks.splice(indexOfTask,1);

    if(deletedTask.length !== 1){
      this.logService.wrn("Something went wrong while deleting task.");
    }

    this.putTasksInStorage(allTasks);
    return allTasks;
  }

  updateTask(task:Task):boolean{
    return true;
  }

  private putTasksInStorage(tasks:Task[]):void{
    const tasksStringFormat:string=JSON.stringify(tasks);
    localStorage.setItem('tasks',tasksStringFormat);
  }

  //Date to yyyy-MM-dd string format.
  formatDate(date:Date):string{
    return moment(date).format('YYYY-MM-DD');
  }

}
