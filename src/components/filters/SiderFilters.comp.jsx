import React from 'react'
import { Button, Flex, Layout, Typography } from 'antd'

export const SiderFilters = () => {
  return (
    <Layout.Sider
      width={'20rem'}
      className={'bg-slate-100 border-e-2 border-slate-200'}
    >
      <Flex
        gap="small"
        vertical
        className={'bg-slate-50 p-8 shadow-xl m-4 rounded-3xl'}
      >
        <Typography className={'text-3xl text-center'}>Filtros</Typography>
        <Button>Default Button</Button>
        <Button type="dashed">Dashed Button</Button>
        <Button type="text">Text Button</Button>
        <Button type="link">Link Button</Button>
      </Flex>
    </Layout.Sider>
  )
}
