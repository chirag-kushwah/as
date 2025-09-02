import React from 'react';

const BrandedGiftVouchers = () => {
  return (
    <div className=''>
   
    <div className="container m-auto flex items-center justify-between   px-15  py-20 ">
      <div className="w-1/2">
        <h2 className="text-6xl font-bold text-[#0A75B4]  mb-2">BRANDED GIFT VOUCHERS</h2>
        <p className="text-black mb-6">Making Gifting Easy & Meaningful with Our Branded Gift Vouchers</p>
        <button className="bg-yellow-400 cursor-pointer text-black font-semibold py-2 px-4 rounded-full hover:bg-yellow-500">
          GET IN TOUCH
        </button>
      </div>
      <div className="w-1/2 flex justify-end">
        <img
          src="./myntra.png"
          alt="Gift Voucher"
          className="w-100 h-auto rounded-lg shadow-md rotate-[-10deg]"
        />
      </div>
    </div>
         
    </div>
  );
};

export default BrandedGiftVouchers;