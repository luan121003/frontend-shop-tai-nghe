import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import useToastMessage from "@/hooks/userToastMessgases";
import { LocalUtils } from "@/utils/local-utils";
import { FaU, FaUser } from "react-icons/fa6";

import { IoLogOutOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function TopBar() {
  const navigate = useNavigate();

  const { toastSuccess } = useToastMessage();

  const handleLogout = () => {
    toastSuccess("Đăng xuất thành công!");
    LocalUtils.removeLocalToken();
    navigate("/admin/login");
  };

  return (
    <div className="flex items-center justify-center p-4 bg-gray-50 border-b relative">
  <h1 className="text-3xl font-bold text-blue-600">Trang quản lý</h1>
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="ghost" className="absolute right-4 h-9 w-9 rounded-full hover:bg-gray-200">
        <Avatar className="h-9 w-9">
          <AvatarFallback className="bg-black">
            <FaUser className="text-white"></FaUser>
          </AvatarFallback>
        </Avatar>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-48" align="end" forceMount>
      <DropdownMenuLabel className="font-normal p-2">
        <div className="flex flex-col space-y-1">
          <p className="text-sm font-semibold">admin</p>
          <p className="text-xs text-gray-500">john.doe@example.com</p>
        </div>
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem onClick={handleLogout} className="flex items-center p-2 space-x-2">
        <IoLogOutOutline className="h-4 w-4 text-gray-700" />
        <span className="text-sm">Đăng xuất</span>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</div>


  );
}

export default TopBar;