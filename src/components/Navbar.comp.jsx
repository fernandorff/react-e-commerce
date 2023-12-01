import React from 'react'
import {Button, Flex, Input, Layout} from 'antd'
import {AiOutlineShoppingCart, AiOutlineUser} from 'react-icons/ai'


export const NavbarComp = () => {
  const onSearch = (value, _e, info) => console.log(info?.source, value)

  return (
    <Layout.Header className={'shadow-xl bg-slate-900 flex justify-center align-middle h-20 gap-2'} style={{alignItems: 'center'}}>
      <Flex className={'h-full p-4'}>
        <img
            className={'h-full'}
          src={'paradis.png'}
          alt={'logo'}
        />
      </Flex>

      <Input.Search
        placeholder="input search text"
        allowClear
        size={'large'}
        enterButton
        onSearch={onSearch}
        className={'w-1/2 m-auto'}
      />

      <Button
        size={'large'}
        type="text"
      >
        <AiOutlineShoppingCart size={'100%'} className={'text-gray-200 hover:text-white transition ease-in-out'}/>
      </Button>
      <Button
        size={'large'}
        type="text"
      >
        <AiOutlineUser size={'100%'} className={'text-white'}/>
      </Button>
    </Layout.Header>
  )
}
