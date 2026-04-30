import React from "react";
import { useReveal } from "../hooks/useReveal";

export default function FooterSection() {
  const [ref, visible] = useReveal(0.15);

  return (
    <footer
      className="relative py-20 px-4 overflow-hidden text-center"
      style={{ background: "linear-gradient(155deg, #2e2820 0%, #3d2e22 100%)" }}
    >
      {/* Ambient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-gold/5 blur-3xl" />
      </div>

      {/* Slow rotating ring */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/6 pointer-events-none animate-rotateSlow"
        style={{ width: 480, height: 480 }}
      />

      <div ref={ref} className="relative z-10">
        {/* Top ornament row */}
        <div className={`flex items-center justify-center gap-4 mb-8 reveal ${visible ? "in-view" : ""}`}>
          <div className="w-12 h-px bg-gradient-to-r from-transparent to-gold/30" />
          <span className="text-gold/40 text-sm">◆</span>
          <span className="text-gold/30 text-base">◆</span>
          <span className="font-monte text-gold/60 text-2xl">❧</span>
          <span className="text-gold/30 text-base">◆</span>
          <span className="text-gold/40 text-sm">◆</span>
          <div className="w-12 h-px bg-gradient-to-l from-transparent to-gold/30" />
        </div>

        {/* Label */}
        <p
          className={`font-cinzel tracking-[0.35em] text-cream/35 uppercase reveal reveal-d1 ${visible ? "in-view" : ""}`}
          style={{ fontSize: "0.48rem" }}
        >
          The honour of your presence is requested at the engagement of
        </p>

        {/* Names */}
        <div className={`my-6 reveal reveal-d2 ${visible ? "in-view" : ""}`}>
          <p
            className="font-monte text-goldlt text-shadow-gold"
            style={{ fontSize: "clamp(3.5rem, 12vw, 7rem)", lineHeight: 1.0 }}
          >
            Habiba
          </p>
          <p className="font-monte text-gold/50" style={{ fontSize: "clamp(2rem, 6vw, 4rem)", lineHeight: 0.9 }}>
            &amp;
          </p>
          <p
            className="font-monte text-goldlt text-shadow-gold"
            style={{ fontSize: "clamp(3.5rem, 12vw, 7rem)", lineHeight: 1.0 }}
          >
            Hatem
          </p>
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 my-5">
          <div className="w-20 h-px bg-gradient-to-r from-transparent to-gold/25" />
          <span className="font-monte text-gold/40 text-xl">❧</span>
          <div className="w-20 h-px bg-gradient-to-l from-transparent to-gold/25" />
        </div>

        {/* Date & venue */}
        <p
          className={`font-cinzel tracking-[0.28em] text-cream/35 reveal reveal-d3 ${visible ? "in-view" : ""}`}
          style={{ fontSize: "clamp(0.55rem, 1.4vw, 0.72rem)" }}
        >
          28 · May · 2026 &nbsp;|&nbsp; 7:00 PM &nbsp;|&nbsp; La Novia Garden · Cairo
        </p>

        {/* Bottom ornament */}
        <div className={`flex items-center justify-center gap-3 mt-10 reveal reveal-d4 ${visible ? "in-view" : ""}`}>
          <span className="text-gold/20 text-xs">✦</span>
          <span className="text-gold/30 text-sm">✦</span>
          <span className="text-gold/20 text-xs">✦</span>
        </div>
      </div>
    </footer>
  );
}
