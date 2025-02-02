import { ParamPagination } from "@/types/pagination.type";
import axiosClient from "./axios-client";
import { Login } from "@/types/login.types";
import { Register } from "@/types/register.type";
import { UpdateCustomer } from "@/types/customers.type";

export const customersApi = {
  getAll(params: ParamPagination) {
    const url = "/customers";
    return axiosClient(true).get(url, { params });
  },
  login(body: Login) {
    const url = "/customers/login";
    return axiosClient(false).post(url, body);
  },
  register(body: Register) {
    const url = "/customers/register";
    return axiosClient(false).post(url, body);
  },
  getMe() {
    const url = "/customers/me";
    return axiosClient(false).get(url);
  },

  forgotPassword(email: string) {
    const url = "/customers/forgot_password";
    return axiosClient(false).post(url, { email });
  },
  resetPassword(token: string, password: string) {
    const url = "/customers/reset_password";
    return axiosClient(false).post(url, { token, password });
  },

  update(body: UpdateCustomer) {
    const url = "/customers/me";
    return axiosClient(true).put(url, body);
  },

  updateStatus(_id: string, status: boolean) {
    const url = `/customers/${_id}/status`;
    return axiosClient(true).put(url, {}, { params: { status } });
  },
};
