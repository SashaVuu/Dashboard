import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/entities/task';

@Component({
  selector: 'app-ts-task-editor',
  templateUrl: './ts-task-editor.component.html',
  styleUrls: ['./ts-task-editor.component.less']
})
export class TsTaskEditorComponent implements OnInit {

  task:Task = {
    name:"KEKCLIENT-2000",
    description:"Something went wrong.Aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.",
    assignee:"Sasha Leguska",
    status:"3",
    timestamp: new Date()
  }

  constructor() { }

  ngOnInit(): void {
  }

}
