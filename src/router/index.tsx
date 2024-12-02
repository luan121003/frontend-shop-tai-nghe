import ProtectedRoute from "@/components/protected-route";
import NotFoundPage from "@/pages/404";
import LayoutAdminPage from "@/pages/admin";

import CategoriesPages from "@/pages/admin/categories";
import CreateCategoryPage from "@/pages/admin/categories/create";
import UpdateCategoryPage from "@/pages/admin/categories/update";
import CustomersPage from "@/pages/admin/customers";
import { DashBoardPage } from "@/pages/admin/dashboard";
import LoginPage from "@/pages/admin/login";
import OrdersPage from "@/pages/admin/orders";
import ProductsPage from "@/pages/admin/products";
import CreateProductPage from "@/pages/admin/products/create";
import UpdateProductPage from "@/pages/admin/products/update";
import UsersPage from "@/pages/admin/users";

import CreateUserPage from "@/pages/admin/users/create";
import UpdateUserPage from "@/pages/admin/users/update";
import HomePage from "@/pages/home";
import CartPage from "@/pages/home/cart";
import CheckoutPage from "@/pages/home/checkout";
import ThanksPage from "@/pages/home/checkout/thank";
import ForgotPasswordPage from "@/pages/home/forgot-password";
import GioithieuPage from "@/pages/home/about";
import LayoutPages from "@/pages/home/layout";
import LienhePage from "@/pages/home/contact";
import LoginHomePage from "@/pages/home/login";
import ProductsHomePage from "@/pages/home/products";
import ProductDetailPage from "@/pages/home/products/detail";
import ProfilePage from "@/pages/home/profile";
import RegisterPage from "@/pages/home/register";
import ResetPasswordPage from "@/pages/home/reset-password";

import { createBrowserRouter } from "react-router-dom";
import AboutPage from "@/pages/home/about";
import ContactPage from "@/pages/home/contact";
import ServicePage from "@/pages/home/service";
import BlogsPage from "@/pages/admin/blog";
import CreateBlogPage from "@/pages/admin/blog/create";
import BlogHomePage from "@/pages/home/blog";
import BlogDetailPage from "@/pages/home/blog/detail";
import UpdateBlogPage from "@/pages/admin/blog/update";
import WarrantyPolicyPage from "@/pages/home/WarrantyPolicy";
import ReturnPolicyPage from "@/pages/home/returnpolicy";
import PaymentGuide from "@/pages/home/paymentguide";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPages />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/products",
        element: <ProductsHomePage />,
      },
      {
        path: "/products/:id",
        element: <ProductDetailPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/place-order",
        element: <CheckoutPage />,
      },

      {
        path: "/thanks",
        element: <ThanksPage />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
      },
      {
        path: "/blogs",
        element: <BlogHomePage />,
      },
      {
        path: "/blogs/:id",
        element: <BlogDetailPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },

      {
        path: "/services",
        element: <ServicePage />,
      },
      {
        path: "/warranty-policy",
        element: <WarrantyPolicyPage />,
      },
      {
        path: "/return-policy",
        element: <ReturnPolicyPage />,
      },
      {
        path: "/paymentguide",
        element: <PaymentGuide />,
      },
    ],
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute>
        <LayoutAdminPage />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/admin",
        element: <DashBoardPage />,
      },
      {
        path: "/admin/users",
        element: <UsersPage />,
      },
      {
        path: "/admin/users/create-user",
        element: <CreateUserPage />,
      },
      {
        path: "/admin/users/:id",
        element: <UpdateUserPage />,
      },
      {
        path: "/admin/categories",
        element: <CategoriesPages />,
      },
      {
        path: "/admin/categories/create-category",
        element: <CreateCategoryPage />,
      },
      {
        path: "/admin/categories/:id",
        element: <UpdateCategoryPage />,
      },
      {
        path: "/admin/products",
        element: <ProductsPage />,
      },
      {
        path: "/admin/products/create-product",
        element: <CreateProductPage />,
      },
      {
        path: "/admin/products/:id",
        element: <UpdateProductPage />,
      },
      {
        path: "/admin/customers",
        element: <CustomersPage />,
      },
      {
        path: "/admin/orders",
        element: <OrdersPage />,
      },
      {
        path: "/admin/blogs",
        element: <BlogsPage />,
      },
      {
        path: "/admin/blogs/create-blog",
        element: <CreateBlogPage />,
      },
      {
        path: "/admin/blogs/:id",
        element: <UpdateBlogPage />,
      },
    ],
  },

  {
    path: "/admin/login",
    element: <LoginPage />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPasswordPage />,
  },
  {
    path: "/reset-password",
    element: <ResetPasswordPage />,
  },

  {
    path: "*",
    element: <NotFoundPage />,
  },
  {
    path: "/login",
    element: <LoginHomePage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);

export default router;
