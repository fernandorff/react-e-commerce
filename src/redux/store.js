import { configureStore } from '@reduxjs/toolkit'
import { cartProductsSlice } from './slices/CartProducts.slice.js'
import { drawerReducer } from './slices/Drawer.slice.js'
import { loggedUserReducer } from './slices/LoggedUser.slice.js'
import { ProductApi } from './api/ProductApi.jsx'
import { setupListeners } from '@reduxjs/toolkit/query'
import { OrderApi } from './api/OrderApi.jsx'
import { StockApi } from './api/StockApi.jsx'

export const store = configureStore({
  reducer: {
    [ProductApi.reducerPath]: ProductApi.reducer,
    [OrderApi.reducerPath]: OrderApi.reducer,
    [StockApi.reducerPath]: StockApi.reducer,
    drawer: drawerReducer,
    cartProducts: cartProductsSlice,
    loggedUser: loggedUserReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(ProductApi.middleware)
      .concat(OrderApi.middleware)
      .concat(StockApi.middleware),
})

setupListeners(store.dispatch)
