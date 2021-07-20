import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { EditorMode } from 'src/app/entities/editor';
import { Status, Task } from 'src/app/entities/task';
import { TaskService } from 'src/app/services/task.service';


@Component({
  selector: 'app-ts-task-list-block',
  templateUrl: './ts-task-list-block.component.html',
  styleUrls: ['./ts-task-list-block.component.less']
})
export class TsTaskListBlockComponent {

  @Output() deleteTaskById =  new EventEmitter<number>();
  @Input() task?:Task 

  constructor(private taskService:TaskService) { }

  deleteTask():void{
    this.deleteTaskById.emit(this.task?.id);
  }

  editTask():void{
    this.taskService.editorModeSubject.next({mode:EditorMode.Edit,idTask:this.task?.id});
  }

}
