import axios from "../../utils/axios";
import { TransactionInterface } from "./transactionSlice";

export const getTransactions = async () => {
  const response = await axios.get("/transactions");
  return response.data;
};

export const saveTransaction = async (transaction: TransactionInterface) => {
  const response = await axios.post("/transactions", transaction);
  return response.data;
};

export const updateTransaction = async (transaction: TransactionInterface) => {
  console.log(transaction, "transaction");

  const response = await axios.patch(
    `/transactions/${transaction.id}`,
    transaction
  );
  return response.data;
};

export const removeTransaction = async (id: number) => {
  const response = await axios.delete(`/transactions/${id}`);
  return response.data;
};
