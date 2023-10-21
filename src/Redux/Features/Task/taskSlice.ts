import { createSlice } from '@reduxjs/toolkit'
import { changeStatus, filter, updateTask } from './taskService'
import 'react-toastify/dist/ReactToastify.css'
import { RootState } from '../../App/store'
import ITask from '../../../Types/task.type'


export interface ITaskState {
  tasks: ITask[]
  status: string
  error: undefined | string
}

const initialState: ITaskState = {
  tasks: [],
  status: 'idle',
  error: undefined
}

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(filter.fulfilled, (state, { payload }) => {
      state.tasks = payload.tasks
      state.status = 'succeeded'
      state.error = payload.message
    })
    builder.addCase(filter.pending, (state, { payload }) => {
      state.status = 'loading'
    })
    // builder.addCase(filter.rejected, (state, { payload }) => {
    //   AppToast.error(payload[Object.keys(payload)[0]][0])
    // })

    builder.addCase(changeStatus.fulfilled, (state, { payload }) => {
      state.tasks = state.tasks.map(task => task.id == payload.id ? payload : task)
      state.status = 'succeeded'
    })
    builder.addCase(changeStatus.pending, (state, action) => {
      state.status = 'loading'
    })

    builder.addCase(updateTask.fulfilled, (state, { payload }) => {
      state.tasks = state.tasks.map(task => task.id == payload.id ? payload : task)
    })
  }
})
export const taskSelector = (state: RootState) => state.task
export default taskSlice.reducer
