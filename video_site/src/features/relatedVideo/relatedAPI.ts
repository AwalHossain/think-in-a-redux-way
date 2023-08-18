import axios from "../../utils/axios";

export const getRelatedVideo = async (id: string, tags: string[]) => {
  const limit = 5;
  let queryString =" "
  if (tags?.length > 0) {
    queryString += tags.map((tag) => `tags_like=${tag}`).join("&")  +
    `&_id_ne=${id}`;
  }
  const response = await axios.get(`/videos?${queryString}`);
  return response.data;
};
