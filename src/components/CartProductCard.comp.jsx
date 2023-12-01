import React from 'react'
import { Card, Col, Image, InputNumber, Row } from 'antd'
import PropTypes from 'prop-types'

export const CartProductCardComp = ({ product }) => {
  const { id, price, description, rating, imageSrc } = product

  return (
    <Card className={'w-full'}>
      <Row gutter={[16, 16]}>
        <Col span={8}>
          <Image src={imageSrc} alt={description} />
        </Col>
        <Col span={12}>
          <h3>{description}</h3>
          <p>Price: {price}</p>
          <p>Total value: {rating}</p>
        </Col>
        <Col span={4} className="flex items-center justify-end">
          <InputNumber defaultValue={1} min={1} />
        </Col>
      </Row>
    </Card>
  )
}

CartProductCardComp.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    price: PropTypes.string,
    description: PropTypes.string,
    rating: PropTypes.string,
    imageSrc: PropTypes.string,
  }),
}
