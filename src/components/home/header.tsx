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
import { FaUserPlus, FaSignInAlt } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";

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
    <header className="bg-gradient-to-r from-green-200 via-blue-200 to-purple-200 text-gray-900 shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-3xl font-bold tracking-wide">
          <img
            src={logo}
            alt="Logo"
            className="rounded-full object-cover w-28 h-28 mx-auto border-4 border-gray-300 shadow-md"
          />
        </div>

        <nav className="hidden md:flex space-x-6">
          <Link to={"/"}>
            <Button variant={"ghost"} className="text-lg hover:text-blue-400 transition duration-300 ease-in-out">
              Trang chủ
            </Button>
          </Link>
          <Link to={"/"}>
            <Button variant={"ghost"} className="text-lg hover:text-blue-400 transition duration-300 ease-in-out">
              Giới thiệu
            </Button>
          </Link>
          <Link to={"/products"}>
            <Button variant={"ghost"} className="text-lg hover:text-blue-400 transition duration-300 ease-in-out">
              Sản phẩm
            </Button>
          </Link>
          <Link to={"/"}>
            <Button variant={"ghost"} className="text-lg hover:text-blue-400 transition duration-300 ease-in-out">
              Dịch vụ
            </Button>
          </Link>
          <Link to={"/"}>
            <Button variant={"ghost"} className="text-lg hover:text-blue-400 transition duration-300 ease-in-out">
              Liên hệ
            </Button>
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Link to={"/cart"}>
            <Button size={"icon"} className="bg-blue-300 text-gray-700 hover:bg-blue-100 transition duration-300 ease-in-out">
              <FaShoppingBag className="w-6 h-6" />
            </Button>
          </Link>

          {data ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full bg-white">
                  <Avatar className="h-10 w-10 border-2 border-blue-200">
                    <AvatarFallback className="text-gray-700">
                      <FaUserAlt />
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" forceMount className="bg-white text-gray-800 shadow-xl">
                <DropdownMenuItem onClick={() => navigate("/profile")}>
                  <IoIosInformationCircleOutline className="mr-2 h-5 w-5 text-blue-500" />
                  <span>Thông tin</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleLogout}>
                  <IoLogOutOutline className="mr-2 h-5 w-5 text-red-500" />
                  <span>Đăng xuất</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
             <Link to={"/register"}>
  <Button className="bg-blue-300 text-black hover:bg-blue-400 transition duration-300 ease-in-out flex items-center shadow-lg transform hover:scale-105">
    <FaUserPlus className="mr-2" />
    Đăng Ký
  </Button>
</Link>
<Link to={"/login"}>
  <Button className="bg-blue-300 text-black hover:bg-blue-400 transition duration-300 ease-in-out flex items-center shadow-lg transform hover:scale-105">
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
