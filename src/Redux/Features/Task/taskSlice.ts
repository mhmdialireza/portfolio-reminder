import { createSlice } from '@reduxjs/toolkit'
import IUser from '../../../Types/user.type'
import { loginUser, registerUser, userInfo } from './taskService'
import storage from '../../../Utils/storage'
import 'react-toastify/dist/ReactToastify.css'
import AppToast from '../../../Utils/toastUtils'
import { RootState } from '../../App/store'
import { useNavigate } from 'react-router-dom'
import ITask from '../../../Types/task.type'

export interface ITaskState {
  tasks: ITask[]
  error: undefined | string
}

const initialState: ITaskState = {
  tasks: [],
  error: undefined
}

const authSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(filter.fulfilled, (state, { payload }) => {
      state.tasks = payload.tasks
      state.error = payload.message

      storage.setToken(payload.token)
    })
    builder.addCase(registerUser.rejected, (state, { payload }) => {
      AppToast.error(payload[Object.keys(payload)[0]][0])
    })
  }
})
export const authSelector = (state: RootState) => state.auth
export default authSlice.reducer
