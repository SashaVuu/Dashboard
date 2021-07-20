import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EditorMode } from 'src/app/entities/editor';
import { Status, Task } from 'src/app/entities/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-ts-add-panel',
  templateUrl: './ts-add-panel.component.html',
  styleUrls: ['./ts-add-panel.component.less']
})
export class TsAddPanelComponent implements OnChanges {

  @Input() task?: Task;
  
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
      timestamp: new FormControl(new Date())
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.task) {
      this.updateTaskForm(this.task);
    }
  }

  submitForm() {
    this.taskService.addTask(this.taskForm.value);
    this.taskForm.reset();
  }

  private updateTaskForm(task: Task | undefined) {
    this.taskForm.patchValue({
      id: task?.id,
      name: task?.name,
      description: task?.description,
      assignee: task?.assignee,
      status: task?.status,
      timestamp: task?.timestamp
    });
  }


}
