import React from 'react'
import { Button, Card, Image } from 'antd'
import PropTypes from 'prop-types'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useGetStockByProductIdQuery } from '../../redux/api/StockApi.jsx'

export const FeedProductCardComp = ({ product }) => {
  const { data, isLoading, isError, error, refetch } =
    useGetStockByProductIdQuery(product.id)

  console.log(data)

  const { id, name, description, imageUrl } = product
  return (
    data && (
      <Card
        key={id}
        hoverable
        className={'w-60'}
        cover={
          <Image
            className={'p-4 h-52 object-cover rounded-3xl'}
            alt={description || ''}
            src={imageUrl || ''}
          />
        }
      >
        <Card.Meta title={`$ ${name}` || ''} description={description} />
        {/*<Rate className={'mt-4'} allowHalf disabled defaultValue={rating} />*/}
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
  )
}

FeedProductCardComp.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      description: PropTypes.string,
      rating: PropTypes.number,
      imageUrl: PropTypes.string,
    })
  ),
}
