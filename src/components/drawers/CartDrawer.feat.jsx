import React from 'react'
import { Drawer, Flex } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { closeCartDrawer } from '../../redux/slices/CartDrawer.slice.js'
import productListMockData from '../../__mock-data/mock-product-list-data.json'
import { CartProductCardComp } from '../cards/CartProductCard.comp.jsx'

export const CartDrawerFeat = () => {
  const isCartDrawerOpen = useSelector(
    (state) => state.cartDrawer.openCartDrawer
  )

  const dispatch = useDispatch()

  const handleCloseCartDrawer = () => {
    dispatch(closeCartDrawer())
  }

  return (
    <Drawer
      title="Shopping Cart"
      width={'30rem'}
      onClose={handleCloseCartDrawer}
      open={isCartDrawerOpen}
    >
      <Flex vertical className={'gap-2'}>
        {productListMockData.map((product) => (
          <CartProductCardComp product={product} />
        ))}
      </Flex>
    </Drawer>
  )
}
