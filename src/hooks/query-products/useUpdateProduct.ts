import { productsApi } from "@/api/product-api";
import { InfoProduct } from "@/types/product.type";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import useToastMessage from "../userToastMessgases";

export const useUpdateProduct = () => {
  const { toastSuccess, toastError } = useToastMessage();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: async ({ id, data }: { id: string; data: InfoProduct }) => {
      return (await productsApi.update(id, data)).data;
    },
    onSuccess: (data) => {
      queryClient.refetchQueries({ queryKey: ["products"] });
      toastSuccess("Cập nhật sản phẩm thành công");
      navigate("/admin/products");
    },
    onError: (error) => {
      toastError("Cập nhật sản phẩm thất bại");
    },
  });
};
