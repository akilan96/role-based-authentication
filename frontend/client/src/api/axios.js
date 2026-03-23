import axios from "axios";
import { refreshToken } from "./refreshToken.js";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,

  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshTokenData = localStorage.getItem("refreshToken")
        const res = await refreshToken(refreshTokenData)

        const newToken = res.accessToken;

        console.log("new access token by interceptor",res.accessToken);
        

        localStorage.setItem("token", newToken);

        originalRequest.headers.Authorization = `Bearer ${newToken}`;

        return api(originalRequest);

      } catch (err) {
        localStorage.removeItem("token");
         localStorage.removeItem("refreshToken");
          localStorage.removeItem("role");
        window.location.href = "/login";
      }
    }

    return Promise.reject(error);
  }
);

export default api;