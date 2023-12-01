import { configureStore } from '@reduxjs/toolkit'
import { loginDrawerReducer } from './slices/LoginDrawer.slice.js'

export const store = configureStore({
  reducer: {
    loginDrawer: loginDrawerReducer,
  },
})
