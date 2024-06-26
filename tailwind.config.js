/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    fontFamily: {
      "open-sans": "'Open Sans'",
      'poppins' : "Poppins",
      'raleway': "Raleway",
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/assets/hero-bg.jpg')",
        'services-bg': "url('/src/assets/services-bg.png')",
      },
      colors: {
        'bg-gray': '#C2C2C2',
        'head-text': '#6E2222'
      },
      backgroundOpacity: ['active'],
      listStyleImage: {
        store: 'url("/src/assets/bifold list.svg")'

      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),

  ],

}