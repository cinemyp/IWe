import * as axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://localhost:44382/",
});

export default axiosInstance;
