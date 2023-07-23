import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import { api } from './feature/api/apiSlice';
import cartSlice from './feature/cart/cartSlice';
import productSlice from './feature/products/productSlice';

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    product: productSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
})



export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;