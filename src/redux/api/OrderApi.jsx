import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const BASE_URL = 'http://localhost:1111/'
export const OrderApi = createApi({
  reducerPath: 'OrderApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getAllOrders: builder.query({
      query: () => `order`,
    }),
    saveOrder: builder.mutation({
      query: (body) => ({
        url: 'order',
        method: 'POST',
        body,
      }),
    }),
  }),
})

export const { useGetAllOrdersQuery, useSaveOrderMutation } = OrderApi
