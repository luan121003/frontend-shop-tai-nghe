import hero from "@/assets/slide2.jpg";
import heroTwo from "@/assets/slide1.jpg";
import { Link } from "react-router-dom";

function HomePage() {
    return (
        <div className="w-full bg-black"> 
            <div className="flex justify-between items-center w-[1170px] mx-auto mt-[57px] mb-[30px]">
                <div className="w-[517px]">
                    <h1 className="animate__fadeInDown font-extrabold text-[70px] leading-[80px] text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-pink-500 -tracking-[1.4px]">
                        Khám Phá Thế Giới Giày Dép - Tìm Kiếm Phong Cách Của Bạn
                    </h1>
                    <p className="text-gray-100 font-light text-lg leading-[30px] mt-[22px]">
                    Phong cách thời trang từ những thương hiệu giày hàng đầu, mang đến cho bạn trải nghiệm độc đáo và phong cách không thể quên.
                    </p>
                    <div className="flex items-center mt-[38px] gap-[38px]">
                    <Link to={"/products"}>
                    <button className="w-[205px] h-[60px] bg-green-500 rounded-[30px] hover:bg-green-400 shadow-lg transition-all duration-300">
                    <p className="font-semibold text-[18px] text-white">Mua ngay</p>
                    </button>
                      </Link>
                        <Link to={"/products"}>
                            <p className="text-white text-[18px] leading-[30px] hover:underline hover:text-teal-300 transition-all duration-300">
                                hoặc liên hệ ngay
                            </p>
                        </Link>
                    </div>
                </div>
                <div className="relative flex w-[534px] items-center">
                    <img
                        src={hero}
                        className="w-[330px] h-[540px] rounded-[6px] object-cover z-10 shadow-lg hover:scale-105 transition-transform duration-300"
                        alt=""
                    />
                    <img
                        src={heroTwo}
                        className="-ml-[6px] w-[210px] h-[410px] rounded-[6px] object-cover shadow-lg hover:scale-105 transition-transform duration-300"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
}

export default HomePage;
