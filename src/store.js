import { configureStore } from '@reduxjs/toolkit'
import toDoReducer from './features/toDoSlice'
import userReducer from './features/userSlice'

const store = configureStore({
  reducer: {
    toDos: toDoReducer,
    users: userReducer
  },
})

export default store