module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        test1: "url('/src/assets/images/test1.jpg')",
      }),
    },
    backgroundColor: (theme) => ({
      ...theme('colors'),
      primary: '#2D3BBD',
      secondary: '#FEFDFF',
      tertiary: '#50474D',
      danger: '#e3342f',
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
