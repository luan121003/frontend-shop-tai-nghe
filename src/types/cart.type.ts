import { Product } from "@/types/product.type";
import { Customer } from "./customers.type";

export type Cart = {
  _id: string;
  product_id: Product;
  customer_id: Customer;
  quantity: number;
  size: string;
};
