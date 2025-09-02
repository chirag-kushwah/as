"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const logos = [
  "https://www.salesforce.com/news/wp-content/uploads/sites/3/2021/05/Salesforce-logo.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg",
  "https://i0.wp.com/sijobling.com/wp-content/uploads/2012/08/Microsoft-Metro-Branding.png?fit=470%2C264&ssl=1",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8HnPzgh1W8NIz-MTywLyfJbQgoEH2oc-rCA&s",
  "https://news.cognizant.com/image/cognizant-new-logo-400px.jpg",
  "https://i.pinimg.com/736x/df/07/9c/df079c7d167289b284e6bc9402a81c96.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8HnPzgh1W8NIz-MTywLyfJbQgoEH2oc-rCA&s",
  "https://news.cognizant.com/image/cognizant-new-logo-400px.jpg",
  "https://i.pinimg.com/736x/df/07/9c/df079c7d167289b284e6bc9402a81c96.jpg",
];

const LogoCarousel = () => {
  return (
    <div className="py-12">
      <Swiper
        spaceBetween={30}
        slidesPerView={4}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
        }}
        modules={[Autoplay]}
      >
        {logos.map((logo, index) => (
          <SwiperSlide
            key={index}
            className="flex items-center justify-center"
          >
            <div className="flex items-center justify-center w-32 h-20 bg-white rounded-lg border border-gray-200 p-2">
              <img
                src={logo}
                alt={`logo-${index}`}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LogoCarousel;
