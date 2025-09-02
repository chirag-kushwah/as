"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const expertiseItems = [
  {
    title: "Onboarding Kit",
    img: "https://img.lovepik.com/photo/20230421/medium/lovepik-two-employees-working-in-the-office-photo-image_352126408.jpg",
  },
  {
    title: "Work Anniversary",
    img: "https://tse3.mm.bing.net/th/id/OIP.aTZzxl2VbJBoDRnS0Azo-QHaEO?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    title: "Channel Gifting",
    img: "https://thumbs.dreamstime.com/b/young-male-employee-wheel-chair-sitting-office-businessman-258654043.jpg",
  },
  {
    title: "Employee Birthday",
    img: "https://tse2.mm.bing.net/th/id/OIP.YQGoGb3obH0Y1d00Uv9e-QHaE7?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    title: "Onboarding Kit",
    img: "https://img.lovepik.com/photo/20230421/medium/lovepik-two-employees-working-in-the-office-photo-image_352126408.jpg",
  },
  {
    title: "Work Anniversary",
    img: "https://tse3.mm.bing.net/th/id/OIP.aTZzxl2VbJBoDRnS0Azo-QHaEO?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    title: "Employee Birthday",
    img: "https://tse2.mm.bing.net/th/id/OIP.YQGoGb3obH0Y1d00Uv9e-QHaE7?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    title: "Onboarding Kit",
    img: "https://img.lovepik.com/photo/20230421/medium/lovepik-two-employees-working-in-the-office-photo-image_352126408.jpg",
  },
  {
    title: "Work Anniversary",
    img: "https://tse3.mm.bing.net/th/id/OIP.aTZzxl2VbJBoDRnS0Azo-QHaEO?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    title: "Onboarding Kit",
    img: "https://img.lovepik.com/photo/20230421/medium/lovepik-two-employees-working-in-the-office-photo-image_352126408.jpg",
  },
  {
    title: "Work Anniversary",
    img: "https://tse3.mm.bing.net/th/id/OIP.aTZzxl2VbJBoDRnS0Azo-QHaEO?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
];

const Expertise = () => {
  return (
    <div className="py-12 bg-[#F7F8F1]">
      <div className=" container  max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-8 bg-[#F7F8F1]">
        {/* Left Content */}
        <div className="lg:w-1/3 text-center lg:text-left">
          <h2 className="text-4xl font-bold text-[#0A75B4] mb-4">
            Our Expertise
          </h2>
          <p className="text-gray-600 mb-6">
            Explore our offerings for your unmatched gifting experience
          </p>
          <button className="bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold shadow cursor-pointer hover:bg-yellow-500 transition">
            Request A Call Back
          </button>
        </div>

        {/* Right Swiper */}
        <div className="lg:w-2/3 w-full relative">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            modules={[Navigation]}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3.5 },
            }}
            className="w-full"
          >
            {expertiseItems.map((item, idx) => (
              <SwiperSlide
                key={idx}
                className=" rounded-lg  flex flex-col items-center"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-68 object-cover rounded-md mb-2"
                />
                <p className="text-gray-700 text-center font-medium">
                  {item.title}
                </p>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Prev Button */}
          <button className="custom-prev absolute top-1/2 -left-0.5 -translate-y-1/2 bg-white w-8 h-8 rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 z-10">
            <FaChevronLeft className="text-gray-500 text-sm" />
          </button>

          {/* Next Button */}
          <button className="custom-next absolute top-1/2 -right-0.5 -translate-y-1/2 bg-white w-8 h-8 rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 z-10">
            <FaChevronRight className="text-gray-500 text-sm" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
