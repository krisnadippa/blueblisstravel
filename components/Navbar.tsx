"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "../app/context/LanguageContext";

export default function Navbar() {
  const { language, toggleLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: t("home"), href: "/" },
    { name: t("about"), href: "/#about" },
    { name: t("rentals"), href: "/rentals" },
    { name: t("tours"), href: "/tours" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo - Left */}
          <div className="flex-shrink-0 flex items-center w-auto lg:w-1/4">
            <Link href="/" className="text-2xl font-bold text-bali-navy tracking-tight">
              BlueBliss<span className="text-bali-green">.</span>
            </Link>
          </div>

          {/* Desktop Menu - Center */}
          <div className="hidden md:flex items-center justify-center flex-1 space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-bali-navy font-medium transition-colors hover:scale-105"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Actions - Right */}
          <div className="hidden md:flex items-center justify-end w-auto lg:w-1/4 space-x-4">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 text-sm font-semibold text-gray-700 hover:text-bali-navy bg-gray-50 px-3 py-1.5 rounded-full border border-gray-200 transition-colors"
            >
              <Globe size={16} />
              {language.toUpperCase()}
            </button>

            {/* Contact CTA */}
            <a
              href="https://wa.me/6281339711438"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-bali-navy text-white px-5 py-2.5 rounded-lg hover:bg-bali-navy-light transition-colors font-medium"
            >
              {t("contactUs")}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 text-sm font-semibold text-gray-700 bg-gray-50 px-2 py-1 rounded-md border border-gray-200"
            >
              {language.toUpperCase()}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-bali-navy focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-bali-navy hover:bg-gray-50 rounded-md"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://wa.me/6281339711438"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center mt-4 bg-bali-navy text-white px-5 py-3 rounded-md font-medium"
            >
              {t("contactUs")}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
