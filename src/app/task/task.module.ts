import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TsHeaderComponent } from '../ts-header/ts-header.component';
import { TsAddPanelComponent } from './ts-task-description-panel/ts-add-panel/ts-add-panel.component';
import { TsEditPanelComponent } from './ts-task-description-panel/ts-edit-panel/ts-edit-panel.component';
import { TsTaskDescriptionPanelComponent } from './ts-task-description-panel/ts-task-description-panel.component';
import { TsTaskListBlockComponent } from './ts-task-list-panel/ts-task-list-block/ts-task-list-block.component';
import { TsTaskListPanelComponent } from './ts-task-list-panel/ts-task-list-panel.component';


import { TaskService } from '../services/task.service';

@NgModule({
  declarations: [
    TsHeaderComponent,
    TsTaskListPanelComponent,
    TsTaskDescriptionPanelComponent,
    TsTaskListBlockComponent,
    TsAddPanelComponent,
    TsEditPanelComponent
  ],
  providers: [TaskService],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports:[
    TsHeaderComponent,
    TsTaskListPanelComponent,
    TsTaskDescriptionPanelComponent,
    TsTaskListBlockComponent,
  ]
})
export class TaskModule { }
