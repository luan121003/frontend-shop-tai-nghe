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
import { useCustomerLogin } from "@/hooks/query-customers/useCustomerLogin";
import { useFormLogin } from "@/hooks/useFormLogin";
import useToastMessage from "@/hooks/userToastMessgases";
import { LocalUtils } from "@/utils/local-utils";

import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";

const LoginHomePage = () => {
  const { form, formSchema } = useFormLogin();
  const { toastLoading } = useToastMessage();
  const mutation = useCustomerLogin();
  const token = LocalUtils.getLocalToken();
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token, navigate]);

  function handleLogin(data: z.infer<typeof formSchema>) {
    toastLoading("Vui lòng đợi");
    mutation.mutate(data);
  }

  return (
    <div
      className="relative flex items-center justify-center min-h-screen bg-gradient-to-r"
      style={{
        backgroundImage:
          "url('https://www.elleman.vn/app/uploads/2018/08/13/gi%C3%A0y-sneakers-2-elle-man-8.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Lớp phủ mờ */}
      <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm"></div>

      {/* Hộp đăng nhập */}
      <div className="relative w-full max-w-lg bg-white bg-opacity-90 backdrop-blur-lg rounded-3xl shadow-lg p-10">
        <h2 className="text-4xl font-bold text-center text-gray-800">
          Đăng Nhập
        </h2>
        <p className="text-center text-gray-600 mb-8">
          <br />
          Chào mừng trở lại!
          <br /> Vui lòng đăng nhập tài khoản của bạn
        </p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleLogin)} className="space-y-6">
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
                      className="border-gray-300 focus:ring-blue-500"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mật khẩu</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      {...field}
                      placeholder="Nhập mật khẩu"
                      className="border-gray-300 focus:ring-blue-500"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="w-full py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-200 ease-in-out hover:scale-105">
              Đăng Nhập
            </Button>
          </form>
        </Form>
        <div className="mt-6 text-center">
          <div className="flex gap-4 justify-center">
            <Link to="/register" className="text-blue-500 hover:underline">
              Đăng ký
            </Link>
            <Link
              to={"/forgot-password"}
              className="text-blue-500 hover:underline"
            >
              Quên mật khẩu?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginHomePage;
