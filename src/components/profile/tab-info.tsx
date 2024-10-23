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
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TabsContent } from "@/components/ui/tabs";
import { useFormCustomer } from "@/hooks/query-customers/useFormCustomer";
import { useGetMeCustomer } from "@/hooks/query-customers/useGetMeCustomer";
import { useUpdateCustomer } from "@/hooks/query-customers/useUpdateCustomer";
import useToastMessage from "@/hooks/userToastMessgases";
import React, { useEffect } from "react";
import { z } from "zod";

interface TabInfoProps {
  value: string;
  form?: any;
}

function TabInfo(props: TabInfoProps) {
  const { form, formSchema } = useFormCustomer();
  const { data: customer } = useGetMeCustomer();
  const { toastLoading } = useToastMessage();
  const mutation = useUpdateCustomer();

  useEffect(() => {
    form.setValue("name", customer?.name ?? "");
    form.setValue("address", customer?.address ?? "");
    form.setValue("phone_number", customer?.phone_number ?? "");
  }, [customer]);

  function handleUpdate(data: z.infer<typeof formSchema>) {
    toastLoading("Vui lòng đợi!");
    mutation.mutate(data);
  }

  return (
    <TabsContent
      value={props.value}
      className="flex flex-col items-center gap-6 w-full bg-white p-6 shadow-md rounded-lg"
    >
      <h1 className="text-3xl font-semibold text-gray-700 mb-4">Thông tin của bạn</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleUpdate)}
          className="flex flex-col gap-4 w-full max-w-md"
        >
          <div className="mb-4">
            <Label className="text-gray-600">Email</Label>
            <Input value={customer?.email} disabled className="bg-gray-100 border-2 border-gray-300 rounded-md" />
          </div>
          
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-600">Tên</FormLabel>
                <FormControl>
                  <Input {...field} className="border-2 border-gray-300 rounded-md hover:border-blue-400 transition duration-200" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-600">Địa chỉ</FormLabel>
                <FormControl>
                  <Input {...field} className="border-2 border-gray-300 rounded-md hover:border-blue-400 transition duration-200" />
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
                <FormLabel className="text-gray-600">Số điện thoại</FormLabel>
                <FormControl>
                  <Input {...field} className="border-2 border-gray-300 rounded-md hover:border-blue-400 transition duration-200" />
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
                <FormLabel className="text-gray-600">Giới tính</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="border-2 border-gray-300 rounded-md hover:border-blue-400 transition duration-200">
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

          <Button className="self-end bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200">
            Lưu
          </Button>
        </form>
      </Form>
    </TabsContent>
  );
}

export default TabInfo;
