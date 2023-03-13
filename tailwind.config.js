/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "und-header": "url('../../public/und-header.png')",
        dot: "url('../../public/bg-dot.png')",
        contacts: "url('../../public/cont-bg.png')",
      },
    },
  },
  plugins: [],
};
