import { useEffect, useState } from "react";
import Banner1 from "@/assets/Banner1.png"; // Hình ảnh 1
import Banner2 from "@/assets/Banner2.png"; // Hình ảnh 2
import Banner3 from "@/assets/Banner3.png"; // Hình ảnh 3
import Banner4 from "@/assets/Banner4.png"; // Hình ảnh 4

const images = [Banner1, Banner2, Banner3, Banner4];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Chuyển đổi mỗi 3 giây

    return () => clearInterval(interval); // Dọn dẹp interval khi component unmount
  }, []);

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {" "}
      {/* Thay đổi chiều cao ở đây */}
      <div className="absolute inset-0 transition-opacity duration-700">
        {/* Hiệu ứng mờ dần */}
        <img
          src={images[currentIndex]}
          alt={`Hình ảnh ${currentIndex + 1}`}
          className="w-full h-full object-cover opacity-100"
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-between px-4">
        <button
          className="bg-gray-800 text-white p-2 rounded-full transition-transform transform hover:scale-105"
          onClick={() =>
            setCurrentIndex((prevIndex) =>
              prevIndex === 0 ? images.length - 1 : prevIndex - 1
            )
          }
        >
          &#10094; {/* Mũi tên trái */}
        </button>
        <button
          className="bg-gray-800 text-white p-2 rounded-full transition-transform transform hover:scale-105"
          onClick={() =>
            setCurrentIndex((prevIndex) =>
              prevIndex === images.length - 1 ? 0 : prevIndex + 1
            )
          }
        >
          &#10095; {/* Mũi tên phải */}
        </button>
      </div>
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
              currentIndex === index ? "bg-blue-500" : "bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(index)} // Khi nhấn vào dấu chấm, chuyển đến ảnh tương ứng
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
