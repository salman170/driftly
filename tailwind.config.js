/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'dirftyShdaow': '4px 6px 20px 5px rgba(11,242,179,0.3)',
      }
    },
  },
  plugins: [],
};
