import React from 'react'
import { Flex, Layout, Typography } from 'antd'
import { AuthenticationDrawerButtonComp } from '../buttons/AuthenticationDrawerButton.comp.jsx'
import { UserProfileDrawerButtonComp } from '../buttons/UserProfileDrawerButton.comp.jsx'

export const AdminNavBarComp = () => {
  const userData = JSON.parse(localStorage.getItem('user'))

  return (
    <Layout.Header
      className={
        'shadow-xl bg-gray-600 flex justify-between align-middle h-20 gap-2'
      }
      style={{ alignItems: 'center' }}
    >
      <Flex className={'h-full p-4'}>
        {/*<Image className={'h-full my-auto'} src={logo} alt={'logo'} />*/}
      </Flex>
      <Typography.Title level={2} className={'text-white'}>
        Administrator
      </Typography.Title>
      <Flex>
        {userData ? (
          <UserProfileDrawerButtonComp />
        ) : (
          <AuthenticationDrawerButtonComp />
        )}
      </Flex>
    </Layout.Header>
  )
}
