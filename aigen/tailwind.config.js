/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'outfit': ['outfit', 'sans-serif'], 
      },
      fontWeight: {
        'outfit': 400, 
      },
      borderWidth: {
        '1': '1px',
      },
      letterSpacing: {
        'widest': '.35em',
      },
      lineHeight:{
        '12':'59px'
      }
    },
    screens: {
      'sm': '640px',   // Target mobile screens
      'md': '768px',   // Target tablet screens
      'lg': '1024px',  // Target laptop screens
      'xl': '1280px',  // Target larger screens
    },
  },
  plugins: [],
}

