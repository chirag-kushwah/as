import { BsCalendar2Heart } from "react-icons/bs";
import { CiHeart, CiShoppingCart, CiUser, CiSearch } from "react-icons/ci";
import { FaCartShopping, FaRegCircleUser } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";


export default function CommercialNavbar() {
  return (
    <div className="bg-yellow shadow-sm border-b-2 border-blue">
      <div className="container m-auto flex items-center justify-between py-3 px-5">
        {/* Logo */}
        <h1 className="text-pink-500 font-bold text-xl">Logo</h1>

        {/* Search */}

        <div className="flex items-center w-[500px] bg-white rounded-full border border-gray-400 px-3">
          <input
            type="text"
            placeholder="Search for gifts"
            className="w-full px-2 py-2 rounded-full border-none focus:outline-none"
          />
          <CiSearch size={24} className="cursor-pointer"/>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-3">
          <div className="cursor-pointer ">
            <BsCalendar2Heart size={27} className="text-[#6E50BF]" />
          </div>
          <div className="cursor-pointer p-0.6 ">
            <FaRegHeart size={27} color="black"/> {/* lavender */}
          </div>
          <div className="cursor-pointer">
            <FaCartShopping size={27} className="text-[#DD2745]" /> {/* pink */}
          </div>
          <div className="cursor-pointer p-0.6">
            <FaRegCircleUser size={27} />
          </div>
        </div>
      </div>
    </div>
  );
}
