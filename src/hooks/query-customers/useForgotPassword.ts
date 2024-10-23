import { customersApi } from "@/api/customers-api";

import { Register } from "@/types/register.type";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import useToastMessage from "../userToastMessgases";

export const useForgotPassword = () => {
  const { toastSuccess, toastError } = useToastMessage();

  return useMutation({
    mutationFn: async (email: string) => {
      return (await customersApi.forgotPassword(email)).data;
    },
    onSuccess: (data) => {
      toastSuccess("Vui lòng kiểm tra hộp thư email xác thực");
    },
    onError: (error) => {
      toastError("Email không tồn tại");
      return error;
    },
  });
};
