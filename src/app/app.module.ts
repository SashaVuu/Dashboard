import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TsHeaderComponent } from './ts-header/ts-header.component';
import { TsTaskListPanelComponent } from './ts-task-list-panel/ts-task-list-panel.component';
import { TsTaskDescriptionPanelComponent } from './ts-task-description-panel/ts-task-description-panel.component';
import { TsTaskListBlockComponent } from './ts-task-list-panel/ts-task-list-block/ts-task-list-block.component';
import { TaskService } from './services/task.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TsHeaderComponent,
    TsTaskListPanelComponent,
    TsTaskDescriptionPanelComponent,
    TsTaskListBlockComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
