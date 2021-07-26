import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.less']
})
export class AppListComponent {

  @Input() list: any[] = [];  
  @Input() itemTmpl: any;  

  @Output() refresh = new EventEmitter<any>();

  constructor() { }

}
