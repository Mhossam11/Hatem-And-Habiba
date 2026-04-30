import React, { useState, useRef } from "react";

const petals = [
  { id: 1, left: "8%", symbol: "✾", size: "1.1rem" },
  { id: 2, left: "18%", symbol: "✽", size: "0.9rem" },
  { id: 3, left: "32%", symbol: "✿", size: "1.2rem" },
  { id: 4, left: "45%", symbol: "❋", size: "1rem" },
  { id: 5, left: "58%", symbol: "✾", size: "0.85rem" },
  { id: 6, left: "70%", symbol: "✽", size: "1.1rem" },
  { id: 7, left: "82%", symbol: "✿", size: "0.95rem" },
  { id: 8, left: "92%", symbol: "❋", size: "1.0rem" },
  { id: 9, left: "25%", symbol: "✾", size: "1.15rem" },
  { id: 10, left: "62%", symbol: "✽", size: "0.9rem" },
  { id: 11, left: "50%", symbol: "✿", size: "1.05rem" },
  { id: 12, left: "75%", symbol: "❋", size: "0.88rem" },
];

export default function EnvelopeSection({ onOpen }) {
  const [opened, setOpened] = useState(false);
  const namesRef = useRef(null);

  const handleOpen = () => {
    if (opened) return;
    setOpened(true);
    onOpen?.();
    setTimeout(() => {
      document
        .getElementById("names-section")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 1100);
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-espresso via-walnut to-espresso">
      {/* Radial glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-gold/5 blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full bg-rose/5 blur-3xl" />
      </div>

      {/* Vine lines */}
      {[
        { cls: "vine-1", h: "38%", t: "22%", l: "7%" },
        { cls: "vine-2", h: "32%", t: "30%", l: "91%" },
        { cls: "vine-3", h: "28%", t: "58%", l: "18%" },
        { cls: "vine-4", h: "42%", t: "12%", l: "82%" },
      ].map((v) => (
        <div
          key={v.cls}
          className="absolute w-px bg-gradient-to-b from-transparent via-olive/20 to-transparent animate-vineGrow"
          style={{
            height: v.h,
            top: v.t,
            left: v.l,
            animationDelay: v.d || "0s",
          }}
        />
      ))}

      {/* Floating petals */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {petals.map((p) => (
          <span
            key={p.id}
            className={`absolute text-gold/60 animate-petalFall petal-${p.id}`}
            style={{ left: p.left, fontSize: p.size, top: "-40px" }}
          >
            {p.symbol}
          </span>
        ))}
      </div>

      {/* Top ornament */}
      <div className="relative z-10 mb-8 flex flex-col items-center gap-2">
        <p className="font-cinzel text-gold/50 tracking-[0.4em] text-[0.5rem] uppercase">
          An Engagement Celebration
        </p>
        <div className="w-32 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      </div>

      {/* Envelope */}
      <div
        className="relative z-10 cursor-pointer perspective-1200 select-none"
        style={{ width: "min(500px, 90vw)" }}
        onClick={handleOpen}
      >
        {/* Shadow */}
        <div
          className="absolute -bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-black/40 blur-2xl"
          style={{ width: "80%", height: "20px" }}
        />

        {/* Envelope body */}
        <div
          className="relative w-full overflow-visible transform-style-3d"
          style={{ paddingBottom: "62%" }}
        >
          {/* Body */}
          <div
            className="absolute inset-0 rounded-sm overflow-hidden"
            style={{
              background:
                "linear-gradient(165deg, #f0e6d3 0%, #e8dcc8 55%, #d4c4a8 100%)",
              border: "1px solid rgba(201,169,110,0.45)",
              boxShadow:
                "0 40px 80px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.3)",
            }}
          >
            {/* Subtle texture */}
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(45deg, transparent, transparent 3px, rgba(201,169,110,0.05) 3px, rgba(201,169,110,0.05) 6px)",
              }}
            />
          </div>

          {/* Left fold */}
          <div className="absolute bottom-0 left-0 env-fold-left" />
          {/* Right fold */}
          <div className="absolute bottom-0 right-0 env-fold-right" />

          {/* Flap */}
          <div
            className={`absolute top-0 left-0 right-0 clip-flap origin-top transition-all duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] ${
              opened
                ? "[transform:rotateX(-180deg)_translateY(-12px)]"
                : "[transform:rotateX(0deg)_translateY(0px)]"
            }`}
            style={{
              height: "57%",
              background: "linear-gradient(155deg, #e8dcc8 0%, #d8cdb5 100%)",
              borderBottom: "1px solid rgba(201,169,110,0.25)",
              zIndex: 4,
            }}
          />

          {/* Wax seal */}
          <div
            className={`absolute z-10 flex items-center justify-center font-monte text-darkbrown text-xl animate-sealBob transition-opacity duration-500 ${
              opened ? "opacity-0" : "opacity-100"
            }`}
            style={{
              width: 58,
              height: 58,
              top: "28%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              background:
                "radial-gradient(circle, #dfc08a 0%, #c9a96e 40%, #a8843a 100%)",
              borderRadius: "50%",
              boxShadow:
                "0 0 0 3px rgba(201,169,110,0.35), 0 0 0 6px rgba(201,169,110,0.12), 0 6px 20px rgba(0,0,0,0.35)",
            }}
          >
            ❧
          </div>

          {/* Inner letter card */}
          <div
            className={`absolute left-1/2 -translate-x-1/2 z-[2] text-center ${
              opened ? "letter-risen" : "letter-still"
            }`}
            style={{
              bottom: "6%",
              width: "80%",
              background: "linear-gradient(160deg, #faf7f2 0%, #f5f0e8 100%)",
              border: "1px solid rgba(201,169,110,0.3)",
              borderRadius: "3px",
              padding: "1.4rem 1rem 1rem",
              boxShadow:
                "0 -4px 24px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.5)",
            }}
          >
            {/* Inner frame */}
            <div className="absolute inset-[6px] border border-gold/15 rounded-sm pointer-events-none" />
            <p
              className="font-monte text-darkbrown"
              style={{
                fontSize: "clamp(1.6rem, 5vw, 2.4rem)",
                lineHeight: 1.15,
              }}
            >
              Hatem &amp; Habiba
            </p>
            <div className="w-20 h-px mx-auto my-2 bg-gradient-to-r from-transparent via-gold to-transparent" />
            <p
              className="font-cinzel text-rustgray tracking-[0.2em]"
              style={{ fontSize: "0.46rem" }}
            >
              You are cordially invited
            </p>
          </div>
        </div>

        {/* Tap hint */}
        {!opened && (
          <p
            className="text-center font-cinzel tracking-[0.28em] text-cream/40 animate-pulse mt-8"
            style={{ fontSize: "0.52rem" }}
          >
            ✦ &nbsp; Tap to open &nbsp; ✦
          </p>
        )}
      </div>

      {/* Bottom ornament */}
      <div className="relative z-10 mt-10 flex flex-col items-center gap-2">
        <div className="w-32 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <p
          className="font-cinzel text-gold/35 tracking-[0.35em]"
          style={{ fontSize: "0.46rem" }}
        >
          28 · May · 2026
        </p>
      </div>
    </section>
  );
}
