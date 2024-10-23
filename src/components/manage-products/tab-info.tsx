import {
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
  import { TabsContent } from "@/components/ui/tabs";
  import React, { useState } from "react";
import { MultiSelect } from "../ui/multi-select";
import { Label } from "../ui/label";
  
  interface TabInfoProps {
    value: string;
    form: any;
    categories: any;
  }
  
  function TabInfo(props: TabInfoProps) {
    const frameworksList = [
      { value: "43", label: "43 "  },
      { value: "42", label: "42" },
      { value: "41", label: "41" },
      { value: "40", label: "40"  },
      { value: "39", label: "39" },
    ];
    return (
      <TabsContent value={props.value} className="flex flex-col gap-2">
        <FormField
          control={props.form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tên sản phẩm</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-2">
          <FormField
            control={props.form.control}
            name="cost"
            render={({ field }) => (
              <FormItem className="w-1/2">
                <FormLabel>Giá gốc</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    onChange={(event) => field.onChange(+event.target.value)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={props.form.control}
            name="price"
            render={({ field }) => (
              <FormItem className="w-1/2">
                <FormLabel>Giá tiền</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    onChange={(event) => field.onChange(+event.target.value)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex gap-2 ">
          <FormField
            control={props.form.control}
            name="sale"
            render={({ field }) => (
              <FormItem className="w-1/2">
                <FormLabel>Giảm giá %</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    onChange={(event) => field.onChange(+event.target.value)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={props.form.control}
            name="stock"
            render={({ field }) => (
              <FormItem className="w-1/2">
                <FormLabel>Số lượng trong kho</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    onChange={(event) => field.onChange(+event.target.value)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={props.form.control}
          name="category_id"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Danh Mục</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Chọn danh mục" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {props?.categories?.map((item: any) => (
                    <SelectItem key={item._id} value={item._id}>
                      {item.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
              control={props.form.control}
              name="sizes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Kích cỡ</FormLabel>
                  <FormControl>
                    <MultiSelect
                      options={frameworksList}
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      placeholder="Select options"
                      variant="inverted"
                      animation={2}
                      maxCount={3}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
        {/* <MultiSelect
        options={frameworksList}
        onValueChange={setSelectedFrameworks}
        defaultValue={selectedFrameworks}
        placeholder="Chon kích cỡ"
        variant="inverted"
        animation={2}
        maxCount={3}
      /> */}
      </TabsContent>
    );
  }
  
  export default TabInfo;