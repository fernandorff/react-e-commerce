import { configureStore } from '@reduxjs/toolkit'
import { loginDrawerReducer } from './slices/LoginDrawer.slice.js'
import { cartDrawerReducer } from './slices/CartDrawer.slice.js'

export const store = configureStore({
  reducer: {
    loginDrawer: loginDrawerReducer,
    cartDrawer: cartDrawerReducer,
  },
})
