import { Component, OnDestroy, OnInit, ɵɵNgOnChangesFeature } from '@angular/core';
import { EditorMode } from './entities/editor';
import { Task } from './entities/task';
import { EditorService } from './services/editor.service';
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit,OnDestroy {

  tasks: Task[] = [];
  task: Task | undefined;
  mode: EditorMode = EditorMode.None;

  title = 'Dashboard';

  constructor(public taskService: TaskService,private editorService:EditorService) {
  }

  ngOnInit(): void {
    this.tasks = this.taskService.getAllEntities();
    this.editorService.editorModeSubject$.subscribe((editorMode) => {

      this.mode = editorMode.mode;

      if (editorMode.mode == EditorMode.Edit && editorMode.idTask !== undefined) {
        this.task = this.taskService.getEntity(editorMode.idTask);
      }

      if (editorMode.mode == EditorMode.Add) {
        this.task = undefined;
      }

    });
  }

  ngOnDestroy():void{
    this.editorService.editorModeSubject$.unsubscribe();
  } 

}
