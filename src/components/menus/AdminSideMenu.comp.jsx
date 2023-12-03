import React from 'react'
import { Layout, Menu } from 'antd'
import { LogoutOutlined } from '@ant-design/icons'
import { logout } from '../../redux/slices/LoggedUser.slice.js'
import { useDispatch } from 'react-redux'
import { BsBoxSeam } from 'react-icons/bs'
import { LuWarehouse } from 'react-icons/lu'
import { BiPurchaseTag } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'

function getItem({ label, key, icon, onClick }) {
  return {
    key,
    icon,
    label,
    onClick,
  }
}

export const AdminSideMenuComp = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(logout())
    window.location.reload()
  }

  const items = [
    getItem({
      label: 'Products',
      key: '1',
      icon: <BsBoxSeam />,
      onClick: () => navigate('/admin/product'),
    }),
    getItem({
      label: 'Stock',
      key: '2',
      icon: <LuWarehouse />,
    }),
    getItem({
      label: 'Orders',
      key: '3',
      icon: <BiPurchaseTag />,
    }),
    getItem({
      label: 'Logout',
      key: '4',
      icon: <LogoutOutlined />,
      onClick: handleLogout,
    }),
  ]

  return (
    <Layout.Sider
      width={'20rem'}
      className={'bg-slate-100 border-e-2 border-slate-200'}
    >
      <Menu
        className={'w-full h-full py-8 px-4'}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        items={items}
      />
    </Layout.Sider>
  )
}
