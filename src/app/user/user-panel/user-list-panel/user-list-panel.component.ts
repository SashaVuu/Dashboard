import { Component, Input, OnInit } from '@angular/core';
import { EditorMode } from 'src/app/entities/editor';
import { User } from 'src/app/entities/user';
import { EditorService } from 'src/app/services/editor.service';
import { StoreService } from 'src/app/services/store.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list-panel',
  templateUrl: './user-list-panel.component.html',
  styleUrls: ['./user-list-panel.component.less']
})
export class UserListPanelComponent {

  @Input() users: User[] = [];
  searchString: string = "";

  constructor(private editorService: EditorService, private userService: UserService, private storeService: StoreService) { }

  showAddEditor(): void {
    this.editorService.changeEditorMode(EditorMode.Add);
  }

  deleteUser(id: number): void {
    this.storeService.deleteUserAndUnassignTask(id);
  }

  editUser(id: number): void {
    this.editorService.changeEditorMode(EditorMode.Edit, id);
  }

  refreshList() {
    this.users = this.userService.getAllEntities();
  }

  changeSearchString(event: any) {
    this.searchString = event.value; 
  }
  
}
