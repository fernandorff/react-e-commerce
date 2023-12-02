import React from 'react'
import { Drawer } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { LoginFormComp } from '../forms/LoginForm.comp.jsx'
import { RegisterFormComp } from '../forms/RegisterForm.comp.jsx'
import { closeLoginDrawer } from '../../redux/slices/drawer.slice.js'

export const AuthenticationDrawerComp = () => {
  const isLoginDrawerOpen = useSelector(
    (state) => state.drawer.isLoginDrawerOpen
  )

  const isLoginFormSelected = useSelector(
    (state) => state.drawer.isLoginFormShown
  )

  const dispatch = useDispatch()

  const handleCloseLoginDrawer = () => {
    dispatch(closeLoginDrawer())
  }

  return (
    <Drawer
      title="Authentication"
      width={'30rem'}
      onClose={handleCloseLoginDrawer}
      open={isLoginDrawerOpen}
    >
      {isLoginFormSelected ? <LoginFormComp /> : <RegisterFormComp />}
    </Drawer>
  )
}
