import {
  PreloadedState,
  combineReducers,
  configureStore
} from '@reduxjs/toolkit'
import authReducer from '../Features/Auth/authSlice'
import taskReducer from '../Features/Task/taskSlice'

const rootReducer = combineReducers({
  auth: authReducer,
  task: taskReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export const makeStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  })
}

const store = makeStore()
export default store

export type AppState = ReturnType<typeof store.getState> // redux type
export type AppDispatch = typeof store.dispatch // this type dispatch i can
export type AppStore = ReturnType<typeof makeStore> // store of redux

// import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"

// export const store = configureStore({
//   reducer: {
//     auth:authReducer
//   },
// })

// export type AppDispatch = typeof store.dispatch
// export type RootState = ReturnType<typeof store.getState>
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action<string>
// >
