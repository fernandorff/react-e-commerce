import React, { useState } from 'react'
import { Card, Flex, Modal, Typography } from 'antd'
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai'
import toast from 'react-hot-toast'
import { EditStockModalComp } from '../modal/EditStockModal.comp.jsx'
import { useDeleteStockByIdMutation } from '../../redux/api/StockApi.jsx'
import { DeleteOutlined } from '@ant-design/icons'

export const StockCardManageableComp = ({ stock, refetchStockData }) => {
  const [
    deleteStockById,
    { isLoading: deleteStockIsLoading, error: deleteStockError },
  ] = useDeleteStockByIdMutation()

  const notify = (message) => toast(message)

  async function handleDeleteStockById() {
    try {
      const res = await deleteStockById(stock.id)
      if (res.data) {
        notify('Stock deleted')
        refetchStockData()
      }
      if (res.error) {
        notify(res.error.data.message)
      }
    } catch (error) {
      notify('Error deleting stock')
    }
  }

  const [openConfirmDeleteModal, setOpenConfirmDeleteModal] = useState(false)

  const showConfirmDeleteModal = () => {
    setOpenConfirmDeleteModal(true)
  }

  const hideConfirmDeleteModal = () => {
    setOpenConfirmDeleteModal(false)
  }

  return (
    <Card
      className={'w-80'}
      title={`Stock ID: ${stock.id}`}
      actions={[
        <>
          <Modal
            warningType="danger"
            title={
              <>
                <DeleteOutlined className={'text-red-600 me-4'} />
                <span className={'text-red-600'}>
                  Do you really want to delete this stock? ID: {stock.id}
                </span>
              </>
            }
            open={openConfirmDeleteModal}
            onOk={handleDeleteStockById}
            onCancel={hideConfirmDeleteModal}
            okText="Confirm"
            cancelText="Cancel"
          >
            <p>This action is irreversible!</p>
          </Modal>
          <DeleteOutlined
            key="ellipsis"
            disabled={deleteStockIsLoading}
            onClick={showConfirmDeleteModal}
            className={'text-red-600'}
          />
          <span className={'text-red-600'} onClick={showConfirmDeleteModal}>
            Delete
          </span>
        </>,
        <EditStockModalComp
          editStockObject={stock}
          refetchStockData={refetchStockData}
        />,
      ]}
    >
      <Flex vertical={true} key={stock.id}>
        <Card.Meta
          className={'mb-4'}
          avatar={
            <Flex vertical={true} align={'center'}>
              {stock.isActive ? (
                <>
                  <Typography className={'text-green-600'}>Active</Typography>
                  <AiOutlineCheckCircle className={'text-3xl text-green-600'} />
                </>
              ) : (
                <>
                  <Typography className={'text-red-600'}>Stopped</Typography>
                  <AiOutlineCloseCircle className={'text-3xl text-red-600'} />
                </>
              )}
            </Flex>
          }
          title={`Price: $ ${stock.price}`}
          description={`Cost: $ ${stock.cost}`}
        />
        <Card.Meta description={`${stock.description}`} className={'my-2'} />
        <Card.Meta
          description={`Available amount: ${stock.availableAmount}`}
          className={'my-2'}
        />
      </Flex>
    </Card>
  )
}
