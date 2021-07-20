import { Component, Input, OnInit } from '@angular/core';
import { EditorMode } from 'src/app/entities/editor';
import { Task } from 'src/app/entities/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-ts-task-list-panel',
  templateUrl: './ts-task-list-panel.component.html',
  styleUrls: ['./ts-task-list-panel.component.less']
})
export class TsTaskListPanelComponent {

  @Input() tasks:Task[] = [];

  constructor(private taskService: TaskService) { }

  deleteTask(id: number):void {
    this.taskService.deleteTask(id);
  }

  showAddEditor():void {
    this.taskService.changeEditorMode(EditorMode.Add);
  }
}
