import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TabsContent } from "@/components/ui/tabs";
import { useGetOrderMe } from "@/hooks/query-orders/useGetOrderMe";
import { useOrderStore } from "@/store/useOrderStore";
import { formatPrice } from "@/utils/common";
import ModalOrderDetail from "./modal-order-detail";

interface TabOrderProps {
  value: string;
}

function TabOrder(props: TabOrderProps) {
  const { data: orders } = useGetOrderMe();
  const { setModalDetail } = useOrderStore();

  let total = 0;
  orders?.forEach((item) => {
    total += item.total;
  });

  function handleModalDetail(id: string) {
    setModalDetail(true, { _id: id });
  }

  return (
    <>
      <TabsContent
        value={props.value}
        className="flex flex-col items-center gap-4 w-full p-4 bg-gray-50 rounded-lg shadow-md"
      >
        <Table className="min-w-full bg-white rounded-lg shadow-md overflow-hidden">
          <TableCaption className="text-lg font-semibold text-gray-700">
            Danh sách sản phẩm bạn đã mua.
          </TableCaption>
          <TableHeader>
            <TableRow className="bg-gray-200 text-gray-600">
              <TableHead className="py-4 text-black ">Mã hoá đơn</TableHead>

              <TableHead className="py-4 text-black">Địa chỉ</TableHead>
              <TableHead className="py-4 text-black">Số điện thoại</TableHead>
              <TableHead className="py-4 text-black">Ngày thanh toán</TableHead>
              <TableHead className="py-4 text-black">Tổng tiền</TableHead>
              <TableHead className="py-4 text-black ">Mã hoá đơn</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders?.map((item) => (
              <TableRow
                key={item._id}
                className="hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
              >
                <TableCell
                  onClick={() => handleModalDetail(item._id)}
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  {item._id}
                </TableCell>
                <TableCell>{item.address}</TableCell>
                <TableCell>{item.phone_number}</TableCell>
                <TableCell>
                  {new Date(item.created_at).toLocaleDateString()}
                </TableCell>
                <TableCell className="text-right">
                  {formatPrice(item.total)}
                </TableCell>
                <TableCell className="text-right">
                  {item.status ? "Thành công" : "Chưa xác nhận"}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow className="bg-black-200 text-white-600 font-semibold">
              <TableCell colSpan={3}>Tổng tiền đã mua:</TableCell>
              <TableCell className="text-right">{formatPrice(total)}</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </TabsContent>
      <ModalOrderDetail />
    </>
  );
}

export default TabOrder;
