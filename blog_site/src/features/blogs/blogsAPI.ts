import axios from "../utils/axios";

export const getBlogs = async () => {
  const response = await axios.get("/blogs");
  const data = response.data;
  return data;
};
