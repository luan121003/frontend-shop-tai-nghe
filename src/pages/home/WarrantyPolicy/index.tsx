import React from "react";

const WarrantyPolicyPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 bg-white shadow-lg rounded-lg">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">
          Chính Sách Bảo Hành Sản Phẩm Giày
        </h1>
        <p className="text-lg text-gray-600">
          Cảm ơn quý khách đã mua sản phẩm tại Shoes DNC. Chúng tôi cam kết cung
          cấp những sản phẩm giày chất lượng và dịch vụ bảo hành tốt nhất.
        </p>
      </div>

      <div className="space-y-8">
        <div className="policy-section">
          <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-gray-200 pb-2">
            1. Điều Kiện Bảo Hành
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
            <li>Sản phẩm còn thời gian bảo hành tính từ ngày mua.</li>
            <li>Hóa đơn và phiếu bảo hành phải đầy đủ, hợp lệ.</li>
            <li>Sản phẩm không bị sửa chữa hoặc can thiệp bởi bên thứ ba.</li>
          </ul>
        </div>

        <div className="policy-section">
          <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-gray-200 pb-2">
            2. Thời Gian Bảo Hành
          </h2>
          <p className="text-lg text-gray-700">
            Thời gian bảo hành cho sản phẩm giày tại MyStore DNC là 6 tháng đối
            với các lỗi từ nhà sản xuất, bao gồm lỗi về chất liệu, đường may
            hoặc đế giày.
          </p>
        </div>

        <div className="policy-section">
          <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-gray-200 pb-2">
            3. Quy Trình Bảo Hành
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
            <li>
              Quý khách mang sản phẩm đến cửa hàng gần nhất hoặc gửi qua dịch vụ
              chuyển phát.
            </li>
            <li>
              Chúng tôi sẽ kiểm tra tình trạng sản phẩm và xác nhận quyền lợi
              bảo hành.
            </li>
            <li>
              Sản phẩm đủ điều kiện bảo hành sẽ được sửa chữa hoặc thay thế miễn
              phí.
            </li>
          </ul>
        </div>

        <div className="policy-section">
          <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-gray-200 pb-2">
            4. Các Trường Hợp Không Được Bảo Hành
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
            <li>
              Sản phẩm bị hư hỏng do tác động từ ngoại lực hoặc sử dụng sai
              cách.
            </li>
            <li>
              Sản phẩm đã hết thời gian bảo hành hoặc bị thay đổi bởi bên thứ
              ba.
            </li>
          </ul>
        </div>

        <div className="contact-section">
          <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-gray-200 pb-2">
            5. Liên Hệ Với Chúng Tôi
          </h2>
          <p className="text-lg text-gray-700 mb-2">
            Để yêu cầu bảo hành hoặc biết thêm chi tiết, vui lòng liên hệ:
          </p>
          <p className="text-lg text-blue-600">
            <a href="mailto:support@mystore.com">phanhuuluan2003@gmial.com</a>
          </p>
          <p className="text-lg text-blue-600">
            <a href="tel:0123456789">09031015645</a>
          </p>
          <p className="text-lg text-gray-700">
            Địa chỉ cửa hàng: Hẻm 4, Nguyễn Văn Linh, Phường Hưng Lợi, Quận Ninh
            Kiều, TP Cần Thơ
          </p>
        </div>
      </div>
    </div>
  );
};

export default WarrantyPolicyPage;
