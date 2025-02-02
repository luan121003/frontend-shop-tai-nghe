import { ErrorResponse } from "@/types/error.type";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import useToastMessage from "../userToastMessgases";
import { CreateCategory } from "@/types/categories.type";
import { categoriesApi } from "@/api/categories.-api";

export const useUpdateCategory = () => {
  const { toastError, toastSuccess } = useToastMessage();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: async ({
      _id,
      body,
    }: {
      _id: string;
      body: CreateCategory;
    }) => {
      return (await categoriesApi.update(_id, body)).data;
    },
    onSuccess: (data) => {
      toastSuccess("Cập nhật danh mục thành công");
      queryClient.refetchQueries({ queryKey: ["categories"] });
      queryClient.refetchQueries({ queryKey: ["categories-name"] });
      navigate("/admin/categories");
    },
    onError: (error: ErrorResponse) => {
      toastError("Cập nhật danh mục thất bại");
      return error;
    },
  });
};
