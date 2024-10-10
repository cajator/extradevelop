const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'extradevelop-blue': '#0077be',
        'extradevelop-gray': '#58595b',
        'extradevelop-light': '#f0f4f8',
        'extradevelop-dark': '#2c3e50',
      },
      fontFamily: {
        sans: ['Arial', 'Helvetica', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        'xxs': '.65rem',
      },
      boxShadow: {
        'inner-lg': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}