import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useFormRegister } from "@/hooks/query-customers/useFormRegister";
import { useRegisterCustomer } from "@/hooks/query-customers/useRegisterCustomer";
import useToastMessage from "@/hooks/userToastMessgases";

import React from "react";
import { Link } from "react-router-dom";
import { z } from "zod";

function RegisterPage() {
  const { form, formSchema } = useFormRegister();
  const { toastLoading } = useToastMessage();
  const mutation = useRegisterCustomer();

  function handleRegister(data: z.infer<typeof formSchema>) {
    toastLoading("Vui lòng đợi");
    const { confirm_password, ...customer } = data;
    mutation.mutate(customer);
  }

  return (
    <div className="flex items-center justify-center min-h-screen relative">
      {/* Lớp nền */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://www.elleman.vn/app/uploads/2018/08/13/gi%C3%A0y-sneakers-2-elle-man-8.jpg')",
        }}
      />
      {/* Lớp phủ mờ */}
      <div className="absolute inset-0 bg-black opacity-20" />
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-8 relative z-10">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Đăng Ký
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Vui lòng điền thông tin để tạo tài khoản
        </p>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleRegister)}
            className="space-y-6"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Nhập email của bạn"
                      className="border-gray-300 focus:ring-blue-400"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex gap-4">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mật khẩu</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="password"
                        placeholder="Nhập mật khẩu"
                        className="border-gray-300 focus:ring-blue-400"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirm_password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Xác nhận mật khẩu</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="password"
                        placeholder="Nhập lại mật khẩu"
                        className="border-gray-300 focus:ring-blue-400"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tên</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Nhập tên của bạn"
                        className="border-gray-300 focus:ring-blue-400"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone_number"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Số điện thoại</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Số điện thoại"
                        className="border-gray-300 focus:ring-blue-400"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Địa chỉ</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Nhập địa chỉ"
                      className="border-gray-300 focus:ring-blue-400"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Giới tính</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="border-gray-300 focus:ring-blue-400">
                        <SelectValue placeholder="Chọn giới tính của bạn" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="male">Nam</SelectItem>
                      <SelectItem value="female">Nữ</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Link
              to="/login"
              className="block text-center text-blue-500 hover:underline"
            >
              Trở lại đăng nhập
            </Link>
            <button
              type="submit"
              className="w-full mt-4 bg-gradient-to-r from-blue-500 to-green-500 text-white py-3 rounded-lg hover:from-green-500 hover:to-blue-500 transition-all duration-300"
            >
              Đăng Ký
            </button>
          </form>
        </Form>
      </div>
    </div>
  );
}

export default RegisterPage;
