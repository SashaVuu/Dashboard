import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/entities/task';

@Component({
  selector: 'app-ts-list-block',
  templateUrl: './ts-list-block.component.html',
  styleUrls: ['./ts-list-block.component.less']
})
export class TsListBlockComponent {

  @Input() task?:Task; 
  @Output() deleteTask = new EventEmitter<number>();
  @Output() editTask = new EventEmitter<number>();

  constructor() { }
}
