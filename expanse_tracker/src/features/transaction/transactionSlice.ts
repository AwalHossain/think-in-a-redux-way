import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getTransactions,
  removeTransaction,
  saveTransaction,
  updateTransaction,
} from "./transactionAPI";

interface Transaction {
  id: number;
  text: string;
  amount: number;
}

interface TransactionState {
  transactions: Transaction[];
  loading: boolean;
  error: string | null;
}

const initialState: TransactionState = {
  transactions: [],
  loading: false,
  error: null,
};

// export const fetch

export const fetchTransactions = createAsyncThunk(
  "transaction/fetchTransactions",
  async () => {
    const transactions = await getTransactions();
    return transactions;
  }
);

export const addTransaction = createAsyncThunk(
  "transaction/addTransaction",
  async (transaction: Transaction) => {
    const newTransaction = await saveTransaction(transaction);
    return newTransaction;
  }
);

export const editTransaction = createAsyncThunk(
  "transaction/editTransaction",
  async (transaction: Transaction) => {
    const updatedTransaction = await updateTransaction(transaction);
    return updatedTransaction;
  }
);

export const deleteTransaction = createAsyncThunk(
  "transaction/deleteTransaction",
  async (id: number) => {
    const deletedTransaction = await removeTransaction(id);
    return deletedTransaction;
  }
);

const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTransactions.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTransactions.fulfilled, (state, action) => {
        state.loading = false;
        state.transactions = action.payload;
      })
      .addCase(fetchTransactions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? null;
      })
      .addCase(addTransaction.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addTransaction.fulfilled, (state, action) => {
        state.loading = false;
        state.transactions.push(action.payload);
      })
      .addCase(addTransaction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? null;
      })
      .addCase(editTransaction.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(editTransaction.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.transactions.findIndex(
          (transaction) => transaction.id === action.payload.id
        );
        if (index !== -1) {
          state.transactions[index] = action.payload;
        }
      })
      .addCase(editTransaction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? null;
      })
      .addCase(deleteTransaction.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteTransaction.fulfilled, (state, action) => {
        state.loading = false;
        state.transactions = state.transactions.filter(
          (transaction) => transaction.id !== action.payload.id
        );
      })
      .addCase(deleteTransaction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? null;
      });
  },
});

export default transactionSlice.reducer;
// export {}
