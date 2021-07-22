import { Component, OnInit } from '@angular/core';
import { EditorMode } from 'src/app/entities/editor';
import { User } from 'src/app/entities/user';
import { EditorService } from 'src/app/services/editor.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.less']
})
export class UserPanelComponent implements OnInit {

  user: User | undefined;
  mode: EditorMode = EditorMode.None;

  constructor(public userService:UserService,private editorService:EditorService) { }

  ngOnInit(): void {
    console.log("On init");
    this.editorService.editorModeSubject$.subscribe((editorMode) => {

      this.mode = editorMode.mode;

      if (editorMode.mode == EditorMode.Edit && editorMode.idEntity !== undefined) {
        this.user = this.userService.getEntity(editorMode.idEntity);
      }

      if (editorMode.mode == EditorMode.Add) {
        this.user = undefined;
      }
    });
  }

  

}
