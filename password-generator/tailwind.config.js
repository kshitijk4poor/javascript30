/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["password-generator\index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}

