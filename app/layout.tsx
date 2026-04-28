import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import SmoothScroll from "../components/SmoothScroll";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BlueBliss Bali - Premium Rentals & Tours",
  description: "Explore Bali with our premium motorbikes, cars, and curated tour packages.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${jakartaSans.variable} font-sans`}>
      <body suppressHydrationWarning className="min-h-screen flex flex-col antialiased bg-background">
        <SmoothScroll>
          <LanguageProvider>
            <Navbar />
            <main className="flex-grow pt-20">
              {children}
            </main>
            <Footer />
            <FloatingWhatsApp />
          </LanguageProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
