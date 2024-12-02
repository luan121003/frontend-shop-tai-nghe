import { Customer } from "./customers.type";

export type Order = {
  _id: string;
  customer_id: Customer;
  address: string;
  phone_number: string;
  email: string;
  delivery: string;
  total: number;
  product_cost: number;
  shipping_cost: number;
  order_detail: OrderDetail[];
  created_at: Date;
  status: boolean;
};

export type OrderDetail = {
  _id: string;
  product_id: string;
  order_id: string;
  quantity: number;
  product_cost: number;
  total: number;
};
