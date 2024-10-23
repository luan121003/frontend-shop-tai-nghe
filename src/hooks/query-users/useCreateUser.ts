import { usersApi } from "@/api/uses-api";
import { CreateUser } from "@/types/user.type";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ErrorResponse, useNavigate } from "react-router-dom";
import useToastMessage from "../userToastMessgases";

export const useCreateUser = () => {
  const queryClient = useQueryClient();
  const { toastSuccess, toastError } = useToastMessage();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (body: CreateUser) => {
      return (await usersApi.createUser(body)).data;
    },
    onSuccess: (response) => {
      toastSuccess("Tạo người dùng thành công");
      queryClient.refetchQueries({ queryKey: ["users"] });
      navigate("/admin/users");
    },
    onError: (error: ErrorResponse) => {
      toastError("Tạo người dùng thất bại");
      return error;
    },
  });
};
