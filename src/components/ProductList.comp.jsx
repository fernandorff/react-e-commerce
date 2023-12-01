import React from 'react'
import {Flex, Layout} from 'antd'
import productListMockData from '../__mock-data/mock-product-list-data.json'
import {ProductCardComp} from './ProductCard.comp.jsx'

export const ProductListComp = () => {
  return (
    <Layout>
      <Layout.Content className={'p-4'}>
        <Flex wrap="wrap" gap="middle">
          {productListMockData.map((product) => (
            <ProductCardComp product={product} />
          ))}
        </Flex>
      </Layout.Content>
    </Layout>
  )
}
