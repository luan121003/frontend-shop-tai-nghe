import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useCheckout } from "@/hooks/query-cart/useCheckout";
import { useFormCheckout } from "@/hooks/query-cart/useFormCheckout";
import { useGetCart } from "@/hooks/query-cart/useGetCart";
import { useGetMeCustomer } from "@/hooks/query-customers/useGetMeCustomer";
import useToastMessage from "@/hooks/userToastMessgases";

import { calSale, formatPrice, totalItems } from "@/utils/common";
import React, { useEffect } from "react";
import { z } from "zod";

function CheckoutPage() {
  const { form, formSchema } = useFormCheckout();
  const { data: cart } = useGetCart();
  const { data: customer } = useGetMeCustomer();
  const mutation = useCheckout();
  const { toastLoading } = useToastMessage();

  useEffect(() => {
    form.setValue("address", customer?.address ?? "");
    form.setValue("email", customer?.email ?? "");
    form.setValue("phone_number", customer?.phone_number ?? "");
  }, [customer]);

  function handleCheckout(data: z.infer<typeof formSchema>) {
    toastLoading("Vui lòng đợi");
    mutation.mutate(data);
  }

  return (
    <div className="p-8 bg-gradient-to-r from-blue-200 to-blue-400 rounded-lg shadow-lg">
      <Form {...form}>
        <form
          className="flex gap-8"
          onSubmit={form.handleSubmit(handleCheckout)}
        >
          {/* Thông tin người dùng */}
          <div className="w-1/2 p-6 bg-white rounded-lg shadow-md border border-gray-300">
            <h1 className="text-3xl font-bold mb-6 text-center text-black-600">
              Thông Tin Thanh Toán
            </h1>
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg font-semibold">
                    Địa chỉ
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Nhập địa chỉ của bạn"
                      className="border rounded-lg p-3 focus:outline-none focus:ring focus:ring-blue-400"
                    />
                  </FormControl>
                  <FormMessage className="text-red-600" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg font-semibold">Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Nhập email của bạn"
                      className="border rounded-lg p-3 focus:outline-none focus:ring focus:ring-blue-400"
                    />
                  </FormControl>
                  <FormMessage className="text-red-600" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone_number"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg font-semibold">
                    Số điện thoại
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Nhập số điện thoại"
                      className="border rounded-lg p-3 focus:outline-none focus:ring focus:ring-blue-400"
                    />
                  </FormControl>
                  <FormMessage className="text-red-600" />
                </FormItem>
              )}
            />
          </div>

          {/* Giỏ hàng */}
          <div className="flex flex-col w-1/2 p-6 bg-white rounded-lg shadow-md border border-gray-300">
            <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
              Giỏ Hàng Của Bạn
            </h1>
            <ScrollArea className="h-[300px] overflow-y-auto">
              <ul>
                {cart?.map((item) => (
                  <li
                    key={item._id}
                    className="flex items-center justify-between border-b pb-4 mb-4"
                  >
                    <div className="flex items-center">
                      <img
                        src={item.product_id.image_url}
                        alt={item.product_id.name}
                        className="w-20 h-20 rounded-lg shadow-md mr-4"
                      />
                      <div>
                        <h2 className="text-lg font-semibold text-gray-800">
                          {item.product_id.name}
                        </h2>
                        <p className="text-gray-600">Size: {item.size}</p>
                        <p className="text-gray-800">
                          Giá:{" "}
                          {calSale(
                            item.product_id.price,
                            item.product_id.sale
                          ).toLocaleString()}{" "}
                          VNĐ
                        </p>
                        <div className="flex gap-2 items-center">
                          <p className="text-gray-600">Số lượng: </p>
                          <span className="mx-2 font-semibold">
                            {item.quantity}
                          </span>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </ScrollArea>
            <div className="flex flex-col gap-2 mt-4">
              <div className="flex justify-between font-semibold">
                <h2 className="text-xl">Tiền Ship:</h2>
                <p className="text-gray-800">{formatPrice(30000)}</p>
              </div>
              <div className="flex justify-between font-bold text-xl">
                <h2>Tổng tiền:</h2>
                <p className="text-gray-800">
                  {formatPrice(totalItems(cart ?? []) + 30000)}
                </p>
              </div>
            </div>
            <Button className="self-end mt-6 bg-blue-600 text-white hover:bg-blue-700 transition duration-300">
              Thanh Toán
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

export default CheckoutPage;
