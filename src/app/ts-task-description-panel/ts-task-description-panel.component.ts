import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
  task?:Task;
  statuses = Status;
  taskForm:FormGroup;
    
  constructor(private taskService:TaskService) { 
    this.taskForm = new FormGroup({
      name:new FormControl(this.task ? this.task.name : "" ),
      description:new FormControl(this.task ? this.task.description : ""),
      assignee:new FormControl(this.task ?  this.task.assignee : ""),
      status:new FormControl(this.task ? this.task.status : Status.Open),
      timestamp:new FormControl(this.task ? this.task.timestamp : this.taskService.formatDate(new Date()))
    });
  }

  ngOnInit(): void {
    this.taskService.editorModeSubject.subscribe((editorMode)=>{
      console.log("Mode changed");
      console.log(editorMode);
      this.mode=editorMode.mode;
      if(editorMode.idTask){
          this.task=this.taskService.getTask(editorMode.idTask);
      }
    });
  }

  submitForm(){
    console.log(this.taskForm.value);

    switch(this.mode) { 
      case EditorMode.Add: { 
         this.taskService.addTask(<Task>this.taskForm.value);
         break; 
      } 
      case EditorMode.Edit:{ 
        this.taskService.updateTask(<Task>this.taskForm.value);
         break; 
      } 
   } 
  }

}
