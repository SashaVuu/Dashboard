import { Component} from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import { UserService } from 'src/app/services/user.service';
import { TsBasePanelComponent } from '../ts-base-panel/ts-base-panel.component';

@Component({
  selector: 'app-ts-add-panel',
  templateUrl: './ts-add-panel.component.html',
  styleUrls: ['./ts-add-panel.component.less']
})
export class TsAddPanelComponent extends TsBasePanelComponent {

  constructor(userService: UserService, private storeService: StoreService) {
    super(userService);
  }

  submitForm() {
    console.log(this.taskForm.value);
    const assigneeControl = this.taskForm.get("assignee");
    assigneeControl?.setValue(parseInt(assigneeControl.value));
    if (assigneeControl?.value == -1 ){assigneeControl?.setValue(undefined) }

    this.storeService.addAndAssignTask(this.taskForm.value);
    this.taskForm.reset();
  }

}
