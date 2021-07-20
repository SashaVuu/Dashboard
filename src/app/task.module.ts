import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TsHeaderComponent } from './ts-header/ts-header.component';
import { TsTaskListPanelComponent } from './ts-task-list-panel/ts-task-list-panel.component';
import { TsTaskDescriptionPanelComponent } from './ts-task-description-panel/ts-task-description-panel.component';
import { TsTaskListBlockComponent } from './ts-task-list-panel/ts-task-list-block/ts-task-list-block.component';
import { TaskService } from './services/task.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TsHeaderComponent,
    TsTaskListPanelComponent,
    TsTaskDescriptionPanelComponent,
    TsTaskListBlockComponent],
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
