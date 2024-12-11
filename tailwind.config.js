/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {

      fontFamily:{
        body:['Nunito']
      },

      backgroundImage:{
        'aboutBg':["url(img/bg2.jpg)"]
      }

    },


  },
  plugins: [],
}

