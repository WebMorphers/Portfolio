/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}',"./index.html"],
  theme: {
    extend: {
      animation: {
        blob: "blob 7s infinite"
      },
      keyframes:{
        blob:{
          "0%":{
            transform: "scale(1) translate(0px, 0px)"
          },
          "33%":{
            transform: "scale(1.3) translate(30px, -50px)"
          },
          "66%":{
            transform: "scale(0.8) translate(-20px, 20px)"
          },
          "100 %":{
            transform: "scale(1) translate(0px, 0px)"
          }
        }
      }
    },
    screens: {
      'xs': {'min': '200px', 'max': '350px'},
       // => @media (min-width: 640px and max-width: 767px) { ... }

      'sm': '350px',
      // => @media (min-width: 640px) { ... }

      'md': '641px',
      // => @media (min-width: 768px) { ... }

      'lg': '1170px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

