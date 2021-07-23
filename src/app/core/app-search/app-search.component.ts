import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './app-search.component.html',
  styleUrls: ['./app-search.component.less']
})
export class AppSearchComponent implements OnInit {

  @Output() change = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  changeInput(event:any){
    console.log(event.value);
    this.change.emit(event.value);
  }

}
