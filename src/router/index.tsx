
import ProtectedRoute from "@/components/protected-route";
import NotFoundPage from "@/pages/404";
import AdminPage from "@/pages/admin";
import LoginPage from "@/pages/admin/login";
import UsersPage from "@/pages/admin/users";
import UserPage from "@/pages/admin/users";
import CreateUserPage from "@/pages/admin/users/create-user";
import HomePage from "@/pages/home";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/admin",
      element: (
        <ProtectedRoute>
        <AdminPage />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/admin/users",
          element: <UsersPage />,
        },
        {
          path: "/admin/users/create-user",
          element: <CreateUserPage />
        },
      ],
    },
   
    {
      path: "/admin/login",
      element: <LoginPage />,
    },

    {
        path: "*",
        element: <NotFoundPage />
    }
  ]);
  
  export default router;