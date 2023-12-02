import React from 'react'
import { Layout } from 'antd'
import { NavbarComp } from '../components/navs/Navbar.comp.jsx'
import { SiderFilters } from '../components/filters/SiderFilters.comp.jsx'
import { GeneralFooterComp } from '../components/footers/GeneralFooter.comp.jsx'
import { ProductListComp } from '../components/lists/ProductList.comp.jsx'
import { CartDrawerComp } from '../components/drawers/CartDrawer.comp.jsx'

export const HomePage = () => {
  return (
    <Layout className={'bg-slate-50 justify-between min-h-screen'}>
      <CartDrawerComp />
      <NavbarComp />
      <Layout className={'flex-grow'}>
        <SiderFilters />
        <ProductListComp />
      </Layout>
      <GeneralFooterComp />
    </Layout>
  )
}
