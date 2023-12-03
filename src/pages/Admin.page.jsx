import React from 'react'
import { Layout } from 'antd'
import { AdminNavBarComp } from '../components/navs/AdminNavBar.comp.jsx'
import { AdminSideMenuComp } from '../components/menus/AdminSideMenu.comp.jsx'
import { Outlet } from 'react-router-dom'

export const AdminPage = () => {
  return (
    <Layout className={'bg-slate-50 justify-between min-h-screen'}>
      <AdminNavBarComp />
      <Layout className={'flex-grow'}>
        <AdminSideMenuComp />
        <Layout.Content>
          <Outlet />
        </Layout.Content>
      </Layout>
    </Layout>
  )
}
