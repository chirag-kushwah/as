import React from 'react';

const BuildYourOwnBox = () => {
  return (
    <div className='bg-[#F7F8F1] '>
   
    <div className=" container m-auto flex items-center justify-between bg-[#F7F8F1] ">
      <div className="w-1/2">
        <img
          src="./buildYourOwnGift.jpg"
          alt="Gift Box"
          className="rounded-lg w-100 h-90 "
        />
      </div>
      <div className="w-1/2 pl-6">
        <h2 className="text-3xl font-bold text-black mb-2">Can&apos;t decide what to gift?</h2>
        <h1 className="text-6xl font-bold text-[#0A75B4] mb-4">Build Your Own Box!</h1>
        {/* <p className="text-black mb-6 text-2xl font-medium">With endless possibilities, you&apos;re the boss <br /> <span className='text-[15px]'>(with a little help from our gifting experts).</span> </p> */}
       <p className="text-black mb-6 text-2xl font-medium leading-none">
  With endless possibilities, you&apos;re the boss <br />
  <span className="text-[15px] leading-none">
    (with a little help from our gifting experts).
  </span>
</p>

        <button className="bg-yellow-400 cursor-pointer text-black font-semibold py-2 px-4 rounded-full hover:bg-yellow-500">
          REQUEST A CALLBACK
        </button>
      </div>
    </div>
       
    </div>
  );
};

export default BuildYourOwnBox;