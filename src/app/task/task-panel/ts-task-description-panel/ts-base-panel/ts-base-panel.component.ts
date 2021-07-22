import { Component, Directive, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EditorMode } from 'src/app/entities/editor';
import { Status, Task } from 'src/app/entities/task';
import { User } from 'src/app/entities/user';
import { UserService } from 'src/app/services/user.service';

@Directive({
  selector: 'app-ts-base-panel'
})
export class TsBasePanelComponent implements OnInit,OnChanges{

  @Input() task?: Task;
  
  modes = EditorMode;
  statuses = Status;
  taskForm: FormGroup;
  users:User[]=[];

  constructor(private userService:UserService) {
    this.taskForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(""),
      description: new FormControl(""),
      assignee: new FormControl(""),
      status: new FormControl(Status.Open),
      timestamp: new FormControl(new Date())
    });
  }

  ngOnInit(){
    this.users=this.userService.getAllEntities();
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.task) {
      this.updateTaskForm(this.task);
    }
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
