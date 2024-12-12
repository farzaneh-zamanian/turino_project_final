/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./globals.css",
  ],
  // darkMode:"class"
  theme: {

    extend: {
      colors: {
        "primary": "rgba(40, 167, 69, 1)",
        "secondary": "rgba(16, 65, 27, 1)",
        "accent": " rgba(0, 158, 202, 1)",
        "textColor": "rgb(40, 40, 40, 1)",
        "textLightColor": "rgba(125, 125, 125, 1)",
        "headingsColor": "rgb(40, 40, 40, 1)",
        "titleColor": "rgba(89, 89, 89, 1)",
        "borderColor": '#E0E0E0',
        "priceColor": "#009ECA",
        "accentButtonColor": ' rgba(216, 255, 225, 1)',
        "IconBgColor":'#D9D9D5',
        "hoverBgColor":'#F4F4F4',

      },
      screens: {
        '2xl': '1536px',
        'xl': '1280px',//desktop
        'lg': '1024px',//laptop
        'md': '678px', //tablet*
        'sm': '640px',//tablet
        'xs': '320px',
      },
      fontWeight: {
        thin: '100',
        hairline: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        'extra-bold': '800',
        black: '900',
      }

    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.transition-default': {
          transitionDuration: '300ms',
          transitionTimingFunction: 'ease-in-out',
        },
      });
    },
  ],
};
