import React from 'react'
import { PlusOutlined } from '@ant-design/icons'
import { Flex, Form, Input, Typography, Upload } from 'antd'

export const RegisterProductFormComp = () => {
  return (
    <Form title={'Register new product'} layout={'vertical'}>
      <Form.Item>
        <Typography.Title level={2}>Insert new product</Typography.Title>
      </Form.Item>

      <Form.Item label="Product name">
        <Input />
      </Form.Item>
      <Form.Item label="Image upload">
        <Upload action="/upload.do" listType="picture-card">
          <Flex vertical align={'center'} gap={'0.5rem'}>
            <PlusOutlined />
            Upload
          </Flex>
        </Upload>
      </Form.Item>
    </Form>
  )
}
