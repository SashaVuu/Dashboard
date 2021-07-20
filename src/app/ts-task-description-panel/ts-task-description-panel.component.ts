import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Status, Task } from 'src/app/entities/task';
import { TaskService } from 'src/app/services/task.service';
import { EditorMode } from '../entities/editor';


@Component({
  selector: 'app-ts-task-description-panel',
  templateUrl: './ts-task-description-panel.component.html',
  styleUrls: ['./ts-task-description-panel.component.less']
})
export class TsTaskDescriptionPanelComponent implements OnChanges {

  @Input() task?: Task;
  @Input() mode: EditorMode = EditorMode.None;

  @Output() addingTask:EventEmitter<Task> = new EventEmitter<Task>();
  @Output() editingTask:EventEmitter<Task> = new EventEmitter<Task>();

  modes = EditorMode;
  statuses = Status;
  taskForm: FormGroup;

  constructor(private taskService: TaskService) {
    this.taskForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(""),
      description: new FormControl(""),
      assignee: new FormControl(""),
      status: new FormControl(Status.Open),
      timestamp: new FormControl(this.taskService.formatDate(new Date()))
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.updateTaskForm();
  }

  submitForm() {
    switch (this.mode) {
      case EditorMode.Add: {
        console.log("emit");
        this.addingTask.emit(this.taskForm.value);
        break;
      }
      case EditorMode.Edit: {
        this.editingTask.emit(this.taskForm.value);
        break;
      }
    }
  }

  private updateTaskForm() {
    this.taskForm.patchValue({
      id: this.task?.id,
      name: this.task?.name,
      description: this.task?.description,
      assignee: this.task?.assignee,
      status: this.task?.status,
      timestamp: this.task?.timestamp
    });
  }

}
