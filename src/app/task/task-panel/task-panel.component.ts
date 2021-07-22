import { Component, OnDestroy, OnInit } from '@angular/core';
import { EditorMode } from 'src/app/entities/editor';
import { EditorService } from 'src/app/services/editor.service';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/entities/task';
@Component({
  selector: 'app-task-panel',
  templateUrl: './task-panel.component.html',
  styleUrls: ['./task-panel.component.less']
})
export class TaskPanelComponent implements OnInit,OnDestroy {

  task: Task | undefined;
  mode: EditorMode = EditorMode.None;

  title = 'Dashboard';

  constructor(public taskService: TaskService,private editorService:EditorService) {
  }

  ngOnInit(): void {
    console.log("On init");
    this.editorService.editorModeSubject$.subscribe((editorMode) => {

      this.mode = editorMode.mode;

      if (editorMode.mode == EditorMode.Edit && editorMode.idEntity !== undefined) {
        this.task = this.taskService.getEntity(editorMode.idEntity);
      }

      if (editorMode.mode == EditorMode.Add) {
        this.task = undefined;
      }

    });
  }

  ngOnDestroy():void{
    console.log("On destroy");
    //this.editorService.editorModeSubject$.unsubscribe();
  } 
}
