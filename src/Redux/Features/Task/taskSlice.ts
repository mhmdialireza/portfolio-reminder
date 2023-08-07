import { createSlice } from '@reduxjs/toolkit'
import { changeStatus, filter } from './taskService'
import 'react-toastify/dist/ReactToastify.css'
import AppToast from '../../../Utils/toastUtils'
import { RootState } from '../../App/store'
import ITask from '../../../Types/task.type'

export interface ITaskState {
  tasks: ITask[]
  error: undefined | string
}

const initialState: ITaskState = {
  tasks: [],
  error: undefined
}

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(filter.fulfilled, (state, { payload }) => {
      state.tasks = payload.tasks
      state.error = payload.message
    })
    // builder.addCase(filter.rejected, (state, { payload }) => {
    //   AppToast.error(payload[Object.keys(payload)[0]][0])
    // })
    builder.addCase(changeStatus.fulfilled, (state, { payload }) => {
      state.tasks = state.tasks.map(task => task.id == payload.id ? payload : task)
    })
  }
})
export const taskSelector = (state: RootState) => state.task
export default taskSlice.reducer
