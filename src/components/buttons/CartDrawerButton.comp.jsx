import React from 'react'
import { Button } from 'antd'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import {
  closeCartDrawer,
  openCartDrawer,
} from '../../redux/slices/CartDrawer.slice.js'
import { CartDrawerFeat } from '../drawers/CartDrawer.feat.jsx'

export const CartDrawerButtonComp = () => {
  const dispatch = useDispatch()

  const handleCartDrawerToggle = () => {
    dispatch(closeCartDrawer())
    dispatch(openCartDrawer())
  }

  return (
    <>
      <CartDrawerFeat />
      <Button size={'large'} type="text" onClick={handleCartDrawerToggle}>
        <AiOutlineShoppingCart
          size={'100%'}
          className={'text-gray-200 hover:text-white transition ease-in-out'}
        />
      </Button>
    </>
  )
}
