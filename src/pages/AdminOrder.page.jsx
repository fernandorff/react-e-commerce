import React from 'react'
import { Flex, Typography } from 'antd'
import { OrderTableComp } from '../components/table/OrderTable.comp.jsx'

export const AdminOrderPage = () => {
  return (
    <Flex vertical className={'p-8'}>
      <Typography.Title level={2}>Orders</Typography.Title>
      <OrderTableComp />
    </Flex>
  )
}
