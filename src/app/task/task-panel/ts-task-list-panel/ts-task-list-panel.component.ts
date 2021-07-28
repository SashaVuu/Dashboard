import { Component, Input, OnInit } from '@angular/core';
import { FilterContext, TaskFilterStrategy } from 'src/app/core/pipes/strategy';
import { EditorMode } from 'src/app/entities/editor';
import { Task } from 'src/app/entities/task';
import { EditorService } from 'src/app/services/editor.service';
import { StoreService } from 'src/app/services/store.service';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-ts-task-list-panel',
  templateUrl: './ts-task-list-panel.component.html',
  styleUrls: ['./ts-task-list-panel.component.less'],
})
export class TsTaskListPanelComponent {
  @Input() tasks: Task[] = [];

  constructor(
    private taskService: TaskService,
    private editorService: EditorService,
    private storeService: StoreService
  ) {}

  showAddEditor(): void {
    this.editorService.changeEditorMode(EditorMode.Add);
  }

  deleteTask(id: number): void {
    this.storeService.deleteTaskAndUnassignTask(id);
  }

  editTask(id: number): void {
    console.log(id);
    this.editorService.changeEditorMode(EditorMode.Edit, id);
  }

  filter(event: any) {
    this.taskService.search$.next(event);
  }
}
