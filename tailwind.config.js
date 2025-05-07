/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/*.html"],
  theme: {
    extend: {
      fontFamily: {
        body: ['Nunito']
      },
      backgroundImage: {
        'aboutBg': "url('img/bg2.jpg')"
      },
      keyframes: {
        pop: {
          '0%': { transform: 'scale(0.5)', opacity: '0' },
          '80%': { transform: 'scale(1.2)', opacity: '1' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      animation: {
        pop: 'pop 0.4s ease-out forwards',
      },
    },
  },
  plugins: [],
}
