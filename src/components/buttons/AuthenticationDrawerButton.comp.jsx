import React from 'react'
import { Button } from 'antd'
import { useDispatch } from 'react-redux'
import { AuthenticationDrawerComp } from '../drawers/AuthenticationDrawer.comp.jsx'
import { AiOutlineUser } from 'react-icons/ai'
import {
  closeCartDrawer,
  openLoginDrawer,
} from '../../redux/slices/drawer.slice.js'

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
