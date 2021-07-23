import { Component, Input } from '@angular/core';
import { EditorMode } from 'src/app/entities/editor';
import { Task } from 'src/app/entities/task';
import { EditorService } from 'src/app/services/editor.service';
import { StoreService } from 'src/app/services/store.service';
import { TaskService } from 'src/app/services/task.service';


@Component({
  selector: 'app-ts-task-list-block',
  templateUrl: './ts-task-list-block.component.html',
  styleUrls: ['./ts-task-list-block.component.less']
})
export class TsTaskListBlockComponent {

  @Input() task?: Task;

  constructor(private editorService: EditorService, private taskService: TaskService,private storeService:StoreService) { }

  deleteTask(): void {
    this.storeService.deleteTask(this.task?.id as number);
    //this.taskService.deleteEntity(this.task?.id as number)
  }

  editTask(): void {
    this.editorService.changeEditorMode(EditorMode.Edit, this.task?.id);
  }

}
