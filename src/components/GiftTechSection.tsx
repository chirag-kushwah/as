"use client";
import {
  FaGift,
  FaTruck,
  FaUserFriends,
  FaBriefcase,
  FaTshirt,
  FaHeadphones,
  FaGlassWhiskey,
  FaCrown,
  FaBoxOpen,
  FaBirthdayCake,
  FaClock,
} from "react-icons/fa";
import { MdCelebration } from "react-icons/md";

export default function GiftTechSection() {
  let icons = [
    { icon: "./deepak.svg", label: "Diwali" },
    { icon: "./sameDayDelivery1.svg", label: "Same Day Delivery" },
    { icon: "./employeekit.svg", label: "Employee Kits" },
    { icon: "./office1.svg", label: "Office Accessories" },
    { icon: "./apparels1.svg", label: "Apparels" },
    { icon: "./Gadgets.svg", label: "Gadgets & Tech" },
    { icon: "./Drinkwares.svg", label: "Drinkware" },
    { icon: "./premiumCollection.svg", label: "Premium Collection" },
  ];

  return (
    <div className=" py-4 pt-7 pb-0 ">
      <div className="container mx-auto ">
        {/* Top Categories */}
        <div className="flex justify-between items-center border border-gray-300 rounded-lg overflow-hidden ">
          {icons.map((item, index, arr) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center flex-1 py-4 ${
                index !== arr.length - 1 ? "border-r border-gray-300" : ""
              }`}
            >
              <img src={item.icon} alt="" className="w-10" />
              <p className="text-sm mt-1 text-gray-700">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Middle Section */}
      
        <div className="py-4">
      <div className="container mx-auto relative flex items-center justify-center ">
        
     {/* left */}
        <div className="flex flex-col gap-4 absolute left-0">
          <div className="flex items-center gap-2 bg-[#F1F1F1] rounded-lg w-[25vw]  px-4 py-5 shadow-sm">
            <img src="./employeekits2.svg" alt="" className="w-10" />
            <span className="text-[#212121] text-sm">Employee Kits</span>
          </div>
          <div className="flex items-center gap-2 bg-[#F1F1F1] rounded-lg px-4 py-5 shadow-sm">
             <img src="./celebration.svg" alt="" className="w-10" />
            <span className="text-[#212121] text-sm">Celebrations</span>
          </div>
        </div>

          {/* center */}
        <div className="bg-[#E4F5FF] border-[15px] border-white rounded-full text-center px-16 py-10 w-full max-w-4xl z-1">
          <h2 className="text-2xl font-bold text-[#0271B8]">
            GiftTech Partner For Growth
          </h2>
          <p className="text-[#020204] mt-2">
            Simplified Gifting Solutions, Empowered By Technology
          </p>
          <button className="mt-4 bg-[#FFC803] text-black px-6 py-2 rounded-full font-semibold shadow hover:bg-yellow-500">
            TALK TO OUR EXPERTS !
          </button>
        </div>

 {/* right */}
        <div className="flex flex-col gap-4 absolute right-0">
  <div className="flex items-center justify-end gap-2 bg-[#F1F1F1] rounded-lg w-[25vw] py-5 px-4 shadow-sm">
    <img src="./gifts.svg" alt="" className="w-10" />
    <span className="text-[#212121] text-sm">Festive Gifts</span>
  </div>
  <div className="flex items-center justify-end gap-2 bg-[#F1F1F1] rounded-lg w-[25vw] py-5 px-4 shadow-sm">
     <img src="./gadgets.svg" alt="" className="w-10" />
    <span className="text-[#212121] text-sm">Tech Gadgets</span>
  </div>
</div>

      </div>
    </div>

      </div>
    </div>
  );
}
