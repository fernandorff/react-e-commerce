import React from 'react'
import { Menu } from 'antd'
import {
  CalendarOutlined,
  LogoutOutlined,
  MailOutlined,
  SettingOutlined,
} from '@ant-design/icons'
import { useDispatch } from 'react-redux'
import { logout } from '../../redux/slices/LoggedUser.slice.js'

function getItem({ label, key, icon, onClick }) {
  return {
    key,
    icon,
    label,
    onClick,
  }
}

export const UserProfileMenuComp = () => {
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout())
    window.location.reload()
  }

  const items = [
    getItem({ label: 'My purchases', key: '1', icon: <MailOutlined /> }),
    getItem({
      label: 'My personal data',
      key: '2',
      icon: <CalendarOutlined />,
    }),
    getItem({
      label: 'My reviews',
      key: '3',
      icon: <SettingOutlined />,
    }),
    getItem({
      label: 'Logout',
      key: '4',
      icon: <LogoutOutlined />,
      onClick: handleLogout,
    }),
  ]

  return (
    <Menu
      style={{
        width: '100%',
      }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      items={items}
    />
  )
}
