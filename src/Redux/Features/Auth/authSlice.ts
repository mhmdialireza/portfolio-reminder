import { createSlice } from '@reduxjs/toolkit'
import IUser from '../../../Types/user.type'
import { loginUser, registerUser, userInfo } from './authService'
import storage from '../../../Utils/storage'
import 'react-toastify/dist/ReactToastify.css'
import AppToast from '../../../Utils/toastUtils'
import { RootState } from '../../App/store'
import { useNavigate } from 'react-router-dom'

export interface IAuthState {
  token: string | undefined
  user: IUser | undefined
  error: undefined | string
}

const initialState: IAuthState = {
  token: undefined,
  user: undefined,
  error: undefined
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(registerUser.fulfilled, (state, { payload }) => {
      state.token = payload.token
      state.user = payload.user
      state.error = payload.message

      storage.setToken(payload.token)
    })
    builder.addCase(registerUser.rejected, (state, { payload }) => {
      AppToast.error(payload[Object.keys(payload)[0]][0])
    })
    builder.addCase(loginUser.fulfilled, (state, { payload }) => {
      state.token = payload.token
      state.user = payload.user

      storage.setToken(payload.token)
    })
    builder.addCase(loginUser.rejected, (state, { payload }) => {
      AppToast.error(payload)
    })
    builder.addCase(userInfo.fulfilled, (state, { payload }) => {
      state.user = payload.user
    })
    builder.addCase(userInfo.rejected, () => {
      storage.clearToken()
    })
  }
})
export const authSelector = (state: RootState) => state.auth
export default authSlice.reducer
