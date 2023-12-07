import React, { useEffect } from 'react'
import { Badge, Button, Drawer, Flex, Typography } from 'antd'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import {
  closeCartDrawer,
  openCartDrawer,
} from '../../redux/slices/Drawer.slice.js'
import { CartProductCardComp } from '../cards/CartProductCard.comp.jsx'
import { setShoppingCart } from '../../redux/slices/ShoppingCart.slice.js'
import { useSaveOrderMutation } from '../../redux/api/OrderApi.jsx'
import toast from 'react-hot-toast'

export const CartDrawerComp = () => {
  const isCartDrawerOpen = useSelector((state) => state.drawer.isCartDrawerOpen)
  const dispatch = useDispatch()
  const shoppingCart = useSelector((state) => state.shoppingCart.shoppingCart)
  const [saveOrder, { isLoading: isSavingOrder, error: savingOrderError }] =
    useSaveOrderMutation()
  const notifyError = (message) => toast(message)

  useEffect(() => {
    if (savingOrderError) {
      const notifyError = (message) => toast(message)
      notifyError(savingOrderError.data?.message)
    }
  }, [savingOrderError])

  const handleCartDrawerToggle = () => {
    if (isCartDrawerOpen) {
      dispatch(closeCartDrawer())
    } else {
      dispatch(openCartDrawer())
    }
  }

  const handleCloseCartDrawer = () => {
    dispatch(closeCartDrawer())
  }

  const handleClearCart = () => {
    localStorage.removeItem('shoppingCart')
    dispatch(setShoppingCart({ orderItems: [] }))
    dispatch(closeCartDrawer())
  }

  const calculateTotalValue = () => {
    return shoppingCart?.orderItems?.reduce((total, orderItem) => {
      return total + orderItem.price * orderItem.purchasedQuantity
    }, 0)
  }

  const handleCompleteOrder = async () => {
    const orderDate = new Date()
    await saveOrder(shoppingCart, orderDate)

    dispatch(setShoppingCart({ orderItems: [], orderDate: null }))
    dispatch(closeCartDrawer())
  }

  return (
    <>
      <Badge
        count={shoppingCart?.orderItems?.length || 0}
        offset={[-10, 10]}
        showZero
      >
        <Button size={'large'} type="text" onClick={handleCartDrawerToggle}>
          <AiOutlineShoppingCart
            size={'100%'}
            className={'text-gray-200 hover:text-white transition ease-in-out'}
          />
        </Button>
      </Badge>
      <Drawer
        title="Shopping Cart"
        width={'30rem'}
        onClose={handleCloseCartDrawer}
        open={isCartDrawerOpen}
      >
        <Flex vertical className={'gap-2'}>
          {shoppingCart?.orderItems?.map((orderItem) => (
            <CartProductCardComp key={orderItem.id} orderItem={orderItem} />
          ))}
          {shoppingCart?.orderItems?.length > 0 && (
            <Flex align={'end'} vertical gap={'1rem'} className={'my-4'}>
              <Typography.Title level={3}>
                Total Value: $ {calculateTotalValue()}
              </Typography.Title>
              <Button
                className={'flex justify-center'}
                style={{ alignItems: 'center' }}
                type={'primary'}
                size={'large'}
                disabled={shoppingCart?.orderItems?.length === 0}
                onClick={handleCompleteOrder}
              >
                Complete purchase
              </Button>
              <Button
                className={'flex justify-center'}
                style={{ alignItems: 'center' }}
                type={'primary'}
                size={'large'}
                danger
                onClick={handleClearCart}
              >
                Clear cart
              </Button>
            </Flex>
          )}
        </Flex>
      </Drawer>
    </>
  )
}
