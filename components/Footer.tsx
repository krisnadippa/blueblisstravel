"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "../app/context/LanguageContext";
import { Mail, MapPin } from "lucide-react";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-bali-sand pt-16 pb-8 border-t border-bali-sand-dark/20 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-bali-navy tracking-tight">
              BlueBliss<span className="text-bali-green">.</span>
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              {t("heroSubtitle")}
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="font-semibold text-gray-500 hover:text-bali-navy transition-colors">
                Instagram
              </a>
              <a href="#" className="font-semibold text-gray-500 hover:text-bali-navy transition-colors">
                Facebook
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-bali-navy mb-6">{t("quickLinks")}</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-bali-navy transition-colors text-sm">
                  {t("about")}
                </Link>
              </li>
              <li>
                <Link href="/rentals" className="text-gray-600 hover:text-bali-navy transition-colors text-sm">
                  {t("rentals")}
                </Link>
              </li>
              <li>
                <Link href="/tours" className="text-gray-600 hover:text-bali-navy transition-colors text-sm">
                  {t("tours")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-bali-navy mb-6">{t("contactUs")}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <MapPin size={18} className="text-bali-green shrink-0 mt-0.5" />
                <span>{t("addressInfo")}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-600">
                <Mail size={18} className="text-bali-green shrink-0" />
                <a href="mailto:info@blueblissbali.com" className="hover:text-bali-navy transition-colors">
                  info@blueblissbali.com
                </a>
              </li>
            </ul>
          </div>

          {/* Google Maps Embed */}
          <div className="w-full h-48 rounded-xl overflow-hidden bg-gray-200">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.496250810566!2d115.25947697518173!3d-8.548185686660808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd23d3694e5a84f%3A0xb1cc5cf85046da15!2sBlue%20bliss%20Rental%20scooter!5e0!3m2!1sid!2sid!4v1776143894913!5m2!1sid!2sid" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="BlueBliss Location"
            ></iframe>
          </div>

        </div>

        <div className="border-t border-bali-sand-dark/30 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; 2026 BlueBliss Bali. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
