import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ts-task-list-panel',
  templateUrl: './ts-task-list-panel.component.html',
  styleUrls: ['./ts-task-list-panel.component.less']
})
export class TsTaskListPanelComponent implements OnInit {

  tasks:number[]= [1,2,3,4,5,6,7,8];

  constructor() { }

  ngOnInit(): void {
  }

}
