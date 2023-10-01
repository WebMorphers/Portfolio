/** @type {import('tailwindcss').Config} */
export default {
<<<<<<< Updated upstream
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
=======
  content: ['./src/**/*.{js,jsx,ts,tsx}',"./index.html"],
>>>>>>> Stashed changes
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

