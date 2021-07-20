import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Subject } from 'rxjs';
import { EditorMode } from '../entities/editor';
import { Task } from '../entities/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  editorModeSubject$ = new Subject<{ mode: EditorMode, idTask?: number }>();

  constructor() {
    if (!localStorage.getItem('tasks')) {
      this.putTasksInStorage([]);
      //this.putTasksInStorage(this.tasks);
    }
  }

  getTask(id: number): Task | undefined {
    let allTasks: Task[] = this.getAllTasks();
    let task = allTasks.find(task => task.id === id);
    console.log(task);
    return task;
  }

  getAllTasks(): Task[] {
    let tasks: Task[] = [];
    let tasksStringFormat: string | null = localStorage.getItem('tasks');
    if (tasksStringFormat) {
      try {
        tasks = JSON.parse(tasksStringFormat);
      }
      catch (e) {
        console.error(e);
      }
    }
    else {
      console.warn("No data in local storage.");
    }
    return tasks;
  }

  addTask(task: Task): Task[] {
    const allTasks: Task[] = this.getAllTasks();
    const lastIndex = allTasks.length - 1;
    const lastElement: Task | undefined = allTasks[lastIndex];
    if (lastElement && lastElement.id) {
      task.id = lastElement.id;
      task.id++;
    } else {
      task.id = 1;
    }

    allTasks.push(task);
    this.putTasksInStorage(allTasks);

    return allTasks;
  }

  deleteTask(id: number): Task[] {
    const allTasks: Task[] = this.getAllTasks();
    const indexOfTask: number = allTasks.findIndex(task => task.id === id);
    const deletedTask: Task[] = allTasks.splice(indexOfTask, 1);

    if (deletedTask.length !== 1) {
      console.warn("Something went wrong while deleting task.");
    }

    this.putTasksInStorage(allTasks);
    return allTasks;
  }

  updateTask(task: Task): Task[] {
    const allTasks: Task[] = this.getAllTasks();
    const taskIndex = allTasks.findIndex(x => x.id == task.id);
    allTasks[taskIndex] = task;

    this.putTasksInStorage(allTasks);
    return allTasks;
  }

  private putTasksInStorage(tasks: Task[]): void {
    const tasksStringFormat: string = JSON.stringify(tasks);
    localStorage.setItem('tasks', tasksStringFormat);
  }

  //Date to yyyy-MM-dd string format.
  formatDate(date: Date): string {
    return moment(date).format('YYYY-MM-DD');
  }

}
