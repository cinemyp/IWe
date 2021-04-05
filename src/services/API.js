import * as axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://localhost:44382/api/users/",
});

export default axiosInstance;
