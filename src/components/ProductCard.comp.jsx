import React from 'react'
import { Button, Card, Rate } from 'antd'
import PropTypes from 'prop-types'
import { AiOutlineShoppingCart } from 'react-icons/ai'

export const ProductCardComp = ({ product }) => {
  return (
    <Card
      hoverable
      className={'w-60'}
      cover={
        <img
          className={'h-52 object-cover'}
          alt={product.price || ''}
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

ProductCardComp.propTypes = {
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
