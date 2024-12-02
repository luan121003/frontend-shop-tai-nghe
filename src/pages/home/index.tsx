import hero from "@/assets/slide2.jpg";
import heroTwo from "@/assets/slide1.jpg";
import { Link } from "react-router-dom";
import Carousel from "@/components/home/sidebar";
import { useGetFourProducts } from "@/hooks/query-products/useGetFourProducts";
import { formatPrice } from "@/utils/common";

function HomePage() {
  const pagination = {
    limit: 4,
    keyword: "",
    page: 1,
    sort: "asc",
  };

  const { data: products } = useGetFourProducts(pagination);
  return (
    <div className="w-full bg-black">
      <div className="flex justify-between items-center w-[1170px] mx-auto mt-[57px] mb-[30px]">
        <div className="w-[517px]">
          <h1 className="animate__fadeInDown font-extrabold text-[70px] leading-[80px] text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-pink-500 -tracking-[1.4px]">
            Khám Phá Thế Giới Giày Dép - Tìm Kiếm Phong Cách Của Bạn
          </h1>
          <p className="text-gray-100 font-light text-lg leading-[30px] mt-[22px]">
            Phong cách thời trang từ những thương hiệu giày hàng đầu, mang đến
            cho bạn trải nghiệm độc đáo và phong cách không thể quên.
          </p>
          <div className="flex items-center mt-[38px] gap-[38px]">
            <Link to={"/products"}>
              <button className="w-[205px] h-[60px] bg-green-500 rounded-[30px] hover:bg-green-400 shadow-lg transition-all duration-300">
                <p className="font-semibold text-[18px] text-white">Mua ngay</p>
              </button>
            </Link>
            <Link to={"/contact"}>
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

      {/* Sản phẩm nổi bật */}
      <section
        className="container mx-auto px-4 py-8"
        style={{
          backgroundImage:
            "url('https://file.hstatic.net/200000174405/collection/19238246_1997064527179566_5473797071884482645_o_ff15685be80c4d21973dcb914398e04f.jpg')",
        }}
      >
        <div className="h-64 flex items-center justify-center">
          <h2 className="text-2xl font-bold text-yellow-300 mb-6 text-center border-2 border-yellow-300 inline-block px-4 py-2 rounded-md">
            Sản phẩm nổi bật
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Product Card */}
          {products?.entities.map((product) => (
            <div className="bg-white p-4 rounded-lg shadow transition-transform transform hover:scale-105 hover:shadow-lg flex flex-col">
              <img
                src={product.image_url}
                alt="Giày"
                className="w-full h-48 object-cover rounded-lg mb-4"
                style={{ objectFit: "cover" }} // Đảm bảo hình ảnh phủ hết không gian
              />
              <h3 className="text-lg font-semibold text-gray-800 flex-grow">
                {product.name}
              </h3>
              <p className="text-gray-600">{formatPrice(product.price)}</p>

              <Link to={`/products/${product._id}`}>
                <button className="mt-4 w-full py-2 bg-yellow-500 text-white rounded-lg font-semibold hover:bg-yellow-600">
                  Xem chi tiết
                </button>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
