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
        '12':'59px',
        '13':'64px'
      },
      animation: {
        'gradient': 'gradientAnimation 1s linear infinite alternate',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'right-to-left': 'moveRightToLeft 50s linear infinite',
        'left-to-right': 'moveLeftToRight 50s linear infinite',

      },
      keyframes: {
        gradientAnimation: {
          '0%': { backgroundPosition: '0%' },
          '100%': { backgroundPosition: '100%' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        moveRightToLeft: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        moveLeftToRight: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
    screens: {
      'sm': '640px',   // Target mobile screens
      'md': '768px',   // Target tablet screens
      'lg': '1024px',  // Target laptop screens
      'xl': '1280px',  // Target larger screens
    },
  },
  plugins: [
  ],
}

