/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mainGray: "#A4A4A4",
        borderGray: "#353535",
        fillGray: "#1A1A1A",
      },

      boxShadow: {
        glow: "0 0 35px 2px rgba(238,130,238, 0.5)",
        glowlight: "0 0 35px 2px rgba(238,130,238, 0.15)", // Rosa Glow-Effekt
      },
    },
  },
  plugins: [],
};
