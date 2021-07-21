import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TaskService } from '../services/task.service';
import { TaskPanelComponent } from './task-panel/task-panel.component';
import { TsAddPanelComponent } from './task-panel/ts-task-description-panel/ts-add-panel/ts-add-panel.component';
import { TsEditPanelComponent } from './task-panel/ts-task-description-panel/ts-edit-panel/ts-edit-panel.component';
import { TsTaskDescriptionPanelComponent } from './task-panel/ts-task-description-panel/ts-task-description-panel.component';
import { TsTaskListBlockComponent } from './task-panel/ts-task-list-panel/ts-task-list-block/ts-task-list-block.component';
import { TsTaskListPanelComponent } from './task-panel/ts-task-list-panel/ts-task-list-panel.component';

@NgModule({
  declarations: [
    TsTaskListPanelComponent,
    TsTaskDescriptionPanelComponent,
    TsTaskListBlockComponent,
    TsAddPanelComponent,
    TsEditPanelComponent,
    TaskPanelComponent
  ],
  providers: [TaskService],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports:[
    TsTaskListPanelComponent,
    TsTaskDescriptionPanelComponent,
    TsTaskListBlockComponent,
  ]
})
export class TaskModule { }
