"use client";

import React from "react";
import { LiaGiftSolid } from "react-icons/lia";
import { BiMessageSquareDetail } from "react-icons/bi";
import { CiDeliveryTruck } from "react-icons/ci";

const steps = [
  {
    id: "01",
    title: "Enquiry Form",
    description: "Fill in the form & our gifting expert will reach out to you",
    bgColor: "bg-[#FEF9F2]",
    iconBg: "bg-[#F8E7D0]",
    iconColor: "text-[#724F20]",
    icon: (
      // <svg
      //   className="w-6 h-6"
      //   fill="none"
      //   stroke="currentColor"
      //   viewBox="0 0 24 24"
      // >
      //   <path
      //     strokeLinecap="round"
      //     strokeLinejoin="round"
      //     strokeWidth="2"
      //     d="M9 5h6l-6 6h6m-6 6l6-6m-6 6v-6m6 6v6"
      //   />
      // </svg>
       <BiMessageSquareDetail size={38} />
    ),
  },
  {
    id: "02",
    title: "An Overview Call",
    description: "A quick call to help us understand your requirements",
    bgColor: "bg-[#F5FAFF]",
    iconBg: "bg-[#B8E6FF]",
    iconColor: "text-blue-600",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
  },
  {
    id: "03",
    title: "Choose Your Gifts",
    description:
      "Review our catalogue to place your order or customise any gift",
    bgColor: "bg-[#FFFEF3]",
    iconBg: "bg-[#FFFBDE]",
    iconColor: "text-[#AD8631]",
    icon: (
      // <svg
      //   className="w-6 h-6"
      //   fill="none"
      //   stroke="currentColor"
      //   viewBox="0 0 24 24"
      // >
      //   <path
      //     strokeLinecap="round"
      //     strokeLinejoin="round"
      //     strokeWidth="2"
      //     d="M3 3h18M3 21h18M3 9h18M3 15h18"
      //   />
      // </svg>
      < LiaGiftSolid size={40}/>
    ),
  },
  {
    id: "04",
    title: "Express Delivery",
    description:
      "We will handcraft & deliver your order as per your instructions",
    bgColor: "bg-[#F8FDF6]",
    iconBg: "bg-[#E0EAD1]",
    iconColor: "text-black",
    icon: (
      // <svg
      //   className="w-6 h-6"
      //   fill="none"
      //   stroke="currentColor"
      //   viewBox="0 0 24 24"
      // >
      //   <path
      //     strokeLinecap="round"
      //     strokeLinejoin="round"
      //     strokeWidth="2"
      //     d="M9 5l7 7-7 7"
      //   />
      // </svg>
      <CiDeliveryTruck size={40}/>
    ),
  },
];

const HowItWorks = () => {
  return (
    <div>

   
    <div className=" container m-auto py-9 pb-9 text-center ">
      <h2 className="text-4xl font-bold text-[var(--greenBackground)] mb-2">
        How does it work?
      </h2>
      <p className="text-gray-600 mb-8">
        Book your corporate gifts with 4 simple steps
      </p>

      <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto px-4">
        {steps.map((step) => (
          <div
            key={step.id}
            className={`${step.bgColor} p-6 rounded-lg shadow-md flex-1 min-w-[220px]`}
          >
            <div className="flex justify-between">
              <div
                className={`${step.iconBg} w-12 h-12  mb-4 rounded-full flex items-center justify-center`}
              >
                <div className={`${step.iconColor}`}>{step.icon}</div>
              </div>
              {/* <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.id}</h3> */}
            </div>
            <div className="text-left ">
<p className="text-gray-600 font-medium">{step.title}</p>
            <p className="text-gray-600 mt-2 text-sm">{step.description}</p>
            </div>

            
          </div>
        ))}
      </div>
    </div>
     </div>
  );
};

export default HowItWorks;
