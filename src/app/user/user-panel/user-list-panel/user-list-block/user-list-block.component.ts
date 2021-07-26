import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/entities/user';

@Component({
  selector: 'app-user-list-block',
  templateUrl: './user-list-block.component.html',
  styleUrls: ['./user-list-block.component.less']
})
export class UserListBlockComponent implements OnInit {

  @Input() user?:User; 
  @Output() deleteUser = new EventEmitter<number>();
  @Output() editUser = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

}
