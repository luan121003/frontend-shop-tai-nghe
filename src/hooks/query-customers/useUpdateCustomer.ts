import { customersApi } from "@/api/customers-api";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import useToastMessage from "../userToastMessgases";
import { UpdateCustomer } from "@/types/customers.type";

export const useUpdateCustomer = () => {
  const queryClient = useQueryClient();
  const { toastSuccess, toastError } = useToastMessage();

  return useMutation({
    mutationFn: async (data: UpdateCustomer) => {
      return (await customersApi.update(data)).data;
    },
    onSuccess: (data) => {
      toastSuccess("Cập nhật khách hàng thành công!");
      queryClient.refetchQueries({ queryKey: ["customer-me"] });
    },
    onError: (error) => {
      toastError("Cập nhật khách hàng thất bại!");
      return error;
    },
  });
};
