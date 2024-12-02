import React from "react";

const ReturnPolicyPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 bg-white shadow-lg rounded-lg">
      {/* Tiêu đề chính */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Chính Sách Đổi Trả Sản Phẩm Giày
        </h1>
        <p className="text-lg text-gray-600">
          Cảm ơn quý khách đã mua sản phẩm tại Shoes DNC. Dưới đây là các điều
          khoản về chính sách đổi trả để đảm bảo sự hài lòng của khách hàng.
        </p>
      </div>

      {/* Các phần chính sách */}
      <div className="space-y-10">
        {/* Điều kiện đổi trả */}
        <div className="policy-section">
          <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-gray-300 pb-2">
            1. Điều Kiện Đổi Trả
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
            <li>Sản phẩm phải còn nguyên tem, mác và chưa qua sử dụng.</li>
            <li>Hóa đơn và phiếu giao hàng phải còn nguyên vẹn.</li>
            <li>
              Thời gian yêu cầu đổi trả trong vòng 30 ngày kể từ ngày nhận sản
              phẩm.
            </li>
            <li>Sản phẩm không bị hư hỏng hoặc lỗi do sử dụng sai cách.</li>
          </ul>
        </div>

        {/* Quy trình đổi trả */}
        <div className="policy-section">
          <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-gray-300 pb-2">
            2. Quy Trình Đổi Trả
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
            <li>
              Quý khách vui lòng liên hệ với bộ phận chăm sóc khách hàng qua
              email hoặc điện thoại.
            </li>
            <li>
              Chúng tôi sẽ cung cấp hướng dẫn chi tiết về việc gửi lại sản phẩm.
            </li>
            <li>
              Sản phẩm đủ điều kiện đổi trả sẽ được xử lý và gửi lại sản phẩm
              mới hoặc hoàn tiền (tùy thuộc vào yêu cầu của khách hàng).
            </li>
          </ul>
        </div>

        {/* Các trường hợp không được đổi trả */}
        <div className="policy-section">
          <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-gray-300 pb-2">
            3. Các Trường Hợp Không Được Đổi Trả
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
            <li>
              Sản phẩm đã qua sử dụng hoặc không còn nguyên vẹn (tem, mác bị
              mất, sản phẩm bị hư hỏng do sử dụng sai cách).
            </li>
            <li>
              Sản phẩm giảm giá, khuyến mãi hoặc đặc biệt không áp dụng chính
              sách đổi trả.
            </li>
            <li>
              Sản phẩm không phải là giày hoặc các mặt hàng không thuộc danh mục
              đổi trả của chúng tôi.
            </li>
          </ul>
        </div>

        {/* Liên hệ để đổi trả */}
        <div className="contact-section">
          <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-gray-300 pb-2">
            4. Liên Hệ Để Đổi Trả
          </h2>
          <p className="text-lg text-gray-700 mb-2">
            Để yêu cầu đổi trả hoặc biết thêm chi tiết, vui lòng liên hệ:
          </p>
          <div className="space-y-2">
            <p className="text-lg text-blue-600">
              <a href="mailto:support@mystore.com">phanhuuluan2003@gmail.com</a>
            </p>
            <p className="text-lg text-blue-600">
              <a href="tel:0123456789">0931015645</a>
            </p>
            <p className="text-lg text-gray-700">
              Hẻm 4, Nguyễn Văn Linh, Phường Hưng Lợi, Quận Ninh Kiều, TP Cần
              Thơ
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReturnPolicyPage;
