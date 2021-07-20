import { Component,Input, OnChanges, SimpleChanges} from '@angular/core';
import { Task } from 'src/app/entities/task';
import { EditorMode } from '../../entities/editor';


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

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log(changes.mode.currentValue);
  //   if(changes.mode.currentValue == EditorMode.Add ){
  //       this.task=undefined;
  //   }
  // }




}
