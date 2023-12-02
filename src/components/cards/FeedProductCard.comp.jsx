import React from 'react'
import { Button, Card, Image, Rate } from 'antd'
import PropTypes from 'prop-types'
import { AiOutlineShoppingCart } from 'react-icons/ai'

export const FeedProductCardComp = ({ product }) => {
  const { id, price, description, rating, imageSrc } = product
  return (
    <Card
      key={id}
      hoverable
      className={'w-60'}
      cover={
        <Image
          className={'p-4 h-52 object-cover rounded-3xl'}
          alt={description || ''}
          src={imageSrc || ''}
        />
      }
    >
      <Card.Meta title={`$ ${price}` || ''} description={description} />
      <Rate className={'mt-4'} allowHalf disabled defaultValue={rating} />
      <Button
        className={'w-full mt-4 flex justify-center'}
        style={{ alignItems: 'center' }}
        type={'primary'}
        icon={<AiOutlineShoppingCart />}
      >
        Add to cart
      </Button>
    </Card>
  )
}

FeedProductCardComp.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      price: PropTypes.string,
      description: PropTypes.string,
      rating: PropTypes.number,
      imageSrc: PropTypes.string,
    })
  ),
}
