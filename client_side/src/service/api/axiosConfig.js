import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5430/api/",
  withCredentials: true, // Pastikan backend mengizinkan credentials jika ini digunakan
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json" // Tambahkan Accept header untuk memastikan server menerima JSON
  },
});

// Interceptor untuk logging request & response (opsional)
API.interceptors.request.use((config) => {
  return config;
}, (error) => {
  return Promise.reject(error);
});

API.interceptors.response.use((response) => {
  console.log("✅ Response received:", response);
  return response;
}, (error) => {
  if (error.response) {
    console.error("❌ API Error:", error.response.data);
  } else {
    console.error("❌ Network Error:", error.message);
  }
  return Promise.reject(error);
});

export default API;
