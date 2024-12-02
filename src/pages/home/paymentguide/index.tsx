import React from "react";

const PaymentGuide: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 font-sans">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Hướng Dẫn Thanh Toán
      </h1>

      <section className="mb-6">
        <p className="text-gray-600">
          Chào mừng bạn đến với trang hướng dẫn thanh toán! Hãy làm theo các
          bước dưới đây để hoàn tất đơn hàng một cách dễ dàng và an toàn.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Quy Trình Thanh Toán Chi Tiết
        </h2>

        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800">
            Bước 1: Đặt Hàng
          </h3>
          <p className="text-gray-600">
            Chọn sản phẩm và nhấn vào nút “Thêm vào giỏ hàng” để đặt hàng.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800">
            Bước 2: Xem Giỏ Hàng
          </h3>
          <p className="text-gray-600">
            Kiểm tra lại sản phẩm trong giỏ hàng của bạn và điều chỉnh nếu cần.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800">
            Bước 3: Nhập Thông Tin Giao Hàng
          </h3>
          <p className="text-gray-600">
            Điền đầy đủ thông tin cá nhân như tên, địa chỉ, và số điện thoại để
            chúng tôi giao hàng chính xác.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800">
            Bước 4: Chọn Phương Thức Thanh Toán
          </h3>
          <p className="text-gray-600">
            Lựa chọn phương thức thanh toán phù hợp, bao gồm COD hoặc chuyển
            khoản ngân hàng.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800">
            Bước 5: Xác Nhận Đơn Hàng
          </h3>
          <p className="text-gray-600">
            Kiểm tra lại thông tin và nhấn “Xác Nhận Đơn Hàng” để hoàn tất giao
            dịch.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Chính Sách Thanh Toán và Hủy Đơn
        </h2>
        <p className="text-gray-600">
          Quý khách có thể thanh toán khi nhận hàng hoặc chuyển khoản trước. Để
          hủy đơn hàng hoặc hoàn tiền, vui lòng liên hệ với bộ phận hỗ trợ.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Hỗ Trợ Khách Hàng
        </h2>
        <p className="text-gray-600">
          Nếu bạn có bất kỳ thắc mắc nào, vui lòng liên hệ với chúng tôi qua số
          điện thoại: <strong>0123 456 789</strong> hoặc email:{" "}
          <strong>support@myshoestore.com</strong>
        </p>
      </section>
    </div>
  );
};

export default PaymentGuide;
