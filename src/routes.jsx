import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { HomePage } from './pages/Home.page.jsx'
import { AdminPage } from './pages/Admin.page.jsx'
import { AdminProductPage } from './pages/AdminProduct.page.jsx'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/admin',
    element: <AdminPage />,
    children: [
      {
        index: null, // Use index property for default child
        children: [
          {
            path: 'product', // Relative path to the parent ("/admin")
            element: <AdminProductPage />,
          },
        ],
      },
    ],
  },
])
