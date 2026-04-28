"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "id";

interface Dictionary {
  [key: string]: {
    en: string;
    id: string;
  };
}

const translations: Dictionary = {
  home: { en: "Home", id: "Beranda" },
  about: { en: "About Us", id: "Tentang Kami" },
  rentals: { en: "Rentals", id: "Penyewaan" },
  tours: { en: "Tour Packages", id: "Paket Tur" },
  contactUs: { en: "Contact Us", id: "Hubungi Kami" },
  bookWhatsApp: { en: "Book via WhatsApp", id: "Pesan via WhatsApp" },
  exploreTours: { en: "Explore Tours", id: "Jelajahi Tur" },
  rentVehicle: { en: "Rent a Vehicle", id: "Sewa Kendaraan" },
  heroTitle: { 
    en: "Explore Bali with Premium Rentals & Tours", 
    id: "Jelajahi Bali dengan Penyewaan & Tur Premium" 
  },
  heroSubtitle: {
    en: "Experience the true beauty of Bali with our maintained fleet and curated tour experiences.",
    id: "Rasakan keindahan sejati Bali dengan armada kami yang terawat dan pengalaman tur pilihan."
  },
  quickSearch: { en: "Quick Search", id: "Pencarian Cepat" },
  featured: { en: "Featured Options", id: "Pilihan Utama" },
  reviews: { en: "Customer Reviews", id: "Ulasan Pelanggan" },
  checkAvailability: { en: "Check Availability", id: "Cek Ketersediaan" },
  cars: { en: "Cars", id: "Mobil" },
  motorbikes: { en: "Motorbikes", id: "Motor" },
  transmission: { en: "Transmission", id: "Transmisi" },
  priceRange: { en: "Price Range", id: "Rentang Harga" },
  automatic: { en: "Automatic", id: "Otomatis" },
  manual: { en: "Manual", id: "Manual" },
  seats: { en: "Seats", id: "Kursi" },
  duration: { en: "Duration", id: "Durasi" },
  destinations: { en: "Key Destinations", id: "Destinasi Utama" },
  included: { en: "What's Included", id: "Termasuk" },
  aboutText: {
    en: "We are committed to providing you with safety, well-maintained vehicles, and expert local tour guides to ensure your Bali journey is unforgettable.",
    id: "Kami berkomitmen untuk memberikan keselamatan, kendaraan yang terawat dengan baik, dan pemandu wisata lokal yang ahli untuk memastikan perjalanan Bali Anda tidak terlupakan."
  },
  coreValues: { en: "Core Values", id: "Nilai Inti" },
  safetyFirst: { en: "Safety First", id: "Utamakan Keselamatan" },
  premiumFleet: { en: "Premium Fleet", id: "Armada Premium" },
  localExperts: { en: "Local Experts", id: "Ahli Lokal" },
  quickLinks: { en: "Quick Links", id: "Tautan Cepat" },
  addressInfo: { en: "Ubud, Bali - Indonesia", id: "Ubud, Bali - Indonesia" },
  faqTitle: { en: "Frequently Asked Questions", id: "Pertanyaan yang Sering Diajukan" },
  faqSubtitle: { en: "Everything you need to know before you hit the road.", id: "Semua yang perlu Anda ketahui sebelum Anda mulai berkendara." },
  faq1Q: { en: "Do I need an international driver's license?", id: "Apakah saya memerlukan SIM internasional?" },
  faq1A: { 
    en: "Yes, for foreigners, an international driving permit combined with your national license is required by Indonesian law. For domestic tourists, a valid local SIM C (motorbike) or SIM A (car) is required.", 
    id: "Ya, untuk WNI diperlukan SIM C untuk motor atau SIM A untuk mobil yang masih berlaku. Untuk wisatawan asing diwajibkan memiliki izin mengemudi internasional." 
  },
  faq2Q: { en: "Are the vehicles insured?", id: "Apakah kendaraan diasuransikan?" },
  faq2A: { 
    en: "Yes, all our cars come with comprehensive insurance coverage. Motorbikes have standard coverage parameters. Please contact us for specific deductible details.", 
    id: "Ya, semua mobil kami sudah dilengkapi dengan asuransi komprehensif. Motor memiliki asuransi dasar. Silakan hubungi kami untuk detail lebih lanjut." 
  },
  faq3Q: { en: "Is there a minimum rental period?", id: "Apakah ada durasi minimum untuk menyewa?" },
  faq3A: { 
    en: "The minimum rental duration is 24 hours (1 day) for cars and 2 days for motorbikes.", 
    id: "Durasi sewa minimum adalah 24 jam (1 hari) untuk mobil dan 2 hari untuk sepeda motor." 
  },
  faq4Q: { en: "Do you provide delivery & pickup services?", id: "Apakah tersedia layanan antar-jemput kendaraan?" },
  faq4A: { 
    en: "Absolutely! We offer free delivery and pickup directly to your hotel, villa, or the airport for specific central areas like Ubud, Kuta, and Seminyak.", 
    id: "Tentu! Kami menawarkan layanan antar-jemput gratis langsung ke hotel, vila, atau bandara Anda khusus untuk area sentral seperti Ubud, Kuta, dan Seminyak." 
  },
  waHelp: {
    en: "Ask about Bali, our services, or anything else!",
    id: "Tanyakan seputar Bali, layanan, atau lainnya!"
  }
};

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "id" : "en"));
  };

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
