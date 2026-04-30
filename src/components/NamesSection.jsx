import React from "react";
import { useReveal } from "../hooks/useReveal";

const hearts = [
  { id: 1, left: "12%", top: "70%", size: "0.9rem" },
  { id: 2, left: "28%", top: "55%", size: "0.7rem" },
  { id: 3, left: "48%", top: "65%", size: "1.1rem" },
  { id: 4, left: "65%", top: "45%", size: "0.8rem" },
  { id: 5, left: "80%", top: "70%", size: "0.95rem" },
  { id: 6, left: "35%", top: "80%", size: "0.75rem" },
  { id: 7, left: "88%", top: "55%", size: "0.85rem" },
  { id: 8, left: "5%",  top: "50%", size: "0.7rem"  },
];

export default function NamesSection() {
  const [ref, visible] = useReveal(0.1);

  return (
    <section
      id="names-section"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-24 px-4"
      style={{ background: "linear-gradient(180deg, #faf7f2 0%, #f5f0e8 50%, #f0e6d3 100%)" }}
    >
      {/* Garden radials */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-72 rounded-full bg-olive/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-gold/6 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-rose/5 blur-3xl" />
      </div>

      {/* Floating hearts */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {hearts.map((h) => (
          <span
            key={h.id}
            className={`absolute text-crimson/25 animate-heartFloat heart-${h.id}`}
            style={{ left: h.left, top: h.top, fontSize: h.size }}
          >
            ♥
          </span>
        ))}
      </div>

      {/* Corner ornaments */}
      <div className="absolute top-8 left-6 font-monte text-gold/25 text-4xl rotate-45 select-none">✦</div>
      <div className="absolute top-8 right-6 font-monte text-gold/25 text-4xl -rotate-45 select-none">✦</div>
      <div className="absolute bottom-8 left-6 font-monte text-gold/20 text-3xl -rotate-45 select-none">✦</div>
      <div className="absolute bottom-8 right-6 font-monte text-gold/20 text-3xl rotate-45 select-none">✦</div>

      <div ref={ref} className="relative z-10 text-center w-full">
        {/* Label */}
        <p className={`font-cinzel tracking-[0.38em] text-rustgray uppercase reveal ${visible ? "in-view" : ""}`}
          style={{ fontSize: "0.54rem" }}>
          ✦ &nbsp; With joy &amp; love, we announce &nbsp; ✦
        </p>

        {/* Ornament */}
        <div className="my-4 flex items-center justify-center gap-4">
          <div className="w-16 h-px divider-gold" />
          <span className="text-gold text-lg font-monte">❧</span>
          <div className="w-16 h-px divider-gold" />
        </div>

        {/* Names */}
        <div className="my-2">
          <span
            className={`block font-monte text-darkbrown text-shadow-gold reveal reveal-d1 ${visible ? "in-view" : ""}`}
            style={{ fontSize: "clamp(4.5rem, 16vw, 10rem)", lineHeight: 1.0 }}
          >
            Hatem
          </span>
          <span
            className={`block font-monte text-gold text-shadow-gold reveal reveal-d2 ${visible ? "in-view" : ""}`}
            style={{ fontSize: "clamp(2.5rem, 8vw, 5.5rem)", lineHeight: 0.9 }}
          >
            &amp;
          </span>
          <span
            className={`block font-monte text-olive text-shadow-gold reveal reveal-d3 ${visible ? "in-view" : ""}`}
            style={{ fontSize: "clamp(4.5rem, 16vw, 10rem)", lineHeight: 1.0 }}
          >
            Habiba
          </span>
        </div>

        {/* Bottom divider */}
        <div className="my-5 flex items-center justify-center gap-4">
          <div className="w-20 h-px divider-gold" />
          <span className="text-gold/50 text-sm">◆</span>
          <div className="w-20 h-px divider-gold" />
        </div>

        {/* Date */}
        <p className={`font-cinzel tracking-[0.28em] text-rustgray reveal reveal-d4 ${visible ? "in-view" : ""}`}
          style={{ fontSize: "clamp(0.7rem, 2vw, 0.95rem)" }}>
          28 · May · 2026 &nbsp;|&nbsp; 6:00 PM
        </p>

        {/* Venue hint */}
        <p className={`font-cormorant italic text-rustlt mt-2 reveal reveal-d5 ${visible ? "in-view" : ""}`}
          style={{ fontSize: "clamp(0.85rem, 2vw, 1.1rem)" }}>
          La Novia Garden &nbsp;·&nbsp; Cairo
        </p>
      </div>
    </section>
  );
}
