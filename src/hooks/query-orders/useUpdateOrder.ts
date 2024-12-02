import { ordersApi } from "@/api/orders-api";
import { ErrorResponse } from "@/types/error.type";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useUpdateOrder = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ _id, status }: { _id: string; status: boolean }) => {
      return (await ordersApi.updateStatus(_id, status)).data;
    },
    onSuccess: (response) => {
      queryClient.refetchQueries({ queryKey: ["orders"] });
    },
    onError: (error: ErrorResponse) => error,
  });
};
