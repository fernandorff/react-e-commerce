import React, { useEffect } from 'react'
import { Flex, Layout, Typography } from 'antd'
import { NavbarComp } from '../components/navs/Navbar.comp.jsx'
import { GeneralFooterComp } from '../components/footers/GeneralFooter.comp.jsx'
import { ProductListComp } from '../components/lists/ProductList.comp.jsx'
import { CartDrawerComp } from '../components/drawers/CartDrawer.comp.jsx'
import { useGetAllOrdersQuery } from '../redux/api/OrderApi.jsx'
import toast from 'react-hot-toast'

export const HomePage = () => {
  const { data, isLoading, isError, error, refetch } = useGetAllOrdersQuery()
  console.log(data)

  // Received Data: {"id":0,"orderItems":[{"id":0,"stockId":2,"productId":3,"price":555.99,"purchasedQuantity":12}],"orderDate":"2023-12-04T15:10:59.088"}
  const notify = (orderData) =>
    toast(
      <Flex vertical>
        <Typography.Title level={5}>
          Someone just bought the following items. Check it Out!
        </Typography.Title>
        <ul>
          {orderData.orderItems.map((item, index) => (
            <li key={index}>
              Stock ID: {item.stockId}, Product ID: {item.productId}, Price: $
              {item.price}, Quantity: {item.purchasedQuantity}
            </li>
          ))}
        </ul>
      </Flex>
    )

  useEffect(() => {
    const eventSource = new EventSource(
      'http://localhost:1111/order/subscribe/complete-orders'
    )

    eventSource.onmessage = (event) => {
      const orderData = JSON.parse(event.data)
      notify(orderData)
    }

    eventSource.onerror = (error) => {
      console.error('EventSource failed:', error)
      eventSource.close()
    }

    return () => {
      eventSource.close()
    }
  }, [])

  return (
    <Layout className={'bg-slate-50 justify-between min-h-screen'}>
      <CartDrawerComp />
      <NavbarComp />
      <Layout className={'flex-grow'}>
        <ProductListComp />
      </Layout>
      <GeneralFooterComp />
    </Layout>
  )
}
