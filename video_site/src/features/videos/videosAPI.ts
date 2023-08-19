import axios from "../../utils/axios";
import { FilterProps } from "./videosSlice";

export const getVideos = async ({ tags, search, page, pageSize }: FilterProps) => {
  let queryString = "";
  if (tags?.length > 0) {
    queryString += tags.map((tag) => `tags_like=${tag}`).join("&");
  }
  console.log(queryString, "queryString");
  
  if (search !== "") {
    queryString += `&q=${search}`;
  }

  queryString += `&page=${page}&limit=${pageSize}`

  const response = await axios.get(`/videos?${queryString}`);
  console.log(response.data, "response.data");
  
  return response.data;
};
