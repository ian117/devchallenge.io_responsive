const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      purple: colors.violet,
      pink: colors.pink,
      blue: colors.blue,
      green: colors.green
    },
    fontFamily: {
      'press-start': ['"Press Start 2P"', 'cursive'],
      'robo-mono': ['"Roboto Mono"', 'monospace'],
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
      'xl': '1280px',
      '2xl': '1536px',
    },
    minHeight: {
      "10%": "10%",
      "20%": "20%",
      "30%": "30%",
      "40%": "40%",
      "50%": "50%",
      "60%": "60%",
      "70%": "70%",
      "80%": "80%",
      "90%": "90%",
      "10px": "10px",
      "20px": "20px",
      "30px": "30px",
      "40px": "40px",
      "50px": "50px",
      "60px": "60px",
      "70px": "70px",
      "80px": "80px",
      "90px": "90px",
      "10min": "10vh",
      "20min": "20vh",
      "30min": "30vh",
      "40min": "40vh",
      "50min": "50vh",
      "60min": "60vh",
      "70min": "70vh",
      "80min": "80vh",
      "90min": "90vh",
    },
    maxHeight: {
      "10%": "10%",
      "20%": "20%",
      "30%": "30%",
      "40%": "40%",
      "50%": "50%",
      "60%": "60%",
      "70%": "70%",
      "80%": "80%",
      "90%": "90%",
      "10px": "10px",
      "20px": "20px",
      "30px": "30px",
      "40px": "40px",
      "50px": "50px",
      "60px": "60px",
      "70px": "70px",
      "80px": "80px",
      "90px": "90px",
      "10min": "10vh",
      "20min": "20vh",
      "30min": "30vh",
      "40min": "40vh",
      "50min": "50vh",
      "60min": "60vh",
      "70min": "70vh",
      "80min": "80vh",
      "90min": "90vh",
    },
    height: {
      "80v": "80vh",
      "85v": "85vh",
      "90v": "90vh",
    },
    extend: {
      spacing: {
      },
      borderRadius: {
      }
    }
  },
  variants: {
    extend: {
      borderColor: ['focus-visible'],
      opacity: ['disabled'],
    }
  }
}