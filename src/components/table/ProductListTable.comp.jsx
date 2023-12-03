import React, { useEffect, useState } from 'react'
import qs from 'qs'
import { Image, Table } from 'antd'

const getRandomuserParams = (params) => ({
  results: params.pagination?.pageSize,
  page: params.pagination?.current,
  ...params,
})
export const ProductListTableComp = () => {
  const columns = [
    {
      title: 'Picture',
      dataIndex: 'picture',
      width: '8rem',
      render: (picture) => (
        <Image src={picture.large} alt="User" className={'h-16 rounded'} />
      ),
    },
    {
      title: 'Name',
      dataIndex: 'name',
      sorter: true,
      render: (name) => `${name.first} ${name.last}`,
    },
    {
      title: 'Stocks',
      dataIndex: 'registered',
      sorter: true,
      render: (registered) => `${registered.age}`,
    },
    {
      title: 'Sold',
      dataIndex: 'location',
      sorter: true,
      render: (location) => `${location.street.number}`,
    },
  ]

  const [data, setData] = useState()
  const [loading, setLoading] = useState(false)
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  })
  const fetchData = () => {
    setLoading(true)
    fetch(
      `https://randomuser.me/api?${qs.stringify(
        getRandomuserParams(tableParams)
      )}`
    )
      .then((res) => res.json())
      .then(({ results }) => {
        console.log(results)
        setData(results)
        setLoading(false)
        setTableParams({
          ...tableParams,
          pagination: {
            ...tableParams.pagination,
            total: 200,
            // 200 is mock data, you should read it from server
            // total: data.totalCount,
          },
        })
      })
  }

  useEffect(() => {
    fetchData()
  }, [JSON.stringify(tableParams)])
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
      className={'p-4'}
      columns={columns}
      rowKey={(record) => record.login.uuid}
      dataSource={data}
      pagination={tableParams.pagination}
      loading={loading}
      onChange={handleTableChange}
    />
  )
}
