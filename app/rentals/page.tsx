"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MessageCircle, CheckCircle2, Filter } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

export default function RentalsPage() {
  const { t } = useLanguage();
  const [filterType, setFilterType] = useState<"All" | "Car" | "Motorbike">("All");

  const inventory = [
    { id: 1, name: "Toyota Avanza", type: "Car", image: "/images/mobil1(avanza).avif", transmission: "Automatic", seats: "7 Seats", price: "Rp 350.000" },
    { id: 2, name: "Honda Scoopy", type: "Motorbike", image: "/images/motor1(scoopy).webp", transmission: "Automatic", seats: "2 Seats", price: "Rp 80.000" },
    { id: 3, name: "Suzuki Ertiga", type: "Car", image: "/images/mobil3(ertiga).webp", transmission: "Automatic", seats: "7 Seats", price: "Rp 350.000" },
    { id: 4, name: "Toyota Alphard", type: "Car", image: "/images/mobil4(alphard).webp", transmission: "Automatic", seats: "7 Seats", price: "Rp 1.800.000" },
    { id: 5, name: "Honda Jazz", type: "Car", image: "/images/mobil5(jazz).avif", transmission: "Automatic", seats: "5 Seats", price: "Rp 300.000" },
    { id: 6, name: "Toyota Fortuner", type: "Car", image: "/images/mobil6(fortuner).jpeg", transmission: "Automatic", seats: "7 Seats", price: "Rp 1.200.000" },
    { id: 7, name: "Mitsubishi Pajero", type: "Car", image: "/images/mobil7(pajero).png", transmission: "Automatic", seats: "7 Seats", price: "Rp 1.500.000" },
    { id: 8, name: "Yamaha NMAX", type: "Motorbike", image: "/images/motor5(nmax).png", transmission: "Automatic", seats: "2 Seats", price: "Rp 150.000" },
    { id: 9, name: "Yamaha XMAX", type: "Motorbike", image: "/images/motor7(xmax).png", transmission: "Automatic", seats: "2 Seats", price: "Rp 250.000" },
  ];

  const filteredInventory = inventory.filter((item) => filterType === "All" || item.type === filterType);

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto w-full">
        <ScrollReveal className="text-center mb-12" width="100%">
          <h1 className="text-4xl md:text-5xl font-bold text-bali-navy mb-4">{t("rentals")}</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Choose from our extensive fleet of well-maintained cars and motorbikes to explore Bali comfortably and safely.
          </p>
        </ScrollReveal>

        {/* Filter Section */}
        <div className="flex justify-center mb-12">
          <div className="bg-white p-2 rounded-xl shadow-sm border border-gray-100 flex items-center space-x-2">
            <Filter size={18} className="text-gray-400 ml-3 mr-2" />
            <button
              onClick={() => setFilterType("All")}
              className={`px-5 py-2 rounded-lg font-medium transition-colors ${filterType === "All" ? "bg-bali-navy text-white" : "text-gray-600 hover:bg-gray-50"}`}
            >
              All Vehicles
            </button>
            <button
              onClick={() => setFilterType("Car")}
              className={`px-5 py-2 rounded-lg font-medium transition-colors ${filterType === "Car" ? "bg-bali-navy text-white" : "text-gray-600 hover:bg-gray-50"}`}
            >
              {t("cars")}
            </button>
            <button
              onClick={() => setFilterType("Motorbike")}
              className={`px-5 py-2 rounded-lg font-medium transition-colors ${filterType === "Motorbike" ? "bg-bali-navy text-white" : "text-gray-600 hover:bg-gray-50"}`}
            >
              {t("motorbikes")}
            </button>
          </div>
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredInventory.map((item, index) => (
              <motion.div 
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm transition-all border border-gray-100 flex flex-col h-full"
              >
                <div className="relative h-56 w-full bg-gray-50 p-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-contain drop-shadow-lg"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
                    <span className="bg-bali-sand text-bali-navy text-xs font-bold px-2 py-1 rounded">
                      {item.type}
                    </span>
                  </div>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-gray-600 text-sm">
                      <CheckCircle2 size={16} className="text-bali-green mr-2" />
                      {item.transmission}
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <CheckCircle2 size={16} className="text-bali-green mr-2" />
                      {item.seats}
                    </div>
                  </div>
                  <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                    <div className="font-bold text-bali-navy text-lg">{item.price}<span className="text-sm text-gray-400 font-normal"> / day</span></div>
                    <a
                      href={`https://wa.me/6281339711438?text=Hi, I would like to book the ${item.name}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex justify-center items-center bg-bali-green text-white p-2 px-4 rounded-lg hover:bg-bali-green-dark transition-colors font-medium text-sm gap-2"
                    >
                      <MessageCircle size={16} /> Book
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
