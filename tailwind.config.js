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
        bg: "#111111",
        bs: "#252525",
        fade: "#737373",
        main: "#FFB912",
      },
      screens: {
        sm: "0px", // Mobile devices (default)
        md: "640px", // Large phones and tablets
        lg: "1024px", // Laptops and small desktops
        xl: "1281px", // Large screens starting from 1200px
      },
    },
  },
  plugins: [],
};
