import React from 'react'
import { Layout } from 'antd'
import { NavbarComp } from '../components/Navbar.comp.jsx'
import { SiderFilters } from '../components/SiderFilters.comp.jsx'
import { GeneralFooterComp } from '../components/GeneralFooter.comp.jsx'
import { ProductListComp } from '../components/ProductList.comp.jsx'
import { LoginDrawerFeat } from '../features/LoginDrawer.feat.jsx'

export const HomePage = () => {
  return (
    <Layout className={'bg-slate-50 justify-between min-h-screen'}>
      <LoginDrawerFeat />
      <NavbarComp />
      <Layout className={'flex-grow'}>
        <SiderFilters />
        <ProductListComp />
      </Layout>
      <GeneralFooterComp />
    </Layout>
  )
}
