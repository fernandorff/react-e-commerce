import React from 'react'
import { ProductTableComp } from '../components/table/ProductTable.comp.jsx'
import { Flex, Typography } from 'antd'
import { RegisterProductModalComp } from '../components/modal/RegisterProductModal.comp.jsx'

export const AdminProductPage = () => {
  return (
    <Flex vertical className={'p-8'}>
      <Flex justify={'space-between'}>
        <Typography.Title level={2}>Products</Typography.Title>
        <RegisterProductModalComp />
      </Flex>
      <ProductTableComp />
    </Flex>
  )
}
