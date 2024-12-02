import React from "react";

const AboutPage: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-300 to-indigo-400 text-gray-800 min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-4">
          <br />
          <h1 className="text-4xl font-extrabold text-gray-900 flex justify-center">
            SHOES DNC
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-white">
            Giới Thiệu Về Chúng Tôi
          </h2>
          <p className="mt-4 text-lg text-white">
            Shoes DNC là cửa hàng bán giày với sứ mệnh mang đến cho bạn những
            đôi giày phong cách và thoải mái nhất.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Section 1: Lịch sử phát triển */}
          <div className="bg-white rounded-lg shadow-lg p-8 transition-transform duration-300 hover:scale-105">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Lịch Sử Phát Triển
            </h3>
            <p className="text-gray-700">
              Từ những ngày đầu khởi nghiệp, chúng tôi đã không ngừng nỗ lực để
              mang đến cho khách hàng những trải nghiệm tốt nhất trong việc chọn
              mua giày. Hiện tại, chúng tôi đã mở rộng với hàng trăm sản phẩm đa
              dạng.
            </p>
          </div>

          {/* Section 2: Tầm nhìn và sứ mệnh */}
          <div className="bg-white rounded-lg shadow-lg p-8 transition-transform duration-300 hover:scale-105">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Tầm Nhìn và Sứ Mệnh
            </h3>
            <p className="text-gray-700">
              Chúng tôi cam kết mang đến cho khách hàng sự hài lòng tối đa và
              luôn luôn đổi mới để bắt kịp xu hướng thời trang. Sứ mệnh của
              chúng tôi là mang lại sự tự tin qua mỗi bước đi của bạn.
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Section 3: Đội ngũ nhân sự */}
          <div className="bg-white rounded-lg shadow-lg p-8 transition-transform duration-300 hover:scale-105">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Đội Ngũ Nhân Sự
            </h3>
            <p className="text-gray-700">
              Với đội ngũ nhân sự trẻ trung, năng động và đầy nhiệt huyết, chúng
              tôi tự hào là đơn vị tiên phong trong ngành bán lẻ giày dép.
            </p>
          </div>

          {/* Section 4: Cam kết chất lượng */}
          <div className="bg-white rounded-lg shadow-lg p-8 transition-transform duration-300 hover:scale-105">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Cam Kết Chất Lượng
            </h3>
            <p className="text-gray-700">
              Chất lượng sản phẩm luôn là ưu tiên hàng đầu của chúng tôi. Mỗi
              đôi giày được tuyển chọn kỹ lưỡng để mang đến sự hài lòng cho bạn.
            </p>
          </div>

          {/* Section 5: Phản hồi khách hàng */}
          <div className="bg-white rounded-lg shadow-lg p-8 transition-transform duration-300 hover:scale-105">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Phản Hồi Khách Hàng
            </h3>
            <p className="text-gray-700">
              Chúng tôi lắng nghe và không ngừng cải tiến dịch vụ dựa trên những
              phản hồi từ khách hàng, với mục tiêu đem lại trải nghiệm mua sắm
              tuyệt vời nhất.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;
