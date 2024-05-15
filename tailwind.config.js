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
        darkblue: "rgb(5,4,19)",
        lightblue: "rgb(21,35,60)",
        mypurple: "rgb(238,130,238, .7)",
        projectblue: "rgb(18,15,55)",
        ReactBlue: "rgb(0 216 255)",
        TailwindBlue: "rgb(49,181,247)",
        NodeGreen: "rgb(72,148,57)",
        JavascriptYellow: "rgb(238,215,69)",
        TypeScriptBlue: "rgb(69,119,193)",
      },

      boxShadow: {
        glow: "0 0 35px 2px rgba(238,130,238, 0.5)",
        glowlight: "0 0 35px 2px rgba(238,130,238, 0.15)", // Rosa Glow-Effekt
      },
    },
  },
  plugins: [],
};
