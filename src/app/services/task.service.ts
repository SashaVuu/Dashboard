import { Injectable } from '@angular/core';
import { Task } from '../entities/task';
import { IEntityCrud } from './entity-crud.interface';
import { LocalStorageExstensions } from './local-sctorage-exstensions';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService implements IEntityCrud<Task> {

  tasks: Task[] = [];

  constructor(private userService: UserService) {
    if (!localStorage.getItem('tasks')) {
      LocalStorageExstensions.updateLocalStorage('tasks', []);
    }
    else {
      this.getAllEntities();
    }
  }

  getAllEntities(): Task[] {
    this.tasks = LocalStorageExstensions.getDataFromStorage('tasks');
    return this.tasks;
  }

  getEntity(id: number): Task | undefined {
    let task = this.tasks.find(task => task.id === id);
    console.log(task);
    return task;
  }

  addEntity(task: Task): Task {
    const lastIndex = this.tasks.length - 1;
    const lastElement: Task | undefined = this.tasks[lastIndex];

    if (lastElement && lastElement.id) {
      task.id = lastElement.id;
      task.id++;
    } else {
      task.id = 1;
    }

    this.tasks.push(task);
    LocalStorageExstensions.updateLocalStorage('tasks', this.tasks);
    return task;
  }

  updateEntity(task: Task): void {
    const taskIndex = this.tasks.findIndex(x => x.id == task.id);
    this.tasks[taskIndex] = task;

    LocalStorageExstensions.updateLocalStorage('tasks', this.tasks);
  }

  deleteEntity(id: number): void {
    const indexOfTask: number = this.tasks.findIndex(task => task.id === id);
    const deletedTask: Task[] = this.tasks.splice(indexOfTask, 1);

    if (deletedTask.length !== 1) {
      console.warn("Something went wrong while deleting task.");
    }

    LocalStorageExstensions.updateLocalStorage('tasks', this.tasks);
  }

}
