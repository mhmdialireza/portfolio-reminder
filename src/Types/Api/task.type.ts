import { Status } from "../../Enums/api.enum"
import ITask from "../task.type"



// payload interface
export interface IFilterTaskPayload {
    //TODO:
    status: Status
}

export interface IAddTaskPayload {
    title: string
    description: string
    // priority: number
}


// response interface
export interface IFilterResponse {
    tasks: ITask[]
}