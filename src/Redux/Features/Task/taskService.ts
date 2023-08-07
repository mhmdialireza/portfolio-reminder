import { createAsyncThunk } from '@reduxjs/toolkit'
import appAxios from '../../../Services/Axios/config'
import { IFilterTaskPayload, IChangeStatusPayload } from '../../../Types/Api/task.type'

const BASE_NAME = 'tasks/'

export const filter = createAsyncThunk(
  `${BASE_NAME}filter`,
  async (data: IFilterTaskPayload, { rejectWithValue }) => {
    try {
      return (await appAxios.post(`${BASE_NAME}filter`, data)).data
    } catch (error: any) {
      console.log(error?.response?.data);
      return rejectWithValue(error?.response?.data?.errors)
    }
  }
)

export const changeStatus = createAsyncThunk(
  `${BASE_NAME}change-status`,
  async (data: IChangeStatusPayload, { rejectWithValue }) => {
    try {
      return (await appAxios.put(`${BASE_NAME}change-status`, data)).data
    } catch (error: any) {
      return rejectWithValue(error?.response?.data?.errors)
    }
  }
)
