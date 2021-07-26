import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TaskService } from '../services/task.service';
import { TaskPanelComponent } from './task-panel/task-panel.component';
import { TsAddPanelComponent } from './task-panel/ts-task-description-panel/ts-add-panel/ts-add-panel.component';
import { TsEditPanelComponent } from './task-panel/ts-task-description-panel/ts-edit-panel/ts-edit-panel.component';
import { TsTaskDescriptionPanelComponent } from './task-panel/ts-task-description-panel/ts-task-description-panel.component';
import { TsTaskListPanelComponent } from './task-panel/ts-task-list-panel/ts-task-list-panel.component';
import { TsBasePanelComponent } from './task-panel/ts-task-description-panel/ts-base-panel/ts-base-panel.component';
import { CoreModule } from '../core/core.module';
import { FilterPipe } from './pipes/filter.pipe';
import { TsListBlockComponent } from './task-panel/ts-task-list-panel/ts-list-block/ts-list-block.component';
@NgModule({
  declarations: [
    TsTaskListPanelComponent,
    TsTaskDescriptionPanelComponent,
    TsAddPanelComponent,
    TsEditPanelComponent,
    TaskPanelComponent,
    TsBasePanelComponent,
    FilterPipe,
    TsListBlockComponent
  ],
  providers: [TaskService],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    CoreModule
  ],
  exports:[
    TsTaskListPanelComponent,
    TsTaskDescriptionPanelComponent
  ]
})
export class TaskModule { }
