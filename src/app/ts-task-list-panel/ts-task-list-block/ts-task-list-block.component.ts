import { Component, Input, OnInit } from '@angular/core';
import { Status, Task } from 'src/app/entities/task';

@Component({
  selector: 'app-ts-task-list-block',
  templateUrl: './ts-task-list-block.component.html',
  styleUrls: ['./ts-task-list-block.component.less']
})
export class TsTaskListBlockComponent implements OnInit {

  @Input() task:Task = {
    id:1,
    name:"KEKCLIENT-2000",
    description:"Something went wrong.",
    assignee:"Sasha Leguska",
    status:Status.Open,
    timestamp: new Date()
  }

  constructor() { }

  ngOnInit(): void {
  }

}
