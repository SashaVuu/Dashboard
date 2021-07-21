import { Injectable } from "@angular/core";
import { User } from "../entities/user";
import { Task } from "../entities/task";
import { IEntityCrud } from "./entity-crud.interface";
import { LocalStorageExstensions } from "./local-sctorage-exstensions";

@Injectable({
    providedIn: 'root'
})
export class UserService implements IEntityCrud<User> {

    users: User[] = [];

    constructor() {
        if (!localStorage.getItem('users')) {
            LocalStorageExstensions.updateLocalStorage('users', []);
        }
    }

    getAllEntities(): User[] {
        return LocalStorageExstensions.getDataFromStorage('users');
    }

    getEntity(id: number): User | undefined {
        let user = this.users.find(user => user.id === id);
        console.log(user);
        return user;
    }

    addEntity(user: User): void {
        const lastIndex = this.users.length - 1;
        const lastElement: User | undefined = this.users[lastIndex];

        if (lastElement && lastElement.id) {
            user.id = lastElement.id;
            user.id++;
        } else {
            user.id = 1;
        }

        this.users.push(user);
        LocalStorageExstensions.updateLocalStorage('users', this.users);
    }

    updateEntity(user: User): void {
        const userIndex = this.users.findIndex(x => x.id == user.id);
        this.users[userIndex] = user;
        LocalStorageExstensions.updateLocalStorage('users', this.users);
    }

    deleteEntity(id: number): void {
        const indexOfUser: number = this.users.findIndex(task => task.id === id);
        const deletedUser: User[] = this.users.splice(indexOfUser, 1);

        if (deletedUser.length !== 1) {
            console.warn("Something went wrong while deleting user.");
        }

        LocalStorageExstensions.updateLocalStorage('users', this.users);
    }

    assignTask(userId: number, task: Task) {
        //Если таска уже была заасайнена, то удаляем у этого юзера таску и добавляем
        if(task.assignee){
            this.deleteTask(task.assignee, task.id as number);
        }
        this.addTask(userId,task);
    }

    
    private deleteTask(userId: number, taskId: number): void {
        const userIndex = this.users.findIndex(user => user.id == userId);
        const userTasks:Task[] = this.users[userIndex].tasks;
        this.users[userIndex].tasks = userTasks.filter(task => task.id !== taskId);

        LocalStorageExstensions.updateLocalStorage('users', this.users);
    }

    private addTask(userId: number, task: Task): void {
        const userIndex = this.users.findIndex(user => user.id == userId);
        this.users[userIndex].tasks.push(task);

        LocalStorageExstensions.updateLocalStorage('users', this.users);
    }


}
