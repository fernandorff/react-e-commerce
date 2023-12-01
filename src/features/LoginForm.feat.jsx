import React from 'react'
import { Button, Checkbox, Flex, Form, Input, Typography } from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons'

const onFinish = (values) => {
  console.log('Success:', values)
}
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo)
}
export const LoginFormFeat = () => {
  return (
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
          Login
        </Typography.Title>
      </Form.Item>
      <Form.Item
        name="username"
        label={'Please insert your username'}
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input
          size={'large'}
          prefix={<UserOutlined />}
          placeholder="Username"
        />
      </Form.Item>
      <Form.Item
        name="password"
        label="Please insert your password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input.Password
          size={'large'}
          prefix={<LockOutlined />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Flex justify={'space-between'}>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="font-bold" href="">
            Forgot password
          </a>
        </Flex>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="w-full font-bold">
          Log in
        </Button>
      </Form.Item>
      <Form.Item>
        <Flex justify={'end'}>
          <Typography className={'mx-2'}>Don't have an account?</Typography>
          <Typography className={'font-bold'}>
            <a href="">Register now!</a>
          </Typography>
        </Flex>
      </Form.Item>
    </Form>
  )
}
