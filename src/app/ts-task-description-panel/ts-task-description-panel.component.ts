import { Component, Input, OnInit } from '@angular/core';
import { Status, Task } from 'src/app/entities/task';
import { TaskService } from 'src/app/task.service';
@Component({
  selector: 'app-ts-task-description-panel',
  templateUrl: './ts-task-description-panel.component.html',
  styleUrls: ['./ts-task-description-panel.component.less']
})
export class TsTaskDescriptionPanelComponent implements OnInit {

  @Input() isEdit:boolean = false;
  @Input() isAdd:boolean = false;

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
    if(this.isEdit){
      this.task = <Task>this.taskService.getTask(1);
    }
  }


}
