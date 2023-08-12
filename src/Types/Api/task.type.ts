import { Order, Status } from "../../Enums/api.enum"
import ITask from "../task.type"



// payload interface
export interface IFilterTaskPayload {
    column: string //'title' | 'status' | 'created_at' | 'priority'
    status: string//Status
    order: Order
}

export interface IAddTaskPayload {
    title: string
    description: string
    priority: number
}

export interface IChangeStatusPayload {
    id: number
}

export interface IUpdateTaskPayload {
    title: string
    description: string
    priority: number
    status: 'done' | 'ongoing'
    // remind_datetime?: string
}


// response interface
export interface IFilterResponse {
    tasks: ITask[]
}