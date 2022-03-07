import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IProduct } from './product.types';

export const productApi = createApi({
  reducerPath: 'products',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/',
    // prepareHeaders: (headers, { getState }) => {
    //   const token = (getState() as RootState).auth.token;
    //   if (token) {
    //     headers.set("authorization", `Bearer ${token}`);
    //   }
    //   return headers;
    // },
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<IProduct[], number>({ query: (id) => `products/?limit=${id}` }),
    addProduct: builder.mutation<IProduct, IProduct>({
      query: (example) => ({
        url: 'product',
        method: 'POST',
        body: example,
      }),
    }),
    removeProduct: builder.mutation<any, number>({
      query: (id) => ({
        url: `product/${id}`,
        method: 'DELETE',
      }),
    }),
    // ...endpoints
  }),
});

export const { useRemoveProductMutation, useAddProductMutation, useGetProductsQuery } = productApi;
