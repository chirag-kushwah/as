"use client"
import React, { useRef, useState } from "react";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { HiArrowLongRight } from "react-icons/hi2";
import { FaBirthdayCake, FaGlassCheers, FaHome, FaBell, FaBaby, FaHandsHelping, FaGift, FaHeart, FaRing, FaStar, FaFacebook } from 'react-icons/fa';
import ProductSwiper from "@/components/ProductSwiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { IoIosStarOutline } from "react-icons/io";
import { Play } from "lucide-react";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import Link from "next/link";




function page() {

  //gift categories
  const giftCategories = [
    {
      name: "Management Gifts",
      image: "./rk.png",
      alt: "Supply Chain Manager Mug"
    },
    {
      name: "Eco Friendly Gifts",
      image: "./img2.png",
      alt: "Eco-Friendly Sustainable Gifts"
    },
    {
      name: "Client Gifts",
      image: "./img3.png",
      alt: "Client Gifts Ideas"
    },
    {
      name: "Employee Gift",
      image: "./img4.png",
      alt: "Employee Appreciation Mugs"
    },
    {
      name: "Drinkware",
      image: "./img5.png",
      alt: "Personalized Drinkware"
    },
    {
      name: "Promotional Gifts",
      image: "./img6.png",
      alt: "Promotional Products"
    },
    {
      name: "Birthday Gifts",
      image: "./img7.png",
      alt: "Birthday Gift Ideas"
    }
  ];

  //multiple pages with color for carosal 
  // Example slides with unique colors
  const carouselItems = [
    { src: "./img31.jpeg", alt: "Modern Office Building", name: "Modern Office Building" },
    { src: "./img32.jpeg", alt: "City Skyline at Sunset", name: "City Skyline at Sunset" },
    { src: "./img33.jpeg", alt: "Urban City Street", name: "Urban City Street" },
    { src: "./img37.jpeg", alt: "Downtown Cityscape", name: "Downtown Cityscape" },
    { src: "./img36.jpeg", alt: "Chicago Skyline", name: "Chicago Skyline" },
    { src: "./img31.jpeg", alt: "Modern Office Interior", name: "Modern Office Interior" }
  ];

  //tailored text array 
  const tailoredTexts = ["Rakhi", "BirthDay", "Aniversary", "Love N Romance", "Congratulations"]

  //this is below the tailored text products 
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      image: "./img1.webp",
      price: "$120",
      comparePrice: "$150",
    },
    {
      id: 2,
      name: "Smart Watch",
      image: "https://tse2.mm.bing.net/th/id/OIP.M8WygP5O_yayUNIDSH-OUwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
      price: "$90",
      comparePrice: "$110",
    },
    {
      id: 3,
      name: "Digital Camera",
      image: "https://tse4.mm.bing.net/th/id/OIP.c7Bfyks64SoXkzz9WiYKeAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
      price: "$450",
      comparePrice: "$500",
    },
    {
      id: 4,
      name: "Gaming Console",
      image: "https://tse4.mm.bing.net/th/id/OIP.c7Bfyks64SoXkzz9WiYKeAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
      price: "$350",
      comparePrice: "$400",
    },
    {
      id: 5,
      name: "Laptop Stand",
      image: "https://m.media-amazon.com/images/I/8199s2tKUuL._AC_SL1500_.jpg",
      price: "$35",
    },
    {
      id: 6,
      name: "Bluetooth Speaker",
      image:
        "https://i5.walmartimages.com/asr/cdaaab64-5ea7-4d8f-969f-cff666244723.ff62693361b001ebbaf41145d23c0f13.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff",
      price: "$60",
      comparePrice: "$70",
    },
    {
      id: 8,
      name: "Smartphone",
      image:
        "https://g-store.com.ua/image/cache/catalog/productfoto/12800/apple-iphone-16-pro-max-256gb-desert-titanium-2-1200x1200.jpg",
      price: "$700",
      comparePrice: "$750",
    },
  ]





  //ocassions wali texts and icons 
  const occasions = [
    { icon: <img src="/cake_882755.svg" alt="Birthday" className="w-[60px] h-[60px]" />, label: "Birthday" },
    { icon: <img src="/anniversary_3316623.svg" alt="Anniversary" className="w-[60px] h-[60px]" />, label: 'Anniversary' },
    { icon: <img src="/house_3938552.svg" alt="Housewarming" className="w-[60px] h-[60px]" />, label: 'Housewarming' },
    { icon: <img src="/arch_721925.svg" alt="Wedding" className="w-[60px] h-[60px]" />, label: 'Wedding' },
    { icon: <img src="/baby-shower_2682198.svg" alt="Baby Shower" className="w-[60px] h-[60px]" />, label: 'Baby Shower' },
    { icon: <img src="/handshake_5429843.svg" alt="Congratulation" className="w-[60px] h-[60px]" />, label: 'Congratulation' },
    { icon: <img src="/magician_17947192.svg" alt="Farewell" className="w-[60px] h-[60px]" />, label: 'Farewell' },
    { icon: <img src="/flower-pot_2608971.svg" alt="Get Well Soon" className="w-[60px] h-[60px]" />, label: 'Get Well Soon' },
    { icon: <img src="/rings_15679776.svg" alt="Proposal" className="w-[60px] h-[60px]" />, label: 'Proposal' },
  ];

  //this is for the recipients men,women , kids , friends , girl friends, boy friends , wife , husband
  const recipients = [
    { name: 'Men', image: 'https://tse1.mm.bing.net/th/id/OIP.PtZtRSC6FVfDKjXLdNg7vwHaJO?rs=1&pid=ImgDetMain&o=7&rm=3' },
    { name: 'Women', image: 'https://images.inc.com/uploaded_files/image/1920x1080/getty_494346582_2000133020009280104_303351.jpg' },
    { name: 'kids', image: 'https://th.bing.com/th/id/R.be4af8c1a6f0b118fcd0ce1c087e4afa?rik=EUZlT%2b9xW5bYZg&riu=http%3a%2f%2fi.huffpost.com%2fgen%2f1111708%2fimages%2fo-LIFE-LESSONS-KIDS-CHILDREN-RULES-facebook.jpg&ehk=jp5X6af65Cv1V9aUQchfk0m1QXu%2brI2nJ8eJrKTvvr0%3d&risl=&pid=ImgRaw&r=0' },
    { name: 'Friends', image: 'https://tse2.mm.bing.net/th/id/OIP.sK6GOWTQlXbjEDx09DiWYAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3' },
    { name: 'Girl Friends', image: 'https://tse3.mm.bing.net/th/id/OIP.fV8rrrlfQGU-UaZ4KI9EKwHaF7?rs=1&pid=ImgDetMain&o=7&rm=3' },
    { name: 'Boy Friends', image: 'https://e2.365dm.com/20/06/768x432/skysports-alzarri-joseph-west-indies_5008791.jpg?20200608140413' },
    { name: 'Wife', image: 'https://symphonyevents.com.au/wp-content/uploads/2022/11/JKHinduWeddingHighRes-253-scaled.jpg' },
    { name: 'Husband', image: 'https://i.pinimg.com/originals/fd/90/08/fd900876fbfbed99640ef987955d3131.jpg' },
  ];



  const [display, setDisplay] = useState(true);
  const [width, setWidth] = useState(600);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  const deal = [
    {
      id: 1,
      name: "Rustic Roses & Daisies Warm",
      image: "./img11.png",
      comparePrice: "$800",




    },
    {
      id: 2,
      name: "Smart Watch",
      image: "./img12.png",
      price: "$90",
      comparePrice: "$110",
    },
    {
      id: 3,
      name: "Digital Camera",
      image: "./img12.png",
      price: "$90",
      comparePrice: "$500",
    },
    {
      id: 4,
      name: "Gaming Console",
     image: "./img12.png",
      price: "$35",
      comparePrice: "$400",
    },
    {
      id: 5,
      name: "Laptop Stand",
      image: "./img12.png",
      price: "$35",
    },
    {
      id: 6,
      name: "Bluetooth Speaker",
      image: "./img12.png",
      price: "$60",
      comparePrice: "$70",
    },
    {
      id: 8,
      name: "Smartphone",
     image: "./img12.png",
      price: "$700",
      comparePrice: "$750",
    },
  ]


  const celebrations = [
    {
      date: "27th July",
      title: "Parents Day",
      img: "./img17.png", // replace with your image path
    },
    {
      date: "1st Aug",
      title: "Girl Friend Day",
      img: "./img18.png",
    },
    {
      date: "1st Aug",
      title: "Girl Friend Day",
      img: "./img19.png",
    },
    {
      date: "1st Aug",
      title: "Girl Friend Day",
      img: "./img20.png",
    },
    {
      date: "1st Aug",
      title: "Girl Friend Day",
      img: "./img21.png",
    },
  ];

  const offers = [
    {
      id: 1,
      logo: "/img34.jpeg",
    },
    {
      id: 2,
      logo: "/img35.jpeg",
    },
    {
      id: 3,
       logo: "/img36.jpeg",
    },
  ];

  const ship = [
    {
      id: 1,
      title: "Lorem Ipsum dummy",
      discount: "50% Off",
      image: "/img25.png",
    },
    {
      id: 2,
      title: "Lorem Ipsum dummy",
      discount: "50% Off",
      image: "/img25.png",
    },
    {
      id: 3,
      title: "Lorem Ipsum dummy",
      discount: "50% Off",
      image: "/img25.png",
    },
    {
      id: 4,
      title: "Lorem Ipsum dummy",
      discount: "50% Off",
      image: "/img25.png",
    },
    {
      id: 5,
      title: "Lorem Ipsum dummy",
      discount: "50% Off",
      image: "/img25.png",
    },
  ];


  const blogs = [
    {
      id: 1,
      date: "July 4, 2025",
      image:
        "img26.png", // replace with your image path
      description:
        "Celebrate their union with timeless elegance. Explore our curated ",
    },
    {
      id: 2,
      date: "July 4, 2025",
      image:
        "img26.png",
      description:
        "Celebrate their union with timeless elegance. Explore our curated ",
    },
    {
      id: 3,
      date: "July 4, 2025",
      image:
        "img26.png",
      description:
        "Celebrate their union with timeless elegance. Explore our curated",
    },
  ];

  const stats = [
    { id: 1, value: "1M+", label: "Gift Delivered" },
    { id: 2, value: "4.2", label: "Avg. User Rating" },
    { id: 3, value: "75,000+", label: "Happy Customers" },
  ];

  const items = [
    {
      id: 1,
      image: "/img27.png", // replace with your image path
      title: "Worldwide Delivery",
    },
    {
      id: 2,
      image: "/img28.png",
      title: "100% Safe & Secure Payment",
    },
    {
      id: 3,
      image: "/img29.png",
      title: "Dedicated Help Center",
      link: "Chat With Us",
    },
  ];


  const reviews = [
    {
      id: 1,
      name: "Sunita Sharma",
      rating: 5,
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever",
      image: "./img30.png", // replace with actual image path
    },
    {
      id: 2,
      name: "Sunita Sharma",
      rating: 5,
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever",
      image: "./img30.png",
    },
    {
      id: 3,
      name: "Sunita Sharma",
      rating: 5,
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever",
      image: "./img30.png",
    },
    {
      id: 4,
      name: "Sunita Sharma",
      rating: 5,
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever",
      image: "./img30.png",
    },
    {
      id: 5,
      name: "Sunita Sharma",
      rating: 5,
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever",
      image: "./img30.png",
    },
    {
      id: 6,
      name: "Sunita Sharma",
      rating: 5,
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever",
      image: "./img30.png",
    },
  ];

  const videoItems = [
    {
      src: './video.mp4', // Local video file
      title: 'Best Bro Rakhi Hamper',
      type: 'video',
    },
    {
      src: './video.mp4',
      title: 'The Sibling Shenanigans',
      type: 'image',
    },
    {
      src: './video.mp4',
      title: 'The Bingo Singles Hamper',
      type: 'image',
    },
    {
      src: './video.mp4',
      title: "Mommy's Serenity Bundle",
      type: 'image',
    },
    {
      src: './video.mp4',
      title: 'The Trailblazer Kit',
      type: 'image',
    },
    {
      src: './video.mp4',
      title: 'The Trailblazer Kit',
      type: 'image',
    },
    {
      src: './video.mp4',
      title: 'The Trailblazer Kit',
      type: 'image',
    },
    {
      src: './video.mp4',
      title: 'The Trailblazer Kit',
      type: 'image',
    },
  ];




  return (
    // <div className='container mx-auto'>
    //   {/* this is for the home cards */}
    //   <div className="py-10">
    //     <Swiper
    //       modules={[Navigation]}
    //       spaceBetween={10}
    //       slidesPerView={6} // adjust for how many items per view
    //       navigation
    //       pagination={{ clickable: true }}
    //       breakpoints={{
    //         320: { slidesPerView: 2, spaceBetween: 10 },
    //         640: { slidesPerView: 3, spaceBetween: 15 },
    //         1024: { slidesPerView: 7, spaceBetween: 10 },
    //       }}
    //     >
    //       {giftCategories.map((category) => (
    //         <SwiperSlide key={category.name}>
    //           <Link href="#" className=" gift-category min-w-[100px] flex-shrink-0 rounded-sm overflow-hidden transform transition duration-300">
    //             <img
    //               src={category.image}
    //               alt={category.alt}
    //               className="w-40 h-40 object-cover rounded-xl  "
    //             />
    //             <div className="p-1  ">
    //               <h3 className="text-gray-800 font-semibold text-center">
    //                 {category.name}
    //               </h3>
    //             </div>
    //           </Link>
    //         </SwiperSlide>
    //       ))}
    //     </Swiper>
    //   </div>

    //   {/* this is for the carosal section  */}
    //   <div className="flex flex-col">
    //     {/* 🔴 Red Container Fullscreen */}
    //     <div className="">

    //       <Swiper
    //         modules={[Navigation]}
    //         spaceBetween={10}
    //         slidesPerView={6} // adjust for how many items per view
    //         navigation
    //         pagination={{ clickable: true }}
    //         breakpoints={{
    //           320: { slidesPerView: 2, spaceBetween: 10 },
    //           640: { slidesPerView: 3, spaceBetween: 15 },
    //           1024: { slidesPerView: 2.5, spaceBetween: 20 },
    //         }}
    //       >

    //         {carouselItems.map((category) => (
    //           <SwiperSlide key={category.name}>
    //             <Link href="#" className=" gift-category min-w-[100px] flex-shrink-0 rounded-sm overflow-hidden transform transition duration-300">
    //               <div className="flex">
    //                 <img
    //                   src={category.src}
    //                   alt={category.alt}
    //                   className="w-full rounded-sm"
    //                 />
    //               </div>
    //             </Link>
    //           </SwiperSlide>
    //         ))}

    //       </Swiper>

    //     </div>
    //   </div>




    //   {/* tailored for your ocasion  */}
    //   <div className="flex flex-col space-y-6 p-6  rounded-xl ">
    //     {/* Title */}
    //     <h1 className="text-3xl font-bold  tracking-wide text-[#3F6F65]">
    //       Tailored For Your Occasion
    //     </h1>

    //     {/* Items */}
    //     <div className="flex flex-wrap gap-4">
    //       {tailoredTexts.map((item, idx) => (
    //         <div
    //           key={idx}
    //           className="group flex items-center text-lg font-medium gap-4 px-4 py-3 text-[#318472] rounded-lg border border-[#318472] 
    //          hover:bg-[#318472] hover:text-white transition-all duration-300 ease-in-out shadow-sm hover:shadow-md cursor-pointer"
    //         >
    //           <Checkbox
    //             className="w-5 h-5 text-white bg-transparent border border-[#318472] checked:bg-white checked:border-white
    //            group-hover:border-white"
    //           />
    //           <h2>{item}</h2>
    //         </div>

    //       ))}

    //       {/* Button */}
    //       <button className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-blue-700 border border-blue-700 
    //                    hover:bg-blue-700 hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg">
    //         View All Categories
    //         <HiArrowLongRight size={28} />
    //       </button>
    //     </div>
    //   </div>

    //   {/* here is the products below the tailored for you ocasion  */}
    //   <div>
    //     <div className=" flex flex-col items-center  justify-center py-10">
    //       {/* <h1 className="text-3xl font-bold mb-6">Our Products</h1> */}
    //       <ProductSwiper products={products} />
    //     </div>
    //     <div className="w-full flex  justify-center"> <button className="flex items-center font-bold gap-2 px-20 py-3 rounded-lg  text-blue-700 border border-blue-700 
    //                    hover:bg-blue-700 hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg">Load More</button></div>
    //   </div>

    //   {/* what the ocasion cards  */}
    //   <div className="flex flex-col items-center h-screen py-12 justify-between">
    //     {/* Heading */}
    //     <div className="text-center">
    //       <h1 className="text-4xl font-bold text-[#3F6F65] p-3">What's The Occasion?</h1>
    //       <p className="text-[#3F6F65] text-lg">
    //         elevate every moment with thoughtful gifting
    //         <div className="text-center text-[#3F6F65]">solutions</div>
    //       </p>
    //     </div>

    //     {/* Occasion grid */}
    //     <div className="flex flex-col items-center gap-y-8 w-full max-w-6xl">
    //       {/* First row: first 5 items */}
    //       <div className="flex flex-wrap justify-center gap-6 w-full ">
    //         {occasions.slice(0, 5).map((occasion, index) => (
    //           <div key={index} className="flex flex-col items-center">
    //             <div className="h-50 w-40 m-3 bg-[#FFEED4] rounded-lg shadow hover:shadow-lg transition duration-300 flex items-center justify-center text-3xl text-gray-800">
    //               {occasion.icon}
    //             </div>
    //             <span className="mt-2 text-[#3F6F65] text-center font-bold">{occasion.label}</span>
    //           </div>
    //         ))}
    //       </div>

    //       {/* Second row: remaining items */}
    //       <div className="flex flex-wrap justify-center gap-6 w-full ">
    //         {occasions.slice(5).map((occasion, index) => (
    //           <div key={index} className="flex flex-col items-center">
    //             <div className="h-50 w-40 m-3 bg-[#FFEED4] rounded-lg shadow hover:shadow-lg transition duration-300 flex items-center justify-center text-3xl text-gray-800">
    //               {occasion.icon}
    //             </div>
    //             <span className="mt-2 text-[#3F6F65] text-center font-bold">{occasion.label}</span>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </div>



    //   {/* this is for the categories men, women, boys, girls , friends , colligues and so on  */}

    //   <div className=" flex justify-around items-center  bg-[#318472] rounded-lg ">
    //     {recipients.map((recipient, index) => (
    //       <div key={index} className="flex flex-col items-center text-white mb-3 font-bold  ">
    //         <img src={recipient.image} alt={recipient.name} className="w-40 h-40 p-6 rounded-full mb-2 object-cover" />
    //         <span>{recipient.name}</span>
    //       </div>
    //     ))}
    //   </div>

    //   {/* here is the products below the tailored for you ocasion  */}
    //   <div className="flex items-start justify-between w-full px-8 py-10">
    //     {/* Left: Heading */}
    //     <div className="w-/4 bg-[#FFEED4] h-90 w-100 rounded-2xl">
    //       <h1 className="text-3xl font-bold text-[#3F6F65] p-20  ">
    //         Deal of the Day
    //       </h1>
    //     </div>

    //     {/* Right: Swiper */}
    //     <div className="w-3/4 max-w-5xl ml-8">
    //       <ProductSwiper products={deal} />
    //     </div>
    //   </div>

    //   {/* this is for the wedding gift */}
    //   <div className="flex flex-col md:flex-row items-center justify-between bg-[#FFF1D6] rounded-2xl shadow-md p-6 md:p-12">
    //     {/* Left: Image */}
    //     <div className="md:w-1/2 w-full flex justify-center mb-6 md:mb-0">
    //       <img
    //         src="./img15.png" // replace with your image path
    //         alt="Wedding Gift"
    //         className="rounded-2xl object-cover w-full max-w-md "
    //       />
    //     </div>

    //     {/* Right: Content */}
    //     <div className="md:w-1/2 w-full md:pl-12 text-center md:text-left">
    //       <h2 className="text-2xl md:text-3xl font-bold text-[#3F6F65] mb-4 ">
    //         Wedding Gifting
    //       </h2>
    //       <p className="text-[#3F6F65] mb-6 leading-relaxed">
    //         Celebrate their union with timeless elegance. Explore our curated
    //         collection of enchanting gifts, perfect for capturing the essence of
    //         their special day. Whether you're a guest or the happy couple, find
    //         the perfect expression of love and congratulations at The Gift Studio.
    //       </p>
    //       <button className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition">
    //         Know More
    //       </button>
    //     </div>
    //   </div>

    //   {/* add margin-top here for spacing */}
    //   <div className="mt-10"></div>

    //   {/* this is for the second wedding gift */}
    //   <div className="flex flex-col md:flex-row items-center justify-between bg-[#3A6D63] rounded-2xl shadow-md p-6 md:p-12">
    //     {/* Left: Content */}
    //     <div className="md:w-1/2 w-full md:pl-12 text-center md:text-left">
    //       <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 ">
    //         Looking for the Perfect Gift?    </h2>
    //       <p className="text-white mb-6 leading-relaxed">
    //         Celebrate their union with timeless elegance. Explore our curated
    //         collection of enchanting gifts, perfect for capturing the essence of
    //         their special day. Whether you're a guest or the happy couple, find
    //         the perfect expression of love and congratulations at The Gift Studio.
    //       </p>
    //       <button className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition">
    //         Know More
    //       </button>
    //     </div>

    //     {/* Right: Image */}
    //     <div className="md:w-1/2 w-full flex justify-center mb-6 md:mb-0">
    //       <img
    //         src="./img16.png" // replace with your image path
    //         alt="Wedding Gift"
    //         className="rounded-2xl object-cover w-full max-w-md "
    //       />
    //     </div>
    //   </div>

    //   {/* add margin-top here for spacing */}
    //   <div className="mt-10"></div>

    //   {/* Celebrations Calendar*/}
    //   <div className="py-12 px-4 md:px-16">
    //     <h2 className="text-3xl md:text-3xl font-bold text-center text-[#3F6F65] mb-20 ">
    //       Celebrations Calendar
    //     </h2>

    //     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
    //       {celebrations.map((item, index) => (
    //         <div
    //           key={index}
    //           className="flex flex-col items-center text-center border-r last:border-r-0 border-gray-300 px-4"
    //         >
    //           {/* Date */}
    //           <h3 className="text-2xl font-extrabold text-[#3F6F65] mb-2 tracking-wide">
    //             {item.date}
    //           </h3>

    //           {/* Title */}
    //           <p className="text-lg font-semibold text-[#3F6F65] mb-3">
    //             {item.title}
    //           </p>

    //           {/* Arrow */}
    //           <span className="text-[#3F6F65] text-3xl font-extrabold mb-6">→</span>


    //           {/* Image */}
    //           <img
    //             src={item.img}
    //             alt={item.title}
    //             className="w-32 h-32 rounded-full object-cover shadow-md"
    //           />
    //         </div>
    //       ))}
    //     </div>
    //   </div>


    //   {/* Get Exclusive Offers from */}

    //   <div className=" py-12 px-4 md:px-16">
    //     <h2 className="text-2xl md:text-3xl font-bold text-center text-[#3F6F65] mb-12">
    //       Get Exclusive Offers from
    //     </h2>

    //     <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
    //       {offers.map((offer) => (
    //         <div key={offer.id} className="flex items-center justify-center">
    //           <img
    //             src={offer.logo}
    //             alt="offer"
    //             className="h-[200px] w-[500px] rounded-2xl"
    //           />
    //         </div>
    //       ))}
    //     </div>
    //   </div>

    //   {/*  Lorem Ipsum dummy */}
    //   <div className=" py-12 px-4 md:px-16">

    //     <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
    //       {/* Left Big Offer */}
    //       <div className="md:col-span-1 flex items-center justify-center">
    //         <div className="relative w-full h-full">
    //           <img
    //             src={ship[0].image}
    //             alt={ship[0].title}
    //             className="w-full h-full object-cover rounded-2xl"
    //           />
    //           <div className="absolute top-6 left-6 text-white">
    //             <h3 className="text-xl font-extrabold">{ship[0].title}</h3>
    //             <p className="text-lg" style={{ fontWeight: 700 }}>{ship[0].discount}</p>
    //             <button className="mt-2 px-4 py-2 bg-white text-black font-bold rounded-lg">
    //               Shop Now
    //             </button>
    //           </div>
    //         </div>
    //       </div>

    //       {/* Right Grid with 4 offers */}
    //       <div className="md:col-span-2 grid grid-cols-2 gap-6">
    //         {ship.slice(1).map((ship) => (
    //           <div key={ship.id} className="relative">
    //             <img
    //               src={ship.image}
    //               alt={ship.title}
    //               className="w-full h-48 object-cover rounded-2xl"
    //             />
    //             <div className="absolute top-4 left-4 text-white">
    //               <h3 className="text-md font-bold">{ship.title}</h3>
    //               <p className="text-sm">{ship.discount}</p>
    //               <button className="mt-2 px-3 py-1 bg-white text-black text-sm font-bold rounded-md">
    //                 Shop Now
    //               </button>
    //             </div>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </div>


    //   {/* blog */}
    //   <div className=" py-12 px-6">
    //     <h2 className="text-3xl font-extrabold text-center text-[#365c4f] mb-10 ">
    //       Blog
    //     </h2>

    //     <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
    //       {blogs.map((blog) => (
    //         <div key={blog.id} className="flex flex-col items-center text-center">
    //           <img
    //             src={blog.image}
    //             alt="blog"
    //             className="w-full h-48 object-cover rounded-2xl shadow"
    //           />
    //           <h3 className="mt-4 text-lg font-bold text-[#365c4f]">
    //             {blog.date}
    //           </h3>
    //           <p className="mt-2 text-[#3F6F65] max-w-sm font-bold">{blog.description}</p>
    //         </div>
    //       ))}
    //     </div>
    //   </div>

    //   {/* Numbers  */}

    //   <div className=" py-12 px-6">
    //     <h2 className="text-4xl font-bold text-center text-[#365c4f] mb-10">
    //       Number don’t Lie
    //     </h2>

    //     <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
    //       {stats.map((stat) => (
    //         <div
    //           key={stat.id}
    //           className="bg-[#ffedd5] rounded-2xl shadow p-10 flex flex-col items-center justify-center text-center"
    //         >
    //           <h3 className="text-5xl font-bold text-[#365c4f]">{stat.value}</h3>
    //           <p className="mt-2 text-[#365c4f] font-bold">{stat.label}</p>
    //         </div>
    //       ))}
    //     </div>
    //   </div>

    //   {/*  */}

    //   <div className=" py-12 px-6">
    //     <div className="grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto text-center">
    //       {items.map((item, index) => (
    //         <div
    //           key={item.id}
    //           className={`flex flex-col items-center justify-center p-6 ${index !== items.length - 1 ? "border-r border-gray-300" : ""
    //             }`}
    //         >
    //           <img
    //             src={item.image}
    //             alt={item.title}
    //             className="w-30 h-30 object-contain mb-4"
    //           />
    //           <h3 className=" font-bold text-[#365c4f] text-1xl">{item.title}</h3>
    //           {item.link && (
    //             <a
    //               href="#"
    //               className="mt-2 text-sm text-[#365c4f] underline hover:text-[#2c4b3e]"
    //             >
    //               {item.link}
    //             </a>
    //           )}
    //         </div>
    //       ))}
    //     </div>
    //   </div>


    //   {/* Customer story */}

    //   <div className="bg-[#35695d] text-white py-12 px-6 rounded-3xl">
    //     <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
    //       {/* Left Side */}
    //       <div className="flex flex-col justify-center">
    //         <h2 className="text-4xl font-bold mb-4">Customer Story</h2>
    //         <p className="mb-6">Lorem ipsum dummy</p>

    //         <div className="flex items-center gap-2">
    //           {[...Array(5)].map((_, i) => (
    //             <IoIosStarOutline
    //               key={i}
    //               className={`text-3xl ${i < 4 ? "text-white" : "text-green-400"
    //                 }`}
    //             />
    //           ))}
    //         </div>

    //         <p className="mt-2 text-sm">4.5 (560 reviews)</p>
    //       </div>

    //       {/* Right Side */}
    //       <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    //         {reviews.map((review) => (
    //           <div
    //             key={review.id}
    //             className="bg-white text-gray-800 rounded-2xl shadow p-5 relative"
    //           >
    //             {/* Avatar Image */}
    //             <img
    //               src={review.image}
    //               alt={review.name}
    //               className="absolute -top-6 left-4 w-12 h-12 rounded-full border-2 border-gray-500 object-cover"
    //             />

    //             <div className="mt-6">
    //               <h3 className="font-bold">{review.name}</h3>
    //               <p className="text-sm mt-2">{review.review}</p>
    //             </div>

    //             <div className="absolute top-3 right-4 text-gray-700 font-bold flex items-center gap-1">
    //               <span>★</span> {review.rating}
    //             </div>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </div>

    //   {/* add margin-top here for spacing */}
    //   <div className="mt-10"></div>


    //   {/* Update box  */}
    //   <div className="bg-[#fff1dc] rounded-2xl p-10 flex flex-col md:flex-row justify-between items-center gap-3 ">
    //     {/* Left Side Text */}
    //     <div className="px-16">
    //       <h2 className="text-5xl font-bold text-[#3F6F65]  ">News Updates!!</h2>
    //       <p className="text-[#3A6D63] font-bold mt-2 ">Lorem ipsum dummy</p>
    //     </div>

    //     {/* Right Side Form */}
    //     <div className="flex items-center gap-2 w-full md:w-auto px-12 ">
    //       <input
    //         type="email"
    //         placeholder="Enter Email Id"
    //         className="flex-1 md:w-90 px-10 py-4 rounded-2xl border border-[#35685f] outline-none text-[#35685f] bg-white font-bold"
    //       />
    //       <button className="bg-[#35685f] text-white px-8 py-4 rounded-2xl w-30">
    //         Submit
    //       </button>
    //     </div>
    //   </div>

    //   {/* add margin-top here for spacing */}
    //   <div className="mt-10"></div>

    //   {/* Joy Full Gifting Stories  */}
    //   <div className="container mx-auto px-4 py-6">
    //     <h3 className="text-center text-[#3F6F65] font-semibold text-3xl mb-6">
    //       Joy Full Gifting Stories
    //     </h3>

    //     <Swiper
    //       modules={[Navigation]}
    //       spaceBetween={30}
    //       slidesPerView={3} // default
    //       navigation
    //       className="mySwiper"
    //       breakpoints={{
    //         320: { slidesPerView: 1 },
    //         640: { slidesPerView: 2 },
    //         768: { slidesPerView: 3 },
    //         1024: { slidesPerView: 4 }, // ✅ max 4 slides
    //       }}
    //     >
    //       {videoItems.map((item, idx) => (
    //         <SwiperSlide key={idx}>
    //           <div className="relative group w-[300px] h-[384px] rounded-[28px] overflow-hidden shadow-lg">
    //             <video
    //               src={item.src}
    //               controls
    //               className="w-full h-full object-cover rounded-[28px]"
    //               controlsList="nofullscreen"
    //             />

    //             <div className="absolute bottom-2 left-2 bg-black bg-opacity-70 text-white text-sm px-2 py-1 rounded">
    //               {item.title}
    //             </div>
    //           </div>
    //         </SwiperSlide>
    //       ))}
    //     </Swiper>
    //   </div>



    //   {/* Follow us on  */}
    //   <div className="w-full py-12  flex flex-col items-center">
    //     {/* Title */}
    //     <h2 className="text-3xl md:text-2xl font-bold text-green-900 mb-8">
    //       Follow us on
    //     </h2>

    //     {/* Icons Row */}
    //     <div className="flex gap-6">
    //       {/* Facebook */}
    //       <a
    //         href="https://facebook.com"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //         className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-300 hover:bg-blue-500 transition-colors"
    //       >
    //         <FaFacebook className="text-white w-7 h-7" />
    //       </a>

    //       {/* Instagram */}
    //       <a
    //         href="https://instagram.com"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //         className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-300 hover:bg-pink-500 transition-colors"
    //       >
    //         <BsInstagram className="text-white w-7 h-7" />
    //       </a>

    //       {/* Twitter */}
    //       <a
    //         href="https://twitter.com"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //         className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-300 hover:bg-sky-500 transition-colors"
    //       >
    //         <BsTwitter className="text-white w-7 h-7" />
    //       </a>
    //     </div>
    //   </div>

















    // </div>
<div className="container mx-auto px-4 py-4">
  {/* <!-- Section 1: Gift Categories --> */}
  <div className="py-10">
    <Swiper
      modules={[Navigation]}
      spaceBetween={10}
      slidesPerView={6}
      navigation
      pagination={{ clickable: true }}
      breakpoints={{
        320: { slidesPerView: 2, spaceBetween: 10 },
        640: { slidesPerView: 3, spaceBetween: 15 },
        1024: { slidesPerView: 7, spaceBetween: 10 },
      }}
    >
      {giftCategories.map((category) => (
        <SwiperSlide key={category.name}>
          <Link href="#" className="gift-category min-w-[100px] flex-shrink-0 rounded-sm overflow-hidden transform transition duration-300">
            <img
              src={category.image}
              alt={category.alt}
              className="w-40 h-40 object-cover rounded-xl"
            />
            <div className="p-1">
              <h3 className="text-gray-800 font-semibold text-center">
                {category.name}
              </h3>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>

      {/* this is for the carosal section  */}
      <div className="flex flex-col">
        {/* 🔴 Red Container Fullscreen */}
        <div className="">

          <Swiper
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView={6} // adjust for how many items per view
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              320: { slidesPerView: 2, spaceBetween: 10 },
              640: { slidesPerView: 3, spaceBetween: 15 },
              1024: { slidesPerView: 2.5, spaceBetween: 20 },
            }}
          >

            {carouselItems.map((category) => (
              <SwiperSlide key={category.name}>
                <Link href="#" className=" gift-category min-w-[100px] flex-shrink-0 rounded-sm overflow-hidden transform transition duration-300">
                  <div className="flex">
                    <img
                      src={category.src}
                      alt={category.alt}
                      className="w-full rounded-sm"
                    />
                  </div>
                </Link>
              </SwiperSlide>
            ))}

          </Swiper>

        </div>
      </div>


  {/* <!-- Section 2: Tailored for Your Occasion --> */}
  <div className="py-8 flex flex-col gap-8 p-6 rounded-xl">
    <h1 className="text-3xl font-bold tracking-wide text-[#3F6F65]">Tailored For Your Occasion</h1>
    <div className="flex  justify-between ">
      <div className="flex gap-9 ">
      {tailoredTexts.map((item, idx) => (
        <div key={idx} className="group flex items-center text-lg font-medium gap-1 px-4 py-2 text-[#318472] rounded-lg border border-[#318472] hover:bg-[#318472] hover:text-white transition-all duration-300 ease-in-out shadow-sm hover:shadow-md cursor-pointer">
          <Checkbox
            className="w-5 h-5 text-white bg-transparent border border-[#318472] checked:bg-white checked:border-white group-hover:border-white"
          />
          <h2>{item}</h2>
        </div>
      ))}
      </div>
     <div className="flex  ">
        <button className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg">
        View All Categories
        <HiArrowLongRight size={28} />
      </button>
      </div>
    </div>
     
  </div>
  

  {/* <!-- Section 3: Products --> */}
  <div className="py-10 flex flex-col items-center justify-center ">
    <ProductSwiper products={products} />
    <div className="w-full flex justify-center">
      <button className="flex items-center font-bold gap-2 px-20 py-3 rounded-lg text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg">
        Load More
      </button>
    </div>
  </div>

  

  {/* <!-- Section 4: What's The Occasion --> */}
  <div className="py-12 px-6 mt-10 flex flex-col items-center h-screen">
    <h1 className="text-4xl font-bold text-[#3F6F65] p-3">What's The Occasion?</h1>
    <p className="text-[#3F6F65] text-lg">elevate every moment with thoughtful gifting solutions</p>
    <div className="flex flex-wrap justify-center gap-6 w-full mt-8">
      {occasions.map((occasion, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="h-50 w-40 m-3 bg-[#FFEED4] rounded-lg  hover:shadow-lg transition duration-300 flex items-center justify-center text-3xl text-gray-800">
            {occasion.icon}
          </div>
          <span className="mt-2 text-[#3F6F65] text-center font-bold">{occasion.label}</span>
        </div>
      ))}
    </div>
  </div>

  {/* <!-- Section 5: Recipients --> */}
  <div className="flex justify-around items-center bg-[#318472] rounded-lg my-6">
    {recipients.map((recipient, index) => (
      <div key={index} className="flex flex-col items-center text-white mb-3 font-bold">
        <img src={recipient.image} alt={recipient.name} className="w-40 h-40 p-4 rounded-full mb-2  object-cover" />
        <span>{recipient.name}</span>
      </div>
    ))}
  </div>

  {/* <!-- Section 6: Deal of the Day --> */}
  <div className="flex items-start justify-between w-full px-8 py-10 my-10">
    <div className="w-1/4 bg-[#FFEED4] h-90 flex items-center rounded-2xl ">
      <h1 className="text-3xl font-bold text-[#3F6F65]  w-full text-center ">Deal of <br /> the Day</h1>
    </div>
    <div className="w-3/4 max-w-5xl ml-8">
      <ProductSwiper products={deal} />
    </div>
  </div>

  {/* <!-- Section 7: Wedding Gifting --> */}
  <div className="flex flex-col md:flex-row items-center justify-between bg-[#FFF1D6] rounded-2xl shadow-md p-6 md:p-12 my-10">
    <div className="md:w-1/2 w-full flex justify-center mb-6 md:mb-0">
      <img
        src="./img15.png"
        alt="Wedding Gift"
        className="rounded-2xl object-cover w-full max-w-md"
      />
    </div>
    <div className="md:w-1/2 w-full md:pl-12 text-center md:text-left">
      <h2 className="text-4xl md:text-4xl font-bold text-[#3F6F65] mb-4">Wedding Gifting</h2>
      <p className="text-[#3F6F65] mb-6 leading-relaxed">
        Celebrate their union with timeless elegance. Explore our curated collection of enchanting gifts, perfect for capturing the essence of their special day.
      </p>
      <button className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition">
        Know More
      </button>
    </div>
  </div>

  {/* <!-- Section 8: Wedding Gifting (Alternate) --> */}
  <div className="flex flex-col md:flex-row items-center justify-between bg-[#3A6D63] rounded-2xl shadow-md p-6 md:p-12 my-10">
    <div className="md:w-1/2 w-full md:pl-12 text-center md:text-left">
      <h2 className="text-4xl md:text-4xl font-bold text-white mb-4">Looking for the Perfect Gift?</h2>
      <p className="text-white mb-6 leading-relaxed">
        Explore our curated collection of enchanting gifts, perfect for capturing the essence of their special day. Whether you're a guest or the happy couple, find the perfect expression of love at The Gift Studio.
      </p>
      <button className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition">
        Know More
      </button>
    </div>
    <div className="md:w-1/2 w-full flex justify-center mb-6 md:mb-0">
      <img
        src="./img16.png"
        alt="Wedding Gift"
        className="rounded-2xl object-cover w-full max-w-md"
      />
    </div>
  </div>

  {/* <!-- Section 9: Celebrations Calendar --> */}
  <div className="py-12 px-4 md:px-16">
    <h2 className="text-3xl md:text-3xl font-bold text-center text-[#3F6F65] mb-20">Celebrations Calendar</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
      {celebrations.map((item, index) => (
        <div key={index} className="flex flex-col items-center text-center border-r last:border-r-0 border-gray-300 px-4">
          <h3 className="text-2xl font-extrabold text-[#3F6F65] mb-2 tracking-wide">
            {item.date}
          </h3>
          <p className="text-lg font-semibold text-[#3F6F65] mb-3">{item.title}</p>
          <span className="text-[#3F6F65] text-3xl font-extrabold mb-6">→</span>
          <img
            src={item.img}
            alt={item.title}
            className="w-32 h-32 rounded-full object-cover shadow-md"
          />
        </div>
      ))}
    </div>
  </div>

      {/* Get Exclusive Offers from */}

      <div className=" py-12 px-4 md:px-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#3F6F65] mb-12">
          Get Exclusive Offers from
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {offers.map((offer) => (
            <div key={offer.id} className="flex items-center justify-center">
              <img
                src={offer.logo}
                alt="offer"
                className="h-[200px] w-[500px] rounded-2xl"
              />
            </div>
          ))}
        </div>
      </div>

      {/*  Lorem Ipsum dummy */}
      <div className=" py-12 px-4 md:px-16">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Left Big Offer */}
          <div className="md:col-span-1 flex items-center justify-center">
            <div className="relative w-full h-full">
              <img
                src={ship[0].image}
                alt={ship[0].title}
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute top-6 left-6 text-white">
                <h3 className="text-xl font-extrabold">{ship[0].title}</h3>
                <p className="text-lg" style={{ fontWeight: 700 }}>{ship[0].discount}</p>
                <button className="mt-2 px-4 py-2 bg-white text-black font-bold rounded-lg">
                  Shop Now
                </button>
              </div>
            </div>
          </div>

          {/* Right Grid with 4 offers */}
          <div className="md:col-span-2 grid grid-cols-2 gap-6">
            {ship.slice(1).map((ship) => (
              <div key={ship.id} className="relative">
                <img
                  src={ship.image}
                  alt={ship.title}
                  className="w-full h-48 object-cover rounded-2xl"
                />
                <div className="absolute top-4 left-4 text-white">
                  <h3 className="text-md font-bold">{ship.title}</h3>
                  <p className="text-sm">{ship.discount}</p>
                  <button className="mt-2 px-3 py-1 bg-white text-black text-sm font-bold rounded-md">
                    Shop Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* blog */}
      <div className=" py-12 px-6">
        <h2 className="text-3xl font-extrabold text-center text-[#365c4f] mb-10 ">
          Blog
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {blogs.map((blog) => (
            <div key={blog.id} className="flex flex-col items-center text-center">
              <img
                src={blog.image}
                alt="blog"
                className="w-full h-48 object-cover rounded-2xl shadow"
              />
              <h3 className="mt-4 text-lg font-bold text-[#365c4f]">
                {blog.date}
              </h3>
              <p className="mt-2 text-[#3F6F65] max-w-sm font-bold">{blog.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Numbers  */}

      <div className=" py-12 px-6">
        <h2 className="text-4xl font-bold text-center text-[#365c4f] mb-10">
          Number don’t Lie
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-[#ffedd5] rounded-2xl shadow p-10 flex flex-col items-center justify-center text-center"
            >
              <h3 className="text-5xl font-bold text-[#365c4f]">{stat.value}</h3>
              <p className="mt-2 text-[#365c4f] font-bold">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/*  */}

      <div className=" py-12 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto text-center">
          {items.map((item, index) => (
            <div
              key={item.id}
              className={`flex flex-col items-center justify-center p-6 ${index !== items.length - 1 ? "border-r border-gray-300" : ""
                }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-30 h-30 object-contain mb-4"
              />
              <h3 className=" font-bold text-[#365c4f] text-1xl">{item.title}</h3>
              {item.link && (
                <a
                  href="#"
                  className="mt-2 text-sm text-[#365c4f] underline hover:text-[#2c4b3e]"
                >
                  {item.link}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>


      {/* Customer story */}

      <div className="bg-[#35695d] text-white py-12 px-6 rounded-3xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Left Side */}
          <div className="flex flex-col justify-center ml-10">
            <h2 className="text-5xl font-bold mb-4">Customer <br /> Story</h2>
            <p className="mb-6">Lorem ipsum dummy</p>

            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <FaStar 
                color="#FFD700"
                  key={i}
                  className={`text-3xl ${i < 4 ? "text-white" : "text-white"
                    }`}
                />
              ))}
            </div>

            <p className="mt-2 text-sm">4.5 (560 reviews)</p>
          </div>

          {/* Right Side */}
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="bg-white text-gray-800 rounded-2xl shadow p-5 relative"
              >
                {/* Avatar Image */}
                <img
                  src={review.image}
                  alt={review.name}
                  className="absolute -top-6 left-4 w-12 h-12 rounded-full border-2 border-gray-500 object-cover"
                />

                <div className="mt-6">
                  <h3 className="font-bold">{review.name}</h3>
                  <p className="text-sm mt-2">{review.review}</p>
                </div>

                <div className="absolute top-3 right-4 text-gray-700 font-bold flex items-center gap-1">
                  <span>★</span> {review.rating}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* add margin-top here for spacing */}
      <div className="mt-10"></div>


      {/* Update box  */}
      <div className="bg-[#fff1dc] rounded-2xl p-10 flex flex-col md:flex-row justify-between items-center gap-3 ">
        {/* Left Side Text */}
        <div className="px-16">
          <h2 className="text-5xl font-bold text-[#3F6F65]  ">News Updates!!</h2>
          <p className="text-[#3A6D63] font-bold mt-2 ">Lorem ipsum dummy</p>
        </div>

        {/* Right Side Form */}
        <div className="flex items-center gap-2 w-full md:w-auto px-12 ">
          <input
            type="email"
            placeholder="Enter Email Id"
            className="flex-1 md:w-90 px-10 py-4 rounded-2xl border border-[#35685f] outline-none text-[#35685f] bg-white font-bold"
          />
          <button className="bg-[#35685f] text-white px-8 py-4 rounded-2xl w-30">
            Submit
          </button>
        </div>
      </div>

      {/* add margin-top here for spacing */}
      <div className="mt-10"></div>

      {/* Joy Full Gifting Stories  */}
      <div className="container mx-auto px-4 py-6">
        <h3 className="text-center text-[#3F6F65] font-bold text-4xl mb-6">
          Joy Full Gifting Stories
        </h3>

        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={3} // default
          navigation
          className="mySwiper"
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 }, // ✅ max 4 slides
          }}
        >
          {videoItems.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative group w-[300px] h-[384px] rounded-[28px] overflow-hidden shadow-lg">
                <video
                  src={item.src}
                  controls
                  className="w-full h-full object-cover rounded-[28px]"
                  controlsList="nofullscreen"
                />

                <div className="absolute bottom-2 left-2 bg-black bg-opacity-70 text-white text-sm px-2 py-1 rounded">
                  {item.title}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>



      {/* Follow us on  */}
      <div className="w-full py-12  flex flex-col items-center">
        {/* Title */}
        <h2 className="text-5xl md:text-2xl font-bold  text-green-900 mb-8 ">
          Follow us on
        </h2>

        {/* Icons Row */}
        <div className="flex gap-6">
          {/* Facebook */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-300 hover:bg-blue-500 transition-colors"
          >
            <FaFacebook className="text-white w-7 h-7" />
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-300 hover:bg-pink-500 transition-colors"
          >
            <BsInstagram className="text-white w-7 h-7" />
          </a>

          {/* Twitter */}
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-300 hover:bg-sky-500 transition-colors"
          >
            <BsTwitter className="text-white w-7 h-7" />
          </a>
        </div>
      </div>

</div>



  )
}

export default page

