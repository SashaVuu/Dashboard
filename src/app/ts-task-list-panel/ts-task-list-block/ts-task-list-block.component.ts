import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/entities/task';

@Component({
  selector: 'app-ts-task-list-block',
  templateUrl: './ts-task-list-block.component.html',
  styleUrls: ['./ts-task-list-block.component.less']
})
export class TsTaskListBlockComponent implements OnInit {

  task:Task = {
    name:"KEKCLIENT-2000",
    description:"Something went wrong.",
    assignee:"Sasha Leguska",
    status:"done",
    timestamp: new Date()
  }

  constructor() { }

  ngOnInit(): void {
  }

}
