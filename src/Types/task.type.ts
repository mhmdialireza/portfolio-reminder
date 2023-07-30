import { Status } from '../Enums/api.enum'
import IBase from './base.type'

export default interface ITask extends IBase {
  title: string
  description: string
  priority: number
  status: Status
  remind_datetime: string | null
}
