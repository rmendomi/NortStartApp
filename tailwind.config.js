/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: { sans: ['Inter', 'ui-sans-serif', 'system-ui'] },
      colors: {
        brand: { DEFAULT: "#4F46E5", dark: "#4338CA", light: "#EEF2FF" }, // indigo
      },
      boxShadow: { card: "0 10px 30px rgba(2,6,23,.08)" },
    },
  },
  plugins: [],
}
