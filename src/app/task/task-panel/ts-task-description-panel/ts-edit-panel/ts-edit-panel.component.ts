import { Component } from '@angular/core';
import { EditorMode } from 'src/app/entities/editor';
import { EditorService } from 'src/app/services/editor.service';
import { StoreService } from 'src/app/services/store.service';
import { UserService } from 'src/app/services/user.service';
import { TsBasePanelComponent } from '../ts-base-panel/ts-base-panel.component';

@Component({
  selector: 'app-ts-edit-panel',
  templateUrl: './ts-edit-panel.component.html',
  styleUrls: ['./ts-edit-panel.component.less']
})
export class TsEditPanelComponent extends TsBasePanelComponent {

  constructor(userService: UserService, private editorService:EditorService,private storeService:StoreService) {
    super(userService);
  }

  submitForm() {
    console.log(this.taskForm.value);
    const assigneeControl = this.taskForm.get("assignee");
    assigneeControl?.setValue(parseInt(assigneeControl.value));
    if (assigneeControl?.value == -1){assigneeControl?.setValue(undefined) }


    this.storeService.updateAndAssignTask(this.taskForm.value);
    this.editorService.changeEditorMode(EditorMode.None);
  }
}
