import { Task } from "./task";

export enum Specialization {
    QAEngineer="QA Engineer",
    FrontEndDev ="Front-end Developer",
    BackEndDev ="Back-end Developer"
}

export interface User {
    id:number,
    name:string,
    surname:string,
    specialization:Specialization
    tasks:Task[]
}