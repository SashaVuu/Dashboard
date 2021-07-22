import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { UserService } from 'src/app/services/user.service';
import { TsBasePanelComponent } from '../ts-base-panel/ts-base-panel.component';

@Component({
  selector: 'app-ts-add-panel',
  templateUrl: './ts-add-panel.component.html',
  styleUrls: ['./ts-add-panel.component.less']
})
export class TsAddPanelComponent extends TsBasePanelComponent {

  constructor(userService: UserService, private taskService: TaskService) {
    super(userService);
  }

  submitForm() {
    this.taskService.addEntity(this.taskForm.value);
    this.taskForm.reset();
  }

}
