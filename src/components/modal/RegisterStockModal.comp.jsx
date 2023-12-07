import React, { useEffect, useState } from 'react'
import { Button, Checkbox, Flex, Form, Input, Modal, Typography } from 'antd'
import toast from 'react-hot-toast'
import { useParams } from 'react-router-dom'
import { useCreateStockMutation } from '../../redux/api/StockApi.jsx'

export const RegisterStockModalComp = ({ refetchStockData }) => {
  const [form] = Form.useForm()
  const [open, setOpen] = useState(false)

  const { id: productId } = useParams()

  const [createStock, { isLoading, isError, error }] = useCreateStockMutation()

  const onSubmitCreateStockForm = async (values) => {
    values.productId = productId

    const { data } = await createStock(values)

    if (data) {
      toast.success('Stock created')
      form.resetFields()
      setOpen(false)
      refetchStockData()
    }
  }

  useEffect(() => {
    if (isError) {
      const notifyError = (message) => toast(message)
      notifyError(error.data?.message)
    }
  }, [isError])

  const showModal = () => {
    setOpen(true)
  }

  const handleCancel = () => {
    form.resetFields()
    setOpen(false)
  }

  return (
    <>
      <Button
        size={'large'}
        type="primary"
        onClick={showModal}
        className={'m-4'}
      >
        + New stock
      </Button>

      <Modal
        open={open}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Return
          </Button>,
        ]}
      >
        <Form
          title={'Register new stock'}
          layout={'vertical'}
          onFinish={onSubmitCreateStockForm}
          form={form}
        >
          <Form.Item>
            <Typography.Title level={3}>Insert new stock</Typography.Title>
          </Form.Item>

          <Flex justify={'space-between'} gap={'1rem'}>
            <Form.Item label="Price" name={'price'} required={true}>
              <Input addonBefore="$" />
            </Form.Item>
            <Form.Item label="Cost" name={'cost'} required={true}>
              <Input addonBefore="$" />
            </Form.Item>
            <Form.Item
              label="Quantity"
              name={'availableAmount'}
              required={true}
            >
              <Input />
            </Form.Item>
          </Flex>

          <Form.Item
            label="Stock description"
            name={'description'}
            required={true}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item name={'isActive'} valuePropName="checked">
            <Checkbox>Ready for sale</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              size={'large'}
              className="w-full font-bold"
              loading={isLoading}
            >
              Create Stock
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}
