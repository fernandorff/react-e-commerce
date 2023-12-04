import React, { useEffect, useState } from 'react'
import { Button, Flex, Form, Image, Input, Table, Typography } from 'antd'
import { useGetProductsQuery } from '../../redux/api/ProductApi.jsx'
import { useGetStockByProductIdQuery } from '../../redux/api/StockApi.jsx'

const StockInfoComp = ({ productId, usePrice }) => {
  const { data, isLoading, isError, error, refetch } =
    useGetStockByProductIdQuery(productId, {})

  if (isLoading) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>N/A</span>
  }

  const valueToDisplay = usePrice ? `$ ${data?.price}` : data?.availableAmount

  return <span>{valueToDisplay ?? 'N/A'}</span>
}

export const ProductListTableComp = () => {
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      sorter: true,
      width: '4rem',
      render: (id) => (
        <Flex justify={'center'} align={'center'}>
          <Typography.Title level={5}>{id}</Typography.Title>
        </Flex>
      ),
    },
    {
      title: 'Picture',
      dataIndex: 'imageUrl',
      width: '8rem',
      render: (imageUrl) => (
        <Image src={imageUrl} alt="User" className={'h-16 rounded'} />
      ),
    },
    {
      title: 'Name',
      dataIndex: 'name',
      sorter: true,
      render: (name) => `${name}`,
    },
    {
      title: 'Description',
      dataIndex: 'description',
      sorter: true,
      render: (description) => `${description}`,
    },
    {
      title: 'Stock amount',
      dataIndex: 'id',
      sorter: true,
      render: (id) => (
        <Form>
          <Flex vertical gap={'0.5rem'}>
            <StockInfoComp productId={id} />
            <Form.Item>
              <Input className={'w-16'} />
              <Button>Save</Button>
            </Form.Item>
          </Flex>
        </Form>
      ),
    },
    {
      title: 'Price',
      dataIndex: 'id',
      sorter: true,
      render: (id) => (
        <Form>
          <Flex vertical gap={'0.5rem'}>
            <StockInfoComp usePrice productId={id} />
            <Form.Item>
              <Input className={'w-16'} />
              <Button>Save</Button>
            </Form.Item>
          </Flex>
        </Form>
      ),
    },
  ]

  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  })
  const { data, isLoading, isError, error, refetch } = useGetProductsQuery()

  console.log(data)
  console.log(isLoading)

  useEffect(() => {
    refetch() // Initial data fetching
  }, [refetch])

  const handleTableChange = (pagination, filters, sorter) => {
    setTableParams({
      pagination,
      filters,
      ...sorter,
    })

    // `dataSource` is useless since `pageSize` changed
    if (pagination.pageSize !== tableParams.pagination?.pageSize) {
      setData([])
    }
  }
  return (
    <Table
      size={'large'}
      columns={columns}
      className={'my-8'}
      rowKey={(record) => record.id}
      dataSource={data}
      pagination={tableParams.pagination}
      loading={isLoading}
      onChange={handleTableChange}
    />
  )
}
