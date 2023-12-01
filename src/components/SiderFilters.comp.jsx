import React from 'react'
import {Button, Flex, Layout, Typography} from 'antd'

export const SiderFilters = () => {
  return (
    <Layout.Sider width={'20rem'} className={'bg-slate-50 p-8 shadow-xl m-4 rounded-3xl'}>
        <Flex gap="small" vertical>
            <Typography className={'text-3xl text-center'}>Filtros</Typography>
          <Button>Default Button</Button>
          <Button type="dashed">Dashed Button</Button>
          <Button type="text">Text Button</Button>
          <Button type="link">Link Button</Button>
        </Flex>
    </Layout.Sider>
  )
}
