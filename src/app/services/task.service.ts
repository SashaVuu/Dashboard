import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Subject } from 'rxjs';
import { EditorMode } from '../entities/editor';
import { Task } from '../entities/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks: Task[] = [];
  editorModeSubject$ = new Subject<{ mode: EditorMode, idTask?: number }>();

  constructor() {
    if (!localStorage.getItem('tasks')) {
      this.updateLocalStorage([]);
    }
  }

  public changeEditorMode(mode: EditorMode, idTask?: number) {
    this.editorModeSubject$.next({ mode: mode, idTask: idTask });
  }

  public getTask(id: number): Task | undefined {
    let task = this.tasks.find(task => task.id === id);
    console.log(task);
    return task;
  }

  public getAllTasks(): Task[] {
    return this.getTasksFromStorage();
  }

  public addTask(task: Task): void {
    const lastIndex = this.tasks.length - 1;
    const lastElement: Task | undefined = this.tasks[lastIndex];

    if (lastElement && lastElement.id) {
      task.id = lastElement.id;
      task.id++;
    } else {
      task.id = 1;
    }

    this.tasks.push(task);
    this.updateLocalStorage(this.tasks);
  }

  public deleteTask(id: number): void {
    const indexOfTask: number = this.tasks.findIndex(task => task.id === id);
    const deletedTask: Task[] = this.tasks.splice(indexOfTask, 1);

    if (deletedTask.length !== 1) {
      console.warn("Something went wrong while deleting task.");
    }

    this.updateLocalStorage(this.tasks);
  }

  public updateTask(task: Task): void {
    const taskIndex = this.tasks.findIndex(x => x.id == task.id);
    this.tasks[taskIndex] = task;

    this.updateLocalStorage(this.tasks);
  }

  private updateLocalStorage(tasks: Task[]): void {
    const tasksStringFormat: string = JSON.stringify(tasks);
    localStorage.setItem('tasks', tasksStringFormat);
  }

  private getTasksFromStorage(): Task[] {
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

    this.tasks = tasks;
    return tasks;
  }


}
