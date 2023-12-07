import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { HomePage } from './pages/Home.page.jsx'
import { AdminPage } from './pages/Admin.page.jsx'
import { AdminProductPage } from './pages/AdminProduct.page.jsx'
import { AdminProductManagePage } from './pages/AdminProductManage.page.jsx'
import { AdminOrderPage } from './pages/AdminOrder.page.jsx'

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
        index: null,
        children: [
          {
            path: 'product',
            element: <AdminProductPage />,
          },
          {
            path: 'product/manage/:id',
            element: <AdminProductManagePage />,
          },
          {
            path: 'order',
            element: <AdminOrderPage />,
          },
        ],
      },
    ],
  },
])
