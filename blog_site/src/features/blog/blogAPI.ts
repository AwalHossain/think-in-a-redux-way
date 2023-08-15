// blog api

import axios from "../utils/axios";

export const getBlog = async (id: string | undefined) => {
  const response = await axios.get(`/blog/${id}`);
  const data = response.data;
  return data;
};
