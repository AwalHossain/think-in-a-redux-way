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
    await getTransactions();
  }
);

export const addTransaction = createAsyncThunk(
  "transaction/addTransaction",
  async (transaction: Transaction) => {
    await saveTransaction(transaction);
  }
);

export const editTransaction = createAsyncThunk(
  "transaction/editTransaction",
  async (transaction: Transaction) => {
    await updateTransaction(transaction);
  }
);

export const deleteTransaction = createAsyncThunk(
  "transaction/deleteTransaction",
  async (id: number) => {
    await removeTransaction(id);
  }
);

const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {},
});
