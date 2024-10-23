import { Button } from "@/components/ui/button";


import { Link } from "react-router-dom";

function ThanksPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="font-extrabold text-4xl text-teal-500 mb-4">
                Cảm ơn bạn đã mua hàng!
            </h1>
            <p className="text-lg text-gray-700 mb-6">
                Đơn hàng của bạn đã được gửi thành công. Bạn vui lòng kiểm tra hóa đơn trên email của BẠN
            </p>
            <Link to={"/"}> {/* Thay đổi đường dẫn nếu cần */}
                <button className="w-[200px] h-[50px] bg-pink-500 rounded-[30px] hover:bg-pink-400 shadow-lg transition-all duration-300">
                    <p className="font-semibold text-[18px] text-white">Quay lại trang chủ</p>
                </button>
            </Link>
        </div>
    );
}

export default ThanksPage;

