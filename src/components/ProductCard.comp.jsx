import React from 'react'
import {Card} from 'antd'
import PropTypes from 'prop-types'

export const ProductCardComp = ({ product }) => {
  return (
    <Card
      key={product.id}
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
    </Card>
  )
}

ProductCardComp.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      imageSrc: PropTypes.string,
    })
  ),
}
