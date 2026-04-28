"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { useLanguage } from "../app/context/LanguageContext";

export default function FloatingWhatsApp() {
  const { t } = useLanguage();
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    // Show the bubble 3 seconds after page loads
    const timer = setTimeout(() => {
      setShowBubble(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Text Bubble */}
      <div 
        className={`bg-white text-gray-700 text-sm font-medium p-3 px-4 rounded-2xl rounded-br-none shadow-xl border border-gray-100 transition-all duration-500 origin-bottom-right ${showBubble ? 'opacity-100 scale-100' : 'opacity-0 scale-50 pointer-events-none'}`}
      >
        <div className="flex items-start gap-2 relative">
          <p className="mr-6 max-w-[200px] leading-relaxed text-bali-navy">
            {t("waHelp")}
          </p>
          <button 
            onClick={() => setShowBubble(false)} 
            className="text-gray-400 hover:text-gray-600 absolute -right-1 -top-1"
            aria-label="Close Whatsapp helper"
          >
            <X size={14} />
          </button>
        </div>
      </div>

      {/* Button */}
      <a
        href="https://wa.me/6281339711438"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-green-300"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <MessageCircle size={32} />
      </a>
    </div>
  );
}
