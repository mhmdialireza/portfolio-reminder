import { createAsyncThunk } from '@reduxjs/toolkit'
import appAxios from '../../../Services/Axios/config'
import { ITaskFilterPayload } from '../../../Types/Api/task.type'

const BASE_NAME = 'tasks/'

export const filter = createAsyncThunk(
  `${BASE_NAME}filter`,
  async (data: ITaskFilterPayload, { rejectWithValue }) => {
    try {
      return (await appAxios.post(`${BASE_NAME}filter`, data)).data
    } catch (error: any) {
      return rejectWithValue(error?.response?.data?.errors)
    }
  }
)
