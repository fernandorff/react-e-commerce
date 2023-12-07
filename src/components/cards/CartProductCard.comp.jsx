import React, { useEffect, useState } from 'react'
import { Button, Card, Flex, Image, InputNumber } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteOutlined } from '@ant-design/icons'
import { setShoppingCart } from '../../redux/slices/ShoppingCart.slice.js'

export const CartProductCardComp = ({ orderItem }) => {
  const dispatch = useDispatch()
  const shoppingCart = useSelector((state) => state.shoppingCart.shoppingCart)

  const {
    id,
    description,
    productName,
    price,
    productImageUrl,
    purchasedQuantity,
    stockId,
  } = orderItem

  const [quantity, setQuantity] = useState(purchasedQuantity)
  const [totalPrice, setTotalPrice] = useState(price * purchasedQuantity)

  useEffect(() => {
    setQuantity(purchasedQuantity)
    setTotalPrice(price * purchasedQuantity)
  }, [purchasedQuantity, price])

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity)
    setTotalPrice(price * newQuantity)

    const updatedOrderItem = { ...orderItem, purchasedQuantity: newQuantity }

    const updatedCart = {
      ...shoppingCart,
      orderItems: shoppingCart.orderItems.map((item) =>
        item.stockId === stockId ? { ...updatedOrderItem } : item
      ),
    }

    dispatch(setShoppingCart(updatedCart))
  }

  const handleDeleteItem = () => {
    const updatedCart = {
      ...shoppingCart,
      orderItems: shoppingCart.orderItems.filter(
        (item) => item.stockId !== stockId
      ),
    }

    dispatch(setShoppingCart(updatedCart))
  }

  return (
    <Card className={'w-full shadow'}>
      <Flex justify={'space-between'} align={'center'}>
        <Flex>
          <Image
            className={'h-24 object-cover '}
            alt={description}
            src={productImageUrl}
          />
          <Flex vertical className={'mx-2'}>
            <h3>{productName}</h3>
            <p>Price: $ {price}</p>
            <p>Total: $ {totalPrice}</p>
          </Flex>
        </Flex>

        <Flex vertical gap={'1rem'} className={'ms-2'}>
          <InputNumber
            size={'large'}
            defaultValue={quantity}
            min={1}
            className={'w-16'}
            onChange={(newQuantity) => handleQuantityChange(newQuantity)}
          />
          <Button onClick={handleDeleteItem}>
            <DeleteOutlined />
          </Button>
        </Flex>
      </Flex>
    </Card>
  )
}
