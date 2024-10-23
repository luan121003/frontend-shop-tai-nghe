import { useMutation, useQueryClient } from "@tanstack/react-query";
import useToastMessage from "../userToastMessgases";
import { productsApi } from "@/api/product-api";

export const useAddExtraImage = () => {
  const { toastSuccess, toastError } = useToastMessage();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ id, data }: { id: string; data: File[] }) => {
      return (await productsApi.addExtraImages(id, data)).data;
    },
    onSuccess: (data) => {
      queryClient.refetchQueries({ queryKey: ["product", data] });
      queryClient.refetchQueries({ queryKey: ["products"] });
      toastSuccess("Thêm ảnh phụ sản phẩm thành công");
    },
    onError: (error) => {
      toastError("Thay đổi ảnh sản phẩm thất bại");
    },
  });
};
