import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAddCart } from "@/hooks/query-cart/useAllCart";

import { useGetProduct } from "@/hooks/query-products/useGetProduct";
import { calSale, formatPrice } from "@/utils/common";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetailPage() {
  const productId = useParams().id;
  const { data: product } = useGetProduct(productId ?? "");
  const [quantity, setQuantity] = useState(1);
  const mutation = useAddCart();
  const [size, setSize] = useState("");

  function handleQuantity(quantity: number) {
    if (quantity > 0) {
      setQuantity(quantity);
    }
  }
  useEffect(() => {
    console.log(mutation.error);
  }, [mutation.error]);

  function handleAddCart() {
    mutation.mutate({
      product_id: product?._id ?? "",
      quantity: quantity,
      size,
    });
    setQuantity(1);
  }

  return (
    <div className="container p-8 flex flex-col gap-2">
      <div className=" flex">
        <div className="w-1/2 flex justify-center">
          <img
            src={product?.image_url}
            alt={product?.name}
            className="w-64 h-64 object-cover"
          />
        </div>
        <div className="text-lg flex flex-col gap-2">
          <h1 className="text-3xl font-bold mb-2 ">{product?.name}</h1>
          <h1>Số lượng: {product?.stock}</h1>
          <Select onValueChange={(e) => setSize(e)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Chon size giay cua ban" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {product?.sizes.map((size) => (
                  <SelectItem key={size} value={size}>
                    {size}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <div className="flex gap-2 ">
            Giá tiền:
            <h1 className="line-through">{formatPrice(product?.price ?? 0)}</h1>
          </div>
          <h1 className="">
            Giá giảm:{" "}
            {formatPrice(calSale(product?.price ?? 0, product?.sale ?? 0))}
          </h1>

          <div className="mt-auto flex flex-col gap-2">
            <div className="flex items-center mt-2 gap-2">
              <Button
                onClick={() => handleQuantity(quantity - 1)}
                size={"icon"}
              >
                -
              </Button>
              <Input
                className="w-10"
                onChange={(e) => setQuantity(+e.target.value)}
                value={quantity}
              />
              <Button
                onClick={() => handleQuantity(quantity + 1)}
                size={"icon"}
              >
                +
              </Button>
            </div>

            <Button onClick={handleAddCart} size={"sm"}>
              Thêm vào giỏ hàng
            </Button>
          </div>
        </div>
      </div>

      <div className="ml-10">
        <h1>{product?.description}</h1>
      </div>
    </div>
  );
}

export default ProductDetailPage;
