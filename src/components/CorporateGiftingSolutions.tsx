import React from "react";
import LogoCarousel from "@/components/LogoCarosal";

const differentiators = [
  {
    img: "./curated.svg",
    title1: "CURRATED",
    title2: "COLLECTIONS",
    desc: "Easy Navigation with Organized Categories",
  },
  {
    img: "./idea.svg",
    title1: "IN-HOUSE",
    title2: "PERSONALIZATION",
    desc: "Tailored Gifts for Every Occasion",
  },
  {
    img: "./Plane.svg",
    title1: "GLOBAL",
    title2: "FULLFILLMENT",
    desc: "Quick and Reliable Shipping",
  },
  {
    img: "./sameDayDelivery.svg",
    title1: "SAME DAY",
    title2: "DELIVERY",
    desc: "Premium Quality Products Guaranteed",
  },
  {
    img: "./adminPanel.svg",
    title1: "PERSONALIZED",
    title2: "DASHBOARD",
    desc: "24/7 Assistance for All Clients",
  },
];

function CorporateGiftingSolutions() {
  return (
    <div >
      <div className="container mx-auto flex flex-col gap-1  py-12 ">
        {/* Corporate Gifting Solutions */}
        <div className="flex justify-center items-center">
  <div className="flex items-center gap-4  pb-2">
    <img src="./employeegifts.png" alt="Corporate Gifts" className="w-40" />
    <div >
      <h1 className="font-bold text-4xl text-[var(--greenBackground)]">Corporate Gifting Solutions</h1>
      <p className="text-gray-400 text-md">
        Bespoke gifts for our employees & clients
      </p>
    </div>
  </div>
</div>


        {/* Brands that trust us */}
          <div className="text-center relative pt-4 mt-4 ">
      <hr className="border-t-2 border-gray-300 w-full" />
      <h1 className="text-2xl px-2 font-semibold bg-white mb-6 absolute top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-800">
        Brands That Trust Us
      </h1>
      <LogoCarousel />
    </div>

        {/* Our Differentiators */}
        <div className="pt-6 relative mt-4">
           <hr className="border-t-2 border-gray-300 w-full " />
      <h1 className="text-2xl px-2 font-semibold bg-white mb-6 absolute top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-800">
       Our Differentiators
      </h1>

          <div className="flex flex-wrap justify-center my-3 gap-7">
            {differentiators.map((item, index) => (
              <div
                key={index}
                className="flex gap-3  p-3 rounded-lg  items-start w-[200px]  "
              >
          
                <img src={item.img} alt={item.title1} className="w-13" />
                <div className="flex flex-col gap-1">
                  <h3 className="text-[15px] font-medium bg-[#ECECEC] p-0.2">{item.title1}</h3>
                  <h3 className="text-[15px] font-medium bg-[#ECECEC] p-0.2">{item.title2}</h3>
                  <p className="text-[12px] text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default CorporateGiftingSolutions;
