import React, { useEffect, useState } from 'react'
import { Button, Checkbox, Flex, Form, Input, Modal, Typography } from 'antd'
import toast from 'react-hot-toast'
import { useCreateStockMutation } from '../../redux/api/StockApi.jsx'
import { EditOutlined } from '@ant-design/icons'

export const EditStockModalComp = ({ refetchStockData, editStockObject }) => {
  const [form] = Form.useForm()
  const [open, setOpen] = useState(false)

  const [createStock, { isLoading, isError, error }] = useCreateStockMutation()

  const onSubmitCreateStockForm = async (values) => {
    if (editStockObject) {
      values.id = editStockObject.id
      values.productId = editStockObject.productId
    }

    const { data } = await createStock(values)

    if (data) {
      toast.success('Stock updated')
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
    setOpen(false)
  }

  useEffect(() => {
    if (editStockObject) {
      form.setFieldsValue({
        price: editStockObject.price,
        cost: editStockObject.cost,
        availableAmount: editStockObject.availableAmount,
        description: editStockObject.description,
        isActive: editStockObject.isActive,
      })
    }
  }, [editStockObject, showModal])

  return (
    <>
      <>
        <EditOutlined key="edit" onClick={showModal} />
        <span onClick={showModal}>Edit</span>
      </>

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
            {editStockObject ? (
              <Typography.Title level={2}>
                Edit stock with id: {editStockObject.id}
              </Typography.Title>
            ) : (
              <Typography.Title level={3}>Insert new stock</Typography.Title>
            )}
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
              Update Stock
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}
