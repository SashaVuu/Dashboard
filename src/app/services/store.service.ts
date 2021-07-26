import { Injectable } from '@angular/core';
import { Task } from '../entities/task';
import { LocalStorageExstensions } from './local-sctorage-exstensions';
import { TaskService } from './task.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private taskService: TaskService, private userService: UserService) { }

  addAndAssignTask(task: Task): void {
    task = this.taskService.addEntity(task);
    this.assignTask(task.assignee, task.id as number);
  }

  updateAndAssignTask(task: Task): void {
    this.taskService.updateEntity(task);
    this.findAndDeleteTaskFromUsers(task.id as number);
    this.assignTask(task.assignee, task.id as number);
  }

  deleteTaskAndUnassignTask(taskId: number): void {
    this.taskService.deleteEntity(taskId);
    this.findAndDeleteTaskFromUsers(taskId);
  }

  deleteUserAndUnassignTask(userId: number): void {
    this.userService.deleteEntity(userId);
    this.deleteAssigneeFromTask(userId);
  }

  deleteTaskFromUserAndUnassign(taskId:number |undefined):void {
    this.findAndDeleteTaskFromUsers(taskId);
    this.deleteAssigneeFromTask(taskId);
  }

  getUserTasks(userId: number | undefined): Task[] {
    let tasks: Task[] = [];
    if (userId !== undefined) {
      const users = this.userService.getAllEntities();
      const userIndex = users.findIndex((user) => user.id === userId);
      const tasksIds = users[userIndex].tasks;

      for (let i = 0; i < tasksIds.length; i++) {
        tasks.push(this.taskService.getEntity(tasksIds[i]) as Task);
      }
    }
    return tasks;
  }

  private findAndDeleteTaskFromUsers(taskId: number|undefined): void {
    let users = this.userService.getAllEntities();
    for (let i = 0; i < users.length; i++) {
      users[i].tasks = users[i].tasks.filter((id) => id !== taskId);
    }
    LocalStorageExstensions.updateLocalStorage('users', users);
  }

  private assignTask(userId: number | undefined, taskId: number): void {
    if (userId !== undefined) {
      let users = this.userService.getAllEntities();
      let userIndex = users.findIndex((user) => user.id === userId);

      if (userIndex !== -1) { users[userIndex].tasks.push(taskId); }

      LocalStorageExstensions.updateLocalStorage('users', users);
    }
  }

  private deleteAssigneeFromTask(id: number | undefined) {
    let tasks = this.taskService.getAllEntities();
    let taskIndex = tasks.findIndex((task) => task.assignee === id);

    if (taskIndex !== -1) { tasks[taskIndex].assignee = undefined; }

    LocalStorageExstensions.updateLocalStorage('tasks', tasks);
  }


}
