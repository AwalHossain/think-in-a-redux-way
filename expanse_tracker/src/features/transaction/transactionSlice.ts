import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getTransactions,
  removeTransaction,
  saveTransaction,
  updateTransaction,
} from "./transactionAPI";

export interface TransactionInterface {
  id: number;
  name: string;
  type: string;
  amount: number;
}

interface TransactionState {
  transactions: TransactionInterface[];
  loading: boolean;
  error: string | null;
  editing: TransactionInterface;
}

const initialState: TransactionState = {
  transactions: [],
  loading: false,
  error: null,
  editing: {
    id: 0,
    name: "",
    type: "",
    amount: 0,
  },
};

interface UpdateTransac {
  transaction: TransactionInterface;
  id: number;
}

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
  async (transaction: TransactionInterface) => {
    const newTransaction = await saveTransaction(transaction);
    return newTransaction;
  }
);

export const editTransaction = createAsyncThunk(
  "transaction/editTransaction",
  async (transaction: TransactionInterface) => {
    console.log(transaction, "is it here");

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
  reducers: {
    editingActive: (state, action) => {
      state.editing = action.payload;
    },
    editingInactive: (state, action) => {
      state.editing = {
        id: 0,
        name: "",
        type: "",
        amount: 0,
      };
    },
  },
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
          (transaction) => transaction.id !== action.meta.arg
        );
      })
      .addCase(deleteTransaction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? null;
      });
  },
});

export default transactionSlice.reducer;
export const { editingActive, editingInactive } = transactionSlice.actions;
