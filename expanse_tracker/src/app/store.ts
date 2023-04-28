import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import transactionSlice from "../features/transaction/transactionSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    transaction: transactionSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
