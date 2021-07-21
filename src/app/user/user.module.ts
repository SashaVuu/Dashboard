import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../services/user.service';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { AddPanelComponent } from './user-panel/user-description-panel/add-panel/add-panel.component';
import { EditPanelComponent } from './user-panel/user-description-panel/edit-panel/edit-panel.component';
import { UserDescriptionPanelComponent } from './user-panel/user-description-panel/user-description-panel.component';
import { UserListBlockComponent } from './user-panel/user-list-panel/user-list-block/user-list-block.component';
import { UserListPanelComponent } from './user-panel/user-list-panel/user-list-panel.component';


@NgModule({
  declarations: [
    UserDescriptionPanelComponent,
    AddPanelComponent,
    EditPanelComponent,
    UserListPanelComponent,
    UserListBlockComponent,
    UserPanelComponent
  ],
  providers: [UserService],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
