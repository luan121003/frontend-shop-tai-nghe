import CategoryItem from "@/components/home/category-item";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useGetAllCategories } from "@/hooks/query-categories/useGetAllCategories";
import { useGetProductsByCategory } from "@/hooks/query-products/useGetProductsByCategory";
import { calSale, formatPrice } from "@/utils/common";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function ProductsHomePage() {
  const { data: categories } = useGetAllCategories({
    page: 1,
    limit: 100,
    sort: "asc",
    keyword: "",
  });
  const [categoryId, setCategoryId] = useState("all");
  const { data: products } = useGetProductsByCategory(categoryId);

  return (
    <div className="container mx-auto flex flex-col p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Danh Mục Sản Phẩm</h1>
      <div className="flex gap-4 mb-6">
        {categories?.entities?.map((category) => (
          <CategoryItem
            setCategoryId={setCategoryId}
            key={category._id}
            category={category}
            categoryId={categoryId}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products?.map((product) => (
          <Card 
            key={product._id} 
            className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden transform hover:-translate-y-2 hover:scale-105"
          >
            <CardHeader className="flex justify-center">
              <CardTitle>
                <img
                  className="rounded-sm h-48 object-cover"
                  width={200}
                  src={product.image_url}
                  alt={product.name}
                />
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <div className="flex flex-col gap-2">
                <Link to={`/products/${product._id}`}>
                  <h1 className="font-bold text-lg hover:text-orange-500 cursor-pointer">{product.name}</h1>
                </Link>
                <h1 className="text-sm italic text-gray-600">{product.description}</h1>
                <div className="flex gap-2">
                  <h1 className="font-bold text-gray-500 line-through">{formatPrice(product.price)}</h1>
                  <h1 className="text-red-500 font-semibold">{formatPrice(calSale(product.price, product.sale))}</h1>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center mb-4">
              <Link to={`/products/${product._id}`}>
                <Button className="bg-orange-500 text-white hover:bg-orange-600 transition duration-200">Đặt Mua</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default ProductsHomePage;
