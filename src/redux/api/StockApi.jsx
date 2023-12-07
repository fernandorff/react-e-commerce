import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const BASE_URL = 'http://localhost:3333/'
export const StockApi = createApi({
  reducerPath: 'StockApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getStocks: builder.query({
      query: () => `stock`,
    }),
    getActiveStocks: builder.query({
      query: () => `stock/active`,
    }),
    getStocksByProductId: builder.query({
      query: (id) => `stock/by-product-id/${id}`,
    }),
    getFirstCheapestAvailableStockByProductId: builder.query({
      query: (id) => `stock/by-product-id/first-cheapest-available/${id}`,
    }),
    createStock: builder.mutation({
      query: (newStock) => ({
        url: 'stock',
        method: 'POST',
        body: newStock,
      }),
    }),
    deleteStockById: builder.mutation({
      query: (id) => ({
        url: `stock/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
})

export const {
  useGetStocksQuery,
  useGetActiveStocksQuery,
  useGetStocksByProductIdQuery,
  useGetFirstCheapestAvailableStockByProductIdQuery,
  useCreateStockMutation,
  useDeleteStockByIdMutation,
} = StockApi
