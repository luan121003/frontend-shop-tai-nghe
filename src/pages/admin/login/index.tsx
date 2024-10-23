import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import useUserLogin from "@/hooks/query-users/userUserLogin";
import { useFormLogin } from "@/hooks/useFormLogin";
import useToastMessage from "@/hooks/userToastMessgases";
import logo from "@/assets/logo.png";
import { z } from "zod";
import { LocalUtils } from "@/utils/local-utils";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function LoginPage() {
  const { form, formSchema } = useFormLogin();
  const mutation = useUserLogin();
  const { toastLoading } = useToastMessage();
  const token = LocalUtils.getLocalToken();
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/admin", { replace: true });
    }
  }, [token]);

  function handleLogin(data: z.infer<typeof formSchema>) {
    toastLoading("Vui lòng đợi");
    mutation.mutate(data);
  }

  return (
    <div className="flex flex-col justify-center items-center w-full h-screen bg-gradient-to-br from-green-400 via-blue-500 to-purple-600">
      {/* Logo and Title */}
      <div className="flex flex-col items-center mb-8">
        <img src={logo} alt="logo" className="w-24 h-24 mb-4" />
        <h1 className="text-5xl font-bold text-white">Login</h1>
      </div>

      {/* Form Section */}
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        {mutation.error?.statusCode === 404 && (
          <h1 className="text-red-600 mb-4">Không tìm thấy email</h1>
        )}

        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleLogin)} className="flex flex-col gap-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="m@example.com" 
                      type="text" 
                      {...field} 
                      className="border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400" 
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
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input 
                      type="password" 
                      {...field} 
                      className="border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400" 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg">
              Đăng nhập
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}

export default LoginPage;
