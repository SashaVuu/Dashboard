import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { BasePanelComponent } from '../base-panel/base-panel.component';

@Component({
  selector: 'app-edit-panel',
  templateUrl: './edit-panel.component.html',
  styleUrls: ['./edit-panel.component.less']
})
export class EditPanelComponent extends BasePanelComponent {

  constructor() { 
    super()
  }

  submitForm(){

  }

  deleteTask(id:number | undefined){

  }

  editTask(id:number | undefined){

  }

}
