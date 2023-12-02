import React from 'react'
import { Flex, Input, Layout } from 'antd'
import { AuthenticationDrawerComp } from '../drawers/AuthenticationDrawer.comp.jsx'
import { AuthenticationDrawerButtonComp } from '../buttons/AuthenticationDrawerButton.comp.jsx'
import { CartDrawerButtonComp } from '../buttons/CartDrawerButton.comp.jsx'

export const NavbarComp = () => {
  const onSearch = (value, _e, info) => console.log(info?.source, value)

  return (
    <Layout.Header
      className={
        'shadow-xl bg-slate-900 flex justify-center align-middle h-20 gap-2'
      }
      style={{ alignItems: 'center' }}
    >
      <AuthenticationDrawerComp />
      <Flex className={'h-full p-4'}>
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
      <AuthenticationDrawerButtonComp />
    </Layout.Header>
  )
}
