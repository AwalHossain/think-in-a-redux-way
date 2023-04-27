import axios from "../../utils/axios";

export const fetchTransactions = async () => {
  const response = await axios.get("/transactions");
  return response.data;
};

export const addTransaction = async (transaction: any) => {
  const response = await axios.post("/transactions", transaction);
  return response.data;
};

export const updateTransaction = async (transaction: any) => {
  const response = await axios.put(
    `/transactions/${transaction.id}`,
    transaction
  );
  return response.data;
};

export const deleteTransaction = async (id: number) => {
  const response = await axios.delete(`/transactions/${id}`);
  return response.data;
};
