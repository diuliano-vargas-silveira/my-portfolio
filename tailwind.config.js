/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: "var(--font-roboto)",
      },

      colors: {
        gray: {
          100: "#A9B1D6ff",
          200: "#979EBFff",
          300: "#848AA8ff",
          400: "#727791ff",
          500: "#60647Aff",
          600: "#4D5063ff",
          700: "#3B3D4Cff",
          800: "#1a1b26",
          900: "#16161Eff",
          950: "#101014",
        },
      },
    },
  },
  plugins: [],
};
