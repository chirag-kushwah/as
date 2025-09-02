// app/components/ProductSwiper.tsx
"use client"

import type React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

interface Product {
  id: number
  name: string
  image: string
  price: string
  comparePrice?: string
}

interface ProductSwiperProps {
  products: Product[]
}

const ProductSwiper: React.FC<ProductSwiperProps> = ({ products }) => {
  return (
    <div className="w-full px-6 py-4 relative">
      <style jsx global>{`
    .custom-swiper .swiper-button-next,
    .custom-swiper .swiper-button-prev {
      color: #15803d !important;
      background: white !important;
      width: 44px !important;
      height: 44px !important;
      border-radius: 50% !important;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15) !important;
      border: 1px solid #e5e7eb !important;
    }
    
    .custom-swiper .swiper-button-next:after,
    .custom-swiper .swiper-button-prev:after {
      font-size: 18px !important;
      font-weight: bold !important;
    }
    
    .custom-swiper .swiper-button-next:hover,
    .custom-swiper .swiper-button-prev:hover {
      background: #f9fafb !important;
      transform: scale(1.05) !important;
      transition: all 0.2s ease !important;
    }
    
    .custom-swiper .swiper-button-disabled {
      opacity: 0.5 !important;
    }
  `}</style>

      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        loop={true}
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        className="py-6 custom-swiper"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className=" rounded-xl w-full transition transform  border-grey flex flex-col">
              {/* Product Image */}
              <img
                src={product.image || "/placeholder.svg "}
                alt={product.name}
                className="w-full object-contain rounded-lg"
              />
              <div className="p-3">
                {/* Price + Compare + Button */}
                <div className="flex justify-between items-center ">
                  <div className="flex flex-col">
                    {/* Title */}
                    <h3 className="text-gray-800 font-semibold  text-sm mb-3">{product.name}</h3>
                    <div className="flex gap-2">
                      <span className="text-green-700 font-bold text-lg">
                      {product.price}{" "}
                      {product.comparePrice && (
                        <span className="text-gray-400 line-through text-sm">{product.comparePrice}</span>
                        
          
                      )}
                    </span><span className="text-center text-[#3F6F65] w-[90px] h-[26.03px] rounded-full border px-2 border-[#3F6F65] bg-[#D1FF3B1A]">50% off</span>
                    </div>
                    
                  </div>
                  {/* <button className="px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 transition text-sm">
              Add to Cart
            </button> */}
                </div>
                {/* <p className="text-sm text-blue-500">Earliest Delivery:Today</p> */}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default ProductSwiper
