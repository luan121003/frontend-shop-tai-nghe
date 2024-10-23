
import { FaCheck } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { Switch } from "../ui/switch";
import { useUserStore } from "@/store/useUserStore";

import { ColumnDef } from "@tanstack/react-table";
import { Category } from "@/types/categories.type";
import Actions from "../table/actions";
import { useCategoryStore } from "@/store/useCategory";
import { useUpdateStatusCategory } from "@/hooks/query-categories/useUpdateStatusCategory";

export const columns: ColumnDef<Category>[] = [
  {
    accessorKey: "_id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row, getValue }) => (
      <div>
        {row.getCanExpand() ? (
          <button
            {...{
              onClick: row.getToggleExpandedHandler(),
              style: { cursor: "pointer" },
            }}
          >
            {row.getIsExpanded() ? "👇" : "👉"}
          </button>
        ) : (
          "🔵"
        )}{" "}
        {getValue<boolean>()}
      </div>
    ),
  },
  
  {
    accessorKey: "status",
    header: "status",
    cell: ({ cell, row }) => {
      const { _id, status } = row.original;
      const mutation = useUpdateStatusCategory();
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
    accessorKey: "",
    header: "actions",
    cell: ({ cell, row }) => {
      const { _id, name } = row.original;
      const { setModalDelete } = useCategoryStore();

      return <Actions link_update={`/admin/categories/${_id}`}
       setModalDelete={setModalDelete}
        _id={_id} 
        name={name} />;
    },
  },
];