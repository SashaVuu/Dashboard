import { Component } from '@angular/core';
import { User } from 'src/app/entities/user';
import { UserService } from 'src/app/services/user.service';
import { BasePanelComponent } from '../base-panel/base-panel.component';

@Component({
  selector: 'app-add-panel',
  templateUrl: './add-panel.component.html',
  styleUrls: ['./add-panel.component.less']
})
export class AddPanelComponent extends BasePanelComponent {

  constructor(private userService:UserService) { 
    super()
  }

  submitForm(){
    this.userService.addEntity(<User>this.userForm.value);
    this.userForm.reset();
  }

}
