import { Button } from "@/components/ui/button";
import { useAddCart } from "@/hooks/query-cart/useAllCart";
import { useDeleteProductCart } from "@/hooks/query-cart/useDeleteProductCart";
import { useGetCart } from "@/hooks/query-cart/useGetCart";
import { calSale, totalItems } from "@/utils/common";
import React from "react";
import { useNavigate } from "react-router-dom";

function CartPage() {
  const { data: cart } = useGetCart();
  const navigate = useNavigate();
  const mutationAddCart = useAddCart();
  const mutationDeleteCart = useDeleteProductCart();

  function handleQuantity(product_id: string, quantity: number, size: string) {
    mutationAddCart.mutate({ product_id, quantity, size });
  }

  function handleDeleteCart(id: string) {
    mutationDeleteCart.mutate(id);
  }

  return (
    <div className="container mx-auto p-8 bg-gray-100 shadow-lg rounded-lg">
      {/* Tiêu đề Giỏ Hàng */}
      <h1 className="text-4xl font-extrabold text-center mb-8 text-gray-800">
        Giỏ Hàng Của Bạn
      </h1>

      <ul className="space-y-6">
        {cart?.map((item) => (
          <li
            key={item._id}
            className="flex items-center justify-between border-b pb-6 border-gray-300 shadow-sm bg-white rounded-lg p-4"
          >
            <div className="flex items-center">
              <img
                src={item?.product_id?.image_url}
                alt={item?.product_id?.name}
                className="w-24 h-24 rounded-lg object-cover mr-6"
              />
              <div className="flex flex-col gap-2">
                <h2 className="text-xl font-semibold text-gray-700">
                  {item?.product_id?.name}
                </h2>
                <p className="text-sm text-gray-500">Size: {item?.size}</p>
                <p className="text-lg text-gray-500">
                  Giá:{" "}
                  <span className="font-semibold text-red-500">
                    {calSale(
                      item?.product_id?.price,
                      item?.product_id?.sale
                    ).toLocaleString("vi-VN")}{" "}
                    VNĐ
                  </span>
                </p>

                <div className="flex gap-2 items-center mt-4">
                  <Button
                    onClick={() =>
                      handleQuantity(item?.product_id?._id, -1, item.size)
                    }
                    size={"sm"}
                    variant={"secondary"}
                    className="bg-gray-200 hover:bg-gray-300"
                  >
                    -
                  </Button>
                  <span className="mx-4 text-lg">{item?.quantity}</span>
                  <Button
                    onClick={() =>
                      handleQuantity(item?.product_id?._id, 1, item.size)
                    }
                    size={"sm"}
                    variant={"secondary"}
                    className="bg-gray-200 hover:bg-gray-300"
                  >
                    +
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-end gap-4">
              <Button
                onClick={() => handleDeleteCart(item?.product_id?._id)}
                size={"sm"}
                variant={"destructive"}
                className="bg-red-500 hover:bg-red-600"
              >
                Xoá
              </Button>
              <p className="text-xl font-bold text-gray-700">
                {(
                  calSale(item?.product_id?.price, item?.product_id?.sale) *
                  item.quantity
                ).toLocaleString("vi-VN")}{" "}
                VNĐ
              </p>
            </div>
          </li>
        ))}
      </ul>

      {/* Tổng cộng và Nút Thanh Toán */}
      <div className="mt-10 bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-700">Tổng Cộng:</h2>
          <p className="text-2xl font-bold text-green-600">
            {totalItems(cart ?? []).toLocaleString("vi-VN")} VNĐ
          </p>
        </div>
        {cart && cart.length > 0 ? (
          <button
            onClick={() => navigate("/place-order")}
            className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-all duration-300 shadow-md font-semibold text-lg"
          >
            Thanh Toán
          </button>
        ) : (
          <button
            onClick={() => navigate("/products")}
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-all duration-300 shadow-md font-semibold text-lg"
          >
            Tìm Hàng
          </button>
        )}
      </div>
    </div>
  );
}

export default CartPage;
