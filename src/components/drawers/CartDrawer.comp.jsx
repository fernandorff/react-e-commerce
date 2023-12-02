import React from 'react'
import { Button, Drawer, Flex } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import productListMockData from '../../__mock-data/mock-product-list-data.json'
import { CartProductCardComp } from '../cards/CartProductCard.comp.jsx'
import { closeCartDrawer } from '../../redux/slices/drawer.slice.js'

export const CartDrawerComp = () => {
  const isCartDrawerOpen = useSelector((state) => state.drawer.isCartDrawerOpen)

  const dispatch = useDispatch()

  const handleCloseCartDrawer = () => {
    dispatch(closeCartDrawer())
  }

  const renderProductCards = () => {
    if (
      !Array.isArray(productListMockData) ||
      productListMockData.length === 0
    ) {
      return null
    }

    return productListMockData.map((product) => (
      <CartProductCardComp key={product.id} product={product} />
    ))
  }

  return (
    <Drawer
      title="Shopping Cart"
      width={'30rem'}
      onClose={handleCloseCartDrawer}
      open={isCartDrawerOpen}
    >
      <Flex>
        <Button
          className={'w-full my-4 flex justify-center'}
          style={{ alignItems: 'center' }}
          type={'primary'}
          size={'large'}
        >
          Complete purchase
        </Button>
      </Flex>
      <Flex vertical className={'gap-2'}>
        {renderProductCards()}
        {productListMockData?.length && (
          <Flex justify={'end'}>
            <Button
              className={'my-4 flex justify-center'}
              style={{ alignItems: 'center' }}
              type={'primary'}
              size={'large'}
              danger
            >
              Clear cart
            </Button>
          </Flex>
        )}
      </Flex>
    </Drawer>
  )
}
