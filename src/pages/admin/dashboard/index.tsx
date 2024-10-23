"use client";

import * as React from "react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

import { formatPrice } from "@/utils/common";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useGetReports } from "@/hooks/query-reports/useGetReports";

export const description = "An interactive bar chart";

const chartConfig = {
  gross_sales: {
    label: "Doanh thu",
  },
  net_sales: {
    label: "Lợi nhuận",
  },
  orders_count: {
    label: "Đơn hàng",
  },
} satisfies ChartConfig;

export function DashBoardPage() {
  const [optionDay, setOptionDay] = React.useState("last_7_days");
  const { data: chartData } = useGetReports(optionDay);

  const totalGrossSale = chartData?.reduce(
    (acc, cur) => acc + cur.gross_sales,
    0
  );
  const totalNetSale = chartData?.reduce((acc, cur) => acc + cur.net_sales, 0);
  const totalOrdersCount = chartData?.reduce(
    (acc, cur) => acc + cur.orders_count,
    0
  );

  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Thống kê doanh thu bán hàng</h1>
        <Select
          onValueChange={(value) => setOptionDay(value)}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Chọn thời gian" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="last_7_days">7 ngày trước</SelectItem>
              <SelectItem value="last_28_days">28 ngày trước</SelectItem>
              <SelectItem value="last_year">1 năm trước</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      
      <Card className="mb-8">
        <CardContent className="px-4 sm:px-8">
          <ChartContainer
            config={chartConfig}
            className="aspect-auto h-[300px] w-full"
          >
            <BarChart accessibilityLayer data={chartData}>
              <CartesianGrid vertical={false} strokeDasharray="3 3" />
              <XAxis
                dataKey="date"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                minTickGap={32}
                tickFormatter={(value) => {
                  const date = new Date(value);
                  return date.toLocaleDateString("vi-VN", {
                    month: "short",
                    day: "numeric",
                  });
                }}
              />
              <ChartTooltip
                content={
                  <ChartTooltipContent
                    className="w-[150px]"
                    labelFormatter={(value) => {
                      return new Date(value).toLocaleDateString("vi-VN", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      });
                    }}
                  />
                }
              />
              <Bar
                name="Doanh thu"
                fill="#1d4ed8"
                dataKey="gross_sales"
                radius={4}
              />
              <Bar
                name="Lợi nhuận"
                fill="#4ade80"
                dataKey="net_sales"
                radius={4}
              />
              <Bar
                name="Đơn hàng"
                fill="#f59e0b"
                dataKey="orders_count"
                radius={4}
              />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
      
      <div className="flex justify-around gap-6 mt-4">
        <div className="border rounded-xl p-6 text-center">
          <h2 className="text-lg font-bold mb-2">Doanh thu</h2>
          <p className="text-2xl font-semibold">{formatPrice(totalGrossSale ?? 0)}</p>
        </div>
        <div className="border rounded-xl p-6 text-center">
          <h2 className="text-lg font-bold mb-2">Lợi nhuận</h2>
          <p className="text-2xl font-semibold">{formatPrice(totalNetSale ?? 0)}</p>
        </div>
        <div className="border rounded-xl p-6 text-center">
          <h2 className="text-lg font-bold mb-2">Đơn hàng</h2>
          <p className="text-2xl font-semibold">{totalOrdersCount ?? 0}</p>
        </div>
      </div>
    </>
  );
}
