// components/Navbar.tsx
"use client";
import React, { useState, useEffect } from "react";
import { CiShoppingCart, CiHeart, CiUser, CiSearch } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link"


const Navbar = () => {
  const typingTexts = [
    "Search for doctors...",
    "Search by categories...",
    "Search by location...",
  ];

  const [displayedText, setDisplayedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

const router = useRouter();


  // Letter-by-letter typing effect
  useEffect(() => {
    const currentText = typingTexts[textIndex];
    if (charIndex < currentText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(currentText.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 100); // typing speed (ms)
      return () => clearTimeout(timeout);
    } else {
      // Pause before deleting
      const timeout = setTimeout(() => {
        setCharIndex(0);
        setTextIndex((textIndex + 1) % typingTexts.length);
      }, 1500); // pause between texts
      return () => clearTimeout(timeout);
    }
  }, [charIndex, textIndex]);


  return (
    <nav className="bg-white text-[#464646]">
      <div className="border-b border-gray-200 flex flex-col gap-3">
        {/* Top Menu */}
        <div className="container mx-auto flex flex-col md:flex-row md:items-center md:justify-between w-full gap-4 py-4">
          {/* Left: Logo + Location */}
          <div className="flex items-center space-x-4">
            <div className="text-xl uppercase font-bold text-[#4A786F] cursor-pointer" onClick={()=>{
              router.push("/"); 
            }}>The bliss house</div>
            <div className="flex items-center space-x-3 px-3 py-2 border border-gray-100 rounded-md cursor-pointer hover:shadow-sm transition-shadow duration-300">
              <img
                src="./india_321238.svg"
                alt="India flag"
                className="w-5 h-5 object-contain flex-shrink-0"
              />
              <div className="flex flex-col">
                <p className="font-bold text-lg text-black">
                  Where to deliver?
                </p>
                <span className="text-xs text-gray-500">Location Missing</span>
              </div>
            </div>
          </div>

          {/* Right: Search + Icons */}
          <div className="flex items-center gap-4 ">
           
               {/* Search */}
{/* Search */}
<div className="flex-1 md:mx-4 relative">
  <input
    type="text"
    placeholder={displayedText}
    className="w-full pr-10 pl-4 py-2 rounded-full text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-700 transition"
  />
  <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
</div>


            {/* Icons */}
            <div className="flex items-center gap-3">
      <Link href="/cart">
        <div className="p-2 border border-[#464646] rounded-full cursor-pointer hover:bg-gray-100">
          <CiShoppingCart size={20} color="#464646" />
        </div>
      </Link>

      <Link href="/wishlist">
        <div className="p-2 border border-[#464646] rounded-full cursor-pointer hover:bg-gray-100">
          <CiHeart size={20} color="#464646" />
        </div>
      </Link>

      <Link href="/userlogin">
        <div className="p-2 border border-[#464646] rounded-full cursor-pointer hover:bg-gray-100">
          <CiUser size={20} color="#464646" />
        </div>
      </Link>
    </div>
          </div>
        </div>
      </div>

      {/* Bottom Menu */}
      <div className="border-gray-200  py-2  text-[#464646] font-inter border-b ">
        <div className="container mx-auto flex justify-start items-center gap-8">
          {[
            "Birthday",
            "Occasions",
            "Anniversary",
            "Cakes",
            "Personalised",
            "Bulk Order",
          ].map((item) => (
            <Link href="#"
              key={item}
              className="flex items-center justify-center gap-1 text-md hover:text-green-600 transition"
            >
              <span>{item}</span>
              <RiArrowDropDownLine size={22} />
            </Link>
          ))}

          <div className="flex gap-4">
            <Link href="/corporate" className="px-6 pt-[5px] pb-[5px] rounded-full text-sm bg-[#ffd596] text-black cursor-pointer">
              For Corporate
            </Link>
            <button className="px-6 pt-[5px] pb-[8px] text-sm rounded-full bg-black text-white cursor-pointer">
              Download Catalogue
            </button>
          </div>
        </div>


      </div>

    </nav >
  );
};

export default Navbar;
