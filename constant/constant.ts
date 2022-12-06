import axios from "axios";
export const baseApi = axios.create({
  baseURL: "https://thanhan-baotang.vercel.app",
  timeout: 35000,
});
