/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        monte:    ["'MonteCarlo'", "cursive"],
        cinzel:   ["'Cinzel'", "serif"],
        cormorant:["'Cormorant Garamond'", "serif"],
        eb:       ["'EB Garamond'", "serif"],
      },
      colors: {
        cream:    "#f5f0e8",
        parchment:"#f0e6d3",
        beige:    "#e8dcc8",
        warmwhite:"#faf7f2",
        olive:    "#6b6b47",
        olivelt:  "#8a8a5c",
        rustgray: "#7a7068",
        rustlt:   "#a09488",
        gold:     "#c9a96e",
        goldlt:   "#dfc08a",
        darkbrown:"#3d2b1f",
        crimson:  "#8b1a1a",
        rose:     "#c4726b",
        espresso: "#2e2820",
        walnut:   "#4a3728",
      },
      keyframes: {
        petalFall: {
          "0%":   { transform: "translateY(-80px) rotate(0deg)", opacity: "0" },
          "10%":  { opacity: "0.7" },
          "90%":  { opacity: "0.3" },
          "100%": { transform: "translateY(110vh) rotate(600deg)", opacity: "0" },
        },
        heartFloat: {
          "0%":   { transform: "translateY(0) scale(0.6)", opacity: "0" },
          "20%":  { opacity: "0.3" },
          "80%":  { opacity: "0.12" },
          "100%": { transform: "translateY(-130px) scale(1.1)", opacity: "0" },
        },
        shimmer: {
          "0%,100%": { opacity: "0.4" },
          "50%":     { opacity: "1" },
        },
        floatY: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%":     { transform: "translateY(-12px)" },
        },
        vineGrow: {
          "0%":   { transform: "scaleY(0.6)", opacity: "0.3" },
          "100%": { transform: "scaleY(1.2)", opacity: "0.7" },
        },
        glowPulse: {
          "0%,100%": { boxShadow: "0 0 12px rgba(201,169,110,0.4)" },
          "50%":     { boxShadow: "0 0 28px rgba(201,169,110,0.9)" },
        },
        rotateSlow: {
          "0%":   { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(32px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        revealName: {
          "0%":   { opacity: "0", transform: "translateY(48px) skewY(2deg)" },
          "100%": { opacity: "1", transform: "translateY(0) skewY(0deg)" },
        },
        flap: {
          "0%":   { transform: "rotateX(0deg)" },
          "100%": { transform: "rotateX(-180deg)" },
        },
        letterRise: {
          "0%":   { transform: "translateX(-50%) translateY(0)" },
          "100%": { transform: "translateX(-50%) translateY(-52%)" },
        },
        pulse: {
          "0%,100%": { opacity: "0.4" },
          "50%":     { opacity: "1" },
        },
        sealBob: {
          "0%,100%": { transform: "translate(-50%,-50%) scale(1)" },
          "50%":     { transform: "translate(-50%,-50%) scale(1.08)" },
        },
      },
      animation: {
        petalFall:   "petalFall linear infinite",
        heartFloat:  "heartFloat linear infinite",
        shimmer:     "shimmer 2.4s ease-in-out infinite",
        floatY:      "floatY 5s ease-in-out infinite",
        vineGrow:    "vineGrow 8s ease-in-out infinite alternate",
        glowPulse:   "glowPulse 2.5s ease-in-out infinite",
        rotateSlow:  "rotateSlow 30s linear infinite",
        fadeUp:      "fadeUp 0.9s ease forwards",
        revealName:  "revealName 1.1s cubic-bezier(0.4,0,0.2,1) forwards",
        flap:        "flap 0.9s cubic-bezier(0.4,0,0.2,1) forwards",
        letterRise:  "letterRise 0.9s cubic-bezier(0.4,0,0.2,1) 0.2s forwards",
        pulse:       "pulse 2.2s ease-in-out infinite",
        sealBob:     "sealBob 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
