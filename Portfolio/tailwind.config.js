/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}',"./index.html"],
  theme: {
    extend: {},
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

