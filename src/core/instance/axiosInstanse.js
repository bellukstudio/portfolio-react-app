import axios from "axios";

// Utility function to safely retrieve tokens in a browser-only context
const getToken = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("jwtToken");
  }
  return null;
};

// Initialize axios instance
const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${getToken()}`,
  },
});

// Request interceptor to dynamically add token and handle logic
axiosInstance.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(new Error(error.message || "Request error"));
  }
);

// Response interceptor to handle global errors and responses
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const customError = new Error(error.message || "Response error");
    customError.stack = error.stack;

    if (error.response && error.response.status === 401) {
      console.error("Unauthorized - Please log in again.");
      // Optional: redirect to login or clear stored token
    }

    return Promise.reject(customError);
  }
);

export default axiosInstance;
