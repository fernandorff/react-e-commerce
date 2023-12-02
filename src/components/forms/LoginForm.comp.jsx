import React from 'react'
import { LockOutlined } from '@ant-design/icons'
import { Button, Checkbox, Flex, Form, Input, Typography } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { toggleShowLoginForm } from '../../redux/slices/LoginDrawer.slice.js'
import { AiOutlineMail } from 'react-icons/ai'

const onFinish = (values) => {
  console.log('Success:', values)
}
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo)
}

export const LoginFormComp = () => {
  const dispatch = useDispatch()

  const isLoginFormSelected = useSelector(
    (state) => state.loginDrawer.showLoginForm
  )

  const handleToggleShowLoginForm = (event) => {
    console.log(isLoginFormSelected)
    event.preventDefault()
    dispatch(toggleShowLoginForm())
  }

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
        <Typography.Title level={2}>Login</Typography.Title>
      </Form.Item>
      <Form.Item
        name="email"
        label={'E-mail'}
        rules={[
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input size={'large'} prefix={<AiOutlineMail />} placeholder="E-mail" />
      </Form.Item>
      <Form.Item
        name="password"
        label="Password"
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
        <Button
          type="primary"
          size={'large'}
          htmlType="submit"
          className="w-full font-bold"
        >
          Log in
        </Button>
      </Form.Item>
      <Form.Item>
        <Flex justify={'end'} align={'center'}>
          <Typography className={'mx-2'}>Don't have an account?</Typography>
          <Button
            type={'text'}
            className={'font-bold'}
            onClick={handleToggleShowLoginForm}
          >
            Register now!
          </Button>
        </Flex>
      </Form.Item>
    </Form>
  )
}
