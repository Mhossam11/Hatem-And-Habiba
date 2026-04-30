import React from "react";
import EnvelopeSection  from "./components/EnvelopeSection";
import NamesSection     from "./components/NamesSection";
import LoveSection      from "./components/LoveSection";
import GallerySection   from "./components/GallerySection";
import CountdownSection from "./components/CountdownSection";
import DetailsSection   from "./components/DetailsSection";
import VenueSection     from "./components/VenueSection";
import FooterSection    from "./components/FooterSection";

export default function App() {
  return (
    <main className="overflow-x-hidden">
      <EnvelopeSection />
      <NamesSection />
      <LoveSection />
      <GallerySection />
      <CountdownSection />
      <DetailsSection />
      <VenueSection />
      <FooterSection />
    </main>
  );
}
