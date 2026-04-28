"use client";

import React from "react";
import Image from "next/image";
import { MessageCircle, MapPin, Clock, Info } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

export default function ToursPage() {
  const { t } = useLanguage();

  const tours = [
    {
      id: 1,
      name: "Ubud Cultural Tour",
      duration: "Full Day (8-10 Hours)",
      destinations: "Monkey Forest, Tegalalang Rice Terrace, Tirta Empul Temple",
      inclusions: "Private AC Car, English Speaking Driver, Petrol, Parking Fees",
      price: "Rp 600.000 / Car",
      image: "/images/ubud.jpg",
    },
    {
      id: 2,
      name: "Uluwatu Sunset Tour",
      duration: "Half Day (5-7 Hours)",
      destinations: "Padang-Padang Beach, Uluwatu Temple, Kecak Fire Dance, Jimbaran Seafood",
      inclusions: "Private AC Car, English Speaking Driver, Petrol, Parking Fees",
      price: "Rp 500.000 / Car",
      image: "/images/uluwatu.webp",
    },
    {
      id: 3,
      name: "Kintamani Volcano Sunrise",
      duration: "Full Day (10-12 Hours)",
      destinations: "Mount Batur View, Coffee Plantation, Tegenungan Waterfall, Art Villages",
      inclusions: "Private AC Car, English Speaking Driver, Petrol, Parking Fees",
      price: "Rp 700.000 / Car",
      image: "/images/kintamani.webp",
    },
    {
      id: 4,
      name: "Bedugul & Tanah Lot Tour",
      duration: "Full Day (10 Hours)",
      destinations: "Taman Ayun Temple, Ulun Danu Beratan, Jatiluwih, Tanah Lot Sunset",
      inclusions: "Private AC Car, English Speaking Driver, Petrol, Parking Fees",
      price: "Rp 650.000 / Car",
      image: "/images/bedugul.webp",
    },
    {
      id: 5,
      name: "East Bali Lempuyang Tour",
      duration: "Full Day (12 Hours)",
      destinations: "Lempuyang Temple (Gate of Heaven), Tirta Gangga, Virgin Beach",
      inclusions: "Private AC Car, English Speaking Driver, Petrol, Parking Fees",
      price: "Rp 750.000 / Car",
      image: "/images/lempuyang.jpg",
    },
    {
      id: 6,
      name: "Nusa Penida Day Tour",
      duration: "Full Day",
      destinations: "Kelingking Beach, Broken Beach, Angel's Billabong, Crystal Bay",
      inclusions: "Fast Boat Return Tickets, Private Car in Penida, Lunch, Entrance Fees",
      price: "Rp 850.000 / Pax",
      image: "/images/hero-bg.png",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto w-full">
        <ScrollReveal className="text-center mb-16" width="100%">
          <h1 className="text-4xl md:text-5xl font-bold text-bali-navy mb-4">{t("tours")}</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Discover the magical landscapes, ancient temples, and vibrant culture of Bali with our curated tour packages.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour, index) => (
            <ScrollReveal key={tour.id} delay={index * 0.1} width="100%">
              <motion.div 
                whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm transition-all duration-300 border border-gray-100 flex flex-col h-full"
              >
                <div className="h-64 w-full relative overflow-hidden bg-gray-100">
                  <Image
                    src={tour.image}
                    alt={tour.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end px-6 pb-6">
                    <h3 className="text-2xl font-bold text-white drop-shadow-md">
                      {tour.name}
                    </h3>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="space-y-4 mb-8 flex-grow">
                    <div className="flex items-start text-gray-600 text-sm">
                      <Clock size={18} className="text-bali-green mr-3 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-gray-700 block mb-1">Duration</span>
                        {tour.duration}
                      </div>
                    </div>
                    <div className="flex items-start text-gray-600 text-sm">
                      <MapPin size={18} className="text-bali-green mr-3 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-gray-700 block mb-1">Destinations</span>
                        {tour.destinations}
                      </div>
                    </div>
                    <div className="flex items-start text-gray-600 text-sm">
                      <Info size={18} className="text-bali-green mr-3 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-gray-700 block mb-1">Inclusions</span>
                        {tour.inclusions}
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                    <div className="font-bold text-bali-navy text-xl">{tour.price}</div>
                    <a
                      href={`https://wa.me/6281339711438?text=Hi, I am interested in booking the ${tour.name} tour.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center bg-bali-navy text-white px-5 py-2.5 rounded-lg hover:bg-bali-navy-light transition-colors font-medium text-sm gap-2"
                    >
                      <MessageCircle size={18} /> Book
                    </a>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
