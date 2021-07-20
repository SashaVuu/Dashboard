import { Component, EventEmitter, Input, OnChanges, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Status, Task } from 'src/app/entities/task';
import { TaskService } from 'src/app/services/task.service';
import { EditorMode } from '../../entities/editor';


@Component({
  selector: 'app-ts-task-description-panel',
  templateUrl: './ts-task-description-panel.component.html',
  styleUrls: ['./ts-task-description-panel.component.less']
})
export class TsTaskDescriptionPanelComponent {

  @Input() task?: Task;
  @Input() mode: EditorMode = EditorMode.None;

  @Output() addTask: EventEmitter<Task> = new EventEmitter<Task>();
  @Output() editTask: EventEmitter<Task> = new EventEmitter<Task>();

  modes = EditorMode;

  constructor() {
    
  }


}
