"use client";

import React from "react";

const GiftingStats = () => {
  return (
    <div className="">
      <div className="container mx-auto  text-center ">
        <h2 className="text-3xl font-bold text-[var(--greenBackground)]">
          We Power Gifting for India&apos;s Smartest Companies
        </h2>
        <p className="text-gray-600  mb-12 text-center mt-2">
          Over 1,000+ businesses trust Confetti to handle their employee and
          client gifting, from onboarding boxes to festive hampers.
        </p>

        <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto ">
          {/* First Half */}
          <div className="flex gap-6 flex-wrap">
            <div className="flex flex-col gap-6">
              <div className="bg-white p-8 rounded-lg  border border-gray-200 w-70">
                <h3 className="text-3xl font-bold text-gray-900">50+</h3>
                <p className="font-bold mt-2">Cities Reached</p>
              </div>
              <div className="bg-white p-8 rounded-lg  border border-gray-200 w-70">
                <h3 className="text-3xl font-bold text-gray-900">2,500+</h3>
                <p className="font-bold mt-2">Personalized Products</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg  border border-gray-200 flex flex-col justify-center w-60">
              <h3 className="text-3xl font-bold text-gray-900">5,00,000+</h3>
              <p className="font-bold mt-2">Curated Gift Experience Delivered</p>
            </div>
          </div>

          {/* Second Half */}
          <div className="flex gap-6 flex-wrap">
            <div className="flex flex-col gap-6">
              <div className="bg-white p-8 rounded-lg  border border-gray-200 w-70">
                <h3 className="text-3xl font-bold text-gray-900">1,000+</h3>
                <p className="font-bold mt-2">Enterprise Clients</p>
              </div>
              <div className="bg-white p-8 rounded-lg  border border-gray-200 w-70">
                <h3 className="text-3xl font-bold text-gray-900">99%</h3>
                <p className="font-bold mt-2">On-time Dispatch Rate</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg  border border-gray-200 flex flex-col justify-center w-60">
              <h3 className="text-3xl font-bold text-gray-900">10,000+</h3>
              <p className="font-bold mt-2">Scale-ready Gifting Solutions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftingStats;
