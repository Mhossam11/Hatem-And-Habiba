import React from "react";
import { useReveal } from "../hooks/useReveal";

export default function DetailsSection() {
  const [ref, visible] = useReveal(0.15);

  return (
    <section
      className="relative py-28 px-4 overflow-hidden"
      style={{ background: "linear-gradient(155deg, #2e2820 0%, #4a3728 60%, #3d2e22 100%)" }}
    >
      {/* Ambient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-80 h-80 rounded-full bg-gold/6 blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-rose/5 blur-3xl" />
      </div>

      {/* Rotating ring ornament */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/8 pointer-events-none animate-rotateSlow"
        style={{ width: 500, height: 500 }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/5 pointer-events-none"
        style={{ width: 640, height: 640, animationDirection: "reverse", animationDuration: "45s" }}
      />

      <div ref={ref} className="relative z-10 text-center max-w-4xl mx-auto">
        <p className="font-cinzel tracking-[0.38em] text-goldlt/60 uppercase" style={{ fontSize: "0.52rem" }}>
          ✦ &nbsp; You are warmly invited &nbsp; ✦
        </p>
        <h2
          className={`font-monte text-goldlt mt-3 reveal ${visible ? "in-view" : ""}`}
          style={{ fontSize: "clamp(2.8rem, 7vw, 5rem)" }}
        >
          When &amp; Where
        </h2>
        <div className="flex items-center justify-center gap-4 mt-3 mb-12">
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-gold/35" />
          <span className="text-gold/40 font-monte text-lg">❧</span>
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-gold/35" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {/* Date card */}
          <div
            className={`relative rounded-sm p-8 text-center reveal ${visible ? "in-view" : ""}`}
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(201,169,110,0.22)",
              backdropFilter: "blur(6px)",
              boxShadow: "0 8px 40px rgba(0,0,0,0.2)",
            }}
          >
            <div className="absolute inset-[6px] border border-gold/8 rounded-sm pointer-events-none" />
            <div className="text-3xl mb-4 text-gold/70">◈</div>
            <p className="font-cinzel tracking-[0.28em] text-goldlt/70 uppercase mb-3" style={{ fontSize: "0.5rem" }}>
              The Date
            </p>
            <p className="font-monte text-goldlt" style={{ fontSize: "clamp(2rem, 6vw, 3rem)" }}>
              28 May
            </p>
            <p className="font-cormorant text-cream/70 mt-1" style={{ fontSize: "clamp(1rem, 2.5vw, 1.2rem)" }}>
              Wednesday, 2026
            </p>
            <div className="w-10 h-px divider-gold mx-auto my-3" />
            <p className="font-cinzel tracking-widest text-goldlt/60" style={{ fontSize: "0.6rem" }}>
              6:00 PM Onwards
            </p>
          </div>

          {/* Location card */}
          <div
            className={`relative rounded-sm p-8 text-center reveal reveal-d2 ${visible ? "in-view" : ""}`}
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(201,169,110,0.22)",
              backdropFilter: "blur(6px)",
              boxShadow: "0 8px 40px rgba(0,0,0,0.2)",
            }}
          >
            <div className="absolute inset-[6px] border border-gold/8 rounded-sm pointer-events-none" />
            <div className="text-3xl mb-4 text-gold/70">◈</div>
            <p className="font-cinzel tracking-[0.28em] text-goldlt/70 uppercase mb-3" style={{ fontSize: "0.5rem" }}>
              The Venue
            </p>
            <p className="font-monte text-goldlt" style={{ fontSize: "clamp(2rem, 6vw, 3rem)" }}>
              La Novia
            </p>
            <p className="font-cormorant text-cream/70 mt-1" style={{ fontSize: "clamp(1rem, 2.5vw, 1.2rem)" }}>
              Garden Hall · Cairo
            </p>
            <div className="w-10 h-px divider-gold mx-auto my-3" />
            <a
              href="https://maps.app.goo.gl/t1gqNswd9S4T7J7f7?g_st=aw"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-gold/50 rounded-sm px-5 py-2 font-cinzel tracking-[0.18em] text-goldlt/80 uppercase transition-all duration-300 hover:bg-gold hover:text-darkbrown hover:border-gold"
              style={{ fontSize: "0.48rem" }}
            >
              <span>◉</span> View on Map
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
