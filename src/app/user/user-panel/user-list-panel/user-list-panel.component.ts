import { Component, Input, OnInit } from '@angular/core';
import { EditorMode } from 'src/app/entities/editor';
import { User } from 'src/app/entities/user';
import { EditorService } from 'src/app/services/editor.service';

@Component({
  selector: 'app-user-list-panel',
  templateUrl: './user-list-panel.component.html',
  styleUrls: ['./user-list-panel.component.less']
})
export class UserListPanelComponent {

  @Input() users:User[] = [];

  constructor( private editorService: EditorService) { }

  showAddEditor():void {
    this.editorService.changeEditorMode(EditorMode.Add);
  }
}
