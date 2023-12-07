import React, { useState } from 'react'
import { Button, Flex, Image, Table, Typography } from 'antd'
import {
  useDeleteProductByIdMutation,
  useGetProductsQuery,
} from '../../redux/api/ProductApi.jsx'
import { useNavigate } from 'react-router-dom'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import toast from 'react-hot-toast'

export const ProductTableComp = () => {
  const navigate = useNavigate()
  const notify = (message) => toast(message)

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
        <Image src={imageUrl} alt="Product" className={'h-16 rounded'} />
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
      title: 'Actions',
      dataIndex: 'id',
      sorter: true,
      render: (id) => (
        <Flex
          justify={'center'}
          vertical={true}
          align={'center'}
          gap={'0.5rem'}
        >
          <Button
            icon={<EditOutlined />}
            onClick={() => navigate('manage/' + id)}
          >
            Manage
          </Button>
          <Button
            danger={true}
            icon={<DeleteOutlined />}
            onClick={() => handleDelete(id)}
            disabled={deleteProductByIdIsLoading}
          >
            Delete
          </Button>
        </Flex>
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

  const handleTableChange = (pagination, filters, sorter) => {
    setTableParams({
      pagination,
      filters,
      ...sorter,
    })
  }

  const [
    deleteProductById,
    {
      isLoading: deleteProductByIdIsLoading,
      isError: deleteProductByIdIsError,
      error: deleteProductByIdError,
    },
  ] = useDeleteProductByIdMutation()

  const handleDelete = async (id) => {
    try {
      const result = await deleteProductById(id)
      notify('Product deleted')
      refetch()
    } catch (error) {
      notify(error?.data?.message)
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
