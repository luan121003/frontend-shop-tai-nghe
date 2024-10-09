import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

import { usersApi } from "@/api/uses-api";
import { Login } from "@/types/login.types";
import { LocalUtils } from "@/utils/local-utils";
import { ErrorResponse } from "@/types/error.type";
import useToastMessage from "../userToastMessgases";

const useUserLogin = () => {
  const { toastSuccess, toastError } = useToastMessage();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: async (body: Login) => {
      return (await usersApi.login(body)).data;
    },
    onSuccess: (data) => {
      toastSuccess("Đăng nhập thành công");
      LocalUtils.setLocalToken(data);
      navigate("/admin");
    },
    onError: (error: ErrorResponse) => {
      toastError("Đăng nhập thất bại");
      return error;
    },
  });
};

export default useUserLogin;
