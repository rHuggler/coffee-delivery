/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        yellow: {
          700: "#C47F17",
          500: "#DBAC2C",
          300: "#F1E9C9",
        },
        purple: {
          700: "#4B2995",
          500: "#8047F8",
          300: "#EBE4F9",
        },
        brown: {
          900: "#272221",
          800: "#403937",
          700: "#574F4D",
          600: "#8D8686",
          500: "#D7D5D5",
          400: "#E6E5E5",
          300: "#EDEDED",
          200: "#F3F2F2",
          100: "#FAFAFA",
        }
      },
      fontFamily: {
        title: ['"Baloo 2"', 'sans'],
        roboto: ['Roboto', 'sans']
      },
      spacing: {
        '13': '3.375rem',
        '15': '3.75rem',
        '23': '5.75rem',
        '25': '6.25rem',
        '25.5': '6.375rem',
        '30': '7.5rem',
        '50': '12.5rem',
        '8xl': '90rem',
      },
      lineHeight: {
        '130%': '1.3',
        '160%': '1.6',
      },
      backgroundImage: {
        'hero-bg': "url('/src/assets/hero-bg.png')"
      },
      fontSize: {
        '2xs': '0.625rem',
        '3.5xl': '2rem',
      },
      borderRadius: {
        'smmd': '0.25rem',
        '4.5xl': '2.25rem',
        '5.5xl': '2.75rem',
      },
      borderWidth: {
        '1': '1px',
      },
      boxShadow: {
        '2px': '0 0 0 2px',
      }
    },
  },
  plugins: [],
}

