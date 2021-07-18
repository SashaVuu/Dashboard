import { Component, OnInit } from '@angular/core';
import { Status, Task } from 'src/app/entities/task';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-ts-task-editor',
  templateUrl: './ts-task-editor.component.html',
  styleUrls: ['./ts-task-editor.component.less']
})
export class TsTaskEditorComponent implements OnInit {

  task:Task = {
    id:1,
    name:"KEKCLIENT-2000",
    description:"Something went wrong.Aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.",
    assignee:"Sasha Leguska",
    status:Status.Closed,
    timestamp: new Date()
  }

  constructor(private taskService:TaskService) { 
  }

  ngOnInit(): void {
    this.task = <Task>this.taskService.getTask(1);
  }

}
