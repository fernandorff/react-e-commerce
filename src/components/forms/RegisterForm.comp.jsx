import React from 'react'
import { LockOutlined } from '@ant-design/icons'
import { Button, Flex, Form, Input, Typography } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { AiOutlineMail } from 'react-icons/ai'
import { toggleisLoginFormShown } from '../../redux/slices/drawer.slice.js'

const onFinish = (values) => {
  alert('aaaaa')
  console.log('Success:', values)
}
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo)
}

export const RegisterFormComp = () => {
  const dispatch = useDispatch()

  const isLoginFormSelected = useSelector(
    (state) => state.drawer.isLoginFormShown
  )

  const handleToggleisLoginFormShown = (event) => {
    console.log(isLoginFormSelected)
    event.preventDefault()
    dispatch(toggleisLoginFormShown())
  }

  return (
    <Form
      name="register"
      layout="vertical"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item>
        <Typography.Title level={2} cent>
          Create Account
        </Typography.Title>
      </Form.Item>
      <Form.Item
        name="register-email"
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
        <Button
          type="primary"
          htmlType="submit"
          size={'large'}
          className="w-full font-bold"
        >
          Create Account
        </Button>
      </Form.Item>
      <Form.Item>
        <Flex justify={'end'} align={'center'}>
          <Typography className={'mx-2'}>Already have and account?</Typography>
          <Button
            type={'text'}
            className={'font-bold'}
            onClick={handleToggleisLoginFormShown}
          >
            Login now!
          </Button>
        </Flex>
      </Form.Item>
    </Form>
  )
}
