import React from 'react'
import { Flex, Layout } from 'antd'
import { FeedProductCardComp } from '../cards/FeedProductCard.comp.jsx'
import { useGetActiveStocksQuery } from '../../redux/api/StockApi.jsx'

export const ProductListComp = () => {
  const { data, isLoading, isError, error, refetch } = useGetActiveStocksQuery()
  return (
    <Layout>
      <Layout.Content className={'p-4'}>
        <Flex wrap="wrap" gap="middle">
          {data?.map((stock, index) => (
            <FeedProductCardComp
              key={index}
              productId={stock.productId}
              stock={stock}
            />
          ))}
        </Flex>
      </Layout.Content>
    </Layout>
  )
}
