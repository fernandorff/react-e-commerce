import React from 'react'
import { Drawer } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { closeUserProfileDrawer } from '../../redux/slices/drawer.slice.js'
import { UserProfileMenuComp } from '../menus/UserProfileMenu.comp.jsx'

export const UserProfileDrawerComp = () => {
  const isLoginDrawerOpen = useSelector(
    (state) => state.drawer.isUserProfileDrawerOpen
  )

  const dispatch = useDispatch()

  const handleCloseUserProfileDrawer = () => {
    dispatch(closeUserProfileDrawer())
  }

  return (
    <Drawer
      title="User Menu"
      width={'20rem'}
      onClose={handleCloseUserProfileDrawer}
      open={isLoginDrawerOpen}
    >
      <UserProfileMenuComp />
    </Drawer>
  )
}
