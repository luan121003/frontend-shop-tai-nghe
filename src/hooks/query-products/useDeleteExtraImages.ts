import { useMutation, useQueryClient } from "@tanstack/react-query";
import useToastMessage from "../userToastMessgases";
import { productsApi } from "@/api/product-api";

export const useDeleteExtraImages = () => {
  const { toastSuccess, toastError } = useToastMessage();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ id, data }: { id: string; data: string[] }) => {
      return (await productsApi.deleteExtraImages(id, data)).data;
    },
    onSuccess: (data) => {
      queryClient.refetchQueries({ queryKey: ["product", data] });
      queryClient.refetchQueries({ queryKey: ["products"] });
      toastSuccess("Xoá ảnh phụ thành công");
    },
    onError: (error) => {
      toastError(error.message);
    },
  });
};
