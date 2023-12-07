import { configureStore } from '@reduxjs/toolkit'
import { drawerReducer } from './slices/Drawer.slice.js'
import { loggedUserReducer } from './slices/LoggedUser.slice.js'
import { ProductApi } from './api/ProductApi.jsx'
import { setupListeners } from '@reduxjs/toolkit/query'
import { OrderApi } from './api/OrderApi.jsx'
import { StockApi } from './api/StockApi.jsx'
import { shoppingCartReducer } from './slices/ShoppingCart.slice.js'

export const store = configureStore({
  reducer: {
    [ProductApi.reducerPath]: ProductApi.reducer,
    [OrderApi.reducerPath]: OrderApi.reducer,
    [StockApi.reducerPath]: StockApi.reducer,
    drawer: drawerReducer,
    loggedUser: loggedUserReducer,
    shoppingCart: shoppingCartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(ProductApi.middleware)
      .concat(OrderApi.middleware)
      .concat(StockApi.middleware),
})

setupListeners(store.dispatch)
