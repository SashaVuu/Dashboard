import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { FilterContext } from "../core/pipes/strategy";
import { User } from "../entities/user";
import { IEntityCrud } from "./entity-crud.interface";
import { LocalStorageExstensions } from "./local-sctorage-exstensions";

@Injectable({
    providedIn: 'root'
})
export class UserService implements IEntityCrud<User> {

    private initState = [];
    private _users$: BehaviorSubject<User[]> = new BehaviorSubject<User[]>(this.initState);
    public users$: Observable<User[]> = this._users$.asObservable();
    public search$: Subject<any> = new Subject<any>();
    
    constructor() {
        if (!localStorage.getItem('users')) {
            LocalStorageExstensions.updateLocalStorage('users', this.initState);
        }
        else {
            this.getAllEntities();
        }
    }

    getAllEntities(): User[] {
        const users = LocalStorageExstensions.getDataFromStorage('users') as User[];
        this._users$.next(users);
        return users;
    }

    private getUsers(): User[] {
        return this._users$.value;
    }

    getEntity(id: number): User | undefined {
        const users = this.getUsers();
        let user = users.find(user => user.id === id);
        console.log(user);
        return user;
    }

    filterEntity(searchString: string, context: FilterContext): void {
        const users = this.getAllEntities();
        const filteredUsers = context.executeStrategy(users, searchString);
        this._users$.next(filteredUsers);
    }

    addEntity(user: User): void {
        const users = this.getUsers();
        const lastIndex = users.length - 1;
        const lastElement: User | undefined = users[lastIndex];

        if (lastElement && lastElement.id) {
            user.id = lastElement.id;
            user.id++;
        } else {
            user.id = 1;
        }

        users.push(user);
        LocalStorageExstensions.updateLocalStorage('users', users);

        this._users$.next(users);
    }

    updateEntity(user: User): void {
        const users = this.getUsers();
        const userIndex = users.findIndex(x => x.id == user.id);
        users[userIndex] = user;
        LocalStorageExstensions.updateLocalStorage('users', users);

        this._users$.next(users);
    }

    deleteEntity(id: number): void {
        const users = this.getUsers();
        const indexOfUser: number = users.findIndex(task => task.id === id);
        const deletedUser: User[] = users.splice(indexOfUser, 1);

        if (deletedUser.length !== 1) {
            console.warn("Something went wrong while deleting user.");
        }

        LocalStorageExstensions.updateLocalStorage('users', users);
        this._users$.next(users);
    }

}
