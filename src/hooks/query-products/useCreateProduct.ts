import { create } from "zustand";

import { productsApi } from "@/api/product-api";
import { ErrorResponse } from "@/types/error.type";
import { CreateProduct } from "@/types/product.type";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import useToastMessage from "../userToastMessgases";

export const useCreateProduct = () => {
  const { toastSuccess, toastError } = useToastMessage();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (data: CreateProduct) => {
      return (await productsApi.create(data)).data;
    },
    onSuccess: (data) => {
      queryClient.refetchQueries({ queryKey: ["products"] });
      toastSuccess("Tạo product thành công");
      navigate("/admin/products");
    },
    onError: (error: ErrorResponse) => {
      if (error.statusCode === 422) {
        toastError("Name đã tồn tại");
      } else {
        toastError("Tạo thất bại");
      }
    },
  });
};
