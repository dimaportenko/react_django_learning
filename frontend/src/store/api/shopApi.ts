import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {ProductType} from "../../products";

// Define a service using a base URL and expected endpoints
export const shopApi = createApi({
  reducerPath: 'shopApi',
  baseQuery: fetchBaseQuery({baseUrl: '/'}),
  endpoints: (builder) => ({
    getProducts: builder.query<ProductType[], void>({
      query: () => `products/`,
    }),
    getProduct: builder.query<ProductType, string>({
      query: (id) => `product/${id}`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useGetProductQuery, useGetProductsQuery} = shopApi