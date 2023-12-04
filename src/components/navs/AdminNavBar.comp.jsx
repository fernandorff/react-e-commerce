import React from 'react'
import { Flex, Layout, Typography } from 'antd'
import { useNavigate } from 'react-router-dom'

export const AdminNavBarComp = () => {
  const userData = JSON.parse(localStorage.getItem('user'))
  const navigate = useNavigate()

  return (
    <Layout.Header
      className={
        'shadow-xl bg-gray-600 flex justify-between align-middle h-20 gap-2'
      }
      style={{ alignItems: 'center' }}
    >
      <Flex
        className={'h-full p-4 cursor-pointer'}
        onClick={() => navigate('/')}
      >
        <img className={'h-full'} src={'../paradis.png'} alt={'logo'} />
      </Flex>
      <Typography.Title level={2} className={'text-white'}>
        Administrator
      </Typography.Title>
      <div />
    </Layout.Header>
  )
}
