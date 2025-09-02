import React from "react";

const partners = [
  { name: "BFSI", icon: "/bfsi.svg" },
  { name: "IT", icon: "/it.svg" },
  { name: "Pharma", icon: "/pharma.svg" },
  { name: "Manufacturing", icon: "/manufactoring.svg" },
  { name: "Logistics", icon: "/logistics.svg" },
  { name: "FMCG", icon: "/fmcg.svg" },
  { name: "Media", icon: "/media1.svg" },
];

const GiftechPartners = () => {
  return (
    <div className="py-10 ">
    <div className=" container m-auto flex flex-col items-center justify-center py-8 relative gap-6 ">
     <hr className="border-t-2 border-gray-600 w-3/4 " />
      <h1 className="text-2xl px-2 font-semibold bg-white mb-6 absolute top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-800">
      WE ARE GIFTECH PARTNERS FOR
      </h1>
      {/* Partner Icons */}
      <div className="flex flex-wrap justify-center items-center gap-18 py-6">
        {partners.map((partner, idx) => (
          <div key={idx} className="flex flex-col items-center ">
            <img
              src={partner.icon}
              alt={partner.name}
              className="w-22 h-22 mb-2"
            />
            <p className="text-lg font-bold text-gray-700">{partner.name}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default GiftechPartners;
