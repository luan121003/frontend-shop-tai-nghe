import { Config } from "./../../node_modules/tailwind-merge/src/lib/types";
import { LocalUtils } from "@/utils/local-utils";
import { config } from "process";
import axios from "axios";

const axiosClient = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  baseURL: "http://localhost:3000/",
});

axiosClient.interceptors.request.use((config) => {
  const local = LocalUtils.getLocalToken();

  if (local && !config.headers.Authorization) {
    config.headers.Authorization = `Bearer ${local}`;
  }

  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    throw error.response.data;
  }
);

export default axiosClient;
