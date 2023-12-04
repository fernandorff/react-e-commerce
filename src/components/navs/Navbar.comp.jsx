import React from 'react'
import { Flex, Input, Layout } from 'antd'
import { AuthenticationDrawerButtonComp } from '../buttons/AuthenticationDrawerButton.comp.jsx'
import { CartDrawerButtonComp } from '../buttons/CartDrawerButton.comp.jsx'
import { UserProfileDrawerButtonComp } from '../buttons/UserProfileDrawerButton.comp.jsx'
import { useNavigate } from 'react-router-dom'

export const NavbarComp = () => {
  const onSearch = (value, _e, info) => console.log(info?.source, value)
  const navigate = useNavigate()

  const userData = JSON.parse(localStorage.getItem('user'))

  return (
    <Layout.Header
      className={
        'shadow-xl bg-slate-900 flex justify-center align-middle h-20 gap-2'
      }
      style={{ alignItems: 'center' }}
    >
      <Flex
        className={'h-full p-4 cursor-pointer'}
        onClick={() => navigate('/admin')}
      >
        <img className={'h-full'} src={'paradis.png'} alt={'logo'} />
      </Flex>
      <Input.Search
        placeholder="input search text"
        allowClear
        size={'large'}
        enterButton
        onSearch={onSearch}
        className={'w-1/2 m-auto'}
      />
      <CartDrawerButtonComp />
      {userData ? (
        <UserProfileDrawerButtonComp />
      ) : (
        <AuthenticationDrawerButtonComp />
      )}
    </Layout.Header>
  )
}
