import React from 'react'
import { Button, Card, Image, Rate } from 'antd'
import PropTypes from 'prop-types'
import { AiOutlineShoppingCart } from 'react-icons/ai'

export const FeedProductCardComp = ({ product }) => {
  const loading = false
  return (
    <Card
      hoverable
      className={'w-60'}
      cover={
        <Image
          className={'p-4 h-52 object-cover rounded-3xl'}
          alt={product.description || ''}
          src={product.imageSrc || ''}
        />
      }
    >
      <Card.Meta
        title={`$ ${product.price}` || ''}
        description={product.description}
      />
      <Rate
        className={'mt-4'}
        allowHalf
        disabled
        defaultValue={product.rating}
      />
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
      id: PropTypes.string.isRequired,
      price: PropTypes.string,
      description: PropTypes.string,
      rating: PropTypes.string,
      imageSrc: PropTypes.string,
    })
  ),
}
