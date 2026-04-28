"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Star, MessageCircle, MapPin, Clock, CheckCircle2, ShieldCheck, Car, Compass } from "lucide-react";
import { useLanguage } from "./context/LanguageContext";
import FAQ from "../components/FAQ";
import { motion } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";

export default function Home() {
  const { t } = useLanguage();

  const featuredRentals = [
    {
      id: 1,
      name: "Toyota Avanza",
      type: "Car",
      image: "/images/mobil1(avanza).avif",
      transmission: "Automatic",
      seats: "7 Seats",
      price: "Rp 350.000",
    },
    {
      id: 2,
      name: "Honda Scoopy",
      type: "Motorbike",
      image: "/images/motor1(scoopy).webp",
      transmission: "Automatic",
      seats: "2 Seats",
      price: "Rp 80.000",
    },
    {
      id: 3,
      name: "Mitsubishi Pajero",
      type: "Car",
      image: "/images/mobil7(pajero).png",
      transmission: "Automatic",
      seats: "7 Seats",
      price: "Rp 1.500.000",
    },
  ];

  const featuredTours = [
    {
      id: 1,
      name: "Ubud Cultural Tour",
      duration: "Full Day (8-10 Hours)",
      destinations: "Monkey Forest, Tegalalang, Tirta Empul",
      price: "Rp 600.000 / Car",
      image: "/images/ubud.jpg",
    },
    {
      id: 2,
      name: "Uluwatu Sunset Tour",
      duration: "Half Day (5-7 Hours)",
      destinations: "Padang-Padang Beach, Uluwatu Temple, Jimbaran",
      price: "Rp 500.000 / Car",
      image: "/images/uluwatu.webp",
    },
    {
      id: 3,
      name: "Kintamani Volcano Sunrise",
      duration: "Full Day (10-12 Hours)",
      destinations: "Mount Batur View, Coffee Plantation, Tegenungan Waterfall",
      price: "Rp 700.000 / Car",
      image: "/images/kintamani.webp",
    },
  ];

  const reviews = [
    {
      id: 1,
      name: "Sarah Jenkins",
      text: "The Scoopy was in perfect condition! Extremely smooth process from booking to returning. Will definitely use BlueBliss again.",
      rating: 5,
    },
    {
      id: 2,
      name: "Ahmad Rizky",
      text: "Sewa Avanza sangat memuaskan. Mobil bersih, wangi, dan supir sangat ramah serta mengerti jalan-jalan alternatif di Bali.",
      rating: 5,
    },
    {
      id: 3,
      name: "David Chen",
      text: "Booked the Ubud Tour. The guide was fantastic and highly knowledgeable. Value for money is incredible.",
      rating: 5,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.png"
            alt="Scenic Bali Road"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-bali-navy/80 to-bali-navy/40"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-md"
          >
            {t("heroTitle")}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-bali-sand mb-10 max-w-2xl mx-auto drop-shadow"
          >
            {t("heroSubtitle")}
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/rentals"
              className="px-8 py-3.5 bg-white text-bali-navy font-semibold rounded-lg shadow-lg hover:bg-bali-sand transition-all duration-300 hover:-translate-y-1 hover:shadow-xl w-full sm:w-auto text-center"
            >
              {t("rentVehicle")}
            </Link>
            <Link
              href="/tours"
              className="px-8 py-3.5 bg-bali-green text-white font-semibold rounded-lg shadow-lg hover:bg-bali-green-dark transition-all duration-300 hover:-translate-y-1 hover:shadow-xl w-full sm:w-auto text-center"
            >
              {t("exploreTours")}
            </Link>
          </motion.div>
        </div>

        {/* Quick Search Horizontal Bar */}
        <div className="absolute -bottom-8 w-full max-w-4xl px-4 z-20 left-1/2 transform -translate-x-1/2">
          <div className="bg-white rounded-xl shadow-xl p-4 md:p-6 flex flex-col md:flex-row gap-4 items-center border border-gray-100">
            <div className="w-full md:flex-1">
              <label className="block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wider">{t("quickSearch")}</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  id="quickSearchInput"
                  placeholder="e.g., Avanza, Scoopy, Ubud..."
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-bali-navy/20 focus:border-bali-navy transition-all"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      const val = (e.target as HTMLInputElement).value;
                      if (val) window.open(`https://wa.me/6281339711438?text=Hi, I would like to check the availability for: ${val}`, '_blank');
                    }
                  }}
                />
              </div>
            </div>
            <button 
              onClick={() => {
                const input = document.getElementById('quickSearchInput') as HTMLInputElement;
                if (input && input.value) {
                  window.open(`https://wa.me/6281339711438?text=Hi, I would like to check the availability for: ${input.value}`, '_blank');
                } else {
                  window.open(`https://wa.me/6281339711438?text=Hi, I would like to check the vehicle and tour availability.`, '_blank');
                }
              }}
              className="w-full md:w-auto px-6 py-2.5 mt-5 bg-bali-navy text-white font-medium rounded-lg hover:bg-bali-navy-light hover:-translate-y-0.5 hover:shadow-md transition-all duration-300 whitespace-nowrap"
            >
              {t("checkAvailability")}
            </button>
          </div>
        </div>
      </section>

      {/* Featured Rentals */}
      <section className="py-24 px-4 max-w-7xl mx-auto w-full">
        <ScrollReveal>
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold text-bali-navy mb-2">{t("featured")}</h2>
              <p className="text-gray-500 font-medium">Top picks for your journey</p>
            </div>
            <Link href="/rentals" className="hidden sm:inline-block text-bali-navy font-semibold hover:text-bali-green transition-colors">
              View All Rentals &rarr;
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredRentals.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 0.1} width="100%">
              <motion.div 
                whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm transition-all duration-300 border border-gray-100 flex flex-col h-full"
              >
              <div className="relative h-56 w-full bg-gray-50 p-4 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-500 ease-out"
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
                    className="flex justify-center items-center bg-bali-green text-white p-2 px-4 rounded-lg hover:bg-bali-green-dark hover:-translate-y-1 hover:shadow-md transition-all duration-300 font-medium text-sm gap-2"
                  >
                    <MessageCircle size={16} /> Book
                  </a>
                </div>
              </div>
            </motion.div>
          </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Featured Tours */}
      <section className="py-20 px-4 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto w-full">
          <ScrollReveal>
            <div className="flex justify-between items-end mb-10">
              <div>
                <h2 className="text-3xl font-bold text-bali-navy mb-2">Curated Tour Packages</h2>
                <p className="text-gray-500 font-medium">Discover the hidden gems of Bali</p>
              </div>
              <Link href="/tours" className="hidden sm:inline-block text-bali-navy font-semibold hover:text-bali-green transition-colors">
                View All Tours &rarr;
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredTours.map((tour, index) => (
              <ScrollReveal key={tour.id} delay={index * 0.1} width="100%">
                <motion.div 
                  whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm transition-all duration-300 border border-gray-100 h-full"
                >
                <div className="h-56 w-full relative overflow-hidden bg-gray-100">
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
                <div className="p-6 pt-8">
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start text-gray-600 text-sm">
                      <Clock size={18} className="text-bali-green mr-3 shrink-0" />
                      <span>{tour.duration}</span>
                    </div>
                    <div className="flex items-start text-gray-600 text-sm">
                      <MapPin size={18} className="text-bali-green mr-3 shrink-0" />
                      <span>{tour.destinations}</span>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    <div className="font-bold text-bali-navy text-lg">{tour.price}</div>
                    <a
                      href={`https://wa.me/6281339711438?text=Hi, I am interested in the ${tour.name} tour package.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-bali-green hover:text-bali-green-dark hover:-translate-y-1 hover:scale-110 transition-all duration-300"
                    >
                      <MessageCircle size={24} />
                    </a>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

      {/* About Us Section */}
      <section id="about" className="py-24 px-4 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto w-full">
          <ScrollReveal className="text-center mb-16 max-w-3xl mx-auto" width="100%">
            <div className="inline-block px-4 py-1.5 bg-bali-navy/5 rounded-full text-bali-navy font-semibold text-sm mb-4 border border-bali-navy/10 tracking-wide uppercase">
              About Us
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-bali-navy mb-6">{t("about")}</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t("aboutText")}
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20">
            {/* Value 1 */}
            <ScrollReveal delay={0.1} width="100%">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full">
                <div className="bg-bali-sand p-4 rounded-full mb-6">
                  <ShieldCheck size={40} className="text-bali-green" />
                </div>
                <h3 className="text-xl font-bold text-bali-navy mb-4">{t("safetyFirst")}</h3>
                <p className="text-gray-600">
                  Your safety is our top priority. All our vehicles undergo strict quality control and routine maintenance.
                </p>
              </div>
            </ScrollReveal>

            {/* Value 2 */}
            <ScrollReveal delay={0.2} width="100%">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full">
                <div className="bg-bali-sand p-4 rounded-full mb-6">
                  <Car size={40} className="text-bali-green" />
                </div>
                <h3 className="text-xl font-bold text-bali-navy mb-4">{t("premiumFleet")}</h3>
                <p className="text-gray-600">
                  From easy-to-ride scooters to luxury SUVs, we provide exceptionally clean and reliable vehicles for all needs.
                </p>
              </div>
            </ScrollReveal>

            {/* Value 3 */}
            <ScrollReveal delay={0.3} width="100%">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full">
                <div className="bg-bali-sand p-4 rounded-full mb-6">
                  <Compass size={40} className="text-bali-green" />
                </div>
                <h3 className="text-xl font-bold text-bali-navy mb-4">{t("localExperts")}</h3>
                <p className="text-gray-600">
                  Our drivers and tour guides know Bali inside out. Get ready to explore authentic local culture and hidden gems.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal width="100%">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-gray-50 rounded-3xl overflow-hidden shadow-sm border border-gray-100">
              <div className="p-8 md:p-12 lg:p-16">
                <h2 className="text-3xl font-bold text-bali-navy mb-4">Our Commitment</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  At BlueBliss Bali, we believe that exploring the island of the Gods should be effortless and serene. 
                  Whether you navigate the vibrant streets of Seminyak on our pristine Scoopy or embark on a 
                  family adventure in a spacious Alphard, we ensure a premium experience.
                </p>
                <p className="text-gray-600 leading-relaxed mb-8 font-medium">
                  No hidden fees, no complicated paperwork—just pure bliss on your journey through Bali.
                </p>
                <a
                  href="https://wa.me/6281339711438"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-bali-green text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-bali-green-dark transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 duration-300"
                >
                  {t("contactUs")}
                </a>
              </div>
              <div className="relative h-[400px] md:h-full w-full">
                <Image
                  src="/images/kintamani.webp"
                  alt="Scenic Bali"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* Reviews Section */}
      <section className="py-24 px-4 max-w-7xl mx-auto w-full">
        <ScrollReveal className="text-center mb-16" width="100%">
          <h2 className="text-3xl font-bold text-bali-navy mb-4">{t("reviews")}</h2>
          <p className="text-gray-500 font-medium max-w-2xl mx-auto">
            Don't just take our word for it. Here is what our clients have to say about their experience in Bali.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <ScrollReveal key={review.id} delay={index * 0.1} width="100%">
              <motion.div 
                whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)" }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center h-full transition-shadow duration-300"
              >
              <div className="flex space-x-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={20} className="text-[#FFD700] fill-[#FFD700]" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-8 relative leading-relaxed">
                <span className="text-4xl text-gray-200 absolute -top-4 -left-4 font-serif">"</span>
                {review.text}
                <span className="text-4xl text-gray-200 absolute -bottom-8 -right-4 font-serif">"</span>
              </p>
              <div className="mt-auto">
                <h4 className="font-bold text-bali-navy">{review.name}</h4>
                <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">Verified Customer</span>
              </div>
            </motion.div>
          </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
}
