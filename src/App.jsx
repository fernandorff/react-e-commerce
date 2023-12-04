import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { store } from './redux/store.js'
import { Toaster } from 'react-hot-toast'
import { Provider } from 'react-redux'
import { routes } from './routes.jsx'

export const App = () => {
  return (
    <Provider store={store}>
      <Toaster position={'bottom-right'} toastOptions={{ duration: 4000 }} />
      <RouterProvider router={routes} />
    </Provider>
  )
}
