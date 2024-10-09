import { usersApi } from "@/api/uses-api";
import { useQuery } from "@tanstack/react-query";

export const useGetMeUser = () => {
  return useQuery({
    queryKey: ["user-me"],
    queryFn: async () => {
      return (await usersApi.me()).data;
    },
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    retry: 0,
    refetchOnReconnect: true,
  });
};
