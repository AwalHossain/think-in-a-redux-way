import axios from "../utils/axios";

export const getBlogs = async (filter: string, sort: string) => {
  let queryString = "";

  // Apply filter
  if (filter !== "all") {
    queryString += `?isSaved_like=${true}`;
  }

  // Apply sort
  console.log(queryString,'filter');
  
  // Apply sort
  if (sort === "newest") {
    queryString += `?${queryString ? "&" : ""}_sort=newest`;
  } else if (sort === "most_liked") {
    queryString += `?${queryString ? "&" : ""}_sort=most_liked`;
  }

  const response = await axios.get(`/blogs${queryString}`);
  const data = response.data;
  return data;
};
