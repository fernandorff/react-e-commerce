import React from 'react'
import { ProductListTableComp } from '../components/table/ProductListTable.comp.jsx'
import { Flex, Typography } from 'antd'
import { RegisterProductModalComp } from '../components/modal/RegisterProductModal.comp.jsx'

export const AdminProductPage = () => {
  return (
    <Flex vertical className={'p-8'}>
      <Flex justify={'space-between'}>
        <Typography.Title level={4}>Registered Products</Typography.Title>
        <RegisterProductModalComp />
      </Flex>
      <ProductListTableComp />
    </Flex>
  )
}
