import React from "react";

const GiftCategoriesPrices = () => {
  return (
    <div className="">
      <div className="container m-auto pt-9">
        <div className="pt-7 flex flex-col ">
          <h1 className="text-center font-bold text-4xl text-[var(--greenBackground)] ">
            Budget Friendly Gifts Solutions
          </h1>
          <h3 className="text-center">
            Unique gifts catelogues that are tailored to your budget
          </h3>
        </div>

        <div className="flex items-center justify-between  ">
          {/* prices under section */}
          <div className="flex w-[50vw] p-4 gap-5 flex-wrap ">
            <div className="bg-[#F2F3E8] flex flex-col w-45 h-22 rounded-full items-center justify-center">
              <span className="text-[10px] text-[#484845]">Gifts Under</span>
              <span className="text-[#4B4C26] font-bold text-3xl">₹ 499</span>
            </div>
            <div className="bg-[#F2F3E8] flex flex-col w-45 h-22  rounded-full items-center justify-center">
              <span className="text-[10px] text-[#484845]">Gifts Under</span>
              <span className="text-[#4B4C26] font-bold text-3xl">₹ 999</span>
            </div>
            <div className="bg-[#F2F3E8] flex flex-col w-45 h-22  rounded-full items-center justify-center">
              <span className="text-[10px] text-[#484845]">Gifts Under</span>
              <span className="text-[#4B4C26] font-bold text-3xl">₹ 1499</span>
            </div>
            <div className="bg-[#F2F3E8] flex flex-col w-45 h-22  rounded-full items-center justify-center">
              <span className="text-[10px] text-[#484845]">Gifts Under</span>
              <span className="text-[#4B4C26] font-bold text-3xl">₹ 2299</span>
            </div>
            <div className="bg-[#F2F3E8] flex flex-col w-45 h-22  rounded-full items-center justify-center">
              <span className="text-[10px] text-[#484845]">Gifts Above</span>
              <span className="text-[#ee8e28] font-bold text-3xl">₹ 4999</span>
            </div>
          </div>
          {/* image of girl */}
          <div className=" ">
            <img src="./SaleGirl.png" alt="" className="w-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftCategoriesPrices;
