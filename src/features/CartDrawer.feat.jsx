import React from 'react'
import { Drawer, Form, Typography } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { closeCartDrawer } from '../redux/slices/CartDrawer.slice.js'

const onFinish = (values) => {
  console.log('Success:', values)
}
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo)
}

export const CartDrawerFeat = () => {
  const isLoginDrawerOpen = useSelector((state) => state.cartDrawer.open)

  const dispatch = useDispatch()

  const handleCloseCartDrawer = () => {
    dispatch(closeCartDrawer())
  }

  return (
    <Drawer
      title="Shopping Cart"
      width={'30rem'}
      onClose={handleCloseCartDrawer}
      open={isLoginDrawerOpen}
    >
      <Form
        name="login"
        layout="vertical"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item>
          <Typography.Title level={2} cent>
            Shopping Cart
          </Typography.Title>
        </Form.Item>
      </Form>
    </Drawer>
  )
}
