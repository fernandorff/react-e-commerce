import React, { useEffect } from 'react'
import { Avatar, Flex, Layout, Typography } from 'antd'
import { NavbarComp } from '../components/navs/Navbar.comp.jsx'
import { GeneralFooterComp } from '../components/footers/GeneralFooter.comp.jsx'
import { ProductListComp } from '../components/lists/ProductList.comp.jsx'
import toast from 'react-hot-toast'

export const HomePage = () => {
  const notify = (orderData) =>
    toast(
      <Flex vertical>
        <Typography.Title level={5}>
          Someone just bought the following items. Check it Out!
        </Typography.Title>
        {orderData.orderItems.map((item, index) => (
          <Flex
            className={'bg-gray-100 my-2 p-4'}
            justify={'space-between'}
            align={'center'}
          >
            <Flex gap={'1rem'} align={'center'}>
              <Avatar className={'w-12 h-12'} src={item.productImageUrl} />
              <Typography className={'m-2'}>
                {item.productName} <br />
                Quantity: {item.purchasedQuantity}
              </Typography>
            </Flex>
            <Typography.Title level={4}>${item.price}</Typography.Title>
          </Flex>
        ))}
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
      eventSource.close()
    }

    return () => {
      eventSource.close()
    }
  }, [])

  return (
    <Layout className={'bg-slate-50 justify-between min-h-screen'}>
      <NavbarComp />
      <Layout className={'flex-grow'}>
        <ProductListComp />
      </Layout>
      <GeneralFooterComp />
    </Layout>
  )
}
