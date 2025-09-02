"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const expertiseItems = [
  {
    title: "Channel Gifting",
    img: "https://thumbs.dreamstime.com/b/young-male-employee-wheel-chair-sitting-office-businessman-258654043.jpg",
    price:299,
  },
  {
    title: "Employee Birthday",
    img: "https://tse2.mm.bing.net/th/id/OIP.YQGoGb3obH0Y1d00Uv9e-QHaE7?rs=1&pid=ImgDetMain&o=7&rm=3",
    price:299,
  },
  {
    title: "Onboarding Kit",
    img: "https://img.lovepik.com/photo/20230421/medium/lovepik-two-employees-working-in-the-office-photo-image_352126408.jpg",
    price:299,
  },
  {
    title: "Work Anniversary",
    img: "https://tse3.mm.bing.net/th/id/OIP.aTZzxl2VbJBoDRnS0Azo-QHaEO?rs=1&pid=ImgDetMain&o=7&rm=3",
    price:299,
  },
  {
    title: "Employee Birthday",
    img: "https://tse2.mm.bing.net/th/id/OIP.YQGoGb3obH0Y1d00Uv9e-QHaE7?rs=1&pid=ImgDetMain&o=7&rm=3",
    price:299,
  },
  {
    title: "Onboarding Kit",
    img: "https://img.lovepik.com/photo/20230421/medium/lovepik-two-employees-working-in-the-office-photo-image_352126408.jpg",
    price:299,
  },
  {
    title: "Work Anniversary",
    img: "https://tse3.mm.bing.net/th/id/OIP.aTZzxl2VbJBoDRnS0Azo-QHaEO?rs=1&pid=ImgDetMain&o=7&rm=3",
    price:299,
  },
];

const NewlyAddedProducts = () => {
  return (
    <div className="py-12 bg-[#F7F8F1]">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-8 bg-[#F7F8F1]">
        {/* Left Content */}
        <div className="lg:w-1/3 text-center lg:text-left">
          <h2 className="text-4xl font-bold text-[#0A75B4]  mb-4">
           Newly Added to PrintStop
          </h2>
          <p className="text-gray-600 mb-6">
            New Products on the platform
          </p>

            <div className="flex gap-3 pt-3 ">
            {/* Prev Button */}
          <button className="custom-prev -translate-y-1/2 border border-black w-10 h-10 rounded-full flex items-center justify-center  hover:bg-gray-100 z-10 cursor-pointer">
            <FaChevronLeft className="text-gray-500 text-sm" />
          </button>

          {/* Next Button */}
          <button className="custom-next -translate-y-1/2 border border-black  w-10 h-10 rounded-full flex items-center justify-center  hover:bg-gray-100 z-10 cursor-pointer">
            <FaChevronRight className="text-gray-500 text-sm" />
          </button>
             
            </div>
         
        </div>

        {/* Right Swiper */}
        <div className="lg:w-2/3 w-full relative ">
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            modules={[Navigation]}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3.1 },
            }}
            className="w-full"
          >
            {expertiseItems.map((item, idx) => (
              <SwiperSlide
                key={idx}
                className="bg-[#FFFFFC] border border-[#ECECEB] flex flex-col items-center p-5"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-58 object-cover  mb-2"
                />
                <div className="flex justify-between">
              <p className="text-gray-700 text-center text-[14px] font-semibold">
                  {item.title}
                </p>
                <span className="text-gray-700 text-center text-[14px] font-semibold">₹ {item.price}.00</span>
                </div>
                <p className="text-[11px] text-right text-gray-600">Per Piece</p>
                
              </SwiperSlide>
            ))}
          </Swiper>

        
        </div>
      </div>
    </div>
  );
};

export default NewlyAddedProducts;
