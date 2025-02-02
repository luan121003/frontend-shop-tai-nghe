import { blogsApi } from "@/api/blogs-api";

import { useBlogStore } from "@/store/useBlogStore";
import { ErrorResponse } from "@/types/error.type";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import useToastMessage from "../userToastMessgases";

export const useDeleteBlog = () => {
  const queryClient = useQueryClient();
  const { toastSuccess, toastError } = useToastMessage();
  const { setModalDelete } = useBlogStore();
  return useMutation({
    mutationFn: async (id: string) => {
      return (await blogsApi.deleteOne(id)).data;
    },
    onSuccess: (response) => {
      toastSuccess("Xoá blog thành công");
      queryClient.refetchQueries({ queryKey: ["blogs"] });
      setModalDelete(false);
    },
    onError: (error: ErrorResponse) => {
      toastError("Xoá blog thất bại");
      return error;
    },
  });
};
