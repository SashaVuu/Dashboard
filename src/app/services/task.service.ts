import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from '../entities/task';
import { IEntityCrud } from './entity-crud.interface';
import { LocalStorageExstensions } from './local-sctorage-exstensions';

@Injectable({
  providedIn: 'root'
})
export class TaskService implements IEntityCrud<Task> {

  private initState = [];
  private _tasks$: BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>(this.initState);
  public tasks$: Observable<Task[]> = this._tasks$.asObservable();

  constructor() {
    if (!localStorage.getItem('tasks')) {
      LocalStorageExstensions.updateLocalStorage('tasks', this.initState);
    }
    else {
      this.getAllEntities();
    }
  }

  getAllEntities(): Task[] {
    const tasks = LocalStorageExstensions.getDataFromStorage('tasks') as Task[];
    this._tasks$.next(tasks);
    return tasks;
  }

  private getTasks(): Task[] {
    return this._tasks$.value;
  }

  getEntity(id: number): Task | undefined {
    const tasks = this.getTasks();
    let task = tasks.find(task => task.id === id);
    console.log(task);
    return task;
  }

  addEntity(task: Task): Task {
    const tasks = this.getTasks();
    const lastIndex = tasks.length - 1;
    const lastElement: Task | undefined = tasks[lastIndex];

    if (lastElement && lastElement.id) {
      task.id = lastElement.id;
      task.id++;
    } else {
      task.id = 1;
    }

    tasks.push(task);
    LocalStorageExstensions.updateLocalStorage('tasks', tasks);

    this._tasks$.next(tasks);

    return task;
  }

  updateEntity(task: Task): void {
    const tasks = this.getTasks();
    const taskIndex = tasks.findIndex(x => x.id == task.id);
    tasks[taskIndex] = task;

    LocalStorageExstensions.updateLocalStorage('tasks', tasks);
    this._tasks$.next(tasks);
  }

  deleteEntity(id: number): void {
    const tasks = this.getTasks();
    const indexOfTask: number = tasks.findIndex(task => task.id === id);
    const deletedTask: Task[] = tasks.splice(indexOfTask, 1);

    if (deletedTask.length !== 1) {
      console.warn("Something went wrong while deleting task.");
    }

    LocalStorageExstensions.updateLocalStorage('tasks', tasks);
    this._tasks$.next(tasks);
  }

}
