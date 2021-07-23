import { serializeNodes } from '@angular/compiler/src/i18n/digest';
import { Component, Input, OnInit } from '@angular/core';
import { EditorMode } from 'src/app/entities/editor';
import { Task } from 'src/app/entities/task';
import { User } from 'src/app/entities/user';
import { EditorService } from 'src/app/services/editor.service';
import { StoreService } from 'src/app/services/store.service';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-ts-task-list-panel',
  templateUrl: './ts-task-list-panel.component.html',
  styleUrls: ['./ts-task-list-panel.component.less']
})
export class TsTaskListPanelComponent {

  @Input() tasks: Task[] = [];

  constructor(private taskService: TaskService, private editorService: EditorService, private storeService:StoreService) { }

  showAddEditor(): void {
    this.editorService.changeEditorMode(EditorMode.Add);
  }

  deleteTask(id:number): void {
    this.storeService.deleteTask(id);
  }

  editTask(id:number): void {
    this.editorService.changeEditorMode(EditorMode.Edit, id);
  }

  refreshList(){
    this.tasks = this.taskService.getAllEntities();
  }

  filterItems(items:Task[],searchString:string): Task[] {
    return items.filter((item) => item.name.toUpperCase().includes(searchString.toString().toUpperCase()));
  }

}
