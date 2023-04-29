import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `https://api.skrrteam.com/`,
});

axiosInstance.interceptors.request.use(
  function (config) {
    const accessToken = localStorage.getItem("accessToken"); // access 토큰을 가져오는 함수
    if (accessToken) {
      config.headers["Authorization"] = "Bearer " + accessToken;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosInstance;
