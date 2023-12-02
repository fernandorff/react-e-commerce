import React from 'react'
import { Flex, Layout } from 'antd'
import productListMockData from '../../__mock-data/mock-product-list-data.json'
import { FeedProductCardComp } from '../cards/FeedProductCard.comp.jsx'

export const ProductListComp = () => {
  return (
    <Layout>
      <Layout.Content className={'p-4'}>
        <Flex wrap="wrap" gap="middle">
          {productListMockData.map((product, index) => (
            <FeedProductCardComp key={index} product={product} />
          ))}
        </Flex>
      </Layout.Content>
    </Layout>
  )
}
