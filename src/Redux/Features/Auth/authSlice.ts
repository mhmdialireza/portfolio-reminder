import { createSlice } from '@reduxjs/toolkit'
import IUser from '../../../Types/user.type'
import { loginUser, logout, registerUser, updateProfile, userInfo } from './authService'
import storage from '../../../Utils/storage'
import 'react-toastify/dist/ReactToastify.css'
import AppToast from '../../../Utils/toastUtils'
import { RootState } from '../../App/store'

export interface IAuthState {
  token: string | undefined
  user: IUser | undefined
  profile_image: string | undefined
  error: undefined | string
  isDispatched: boolean
}

const token = storage.getToken()
const initialState: IAuthState = {
  token,
  user: undefined,
  profile_image: undefined,
  error: undefined,
  isDispatched: false
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
    builder.addCase(loginUser.rejected, (state, {payload}) => {
      // console.log(z);
      AppToast.error(payload)
    })

    builder.addCase(userInfo.fulfilled, (state, { payload }) => {
      state.user = payload.user
      state.isDispatched = true
    })
    builder.addCase(userInfo.rejected, (state) => {
      state.isDispatched = true
      storage.clearToken()
    })

    builder.addCase(logout.fulfilled, () => {
      storage.clearToken()
    })

    builder.addCase(updateProfile.fulfilled, (state, { payload }) => {
      state.user = payload.user
    })
    builder.addCase(updateProfile.rejected, (state, { payload }) => {
      AppToast.error(payload)
    })
  }
})
export const authSelector = (state: RootState) => state.auth
export default authSlice.reducer
