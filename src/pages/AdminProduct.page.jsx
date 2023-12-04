import React from 'react'
import { ProductListTableComp } from '../components/table/ProductListTable.comp.jsx'
import { Flex } from 'antd'
import { RegisterProductModalComp } from '../components/modal/RegisterProductModal.comp.jsx'

export const AdminProductPage = () => {
  return (
    <Flex vertical>
      <Flex justify={'end'}>
        <RegisterProductModalComp />
      </Flex>
      <ProductListTableComp />
    </Flex>
  )
}
