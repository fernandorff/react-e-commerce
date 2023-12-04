import React, { useState } from 'react'
import { Button, Modal } from 'antd'
import { RegisterProductFormComp } from '../forms/RegisterProductForm.comp.jsx'

export const RegisterProductModalComp = () => {
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false)
  const showModal = () => {
    setOpen(true)
  }
  const handleOk = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setOpen(false)
    }, 3000)
  }
  const handleCancel = () => {
    setOpen(false)
  }
  return (
    <>
      <Button type="primary" onClick={showModal}>
        + New product
      </Button>
      <Modal
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Return
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={loading}
            onClick={handleOk}
          >
            Submit
          </Button>,
        ]}
      >
        <RegisterProductFormComp />
      </Modal>
    </>
  )
}
