import { useProductStore } from "@/store/useProductStore";
import { Product } from "@/types/product.type";
import { ColumnDef } from "@tanstack/react-table";
import Actions from "../table/actions";
import { useUpdateStatusProduct } from "@/hooks/query-products/useUpdateStatusProduct";
import { Switch } from "../ui/switch";
import { FaCheck } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: "_id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "image_url",
    header: "ảnh chính",
    cell: ({ row }) => {
      const { image_url } = row.original;

      return <img className="w-10 h-10 object-cover" src={image_url} alt="" />;
    },
  },
  {
    accessorKey: "status",
    header: "status",
    cell: ({ cell, row }) => {
      const { _id, status } = row.original;
      const mutation = useUpdateStatusProduct();
      function handleStatus() {
        mutation.mutate({ _id, status: !status });
      }
      return (
        <Switch
          checkedIcon={<FaCheck />}
          unCheckedIcon={<RxCross2 />}
          checked={status}
          onCheckedChange={handleStatus}
        />
      );
    },
  },
  
  {
    accessorKey: "stock",
    header: "stock",
  },
  
  {
    accessorKey: "",
    header: "actions",
    cell: ({ cell, row }) => {
      const { _id, name } = row.original;
      const { setModalDelete } = useProductStore();

      return <Actions link_update={`/admin/products/${_id}`} setModalDelete={setModalDelete} _id={_id} name={name} />;
    },
  },
];
