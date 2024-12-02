import { LocalUtils } from "@/utils/local-utils";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { IoLogOutOutline } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { useGetMeCustomer } from "@/hooks/query-customers/useGetMeCustomer";
import useToastMessage from "@/hooks/userToastMessgases";
import logo from "@/assets/logo.png";
import {
  FaUserPlus,
  FaSignInAlt,
  FaUserAlt,
  FaShoppingBag,
} from "react-icons/fa";

const Header = () => {
  const { data } = useGetMeCustomer();
  const navigate = useNavigate();
  const { toastSuccess } = useToastMessage();

  const handleLogout = () => {
    toastSuccess("Đăng xuất thành công!");
    LocalUtils.removeLocalToken();
    window.location.href = "/";
  };

  return (
    <header className="bg-gradient-to-br from-blue-200 to-blue-500 text-white shadow-lg py-4">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <div className="text-xl font-bold flex items-center space-x-3">
          <img
            src={logo}
            alt="Logo"
            style={{ width: "100px", height: "100px" }}
            className="rounded-full object-cover border-2 border-white"
          />
        </div>

        {/* Navigation Links */}
        {/* Navigation Links */}
        <nav className="hidden md:flex justify-evenly space-x-6 w-full max-w-3xl mx-auto">
          {[
            { path: "/", label: "Trang chủ" },
            { path: "/about", label: "Giới thiệu" },
            { path: "/products", label: "Sản phẩm" },
            { path: "/services", label: "Dịch vụ" },
            { path: "/blogs", label: "Bài viết" },
            { path: "/contact", label: "Liên hệ" },
          ].map((link) => (
            <Link key={link.path} to={link.path} className="flex-1">
              <span className="block text-center text-lg font-medium hover:text-yellow-300 transition duration-300">
                {link.label}
              </span>
            </Link>
          ))}
        </nav>

        {/* User Actions */}
        <div className="flex items-center space-x-4">
          <Link to={"/cart"}>
            <Button
              size={"icon"}
              className="bg-yellow-400 text-gray-800 hover:bg-yellow-300 transition transform hover:scale-110"
            >
              <FaShoppingBag className="w-6 h-6" />
            </Button>
          </Link>

          {data ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative h-12 w-12 rounded-full bg-white"
                >
                  <Avatar className="h-12 w-12 border-2 border-gray-300">
                    <AvatarFallback className="text-gray-800">
                      <FaUserAlt />
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="bg-white text-gray-800 shadow-lg rounded-lg"
              >
                <DropdownMenuItem onClick={() => navigate("/profile")}>
                  <IoIosInformationCircleOutline className="mr-3 h-6 w-6 text-blue-600" />
                  <span>Thông tin</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleLogout}>
                  <IoLogOutOutline className="mr-3 h-6 w-6 text-red-600" />
                  <span>Đăng xuất</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Link to={"/register"}>
                <Button className="bg-yellow-400 text-black hover:bg-yellow-300 transition transform hover:scale-110 flex items-center shadow-md px-4 py-2">
                  <FaUserPlus className="mr-2" />
                  Đăng Ký
                </Button>
              </Link>
              <Link to={"/login"}>
                <Button className="bg-yellow-400 text-black hover:bg-yellow-300 transition transform hover:scale-110 flex items-center shadow-md px-4 py-2">
                  <FaSignInAlt className="mr-2" />
                  Đăng Nhập
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
