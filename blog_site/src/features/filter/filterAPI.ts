import axios from "../utils/axios";

export const getFilterTags = async () => {
  const response = await axios.get(`/blogs/`);
  const data = response.data;
  return data;
};
