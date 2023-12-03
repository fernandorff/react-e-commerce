import { configureStore } from '@reduxjs/toolkit'
import { cartProductsSlice } from './slices/CartProducts.slice.js'
import { drawerReducer } from './slices/Drawer.slice.js'
import { loggedUserReducer } from './slices/LoggedUser.slice.js'

export const store = configureStore({
  reducer: {
    drawer: drawerReducer,
    cartProducts: cartProductsSlice,
    loggedUser: loggedUserReducer,
  },
})
