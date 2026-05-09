import React from "react";
import { useReveal } from "../hooks/useReveal";

const images = [
  { url: "/assets/4.jpeg", label: "Hatem & Habiba", span: "row-span-2" },
  { url: "/assets/1.jpeg", label: "" },
  { url: "/assets/3.jpeg", label: "" },
  { url: "/assets/2.jpeg", label: "" },
  { url: "/assets/5.jpeg", label: "" },
  { url: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=600&q=80", label: "" },
];

export default function GallerySection() {
  const [ref, visible] = useReveal(0.1);

  return (
    <section
      className="relative py-24 px-4 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #f0e6d3 0%, #faf7f2 100%)" }}
    >
      {/* Corner ornaments */}
      <div className="absolute top-6 left-6 w-12 h-12 border-t border-l border-gold/25" />
      <div className="absolute top-6 right-6 w-12 h-12 border-t border-r border-gold/25" />
      <div className="absolute bottom-6 left-6 w-12 h-12 border-b border-l border-gold/25" />
      <div className="absolute bottom-6 right-6 w-12 h-12 border-b border-r border-gold/25" />

      <div ref={ref} className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Header */}
        <p className="font-cinzel tracking-[0.35em] text-rustgray uppercase mb-3" style={{ fontSize: "0.52rem" }}>
          ✦ &nbsp; Cherished Moments &nbsp; ✦
        </p>
        <h2
          className={`font-monte text-darkbrown reveal ${visible ? "in-view" : ""}`}
          style={{ fontSize: "clamp(2.5rem, 7vw, 4.5rem)" }}
        >
          Their Story
        </h2>
        <div className="flex items-center justify-center gap-4 mt-3 mb-10">
          <div className="w-16 h-px divider-gold" />
          <span className="text-gold/60 font-monte text-lg">◆</span>
          <div className="w-16 h-px divider-gold" />
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className={`gallery-card relative overflow-hidden rounded-sm group cursor-pointer reveal reveal-d${Math.min(i + 1, 6)} ${visible ? "in-view" : ""}`}
              style={{
                aspectRatio: i === 0 ? "3/4" : "3/4",
                border: "1px solid rgba(201,169,110,0.25)",
                boxShadow: "0 8px 32px rgba(61,43,31,0.15)",
              }}
            >
              {/* Inner frame */}
              <div className="absolute inset-[5px] border border-gold/10 z-[1] pointer-events-none rounded-sm" />

              <img
                src={img.url}
                alt={`Memory ${i + 1}`}
                className="gallery-img w-full h-full object-cover"
                style={{ filter: "sepia(18%) saturate(0.8) brightness(0.93)" }}
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-darkbrown/50 via-transparent to-transparent" />

              {/* Label */}
              {img.label && (
                <div className="absolute bottom-3 inset-x-0 text-center z-[2]">
                  <span className="font-monte text-goldlt text-shadow-dark" style={{ fontSize: "1.4rem" }}>
                    {img.label}
                  </span>
                </div>
              )}

              {/* Hover shimmer */}
              <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/8 transition-colors duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
