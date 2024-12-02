import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAddCart } from "@/hooks/query-cart/useAllCart";
import { useGetProduct } from "@/hooks/query-products/useGetProduct";
import { calSale, formatPrice } from "@/utils/common";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FiPhone } from "react-icons/fi"; // Import biểu tượng điện thoại
import EmblaCarousel from "@/components/embla-carousel";
import { toast } from "sonner";
import useToastMessage from "@/hooks/userToastMessgases";

function ProductDetailPage() {
  const productId = useParams().id;
  const { data: product } = useGetProduct(productId ?? "");
  const [quantity, setQuantity] = useState(1);
  const mutation = useAddCart();
  const { toastError, toastSuccess } = useToastMessage();
  const [size, setSize] = useState("");
  const [rating, setRating] = useState(0);

  function handleQuantity(quantity: number) {
    if (quantity > 0) {
      setQuantity(quantity);
    }
  }

  useEffect(() => {
    console.log(mutation.error);
  }, [mutation.error]);

  function handleAddCart() {
    if (!size) {
      toastError("vui lòng chọn size giày");
      return;
    }
    mutation.mutate({
      product_id: product?._id ?? "",
      quantity: quantity,
      size,
    });
    setQuantity(1);
  }

  function handleRating(newRating: number) {
    setRating(newRating); // Cập nhật rating của người dùng
    toastSuccess(`Cảm ơn bạn đã đánh giá ${newRating} sao!`); // Thông báo khi người dùng đánh giá
  }

  return (
    <div className="container p-8 flex flex-col gap-2">
      <div className="flex">
        <div className="w-1/2 flex justify-center relative">
          {product && <EmblaCarousel product={product} />}
        </div>
        <div className="text-lg flex flex-col gap-4">
          <h1 className="text-4xl font-bold mb-2 text-gray-800">
            {product?.name}
          </h1>
          <h1 className="text-red-500">Số lượng: {product?.stock}</h1>

          {/* Giao diện chọn size giày */}
          <div className="flex flex-col gap-4">
            <h1 className="text-lg text-gray-700 font-semibold">
              Chọn size giày:
            </h1>
            <div className="flex gap-4">
              {product?.sizes.map((sizeOption) => (
                <Button
                  key={sizeOption}
                  onClick={() => setSize(sizeOption)}
                  className={`px-6 py-3 transition-all rounded-full border-2 text-sm font-semibold ${
                    size === sizeOption
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                  }`}
                >
                  {sizeOption}
                </Button>
              ))}
            </div>
          </div>

          {/* Hiển thị giá tiền và giá giảm */}
          {product?.sale && product?.sale > 0 ? (
            <>
              {/* Hiển thị giá tiền */}
              <div className="flex gap-2 items-center">
                <h1 className="text-gray-700 font-medium">Giá tiền:</h1>
                <h1 className="line-through text-red-500 text-lg font-semibold">
                  {formatPrice(product?.price ?? 0)}
                </h1>
              </div>

              {/* Hiển thị giá giảm */}
              <div className="flex gap-2 items-center">
                <h1 className="text-gray-700 font-medium">Giá giảm:</h1>
                <h1 className="text-green-500 font-bold text-2xl">
                  {formatPrice(
                    calSale(product?.price ?? 0, product?.sale ?? 0)
                  )}
                </h1>
              </div>
            </>
          ) : (
            <h1 className="">Giá tiền: {formatPrice(product?.price ?? 0)}</h1>
          )}

          {/* Điều chỉnh số lượng và thêm vào giỏ hàng */}
          <div className="mt-4 flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <Button
                onClick={() => handleQuantity(quantity - 1)}
                size={"icon"}
                className="px-4 py-2 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-800"
              >
                -
              </Button>
              <Input
                className="w-12 text-center border-2 border-gray-300 rounded-lg"
                onChange={(e) => setQuantity(+e.target.value)}
                value={quantity}
              />
              <Button
                onClick={() => handleQuantity(quantity + 1)}
                size={"icon"}
                className="px-4 py-2 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-800"
              >
                +
              </Button>
            </div>
            <Button
              className="bg-green-600 hover:bg-green-800 w-32"
              onClick={handleAddCart}
              size={"sm"}
            >
              Thêm vào giỏ hàng
            </Button>
          </div>
        </div>

        {/* Thêm phần liên hệ với chúng tôi ở bên phải */}
        <div className="w-1/3 flex flex-col items-start ml-10 bg-white p-4 rounded-lg shadow-lg">
          <h1 className="text-lg font-semibold text-black">
            Gọi ngay để có giá tốt
          </h1>
          <div className="text-black mb-4">
            <p>
              Hotline CẦN THƠ:{" "}
              <span className="font-bold text-blue-600">0931015645</span> Hẻm 4,
              Nguyễn Văn Linh, Phường Hưng Lợi, Quận Ninh Kiều, TP Cần Thơ
            </p>
            <p>Tổng đài hoạt động từ 10h00 - 22h00 mỗi ngày</p>
          </div>
          <div className="flex items-center">
            <FiPhone className="text-2xl text-blue-800 mr-2" />
            <Link to="/contact">
              <span className="text-lg text-blue-800">Liên hệ ngay!</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Mô Tả Sản Phẩm */}
      <div className="mt-8 ml-10">
        <h1 className="text-2xl font-bold text-black mb-2">Mô Tả Sản Phẩm:</h1>
        <p className="text-lg text-black">{product?.description}</p>
      </div>

      {/* Phần đánh giá sản phẩm dưới mô tả */}
      <div className="mt-8 ml-10">
        <h1 className="text-2xl font-bold text-black mb-2">
          Đánh Giá Sản Phẩm:
        </h1>
        <div className="flex gap-2 items-center">
          {/* Giao diện sao */}
          {[1, 2, 3, 4, 5].map((star) => (
            <Button
              key={star}
              onClick={() => handleRating(star)}
              className={`px-2 py-1 border-2 rounded-full ${
                rating >= star
                  ? "bg-yellow-500 text-white"
                  : "bg-white text-gray-600"
              }`}
            >
              ★
            </Button>
          ))}
        </div>
        <p className="mt-2">Bạn đã chọn {rating} sao.</p>
        {/* Hiển thị các bình luận đánh giá nếu có */}
      </div>
    </div>
  );
}

export default ProductDetailPage;
