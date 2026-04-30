import React from "react";
import { useReveal } from "../hooks/useReveal";

export default function LoveSection() {
  const [ref, visible] = useReveal(0.15);

  return (
    <section
      className="relative py-28 px-4 overflow-hidden"
      style={{ background: "linear-gradient(155deg, #2e2820 0%, #3d2e22 50%, #2e2820 100%)" }}
    >
      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-gold/6 blur-3xl" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 rounded-full bg-rose/5 blur-3xl" />
      </div>

      {/* Vine lines */}
      {[{ l: "5%", h: "60%", t: "20%" }, { l: "95%", h: "50%", t: "30%" }].map((v, i) => (
        <div key={i}
          className="absolute w-px bg-gradient-to-b from-transparent via-olive/20 to-transparent animate-vineGrow"
          style={{ left: v.l, height: v.h, top: v.t, animationDelay: `${i * 2}s` }}
        />
      ))}

      <div ref={ref} className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Label */}
        <p className="font-cinzel tracking-[0.38em] text-goldlt/60 uppercase"
          style={{ fontSize: "0.52rem" }}>
          ✦ &nbsp; A message from the heart &nbsp; ✦
        </p>

        {/* Title */}
        <h2
          className={`font-monte text-goldlt mt-4 mb-3 reveal ${visible ? "in-view" : ""}`}
          style={{ fontSize: "clamp(2.8rem, 7vw, 5rem)" }}
        >
          Written in the Stars
        </h2>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-gold/40" />
          <span className="text-gold/50 text-base font-monte">❧</span>
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-gold/40" />
        </div>

        {/* The romantic letter */}
        <div
          className={`relative border border-gold/20 rounded-sm px-6 py-8 sm:px-10 sm:py-10 reveal reveal-d2 ${visible ? "in-view" : ""}`}
          style={{ background: "rgba(255,255,255,0.03)", backdropFilter: "blur(6px)" }}
        >
          {/* Corner accents */}
          <span className="absolute top-3 left-4 text-gold/30 font-monte text-2xl">❝</span>
          <span className="absolute bottom-3 right-4 text-gold/30 font-monte text-2xl">❞</span>
{/* 
          <p
            className="font-cormorant italic font-light leading-[2.2] text-cream/80"
            style={{ fontSize: "clamp(1rem, 2.2vw, 1.25rem)" }}
          >
            There is a kind of love that does not announce itself with grand gestures —
            it simply arrives, quietly and completely, the way dawn arrives without asking permission.{" "}
            <span className="text-goldlt not-italic">Habiba and Hatem</span> found each other in that
            sacred, unhurried way — two souls recognising something in the other that no words
            have ever been able to fully hold.
          </p>

          <div className="w-12 h-px divider-gold mx-auto my-6" /> */}

          <p
            className="font-cormorant italic font-light leading-[2.2] text-cream/80"
            style={{ fontSize: "clamp(1rem, 2.2vw, 1.25rem)" }}
          >
            In his eyes, she found a home she had never known she was searching for.
            In her smile, he discovered every answered prayer he had forgotten he had made.
            They are not perfect, but together, they are{" "}
            <span className="text-goldlt not-italic">beautifully whole</span> — each one
            the missing verse in the other's story.
          </p>

          <div className="w-12 h-px divider-gold mx-auto my-6" />

          <p
            className="font-cormorant italic font-light leading-[2.2] text-cream/80"
            style={{ fontSize: "clamp(1rem, 2.2vw, 1.25rem)" }}
          >
            Tonight, we gather not merely to celebrate a promise, but to witness{" "}
            <span className="text-goldlt not-italic">something rare and real</span> — a love
            that has chosen to be brave enough to last a lifetime.
            We are honoured you are here to share in this joy.
          </p>
        </div>

        {/* Sign off */}
        <div className={`mt-8 reveal reveal-d4 ${visible ? "in-view" : ""}`}>
          <p className="font-monte text-gold/70" style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)" }}>
            With all our love
          </p>
          <p className="font-cinzel tracking-[0.25em] text-cream/30 mt-1" style={{ fontSize: "0.5rem" }}>
            The Families of Habiba &amp; Hatem
          </p>
        </div>
      </div>
    </section>
  );
}
