// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
  endpoints: (builder) => ({


    getAllProducts: builder.query({
      query: (name) => 'products',
    }),

    deleteSingleProduct: builder.mutation({
      query:(id)=>({
         url: `products/${id}`,
         method: 'POST',
      })
   }),
   
   addProduct: builder.mutation({
      query:(data)=>({
         url: '/products',
         method: 'POST',
         body: data
      })
   }),

  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllProductsQuery, useAddProductMutation, useDeleteSingleProductMutation } = productApi