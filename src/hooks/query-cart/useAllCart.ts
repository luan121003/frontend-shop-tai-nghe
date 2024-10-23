import { ErrorResponse } from "@/types/error.type";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import useToastMessage from "../userToastMessgases";
import { cartsApi } from "@/api/cart-api";

export const useAddCart = () => {
  const { toastSuccess, toastError } = useToastMessage();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async ({
      product_id,
      quantity,
      size,
    }: {
      product_id: string;
      quantity: number;
      size: string;
    }) => {
      return (await cartsApi.addCart(product_id, quantity, size))?.data;
    },
    onSuccess: (data) => {
      queryClient.refetchQueries({ queryKey: ["cart"] });
      toastSuccess("Cập nhật sản phẩm thành công");
    },
    onError: (error: ErrorResponse) => {
      if (error.statusCode == 401) {
        toastError("Bạn vui lòng đăng nhập");
        navigate("/login");
        return error;
      }
      toastError("Cập nhật sản phẩm thất bại");
      return error;
    },
  });
};
