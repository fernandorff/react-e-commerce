import React from 'react'
import { Card, Flex, Layout } from 'antd'
import { GeneralFooterComp } from '../components/GeneralFooter.comp.jsx'
import { LoginFormFeat } from '../features/LoginForm.feat.jsx'

export const LoginPage = () => {
  return (
    <Layout className={'bg-slate-800 justify-between min-h-screen'}>
      <Layout.Content className={'flex-grow justify-center ali'}>
        <Flex className={'h-20 justify-center m-8'}>
          <img className={'h-full'} src={'paradis.png'} alt={'logo'} />
        </Flex>

        <Flex className={'justify-center'}>
          <Card className={'w-96'}>
            <LoginFormFeat />
          </Card>
        </Flex>
      </Layout.Content>
      <GeneralFooterComp />
    </Layout>
  )
}
