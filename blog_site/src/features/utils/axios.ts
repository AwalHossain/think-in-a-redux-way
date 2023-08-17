import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://blog-psi-orpin-57.vercel.app/",
});

export default axiosInstance;
