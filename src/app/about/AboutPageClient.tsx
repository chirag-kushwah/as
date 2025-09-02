"use client";

import Image from "next/image";
import { ChevronRight, Users, Award, Heart } from "lucide-react";
import { motion } from "framer-motion";

// Image paths as variables
const About = "/aboutpage/80.jpg";
const Prof1 = "/aboutpage/21850.jpg";
const Prof2 = "/aboutpage/26982.jpg";
const Prof3 = "/aboutpage/60157.jpg";
const Prof4 = "/aboutpage/189532.jpg";

const teamImages = [
  { img: Prof4, name: "Priya Sharma", role: "Founder & CEO" },
  { img: Prof1, name: "Raj Malhotra", role: "Creative Director" },
  { img: Prof2, name: "Anjali Patel", role: "Head of Design" },
  { img: Prof3, name: "Vikram Singh", role: "Operations Manager" },
];

export default function AboutPageClient() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white w-full">
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <div className="absolute inset-0 bg-teal-900 to-transparent flex items-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.5 }}
              className="max-w-2xl text-white"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ml-2 sm:ml-4">
                Our Story
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl opacity-90 ml-2 sm:ml-4">
                Discover the passion and craftsmanship behind Your Fashion Store, where tradition meets contemporary style.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-2 py-20 w-full">
        <div className="max-w-8xl mx-auto">
          {/* Our Story */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="inline-block px-4 py-1 rounded-full bg-teal-100 text-teal-800 font-medium text-2xl mb-4">
                  Our Journey
                </div>
                <h2 className="text-3xl md:text-3xl font-semibold mb-4">
                  From Small Boutique to Fashion Destination
                </h2>
                <p className="text-gray-700 mb-4">
                  Founded in 2010, Your Fashion Store began as a small boutique in New Delhi with a vision to bring authentic Indian craftsmanship to the modern fashion landscape.
                </p>
                <p className="text-gray-700">
                  Over the years, we've expanded our collection to include a wide range of traditional and contemporary designs, always staying true to our roots while embracing innovation.
                </p>
              </div>
              <div className="order-1 md:order-2">
                <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl transform md:rotate-2 transition-transform hover:rotate-0 duration-300">
                  <Image
                    src={About}
                    alt="Our Store"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.section>

          {/* Our Values */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="mb-10">
              <div className="inline-block px-4 py-1 rounded-full bg-teal-100 text-teal-800 font-medium text-xl mb-4">
                Our Values
              </div>
              <h2 className="text-4xl md:text-3xl font-semibold">
                What Drives Us
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div whileHover={{ y: -10 }} className="bg-white p-8 rounded-2xl shadow-md border border-teal-100">
                <div className="w-14 h-14 rounded-full bg-teal-100 flex items-center justify-center mb-6">
                  <Award className="h-7 w-7 text-teal-700" />
                </div>
                <h3 className="text-xl font-medium mb-3">Authenticity</h3>
                <p className="text-gray-700">
                  We celebrate the rich heritage of Indian craftsmanship, working directly with artisans to preserve traditional techniques while creating contemporary designs.
                </p>
              </motion.div>

              <motion.div whileHover={{ y: -10 }} className="bg-white p-8 rounded-2xl shadow-md border border-teal-100">
                <div className="w-14 h-14 rounded-full bg-teal-100 flex items-center justify-center mb-6">
                  <Heart className="h-7 w-7 text-teal-700" />
                </div>
                <h3 className="text-xl font-medium mb-3">Sustainability</h3>
                <p className="text-gray-700">
                  We're committed to ethical production practices, using eco-friendly materials and supporting fair wages for all artisans and workers in our supply chain.
                </p>
              </motion.div>

              <motion.div whileHover={{ y: -10 }} className="bg-white p-8 rounded-2xl shadow-md border border-teal-100">
                <div className="w-14 h-14 rounded-full bg-teal-100 flex items-center justify-center mb-6">
                  <Users className="h-7 w-7 text-teal-700" />
                </div>
                <h3 className="text-xl font-medium mb-3">Innovation</h3>
                <p className="text-gray-700">
                  While honoring tradition, we continuously explore new designs, techniques, and technologies to create fashion that resonates with the modern consumer.
                </p>
              </motion.div>
            </div>
          </motion.section>

          {/* Our Team */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="text-center mb-10">
              <div className="inline-block px-4 py-1 rounded-full bg-teal-100 text-teal-800 font-medium text-sm mb-4">
                Our Team
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold">
                The People Behind Our Success
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {teamImages.map((member, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-md"
                >
                  <div className="relative h-[470px] overflow-hidden">
                    <Image
                      src={member.img}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform hover:scale-110 duration-500"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-medium text-lg">{member.name}</h3>
                    <p className="text-teal-700">{member.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Call to Action */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="mt-20"
          >
            <div className="bg-gradient-to-r from-teal-700 to-teal-500 rounded-2xl p-8 md:p-12 text-white text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Join Our Fashion Journey
              </h2>
              <p className="text-lg mb-6 max-w-2xl mx-auto">
                Discover our latest collections and be part of our story as we continue to celebrate the rich heritage of Indian fashion.
              </p>
              <a
                href="/products"
                className="inline-flex items-center bg-white text-teal-700 font-medium px-6 py-3 rounded-full hover:bg-teal-50 transition-colors"
              >
                Explore Our Collections
                <ChevronRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
