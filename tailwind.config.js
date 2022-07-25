module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './features/**/*.{js,ts,jsx,tsx}',
  ],
  corePlugins: {
    container: false,
  },
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#F338C2',
        dark: '#00082D',
        card: 'rgba(255,255,255, .04)',

        darken: '#1D1D21',
        blackest: '#151515'
      },
    },
  },

  plugins: [
    require('@tailwindcss/forms'),
    ({ addComponents, theme }) => {
      addComponents({
        '.container': {
          '@screen sm': {
            maxWidth: theme('screens.sm'),
          },
          '@screen md': {
            maxWidth: theme('screens.md'),
          },
          '@screen lg': {
            maxWidth: theme('screens.lg'),
          },
          '@screen xl': {
            maxWidth: 1140,
          },
          '@screen 2xl': {
            maxWidth: 1320,
          },
        },
      })
    },
  ],
}
