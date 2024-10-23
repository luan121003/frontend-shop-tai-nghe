import { customersApi } from "@/api/customers-api";

import { ErrorResponse } from "@/types/error.type";

import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import useToastMessage from "../userToastMessgases";
import { Login } from "@/types/login.types";
import { LocalUtils } from "@/utils/local-utils";

export const useCustomerLogin = () => {
  const { toastSuccess, toastError } = useToastMessage();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (body: Login) => {
      return (await customersApi.login(body)).data;
    },
    onSuccess: (data) => {
      toastSuccess("Đăng nhập thành công!");
      LocalUtils.setLocalToken(data);
      navigate("/");
    },
    onError: (error: any) => {
      if (error.statusCode === 401) {
        toastError(error.message);
        return error;
      }
      toastError("Đăng nhập thất bại");
      return error;
    },
  });
};
