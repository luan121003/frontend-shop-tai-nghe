import { useMutation, useQueryClient } from "@tanstack/react-query";
import useToastMessage from "../userToastMessgases";
import { useCategoryStore } from "@/store/useCategory";
import { categoriesApi } from "@/api/categories.-api";
import { ErrorResponse } from "@/types/error.type";

export const useDeleteCategory = () => {
  const queryClient = useQueryClient();
  const { toastSuccess, toastError } = useToastMessage();
  const { setModalDelete } = useCategoryStore();

  return useMutation({
    mutationFn: async (_id: string) => {
      return (await categoriesApi.delete(_id)).data;
    },
    onSuccess: (response) => {
      toastSuccess("Xoá danh mục thành công");
      queryClient.refetchQueries({ queryKey: ["categories"] });
      queryClient.refetchQueries({ queryKey: ["categories-name"] });
      setModalDelete(false);
    },
    onError: (error: ErrorResponse) => {
      toastError("Xoá danh mục thất bại");
      return error;
    },
  });
};
