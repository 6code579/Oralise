/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        rotate1: {
          from: { transform: "rotateX(50deg) rotateZ(110deg)" },
          to: { transform: "rotateX(50deg) rotateZ(470deg)" },
        },
        rotate2: {
          from: { transform: "rotateX(20deg) rotateY(50deg) rotateZ(20deg)" },
          to: { transform: "rotateX(20deg) rotateY(50deg) rotateZ(380deg)" },
        },
        rotate3: {
          from: { transform: "rotateX(40deg) rotateY(130deg) rotateZ(450deg)" },
          to: { transform: "rotateX(40deg) rotateY(130deg) rotateZ(90deg)" },
        },
        rotate4: {
          from: { transform: "rotateX(70deg) rotateZ(270deg)" },
          to: { transform: "rotateX(70deg) rotateZ(630deg)" },
        },
      },
      animation: {
        rotate1: "rotate1 2s linear infinite",
        rotate2: "rotate2 2s linear infinite",
        rotate3: "rotate3 2s linear infinite",
        rotate4: "rotate4 2s linear infinite",
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"],
  },
}; 