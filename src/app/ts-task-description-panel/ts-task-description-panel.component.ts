import { Component, Input, OnInit } from '@angular/core';
import { Status, Task } from 'src/app/entities/task';
import { TaskService } from 'src/app/services/task.service';
import { EditorMode } from '../entities/editor';
@Component({
  selector: 'app-ts-task-description-panel',
  templateUrl: './ts-task-description-panel.component.html',
  styleUrls: ['./ts-task-description-panel.component.less']
})
export class TsTaskDescriptionPanelComponent implements OnInit {

  mode:EditorMode = EditorMode.None;

  task:Task = {
    id:0,
    name:"",
    description:"",
    assignee:"",
    status:Status.Closed,
    timestamp: new Date()
  }

  constructor(private taskService:TaskService) { 
  }

  ngOnInit(): void {
    this.task = <Task>this.taskService.getTask(1);
    
    this.taskService.editorModeSubject.subscribe((editorMode)=>{
      console.log("Mode changed");
      console.log(editorMode);
      this.mode=editorMode;
    });

  }


}
