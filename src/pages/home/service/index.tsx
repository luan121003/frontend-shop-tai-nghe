import React from "react";

const ServicePage: React.FC = () => {
  return (
    <div className="service-page bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100 min-h-screen py-12">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-blue-500">
          Dịch Vụ Của Chúng Tôi
        </h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Khám phá các dịch vụ đặc biệt mà chúng tôi dành cho khách hàng yêu
          giày!
        </p>
      </header>

      {/* Main Services Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto mb-16">
        {[
          {
            title: "Giao Hàng Nhanh",
            description:
              "Chúng tôi cam kết giao hàng trong vòng 2-3 ngày làm việc trên toàn quốc.",
          },
          {
            title: "Đổi Trả Dễ Dàng",
            description:
              "Khách hàng có thể đổi trả trong vòng 7 ngày với điều kiện sản phẩm còn nguyên vẹn.",
          },
          {
            title: "Bảo Hành Sản Phẩm",
            description:
              "Tất cả các sản phẩm đều có bảo hành 6 tháng về chất lượng và độ bền.",
          },
          {
            title: "Tư Vấn Chọn Size",
            description:
              "Đội ngũ của chúng tôi sẵn sàng hỗ trợ khách hàng chọn size phù hợp.",
          },
        ].map((service, index) => (
          <div
            key={index}
            className="service-item bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-2xl hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-2"
          >
            <h2 className="text-xl font-semibold text-teal-400 mb-2">
              {service.title}
            </h2>
            <p className="text-gray-300">{service.description}</p>
          </div>
        ))}
      </section>

      {/* Contact Section */}
      <section className="service-contact bg-gray-700 rounded-lg p-8 max-w-3xl mx-auto mb-16 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
        <h2 className="text-2xl font-bold text-teal-300">
          Liên Hệ & Hỗ Trợ Khách Hàng
        </h2>
        <p className="mt-2">
          Hotline: <span className="text-teal-400">0931015645</span>
        </p>
        <p className="mt-2">
          Email:{" "}
          <span className="text-teal-400">phanhuuluan2003@gmail.com</span>
        </p>
        <p className="mt-4 text-gray-300">
          Kết nối với chúng tôi qua <span className="text-teal-400">Zalo</span>,{" "}
          <span className="text-teal-400">Messenger</span> để nhận tư vấn nhanh
          nhất.
        </p>
      </section>

      {/* Promotion Section */}
      <section className="service-promotion bg-gradient-to-r from-yellow-500 to-orange-500 text-gray-900 rounded-lg p-8 max-w-3xl mx-auto mb-16 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
        <h2 className="text-2xl font-bold">Khuyến Mãi Đặc Biệt</h2>
        <p className="mt-4">
          Miễn phí giao hàng cho đơn hàng trên{" "}
          <span className="font-semibold">5000k</span> và giảm giá{" "}
          <span className="font-semibold">10%</span> cho khách hàng mới!
        </p>
      </section>
    </div>
  );
};

export default ServicePage;
