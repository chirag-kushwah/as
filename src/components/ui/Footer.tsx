import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#3a6d63] text-gray-100 py-12">
      <div className="container mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-7 mb-10">

          {/* Policy Info */}
          <div>
            <h3 className="font-bold text-2xl mb-3 pb-1 border-b border-white/20 inline-block">
              Policy Info
            </h3>
            <ul className="space-y-2 text-lg text-gray-300">
              <li><Link href="/terms" className="hover:text-white">Terms & Conditions</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white">Terms of Use</Link></li>
              <li><Link href="/disclaimer" className="hover:text-white">Disclaimer</Link></li>
            </ul>
          </div>

          {/* About Company */}
          <div>
            <h3 className="font-bold text-2xl mb-3 pb-1 border-b border-white/20 inline-block">
              About Company
            </h3>
            <ul className="space-y-2 text-lg text-gray-300">
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/team" className="hover:text-white">Team</Link></li>
              <li><Link href="/careers" className="hover:text-white">Careers</Link></li>
              <li><Link href="/testimonials" className="hover:text-white">Testimonials</Link></li>
            </ul>
          </div>

          {/* Need Help? */}
          <div>
            <h3 className="font-bold text-2xl mb-3 pb-1 border-b border-white/20 inline-block">
              Need Help?
            </h3>
            <ul className="space-y-2 text-lg text-gray-300">
              <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
              <li><Link href="/faq" className="hover:text-white">FAQs</Link></li>
              <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h3 className="font-bold text-2xl mb-3 pb-1 border-b border-white/20 inline-block">
              Subscribe Now
            </h3>
            <p className="text-lg text-gray-300 mb-4">
              Get updates on promotions & offers coupons
            </p>
            <div className="flex items-center"> <input type="email" placeholder="Enter Email Address" className="w-full px-4 py-2 rounded-full bg-white/30 text-white text-center text-lg focus:outline-none" /> </div>
          </div>
        </div>

        {/* Product Categories */}
        <div>
          <h3 className="font-bold text-2xl mb-4 pb-1 border-b border-white/20 inline-block">
            Product Categories
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
            {Array(10).fill("Category").map((item, i) => (
              <button
                key={i}
                className="border border-white text-white text-sm py-3 px-4 rounded-xl hover:bg-teal-600 transition"
              >
                {item} {i + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-10 border-t border-white/20 pt-6 flex flex-col md:flex-row items-center justify-between text-gray-300 text-sm">
          <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
          <div className="flex space-x-5 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white">Facebook</Link>
            <Link href="#" className="hover:text-white">Twitter</Link>
            <Link href="#" className="hover:text-white">Instagram</Link>
          </div>
        </div>
      </div>
    </footer>

  );
};

export default Footer;