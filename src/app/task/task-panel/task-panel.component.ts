import { Component, OnDestroy, OnInit } from '@angular/core';
import { EditorMode } from 'src/app/entities/editor';
import { EditorService } from 'src/app/services/editor.service';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/entities/task';
import { Subscription } from 'rxjs';
import { FilterContext, TaskFilterStrategy } from 'src/app/core/pipes/strategy';

@Component({
  selector: 'app-task-panel',
  templateUrl: './task-panel.component.html',
  styleUrls: ['./task-panel.component.less'],
})
export class TaskPanelComponent implements OnInit, OnDestroy {
  public tasks$ = this.taskService.tasks$;
  public search$ = this.taskService.search$;

  task: Task | undefined;
  mode: EditorMode = EditorMode.None;

  subscriptions: Subscription[] = [];

  title = 'Dashboard';

  constructor(
    private taskService: TaskService,
    private editorService: EditorService
  ) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.search$.subscribe((event) => {
        const searchString = event.value;
        const filterContext = new FilterContext(new TaskFilterStrategy());
        this.taskService.filterEntity(searchString, filterContext);
      })
    );

    this.subscriptions.push(
      this.editorService.editorModeSubject$.subscribe((editorMode) => {
        this.mode = editorMode.mode;

        if (
          editorMode.mode == EditorMode.Edit &&
          editorMode.idEntity !== undefined
        ) {
          this.task = this.taskService.getEntity(editorMode.idEntity);
        }

        if (editorMode.mode == EditorMode.Add) {
          this.task = undefined;
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
