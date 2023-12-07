import React from 'react'
import { Avatar, Card, Flex, Table } from 'antd'
import { useGetAllOrdersQuery } from '../../redux/api/OrderApi.jsx'

export const OrderTableComp = () => {
  const { data, isLoading, isError, error, refetch } = useGetAllOrdersQuery()

  const columns = [
    {
      title: 'Img',
      dataIndex: 'productImageUrl',
      key: 'productImageUrl',
      render: (productImageUrl) => <Avatar src={productImageUrl} />,
    },
    {
      title: 'Name',
      dataIndex: 'productName',
      key: 'productName',
    },
    {
      title: 'Product ID',
      dataIndex: 'productId',
      key: 'stockId',
    },
    {
      title: 'Stock ID',
      dataIndex: 'stockId',
      key: 'stockId',
    },
    {
      title: 'Quantity',
      dataIndex: 'purchasedQuantity',
      key: 'purchasedQuantity',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      render: (text) => `$${text}`,
    },
  ]

  return (
    <Flex vertical>
      {data?.map((order, orderIndex) => (
        <Card
          title={`Order ID: ${order.id}`}
          key={order.id}
          vertical
          className={'mb-4 shadow'}
        >
          <Table
            dataSource={order.orderItems}
            columns={columns}
            rowKey={(record) => record.id}
            pagination={false}
          />
        </Card>
      ))}
    </Flex>
  )
}
