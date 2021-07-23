import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/entities/task';
import { EditorService } from 'src/app/services/editor.service';
import { StoreService } from 'src/app/services/store.service';
import { TaskService } from 'src/app/services/task.service';
import { UserService } from 'src/app/services/user.service';
import { BasePanelComponent } from '../base-panel/base-panel.component';

@Component({
  selector: 'app-edit-panel',
  templateUrl: './edit-panel.component.html',
  styleUrls: ['./edit-panel.component.less']
})
export class EditPanelComponent extends BasePanelComponent implements OnInit {

  tasks: Task[] = [];

  constructor(private storeService: StoreService, private taskService: TaskService, private userService: UserService) {
    super();
  }

  ngOnInit(): void {
    this.tasks = this.storeService.getUserTasks(this.user?.id);
    console.log(this.tasks);
  }

  submitForm() {
    this.userService.updateEntity(this.userForm.value);
  }

  deleteTask(id: number | undefined) {
    this.storeService.deleteTaskFromUserAndUnassign(id);
    this.tasks = this.storeService.getUserTasks(this.user?.id); 
  }

}
