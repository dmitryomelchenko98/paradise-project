import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "./product/product.api";

const reducer = {
  [productApi.reducerPath]: productApi.reducer,
};

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});

export type TypeRootState = ReturnType<typeof store.getState>;
