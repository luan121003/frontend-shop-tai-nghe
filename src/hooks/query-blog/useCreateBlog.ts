import { blogsApi } from "@/api/blogs-api";

import { CreateBlog } from "@/types/blog.type";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import useToastMessage from "../userToastMessgases";

export const useCreateBlog = () => {
  const { toastSuccess, toastError } = useToastMessage();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (body: CreateBlog) => {
      return (await blogsApi.create(body)).data;
    },
    onSuccess: (data) => {
      toastSuccess("Tạo blog thành công");
      queryClient.refetchQueries({ queryKey: ["blogs"] });
      navigate("/admin/blogs");
    },
    onError: (error: any) => {
      toastError("Tạo blog thất bại");
    },
  });
};
