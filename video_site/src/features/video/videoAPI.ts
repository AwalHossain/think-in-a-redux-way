import axios from "../../utils/axios";

export const getVideo = async (id: string | undefined) => {
  const response = await axios.get(`/videos/${id}`);
  return response.data;
};
