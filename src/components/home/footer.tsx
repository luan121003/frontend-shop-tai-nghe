import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"; // Icons mạng xã hội
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Cột 1: Logo và Mô tả */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-3xl font-bold mb-4 text-yellow-400">
              Shoes DNC
            </h3>
            <p className="text-gray-400">
              Cửa hàng giày uy tín với nhiều mẫu mã đa dạng. Đảm bảo chất lượng
              và sự hài lòng cho khách hàng.
            </p>
          </div>

          {/* Cột 2: Liên kết nhanh */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Liên Kết Nhanh</h3>
            <ul>
              <li className="mb-2">
                <a
                  href="/"
                  className="text-gray-400 hover:text-yellow-400 transition duration-300 ease-in-out"
                >
                  Trang Chủ
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/about"
                  className="text-gray-400 hover:text-yellow-400 transition duration-300 ease-in-out"
                >
                  Giới thiệu
                </a>
              </li>
              <li className="mb-2">
                <Link
                  to="/products"
                  className="text-gray-400 hover:text-yellow-400 transition duration-300 ease-in-out"
                >
                  Sản phẩm
                </Link>
              </li>
              <li className="mb-2">
                <a
                  href="/contact"
                  className="text-gray-400 hover:text-yellow-400 transition duration-300 ease-in-out"
                >
                  Liên Hệ
                </a>
              </li>
            </ul>
          </div>

          {/* Cột 3: Dịch Vụ Khách Hàng */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Dịch Vụ Khách Hàng</h3>
            <ul>
              <li className="mb-2">
                <a
                  href="/warranty-policy"
                  className="text-gray-400 hover:text-yellow-400 transition duration-300 ease-in-out"
                >
                  Chính sách bảo hành
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/return-policy"
                  className="text-gray-400 hover:text-yellow-400 transition duration-300 ease-in-out"
                >
                  Chính sách đổi trả
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/paymentguide"
                  className="text-gray-400 hover:text-yellow-400 transition duration-300 ease-in-out"
                >
                  Hướng dẫn thanh toán
                </a>
              </li>
            </ul>
          </div>

          {/* Cột 4: Liên hệ và Mạng xã hội */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Liên Hệ</h3>
            <p className="text-gray-400 mb-2">
              Hẻm 4 Nguyễn Văn Linh, P. Hưng Lợi, Q. Ninh Kiều
            </p>
            <p className="text-gray-400 mb-2">Điện thoại: 0931015645</p>
            <p className="text-gray-400 mb-4">
              Email: phanhuuluan2003@gmail.com
            </p>

            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                className="text-gray-400 hover:text-yellow-400 transition duration-300 ease-in-out"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://instagram.com"
                className="text-gray-400 hover:text-yellow-400 transition duration-300 ease-in-out"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://twitter.com"
                className="text-gray-400 hover:text-yellow-400 transition duration-300 ease-in-out"
              >
                <FaTwitter size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Dòng bản quyền */}
        <div className="text-center mt-10 text-gray-500">
          <p>&copy; 2024 MyStore DNC. Tất cả các quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
