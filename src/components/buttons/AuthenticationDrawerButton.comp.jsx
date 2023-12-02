import React from 'react'
import { Button } from 'antd'
import { AiOutlineUser } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { openLoginDrawer } from '../../redux/slices/LoginDrawer.slice.js'
import { closeCartDrawer } from '../../redux/slices/CartDrawer.slice.js'
import { AuthenticationDrawerComp } from '../drawers/AuthenticationDrawer.comp.jsx'

export const AuthenticationDrawerButtonComp = () => {
  const dispatch = useDispatch()

  const handleLoginDrawerToggle = () => {
    dispatch(closeCartDrawer())
    dispatch(openLoginDrawer())
  }

  return (
    <>
      <AuthenticationDrawerComp />
      <Button size={'large'} type="text" onClick={handleLoginDrawerToggle}>
        <AiOutlineUser size={'100%'} className={'text-white'} />
      </Button>
    </>
  )
}
