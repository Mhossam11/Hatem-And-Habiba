import React, { useState, useEffect } from "react";
import EnvelopeSection  from "./components/EnvelopeSection";
import NamesSection     from "./components/NamesSection";
import LoveSection      from "./components/LoveSection";
import GallerySection   from "./components/GallerySection";
import CountdownSection from "./components/CountdownSection";
import DetailsSection   from "./components/DetailsSection";
import VenueSection     from "./components/VenueSection";
import FooterSection    from "./components/FooterSection";

export default function App() {
  const [showScroll, setShowScroll] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;
      setShowScroll(!isAtBottom);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="relative overflow-x-hidden">
      <EnvelopeSection />
      <NamesSection />
      <LoveSection />
      <GallerySection />
      <DetailsSection />
      <CountdownSection />
      {/* <VenueSection /> */}
      <FooterSection />

      {/* Global Scroll Indicator */}
      <div 
        className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-none transition-all duration-700 ${
          showScroll ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="flex flex-col items-center gap-1">
          <span className="font-cinzel text-gold/40 text-[0.45rem] tracking-[0.3em] uppercase mb-1">
            Scroll
          </span>
          <div className="text-gold/50 text-2xl animate-bounce">
            ↓
          </div>
        </div>
      </div>
    </main>
  );
}
