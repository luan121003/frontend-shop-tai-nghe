import { useUpdateOrder } from "@/hooks/query-orders/useUpdateOrder";
import { useOrderStore } from "@/store/useOrderStore";
import { Order } from "@/types/order.type";
import { ColumnDef } from "@tanstack/react-table";
import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";

export const columns: ColumnDef<Order>[] = [
  {
    accessorKey: "_id",
    header: "ID",
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => {
      const { setModalDetail } = useOrderStore();
      const handleModalDetail = () => {
        setModalDetail(true, { _id: row.original._id });
      };
      return (
        <h1
          onClick={handleModalDetail}
          className="cursor-pointer hover:text-orange-500"
        >
          {row.original.email}
        </h1>
      );
    },
  },
  {
    accessorKey: "address",
    header: "Address",
  },
  {
    accessorKey: "phone_number",
    header: "Phone number",
  },
  {
    accessorKey: "created_at",
    header: "Date",
  },
  {
    accessorKey: "total",
    header: "Total",
    cell: ({ row }) => <span>{row.original.total.toLocaleString()} đ</span>,
  },
  {
    accessorKey: "status",
    header: "actions",
    cell: ({ row }) => {
      const { _id, status } = row.original;
      const mutation = useUpdateOrder();
      const handleChange = () => {
        mutation.mutate({ _id: _id, status: !status });
      };

      return (
        <RadioGroup
          defaultValue={status ? "true" : "false"}
          onValueChange={handleChange}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="false" id="r1" />
            <Label htmlFor="r1">That bai</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="true" id="r2" />
            <Label htmlFor="r2">Thanh cong cong</Label>
          </div>
        </RadioGroup>
      );
    },
  },
];
