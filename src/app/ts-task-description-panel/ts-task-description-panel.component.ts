import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Status, Task } from 'src/app/entities/task';
import { TaskService } from 'src/app/services/task.service';
import { EditorMode } from '../entities/editor';
@Component({
  selector: 'app-ts-task-description-panel',
  templateUrl: './ts-task-description-panel.component.html',
  styleUrls: ['./ts-task-description-panel.component.less']
})
export class TsTaskDescriptionPanelComponent implements OnInit {

  task: Task | undefined;
  mode: EditorMode = EditorMode.None;
  modes = EditorMode;
  statuses = Status;
  taskForm: FormGroup;

  constructor(private taskService: TaskService) {
    this.taskForm = new FormGroup({
      name: new FormControl(""),
      description: new FormControl(""),
      assignee: new FormControl(""),
      status: new FormControl(Status.Open),
      timestamp: new FormControl(this.taskService.formatDate(new Date()))
    });
  }

  ngOnInit(): void {
    this.taskService.editorModeSubject.subscribe((editorMode) => {

      this.mode = editorMode.mode;

      if (editorMode.mode == EditorMode.Edit && editorMode.idTask !== undefined) {
        this.task = this.taskService.getTask(editorMode.idTask);
        
      }

      if (editorMode.mode == EditorMode.Add) {
        this.task = undefined;
      }
      this.updateTaskForm();

    });

    this.updateTaskForm();
  }

  submitForm() {
    console.log("Value");
    console.log(this.taskForm.value);

    switch (this.mode) {
      case EditorMode.Add: {
        this.taskService.addTask(this.taskForm.value);
        break;
      }
      case EditorMode.Edit: {
        this.taskService.updateTask(<Task>this.taskForm.value);
        break;
      }
    }
  }


  private updateTaskForm() {
    this.taskForm.patchValue({
      name: this.task?.name,
      description: this.task?.description,
      assignee: this.task?.assignee,
      status: this.task?.status,
      timestamp: this.task?.timestamp
    });
  }

}
