import { HomeIcon } from "lucide-react";
import { GiConverseShoe } from "react-icons/gi";
import { MdManageAccounts } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { TbCategoryFilled } from "react-icons/tb";
import logo from "@/assets/logo.png";
import { FaUsers } from "react-icons/fa6";
import { AiFillFileText } from "react-icons/ai";
import { BiLogoBlogger } from "react-icons/bi";

const menuItems = [
  {
    title: "Trang chủ",
    icon: <HomeIcon className="h-5 w-5" />,
    link: "/admin",
  },
  {
    title: "Người dùng",
    icon: <MdManageAccounts className="h-5 w-5" />,
    link: "/admin/users",
  },
  {
    title: "Danh mục",
    icon: <TbCategoryFilled className="h-5 w-5" />,
    link: "/admin/categories",
  },
  {
    title: "Sản phẩm",
    icon: <GiConverseShoe className="h-5 w-5 text-zinc-950" />,
    link: "/admin/products",
  },
  {
    title: "Khách hàng",
    icon: <FaUsers className="h-5 w-5" />,
    link: "/admin/customers",
  },
  {
    title: "Đơn hàng",
    icon: <AiFillFileText className="h-5 w-5" />,
    link: "/admin/orders",
  },
  {
    title: "Bài viết",
    icon: <BiLogoBlogger className="h-5 w-5" />,
    link: "/admin/blogs",
  },
];

function SideBar() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-600 via-purple-600 to-indigo-900 w-[240px] shadow-lg">
      {/* Logo Section */}
      <div className="p-6">
        <img
          src={logo}
          alt="Logo"
          className="rounded-full object-cover w-32 h-32 mx-auto border-4 border-gray-700 shadow-md"
        />
      </div>

      {/* Menu Items */}
      <div className="flex flex-col gap-4 mt-6">
        {menuItems.map((item) => (
          <div
            key={item.title}
            className="flex items-center gap-3 p-3 transition-all duration-300 ease-in-out hover:bg-blue-500 hover:scale-105 hover:text-yellow-300 cursor-pointer rounded-lg"
            onClick={() => navigate(item.link)}
          >
            {item.icon}
            <h1 className="text-lg text-white font-semibold">{item.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideBar;
