/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {
          primary:'rgb(149, 56, 226)',
          b1: 'rgb(246, 246, 246)',




      },
      backgroundImage: {
        banner: "url('../assets/banner.jpg')",

      }

    },
  },
  plugins: [
    require('daisyui'),
  ],
}

