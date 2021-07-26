
export enum Specialization {
    QAEngineer= "QAEngineer",
    FrontEndDev = "FrontEndDev",
    BackEndDev = "BackEndDev"
}

export interface User {
    id:number,
    name:string,
    surname:string,
    specialization:Specialization
    tasks:number[]
}