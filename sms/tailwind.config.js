/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'ui-sans-serif', 'system-ui'],
      },
    },
    typography: {
      DEFAULT: {
        css: {
          fontFamily: 'Roboto, ui-sans-serif, system-ui',
        },
      },
    },
  },
  content: ["./src/**/*.{html,js,ts,tsx}"],
  plugins: [
    require('@tailwindcss/typography'), // Ensure you've added this plugin
  ],
};
