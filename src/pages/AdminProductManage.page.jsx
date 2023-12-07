import React from 'react'
import { Card, Flex, Image } from 'antd'
import { useParams } from 'react-router-dom'
import { useGetStocksByProductIdQuery } from '../redux/api/StockApi.jsx'
import { useGetProductByIdQuery } from '../redux/api/ProductApi.jsx'
import { RegisterStockModalComp } from '../components/modal/RegisterStockModal.comp.jsx'
import { StockCardManageableComp } from '../components/cards/StockCardManageable.comp.jsx'

export const AdminProductManagePage = () => {
  const { id } = useParams()

  const {
    data: productData,
    isLoading: isProductLoading,
    isError: isProductError,
    error: productError,
    refetch: refetchProduct,
  } = useGetProductByIdQuery(id)

  const {
    data: stocksData,
    isLoading: isStocksLoading,
    isError: isStocksError,
    error: stocksError,
    refetch: refetchStocks,
  } = useGetStocksByProductIdQuery(id)

  return (
    <Flex vertical gap={'0.5rem'} className={'p-8'}>
      <Card title={'Product information'}>
        <Card.Meta
          avatar={<Image src={productData?.imageUrl} width={200} />}
          title={productData?.name}
          description={productData?.description}
        ></Card.Meta>
      </Card>

      <Flex justify={'start'}>
        <RegisterStockModalComp refetchStockData={refetchStocks} />
      </Flex>
      <Flex className={'flex-wrap gap-4'}>
        {stocksData?.map((stock) => (
          <StockCardManageableComp
            stock={stock}
            refetchStockData={refetchStocks}
          />
        ))}
      </Flex>
    </Flex>
  )
}
