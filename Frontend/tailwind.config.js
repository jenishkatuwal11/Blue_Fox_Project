/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // You can add custom theme settings or colors here if needed
    },
  },
  darkMode: 'class',  // Enable dark mode using the class strategy
  plugins: [],
};
