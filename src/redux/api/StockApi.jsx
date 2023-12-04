import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const BASE_URL = 'http://localhost:3333/'
export const StockApi = createApi({
  reducerPath: 'StockApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getStocks: builder.query({
      query: () => `stock`,
    }),
    getStockByProductId: builder.query({
      query: (id) => `stock/by-product-id/${id}`,
    }),
  }),
})

export const { useGetStocksQuery, useGetStockByProductIdQuery } = StockApi
