import React from 'react'
import { Button } from 'antd'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useDispatch } from 'react-redux'

import { CartDrawerComp } from '../drawers/CartDrawer.comp.jsx'
import {
  closeCartDrawer,
  openCartDrawer,
} from '../../redux/slices/drawer.slice.js'

export const CartDrawerButtonComp = () => {
  const dispatch = useDispatch()

  const handleCartDrawerToggle = () => {
    dispatch(closeCartDrawer())
    dispatch(openCartDrawer())
  }

  return (
    <>
      <CartDrawerComp />
      <Button size={'large'} type="text" onClick={handleCartDrawerToggle}>
        <AiOutlineShoppingCart
          size={'100%'}
          className={'text-gray-200 hover:text-white transition ease-in-out'}
        />
      </Button>
    </>
  )
}
