/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/**/*.{js,ts,jsx,tsx, scss}",
    "./src/**/**/**/*.{js,ts,jsx,tsx,scss}",
  ],
  // darkMode: 'class',
  theme: {
    colors: {
      'accent': '#EC9F00'
    },
    extend: {},
  },
  plugins: [],
}

