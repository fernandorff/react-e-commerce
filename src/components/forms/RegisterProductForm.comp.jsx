import React, { useState } from 'react'
import { PlusOutlined } from '@ant-design/icons'
import { Button, Flex, Form, Input, Modal, Typography, Upload } from 'antd'
import { useCreateProductMutation } from '../../redux/api/ProductApi.jsx'

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = (error) => reject(error)
  })

export const RegisterProductFormComp = () => {
  const [createProduct, { isLoading, isError, error }] =
    useCreateProductMutation()

  const [previewOpen, setPreviewOpen] = useState(false)
  const [previewImage, setPreviewImage] = useState('')
  const [previewTitle, setPreviewTitle] = useState('')
  const [fileList, setFileList] = useState([])

  const handleCancel = () => setPreviewOpen(false)
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj)
    }
    setPreviewImage(file.url || file.preview)
    setPreviewOpen(true)
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf('/') + 1)
    )
  }
  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList)

  const onSubmitCreateProductForm = async (values) => {
    values.imageFileBase64 = fileList[0]?.thumbUrl?.split(',')[1]
    console.log(values)

    const { data } = await createProduct(values)

    console.log(data)
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <Form
      title={'Register new product'}
      layout={'vertical'}
      onFinish={onSubmitCreateProductForm}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item>
        <Typography.Title level={2}>Insert new product</Typography.Title>
      </Form.Item>

      <Form.Item label="Product name" name={'name'}>
        <Input />
      </Form.Item>
      <Form.Item label="Product description" name={'description'}>
        <Input.TextArea />
      </Form.Item>
      <Form.Item name="file" label="Image upload">
        <Upload
          action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
          listType="picture-card"
          onPreview={handlePreview}
          fileList={fileList}
          onChange={handleChange}
          maxCount={1}
        >
          <Flex vertical align={'center'} gap={'0.5rem'}>
            <PlusOutlined />
            Upload
          </Flex>
        </Upload>
        <Modal
          open={previewOpen}
          title={previewTitle}
          footer={null}
          onCancel={handleCancel}
        >
          <img
            alt="example"
            style={{
              width: '100%',
            }}
            src={previewImage}
          />
        </Modal>
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          size={'large'}
          className="w-full font-bold"
          loading={isLoading}
        >
          Create Product
        </Button>
      </Form.Item>
    </Form>
  )
}
