import React from 'react'
import { LockOutlined } from '@ant-design/icons'
import { Button, Checkbox, Flex, Form, Input, Typography } from 'antd'
import { useDispatch, useSelector } from 'react-redux'

import { AiOutlineMail } from 'react-icons/ai'
import { login } from '../../redux/slices/LoggedUser.slice.js'
import { toggleisLoginFormShown } from '../../redux/slices/Drawer.slice.js'

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo)
}

const mockUserData = {
  id: '1',
  name: 'Fernando Rocha',
  email: 'fernandorocha@email.com',
  password: '123123',
  profileImgSrc:
    'https://media.licdn.com/dms/image/D4D03AQFz1EWM-BoJ1w/profile-displayphoto-shrink_800_800/0/1701125731406?e=1706745600&v=beta&t=fBKd2fnsO5CuDBZjBBcKVux9wSs1dWM24aDkDNcDgWg',
}

export const LoginFormComp = () => {
  const dispatch = useDispatch()

  const isLoginFormSelected = useSelector(
    (state) => state.drawer.isLoginFormShown
  )

  const onSubmitLoginForm = (values) => {
    const { email, password } = values

    if (email === mockUserData.email && password === mockUserData.password) {
      const user = { ...mockUserData }
      delete user.password
      dispatch(login(user))
      window.location.reload()
    } else {
      alert('Invalid credentials. Please try again.')
    }
  }

  const handleToggleisLoginFormShown = (event) => {
    console.log(isLoginFormSelected)
    event.preventDefault()
    dispatch(toggleisLoginFormShown())
  }

  return (
    <Form
      name="login"
      layout="vertical"
      initialValues={{
        remember: true,
      }}
      onFinish={onSubmitLoginForm}
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
            onClick={handleToggleisLoginFormShown}
          >
            Register now!
          </Button>
        </Flex>
      </Form.Item>
    </Form>
  )
}
