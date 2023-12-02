import { configureStore } from '@reduxjs/toolkit'
import { cartProductsSlice } from './slices/CartProducts.slice.js'
import { drawerReducer } from './slices/drawer.slice.js'

export const store = configureStore({
  reducer: {
    drawer: drawerReducer,
    cartProducts: cartProductsSlice,
  },
})