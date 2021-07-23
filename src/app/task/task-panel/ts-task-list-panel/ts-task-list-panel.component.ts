import { serializeNodes } from '@angular/compiler/src/i18n/digest';
import { Component, Input, OnInit } from '@angular/core';
import { EditorMode } from 'src/app/entities/editor';
import { Task } from 'src/app/entities/task';
import { EditorService } from 'src/app/services/editor.service';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-ts-task-list-panel',
  templateUrl: './ts-task-list-panel.component.html',
  styleUrls: ['./ts-task-list-panel.component.less']
})
export class TsTaskListPanelComponent {

  @Input() tasks: Task[] = [];

  constructor(private taskService: TaskService, private editorService: EditorService) { }

  showAddEditor(): void {
    this.editorService.changeEditorMode(EditorMode.Add);
  }

  filter(searchString: string) {
    if (searchString === "") {
      this.tasks = this.taskService.getAllEntities();
    } else {
      this.tasks = this.tasks.filter((task) => task.name.toUpperCase().includes(searchString.toUpperCase()));
    }
  }

}
