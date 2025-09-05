"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import { Navigation } from "swiper/modules"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

export default function HorizontalSwiper() {
  // Example image array
  const images = [
    "./img33.jpeg",
    "./img31.jpeg",
    "./img33.jpeg",
    "./img33.jpeg",
    "./img31.jpeg",
    "./img33.jpeg",
    "./img33.jpeg",
    "./img31.jpeg",
    "./img33.jpeg",
    "./img33.jpeg",
  ]

  return (
    <div className="relative w-full">
      {/* Custom Prev Button */}
      <button className="custom-prev absolute bg-gray-100 top-1/2 left-2 -translate-y-1/2 border border-black w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 z-10 cursor-pointer">
        <FaChevronLeft className="text-gray-500 text-sm" />
      </button>

      {/* Custom Next Button */}
      <button className="custom-next absolute bg-gray-100 top-1/2 right-2 -translate-y-1/2 border border-black w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 z-10 cursor-pointer">
        <FaChevronRight className="text-gray-500 text-sm" />
      </button>

      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        className="mySwiper"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-72 object-cover rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
