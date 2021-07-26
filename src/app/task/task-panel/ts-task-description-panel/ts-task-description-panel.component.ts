import { Component,Input } from '@angular/core';
import { EditorMode } from 'src/app/entities/editor';
import { Task } from 'src/app/entities/task';

@Component({
  selector: 'app-ts-task-description-panel',
  templateUrl: './ts-task-description-panel.component.html',
  styleUrls: ['./ts-task-description-panel.component.less']
})
export class TsTaskDescriptionPanelComponent {

  @Input() task?: Task;
  @Input() mode: EditorMode = EditorMode.None;

  modes = EditorMode;

  constructor() {
  }

}
