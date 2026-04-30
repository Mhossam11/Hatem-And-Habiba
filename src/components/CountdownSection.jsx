import React, { useState, useEffect } from "react";
import { useReveal } from "../hooks/useReveal";

const TARGET = new Date("2026-05-28T19:00:00");

function getTimeLeft() {
  const diff = TARGET - new Date();
  if (diff <= 0) return { d: 0, h: 0, m: 0, s: 0 };
  return {
    d: Math.floor(diff / 86400000),
    h: Math.floor((diff % 86400000) / 3600000),
    m: Math.floor((diff % 3600000) / 60000),
    s: Math.floor((diff % 60000) / 1000),
  };
}

function CountUnit({ value, label, delay, visible }) {
  const pad = (n) => String(n).padStart(2, "0");
  return (
    <div
      className={`flex flex-col items-center reveal ${visible ? "in-view" : ""}`}
      style={{ transitionDelay: delay }}
    >
      <div
        className="relative flex items-center justify-center rounded-sm animate-glowPulse"
        style={{
          width: "clamp(72px, 18vw, 100px)",
          height: "clamp(72px, 18vw, 100px)",
          background: "linear-gradient(145deg, #faf7f2 0%, #e8dcc8 100%)",
          border: "1px solid rgba(201,169,110,0.45)",
          boxShadow: "0 4px 24px rgba(61,43,31,0.12), inset 0 1px 0 rgba(255,255,255,0.6)",
        }}
      >
        {/* Inner frame */}
        <div className="absolute inset-[4px] border border-gold/15 rounded-sm pointer-events-none" />
        <span
          className="font-cinzel font-semibold text-darkbrown count-num"
          style={{ fontSize: "clamp(1.6rem, 5vw, 2.4rem)", lineHeight: 1 }}
        >
          {pad(value)}
        </span>
      </div>
      <span className="font-cinzel tracking-[0.22em] text-rustgray mt-2 uppercase"
        style={{ fontSize: "0.44rem" }}>
        {label}
      </span>
    </div>
  );
}

export default function CountdownSection() {
  const [time, setTime] = useState(getTimeLeft);
  const [ref, visible] = useReveal(0.15);

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { value: time.d, label: "Days",    delay: "0s"    },
    { value: time.h, label: "Hours",   delay: "0.12s" },
    { value: time.m, label: "Minutes", delay: "0.24s" },
    { value: time.s, label: "Seconds", delay: "0.36s" },
  ];

  return (
    <section
      className="relative py-24 px-4 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #f0e6d3 0%, #f5f0e8 100%)" }}
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full bg-gold/6 blur-3xl" />
      </div>

      <div ref={ref} className="relative z-10 text-center max-w-3xl mx-auto">
        <p className="font-cinzel tracking-[0.35em] text-rustgray uppercase" style={{ fontSize: "0.52rem" }}>
          ✦ &nbsp; Counting Every Breath &nbsp; ✦
        </p>
        <h2
          className={`font-monte text-darkbrown mt-2 reveal ${visible ? "in-view" : ""}`}
          style={{ fontSize: "clamp(2.5rem, 7vw, 4.5rem)" }}
        >
          Until We Celebrate
        </h2>
        <div className="flex items-center justify-center gap-4 mt-3 mb-12">
          <div className="w-16 h-px divider-gold" />
          <span className="text-gold/50 font-monte text-lg">◆</span>
          <div className="w-16 h-px divider-gold" />
        </div>

        {/* Countdown units */}
        <div className="flex items-center justify-center gap-3 sm:gap-6 flex-wrap">
          {units.map((u, i) => (
            <React.Fragment key={u.label}>
              {i > 0 && (
                <span className="font-monte text-gold/50 self-start pt-4"
                  style={{ fontSize: "clamp(1.5rem, 4vw, 2.2rem)" }}>
                  ·
                </span>
              )}
              <CountUnit {...u} visible={visible} />
            </React.Fragment>
          ))}
        </div>

        {/* Sub-line */}
        <p
          className={`font-cormorant italic text-rustlt mt-10 reveal reveal-d5 ${visible ? "in-view" : ""}`}
          style={{ fontSize: "clamp(0.9rem, 2vw, 1.1rem)" }}
        >
          Wednesday, 28 May 2026 &nbsp;·&nbsp; 6:00 PM &nbsp;·&nbsp; La Novia Garden
        </p>
      </div>
    </section>
  );
}
