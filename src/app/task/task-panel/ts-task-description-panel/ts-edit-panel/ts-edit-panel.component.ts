import { Component } from '@angular/core';
import { EditorMode } from 'src/app/entities/editor';
import { EditorService } from 'src/app/services/editor.service';
import { TaskService } from 'src/app/services/task.service';
import { UserService } from 'src/app/services/user.service';
import { TsBasePanelComponent } from '../ts-base-panel/ts-base-panel.component';

@Component({
  selector: 'app-ts-edit-panel',
  templateUrl: './ts-edit-panel.component.html',
  styleUrls: ['./ts-edit-panel.component.less']
})
export class TsEditPanelComponent extends TsBasePanelComponent {

  constructor(userService: UserService, private taskService: TaskService, private editorService:EditorService) {
    super(userService);
  }

  submitForm() {
    this.taskService.updateEntity(this.taskForm.value);
    this.editorService.changeEditorMode(EditorMode.None);
  }
}
