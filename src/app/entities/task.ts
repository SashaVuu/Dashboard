export enum Status {
    Open = "Open",
    Closed = "Closed",
    InQA = "InQA",
    Resolved = "Resolved"
}

export interface Task {
    id:number,
    name:string,
    description:string,
    assignee:string,
    status:Status,
    timestamp:string
}