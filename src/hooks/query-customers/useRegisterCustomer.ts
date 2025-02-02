import { customersApi } from "@/api/customers-api";

import { Register } from "@/types/register.type";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import useToastMessage from "../userToastMessgases";

export const useRegisterCustomer = () => {
  const { toastSuccess, toastError } = useToastMessage();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (body: Register) => {
      return (await customersApi.register(body)).data;
    },
    onSuccess: (data) => {
      toastSuccess("Đăng ký thành công");
      navigate("/login");
    },
    onError: (error) => {
      toastError("Name đã tồn tại");
      return error;
    },
  });
};
