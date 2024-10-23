import { useMutation, useQueryClient } from "@tanstack/react-query";
import useToastMessage from "../userToastMessgases";
import { ErrorResponse, useNavigate } from "react-router-dom";
import { usersApi } from "@/api/uses-api";

export const useUpdateUser = () => {
  const queryClient = useQueryClient();
  const { toastSuccess, toastError } = useToastMessage();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async ({ _id, name }: { _id: string; name: string }) => {
      return (await usersApi.updateUser(_id, name)).data;
    },
    onSuccess: (response) => {
      toastSuccess("Cập nhật tài khoản thành công");
      queryClient.refetchQueries({ queryKey: ["users"] });
      navigate("/admin/users");
    },
    onError: (error: ErrorResponse) => {
      toastError("Cập nhật thất bại");
    },
  });
};
