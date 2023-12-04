import React from 'react'
import { Flex, Layout } from 'antd'
import { FeedProductCardComp } from '../cards/FeedProductCard.comp.jsx'
import { useGetProductsQuery } from '../../redux/api/ProductApi.jsx'

export const ProductListComp = () => {
  const { data, isLoading, isError, error, refetch } = useGetProductsQuery()
  return (
    <Layout>
      <Layout.Content className={'p-4'}>
        <Flex wrap="wrap" gap="middle">
          {data?.map((product, index) => (
            <FeedProductCardComp key={index} product={product} />
          ))}
        </Flex>
      </Layout.Content>
    </Layout>
  )
}
