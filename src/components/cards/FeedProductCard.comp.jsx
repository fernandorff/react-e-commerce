import React from 'react'
import { Button, Card, Image } from 'antd'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { useGetProductByIdQuery } from '../../redux/api/ProductApi.jsx'
import { setShoppingCart } from '../../redux/slices/ShoppingCart.slice'

export const FeedProductCardComp = ({ productId, stock }) => {
  const { data } = useGetProductByIdQuery(productId)
  const dispatch = useDispatch()
  const shoppingCart = useSelector((state) => state.shoppingCart.shoppingCart)

  const existingCartItemIndex = shoppingCart.orderItems.findIndex(
    (item) => item.stockId === stock?.id
  )

  const isAddedToCart = existingCartItemIndex !== -1

  const addToCart = () => {
    if (isAddedToCart) {
      return
    }

    const newCartItem = {
      stockId: stock?.id,
      productId: data?.id,
      productName: data?.name,
      productDescription: data?.description,
      productImageUrl: data?.imageUrl,
      price: stock?.price,
      purchasedQuantity: 1,
    }

    const updatedShoppingCart = {
      ...shoppingCart,
      orderItems: [...(shoppingCart.orderItems || []), newCartItem],
    }

    dispatch(setShoppingCart(updatedShoppingCart))
  }

  return (
    data && (
      <Card
        key={data?.id}
        className={'w-60 h-full m-4 shadow'}
        cover={
          <Image
            className={'h-52 object-cover '}
            alt={data?.description}
            src={data?.imageUrl}
          />
        }
        actions={[
          <Button
            className={'justify-center align-center'}
            style={{ alignItems: 'center' }}
            type={'primary'}
            icon={<AiOutlineShoppingCart />}
            onClick={addToCart}
            disabled={isAddedToCart}
          >
            {isAddedToCart ? 'Added' : 'Add to cart'}
          </Button>,
        ]}
      >
        <Card.Meta
          className={'mb-auto'}
          title={`$ ${stock?.price}`}
          description={
            <>
              <strong>{data?.name}</strong>
              <br />
              {data?.description}
            </>
          }
        />
      </Card>
    )
  )
}
