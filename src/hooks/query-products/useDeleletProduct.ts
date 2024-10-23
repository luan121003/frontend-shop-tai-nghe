import { ErrorResponse } from "@/types/error.type";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import useToastMessage from "../userToastMessgases";
import { productsApi } from "@/api/product-api";
import { useProductStore } from "@/store/useProductStore";

export const useDeleteProduct = () => {
  const { toastSuccess, toastError } = useToastMessage();
  const { setModalDelete } = useProductStore();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => {
      return (await productsApi.delete(id)).data;
    },
    onSuccess: (data) => {
      queryClient.refetchQueries({ queryKey: ["products"] });
      toastSuccess("Xoá sản phẩm thành công");
      setModalDelete(false);
    },
    onError: (error: ErrorResponse) => {
      toastError("Xoá sản phẩm thất bại");
    },
  });
};
