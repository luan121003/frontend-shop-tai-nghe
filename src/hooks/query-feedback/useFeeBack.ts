import { useMutation } from "@tanstack/react-query";
import useToastMessage from "../userToastMessgases";
import { feedbackApi } from "@/api/feeback-api";

export const useFeedBack = () => {
  const { toastError, toastSuccess } = useToastMessage();

  return useMutation({
    mutationFn: async (data: {
      name: string;
      email: string;
      message: string;
      phone_number: string;
    }) => {
      return (await feedbackApi.sendFeedBack(data)).data;
    },
    onSuccess: (data) => {
      toastSuccess("gửi phản hồi thành công");
    },
    onError: (error) => {
      toastError("gửi phân hồi thất bại");
    },
  });
};
