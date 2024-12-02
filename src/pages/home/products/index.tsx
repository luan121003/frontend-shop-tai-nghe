import CategoryItem from "@/components/home/category-item";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useGetAllCategories } from "@/hooks/query-categories/useGetAllCategories";
import { useGetProductsByCategory } from "@/hooks/query-products/useGetProductsByCategory";
import useDebounce from "@/hooks/useDebounce";
import { calSale, formatPrice } from "@/utils/common";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function ProductsHomePage() {
  const [keyword, setKeyword] = useState("");
  const debounced = useDebounce(keyword, 2000);
  const { data: categories } = useGetAllCategories({
    page: 1,
    limit: 100,
    sort: "asc",
    keyword: "",
  });
  const [categoryId, setCategoryId] = useState("all");

  const { data: products } = useGetProductsByCategory(categoryId, debounced);

  return (
    <div className="container mx-auto p-8">
      {/* Tiêu đề chính */}
      <h1 className="text-4xl font-extrabold text-center mb-10 text-gray-800">
        Danh Mục Sản Phẩm
      </h1>

      {/* Search Section */}
      <div className="mb-8">
        <Input
          className="w-1/3 mx-auto" // Giảm chiều rộng thanh tìm kiếm
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Tìm sản phẩm..."
        />
      </div>

      {/* Main Content */}
      <div className="flex gap-8">
        {/* Danh mục sản phẩm (Categories Section) */}
        <div className="w-3/7">
          <Button
            className={`w-full px-6 py-2 font-semibold rounded-lg mb-4 ${
              categoryId === "all" ? "bg-orange-400 text-white" : "bg-gray-100"
            }`}
            variant={"ghost"}
            onClick={() => setCategoryId("all")}
          >
            Tất cả
          </Button>
          {categories?.entities?.map((category) => (
            <CategoryItem
              setCategoryId={setCategoryId}
              key={category._id}
              category={category}
              categoryId={categoryId}
            />
          ))}
        </div>

        {/* Danh sách sản phẩm (Products Section) */}
        <div className="w-4/7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Kiểm tra nếu không có sản phẩm */}
          {products?.length === 0 ? (
            <div className="w-full col-span-full text-center text-3xl text-red-600 font-semibold">
              Không tìm thấy sản phẩm
            </div>
          ) : (
            products?.map((product) => (
              <Card
                key={product._id}
                className="bg-white shadow-lg hover:shadow-2xl transition-all duration-300 rounded-xl overflow-hidden transform hover:-translate-y-2 hover:scale-105 flex flex-col"
              >
                {/* Hiển thị phần trăm giảm giá */}
                {product.sale > 0 && (
                  <div className="absolute top-2 left-2 bg-red-500 text-white text-sm font-bold px-2 py-1 rounded-full z-10">
                    -{product.sale}%
                  </div>
                )}

                {/* Ảnh sản phẩm */}
                <CardHeader className="flex justify-center p-4">
                  <CardTitle>
                    <img
                      style={{ height: "150px", objectFit: "contain" }}
                      className="rounded-lg w-full"
                      src={product.image_url}
                      alt={product.name}
                    />
                  </CardTitle>
                </CardHeader>

                {/* Thông tin sản phẩm */}
                <CardContent className="flex-grow p-4 flex flex-col justify-between text-center">
                  <Link to={`/products/${product._id}`}>
                    <h1 className="font-semibold text-lg text-gray-800 hover:text-orange-500 transition-colors mb-2">
                      {product.name}
                    </h1>
                  </Link>

                  {/* Giá sản phẩm */}
                  <div className="flex flex-col items-center">
                    {product.sale > 0 && (
                      <h1 className="text-gray-400 line-through text-lg mb-1">
                        {formatPrice(product.price)}
                      </h1>
                    )}
                    <h1 className="text-red-500 font-bold text-lg">
                      {formatPrice(calSale(product.price, product.sale))}
                    </h1>
                  </div>
                </CardContent>

                {/* Nút đặt mua */}
                <CardFooter className="flex justify-center mt-auto p-6">
                  <Link to={`/products/${product._id}`}>
                    <Button className="bg-green-500 text-white hover:bg-green-800 rounded-full py-2 px-6 transition-all duration-300 shadow-md">
                      Đặt Mua
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductsHomePage;
