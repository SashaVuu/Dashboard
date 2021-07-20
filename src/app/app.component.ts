import { Component, OnInit, ɵɵNgOnChangesFeature } from '@angular/core';
import { EditorMode } from './entities/editor';
import { Task } from './entities/task';
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {

  tasks: Task[] = [];
  task: Task | undefined;
  mode: EditorMode = EditorMode.None;

  title = 'Dashboard';

  constructor(private taskService: TaskService) {
  }

  ngOnInit(): void {
    this.tasks = this.taskService.getAllTasks();
    this.taskService.editorModeSubject.subscribe((editorMode) => {

      this.mode = editorMode.mode;

      if (editorMode.mode == EditorMode.Edit && editorMode.idTask !== undefined) {
        this.task = this.taskService.getTask(editorMode.idTask);
      }

      if (editorMode.mode == EditorMode.Add) {
        this.task = undefined;
      }

    });
  }

  addTask(task: Task): void {
    this.tasks = this.taskService.addTask(task);
  }

  editTask(task: Task): void {
    this.tasks = this.taskService.updateTask(task);
  }


}
