import { Component, OnInit } from '@angular/core';
import { Task } from '../entities/task';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-ts-task-list-panel',
  templateUrl: './ts-task-list-panel.component.html',
  styleUrls: ['./ts-task-list-panel.component.less']
})
export class TsTaskListPanelComponent implements OnInit {

  tasks: Task []= [];

  constructor(private taskService:TaskService) { }

  ngOnInit(): void {
    this.tasks=this.taskService.getAllTasks();
  }

  deleteTask(id:number){
    this.tasks=this.taskService.deleteTask(id);
  }

}
