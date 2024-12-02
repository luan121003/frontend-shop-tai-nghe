import { productsApi } from "@/api/product-api";
import { ParamPagination, ResponsePagination } from "@/types/pagination.type";
import { Product } from "@/types/product.type";
import { useQuery } from "@tanstack/react-query";

export const useGetFourProducts = (params: ParamPagination) => {
  return useQuery<ResponsePagination<Product>>({
    queryKey: ["products", params.keyword, params.limit],
    queryFn: async () => {
      return (await productsApi.getAll(params)).data;
    },
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    retry: 0,
    refetchOnReconnect: true,
  });
};
