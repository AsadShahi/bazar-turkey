/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'bg-orange-700': '#FA5A2A',
        'gray-color': '#383A40', // color for top navbar and footer copy write

      },
      
    },
    container: {
      center: true,
    },

  },
  plugins: [require('tailwindcss-rtl')],
  
};
