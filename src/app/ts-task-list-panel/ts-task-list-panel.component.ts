import { Component, Input, OnInit } from '@angular/core';
import { EditorMode } from '../entities/editor';
import { Task } from '../entities/task';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-ts-task-list-panel',
  templateUrl: './ts-task-list-panel.component.html',
  styleUrls: ['./ts-task-list-panel.component.less']
})
export class TsTaskListPanelComponent {

  @Input() tasks: Task []= [];

  constructor(private taskService:TaskService) { }

  deleteTask(id:number){
    this.tasks=this.taskService.deleteTask(id);
  }

  showAddEditor(){
    this.taskService.editorModeSubject.next({mode:EditorMode.Add});
  }


}
