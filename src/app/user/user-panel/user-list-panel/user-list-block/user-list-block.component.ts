import { Component, Input } from '@angular/core';
import { EditorMode } from 'src/app/entities/editor';
import { User } from 'src/app/entities/user';
import { EditorService } from 'src/app/services/editor.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list-block',
  templateUrl: './user-list-block.component.html',
  styleUrls: ['./user-list-block.component.less']
})
export class UserListBlockComponent {

  @Input() user?: User

  constructor(private editorService:EditorService, private userService:UserService) { }

  deleteUser(id:number): void {
    this.userService.deleteEntity(id);
  }

  editUser(id:number): void {
    this.editorService.changeEditorMode(EditorMode.Edit,id);
  }

}
