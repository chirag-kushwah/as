import Link from "next/link";
import React from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

function Navtop() {
  return (
    <div className="bg-[var(--greenBackground)] py-3">
      <div className="flex container mx-auto justify-between items-center">
        <div className="contact__support flex gap-5">
            <div className="text-white font-medium hover:underline">
                <Link href="#">Customer Support: +91 98765 4321</Link>
            </div>
          <div className="flex items-center gap-4">
            <FaFacebookF
              size={20}
              color="white"
              className="cursor-pointer hover:opacity-80 transition"
            />
            <FaLinkedinIn
              size={20}
              color="white"
              className="cursor-pointer hover:opacity-80 transition"
            />
            <FaInstagram
              size={20}
              color="white"
              className="cursor-pointer hover:opacity-80 transition"
            />
          </div>
        </div>
        <div className="pages__links space-x-5">
          <Link href="#" className="text-white font-bold hover:underline">
            Corporate Gift's
          </Link>
          <Link href="#" className="text-white font-bold hover:underline">
            B2B Gift's
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navtop;
