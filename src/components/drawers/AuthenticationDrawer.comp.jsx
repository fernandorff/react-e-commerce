import React from 'react'
import { Drawer } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { closeLoginDrawer } from '../../redux/slices/LoginDrawer.slice.js'
import { LoginFormComp } from '../forms/LoginForm.comp.jsx'
import { RegisterFormComp } from '../forms/RegisterForm.comp.jsx'

export const AuthenticationDrawerComp = () => {
  const isLoginDrawerOpen = useSelector(
    (state) => state.loginDrawer.openLoginDrawer
  )

  const isLoginFormSelected = useSelector(
    (state) => state.loginDrawer.showLoginForm
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
