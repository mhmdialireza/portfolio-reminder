import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  ILoginPayload,
  IRegisterPayload,
} from '../../../Types/Api/auth.type'
import appAxios from '../../../Services/Axios/config'

const BASE_NAME = 'auth/'

export const registerUser = createAsyncThunk(
  `${BASE_NAME}register`,
  async (data: IRegisterPayload, { rejectWithValue }) => {
    try {
      return (await appAxios.post(`${BASE_NAME}register`, data)).data
    } catch (error: any) {
      return rejectWithValue(error?.response?.data?.errors)
    }
  }
)

export const loginUser = createAsyncThunk(
  `${BASE_NAME}login`,
  async (data: ILoginPayload, { rejectWithValue }) => {
    try {
      return (await appAxios.post(`${BASE_NAME}login`, data)).data
    } catch (error: any) {
      return rejectWithValue(error?.response?.data)
    }
  }
)

export const userInfo = createAsyncThunk(
  `${BASE_NAME}user-info`,
  async (_, { rejectWithValue }) => {
    try {
      return (await appAxios.post(`${BASE_NAME}user-info`)).data
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
      // return rejectWithValue(error?.response?.data?.errors)
    }
  }
)
