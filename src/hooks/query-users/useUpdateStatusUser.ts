import { usersApi } from "@/api/uses-api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ErrorResponse } from "react-router-dom";

export const useUpdateStatusUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ _id, status }: { _id: string; status: boolean }) => {
      return (await usersApi.updateStatus(_id, status)).data;
    },
    onSuccess: (response) => {
      queryClient.refetchQueries({ queryKey: ["users"] });
    },
    onError: (error: ErrorResponse) => error,
  });
};
