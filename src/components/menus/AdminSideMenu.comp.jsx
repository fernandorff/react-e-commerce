import React from 'react'
import { Layout, Menu } from 'antd'
import { useDispatch } from 'react-redux'
import { BsBoxSeam } from 'react-icons/bs'
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

  const items = [
    getItem({
      label: 'Products',
      key: '1',
      icon: <BsBoxSeam />,
      onClick: () => navigate('/admin/product'),
    }),
    getItem({
      label: 'Orders',
      key: '3',
      icon: <BiPurchaseTag />,
      onClick: () => navigate('/admin/order'),
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
