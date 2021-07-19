import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { Status, Task } from 'src/app/entities/task';


@Component({
  selector: 'app-ts-task-list-block',
  templateUrl: './ts-task-list-block.component.html',
  styleUrls: ['./ts-task-list-block.component.less']
})
export class TsTaskListBlockComponent implements OnInit {

  @Output() deleteTaskById =  new EventEmitter<number>();
  @Input() task?:Task 

  constructor() { }

  ngOnInit(): void {
  }

  deleteTask():void{
    this.deleteTaskById.emit(this.task?.id);
  }

}
