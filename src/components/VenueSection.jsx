import React from "react";
import { useReveal } from "../hooks/useReveal";

const venueImgs = [
  { url: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=900&q=80", tall: true },
  { url: "https://images.unsplash.com/photo-1510076857177-7470076d4098?w=500&q=80" },
  { url: "https://images.unsplash.com/photo-1550005809-91ad75fb315f?w=500&q=80" },
  { url: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=700&q=80", wide: true },
  { url: "https://images.unsplash.com/photo-1478146059778-26a3dd41559e?w=500&q=80" },
];

export default function VenueSection() {
  const [ref, visible] = useReveal(0.1);

  return (
    <section
      className="relative py-24 px-4 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #faf7f2 0%, #f0e6d3 100%)" }}
    >
      {/* Corner ornaments */}
      <div className="absolute top-6 left-6 w-10 h-10 border-t border-l border-gold/20" />
      <div className="absolute top-6 right-6 w-10 h-10 border-t border-r border-gold/20" />
      <div className="absolute bottom-6 left-6 w-10 h-10 border-b border-l border-gold/20" />
      <div className="absolute bottom-6 right-6 w-10 h-10 border-b border-r border-gold/20" />

      <div ref={ref} className="relative z-10 max-w-5xl mx-auto text-center">
        <p className="font-cinzel tracking-[0.35em] text-rustgray uppercase mb-3" style={{ fontSize: "0.52rem" }}>
          ✦ &nbsp; The Setting &nbsp; ✦
        </p>
        <h2
          className={`font-monte text-darkbrown reveal ${visible ? "in-view" : ""}`}
          style={{ fontSize: "clamp(2.5rem, 7vw, 4.5rem)" }}
        >
          La Novia Garden
        </h2>
        <div className="flex items-center justify-center gap-4 mt-3 mb-4">
          <div className="w-16 h-px divider-gold" />
          <span className="text-gold/60 font-monte text-lg">◆</span>
          <div className="w-16 h-px divider-gold" />
        </div>

        <p
          className={`font-cormorant italic text-rustlt max-w-lg mx-auto mb-10 reveal reveal-d1 ${visible ? "in-view" : ""}`}
          style={{ fontSize: "clamp(0.95rem, 2vw, 1.15rem)", lineHeight: 1.85 }}
        >
          An enchanted space adorned in white and ivory, where soft lantern light
          dances over garden archways and the evening air is perfumed with elegance.
        </p>

        {/* Mosaic */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          {venueImgs.map((img, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-sm group reveal reveal-d${Math.min(i + 1, 6)} ${visible ? "in-view" : ""} ${img.wide ? "col-span-2 sm:col-span-2" : ""}`}
              style={{
                aspectRatio: img.tall ? "3/4" : img.wide ? "16/7" : "4/3",
                border: "1px solid rgba(201,169,110,0.2)",
                boxShadow: "0 6px 24px rgba(61,43,31,0.12)",
              }}
            >
              <img
                src={img.url}
                alt={`Venue ${i + 1}`}
                className="w-full h-full object-cover gallery-img"
                style={{ filter: "sepia(12%) saturate(0.82) brightness(0.94)" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-darkbrown/30 via-transparent to-transparent group-hover:from-darkbrown/20 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
