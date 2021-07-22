import { Component, Input, OnInit } from '@angular/core';
import { EditorMode } from 'src/app/entities/editor';
import { User } from 'src/app/entities/user';

@Component({
  selector: 'app-user-description-panel',
  templateUrl: './user-description-panel.component.html',
  styleUrls: ['./user-description-panel.component.less']
})
export class UserDescriptionPanelComponent {

  @Input() user?: User;
  @Input() mode: EditorMode = EditorMode.None;

  modes = EditorMode;

  constructor() {
    
  }

}
